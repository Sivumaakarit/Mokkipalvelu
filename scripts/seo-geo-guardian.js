const fs = require('fs');
const path = require('path');

// Värikoodit konsoliin
const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    bold: "\x1b[1m"
};

let hasErrors = false;
let hasWarnings = false;

function logError(message) {
    console.error(`${colors.red}${colors.bold}❌ VIRHE:${colors.reset} ${message}`);
    hasErrors = true;
}

function logWarning(message) {
    console.warn(`${colors.yellow}${colors.bold}⚠️  VAROITUS:${colors.reset} ${message}`);
    hasWarnings = true;
}

function logSuccess(message) {
    console.log(`${colors.green}✅ ${message}${colors.reset}`);
}

// ----------------------------------------------------
// 1. FAVICON-TARKISTUS
// ----------------------------------------------------
function checkFavicons() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan favicon-kuvat...${colors.reset}`);
    const publicDir = path.join(process.cwd(), 'public');
    
    const icons = [
        { name: 'favicon.png', type: 'png', required: false },
        { name: 'icon.png', type: 'png', required: false },
        { name: 'apple-icon.png', type: 'png', required: false },
        { name: 'favicon.ico', type: 'ico', required: false }
    ];

    let foundAny = false;

    icons.forEach(icon => {
        const filePath = path.join(publicDir, icon.name);
        if (fs.existsSync(filePath)) {
            foundAny = true;
            try {
                const buffer = fs.readFileSync(filePath);
                let width = 0;
                let height = 0;

                if (icon.type === 'png') {
                    // PNG-allekirjoitus on 8 tavua: 89 50 4E 47 0D 0A 1A 0A
                    if (buffer.readUInt32BE(0) === 0x89504E47) {
                        width = buffer.readUInt32BE(16);
                        height = buffer.readUInt32BE(20);
                    } else {
                        logError(`${icon.name} ei ole kelvollinen PNG-kuva.`);
                        return;
                    }
                } else if (icon.type === 'ico') {
                    // ICO-allekirjoitus: 00 00 01 00 (tavujärjestys LE)
                    if (buffer.readUInt16LE(0) === 0 && buffer.readUInt16LE(2) === 1) {
                        width = buffer[6] || 256;
                        height = buffer[7] || 256;
                    } else {
                        logError(`${icon.name} ei ole kelvollinen ICO-kuva.`);
                        return;
                    }
                }

                if (width === height) {
                    logSuccess(`${icon.name} on neliö (${width}x${height}px) – OK!`);
                } else {
                    logError(`${icon.name} EI OLE NELIÖ (${width}x${height}px). Korjaa kuvasuhde 1:1.`);
                }
            } catch (err) {
                logError(`Virhe luettaessa tiedostoa ${icon.name}: ${err.message}`);
            }
        }
    });

    if (!foundAny) {
        logWarning("public/-kansiosta ei löytynyt yhtään standardia favicon-tiedostoa (favicon.png, icon.png tai favicon.ico).");
    }
}

// ----------------------------------------------------
// 2. KANONISOINTI-TARKISTUS
// ----------------------------------------------------
function checkCanonicals() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan kanoniset osoitteet...${colors.reset}`);
    const appDir = path.join(process.cwd(), 'src', 'app');
    
    if (!fs.existsSync(appDir)) {
        logWarning("src/app -hakemistoa ei löydy. Skipataan Next.js-kanonisointitarkistus.");
        return;
    }

    function scanDir(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                scanDir(filePath);
            } else if (file === 'page.tsx') {
                const content = fs.readFileSync(filePath, 'utf-8');
                const relPath = path.relative(appDir, filePath);
                
                // Tarkistetaan löytyykö canonical-määritys
                if (content.includes('canonical:')) {
                    // Varmistetaan ettei käytetä kovakoodattua domainia vaan suhteellista polkua
                    if (content.includes('canonical: "http') || content.includes("canonical: 'http")) {
                        logError(`${relPath}: Canonical-osoitteen tulee olla suhteellinen polku (esim. "/tarjous"), ei kokonainen URL-osoite.`);
                    } else {
                        logSuccess(`${relPath} sisältää kanonisen osoitteen – OK!`);
                    }
                } else {
                    logError(`${relPath}: Sivulta puuttuu 'canonical'-määrittely metadatasta.`);
                }
            }
        });
    }

    scanDir(appDir);

    // Varmistetaan ettei layout.tsx:ssä ole kovakoodattua link-tagia
    const layoutPath = path.join(appDir, 'layout.tsx');
    if (fs.existsSync(layoutPath)) {
        const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
        if (layoutContent.includes('<link rel="canonical"') || layoutContent.includes("<link rel='canonical'")) {
            logError("layout.tsx: Tiedostoon on lisätty manuaalinen canonical link -tagi. Poista se ja anna Next.js:n luoda se sivukohtaisesta metadatasta.");
        }
    }
}

// ----------------------------------------------------
// 3. NOSCRIPT BOTTI-FALLBACK & HINTASYNRONIOINTI
// ----------------------------------------------------
function checkNoscriptAndPrices() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan noscript- ja hintasynkronointi...${colors.reset}`);
    
    const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
    if (!fs.existsSync(layoutPath)) {
        logWarning("src/app/layout.tsx ei löydy. Skipataan noscript-tarkistus.");
        return;
    }

    const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
    
    // 1. Tarkistetaan noscript-tagin olemassaolo
    if (!layoutContent.includes('<noscript>') || !layoutContent.includes('</noscript>')) {
        logError("layout.tsx: Tiedostosta puuttuu <noscript>-fallback AI-boteille ja JS-vapaille selaimille.");
        return;
    }

    // 2. Varmistetaan dynaamisen hinnoittelun käyttö noscript-lohkossa (ei kovakoodattuja hintoja)
    const legacyPricesRegex = /\b(399|499|33|50|150)\s*(€|eur)/gi;
    const matches = layoutContent.match(legacyPricesRegex);
    if (matches) {
        // Sallitaan site-config.ts, mutta layout.tsx ei saisi kovakoodata hintoja
        logError(`layout.tsx: Noscript-lohkossa tai koodissa näyttää olevan kovakoodattuja legacy-hintoja (${matches.join(', ')}). Käytä dynaamista preset-muuttujaa.`);
    } else {
        logSuccess("layout.tsx sisältää <noscript>-lohkon ilman kovakoodattuja hintoja – OK!");
    }

    // 3. Tarkistetaan Schema.tsx dynaaminen synkronointi
    const schemaPath = path.join(process.cwd(), 'src', 'components', 'seo', 'Schema.tsx');
    if (fs.existsSync(schemaPath)) {
        const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
        
        // Varmistetaan, ettei skeemassa ole kovakoodattuja legacy-hintoja
        const schemaMatches = schemaContent.match(legacyPricesRegex);
        if (schemaMatches) {
            logError(`Schema.tsx: Skeemassa näyttää olevan kovakoodattuja hintoja (${schemaMatches.join(', ')}). Varmista, että käytät preset-muuttujia.`);
        } else {
            logSuccess("Schema.tsx: Skeeman FAQ-osio käyttää dynaamisia hintoja – OK!");
        }
    }
}

// ----------------------------------------------------
// 4. KUVAOPTIMOINTI-VAROITUS
// ----------------------------------------------------
function checkImageFormats() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan käytetyt kuvaformaatit...${colors.reset}`);
    const srcDir = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcDir)) {
        return;
    }

    const unoptimizedImages = [];

    function scanFiles(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            
            if (stat.isDirectory()) {
                scanFiles(filePath);
            } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                const content = fs.readFileSync(filePath, 'utf-8');
                const relPath = path.relative(srcDir, filePath);
                
                // Etsitään .png tai .jpg viittauksia kuvalähteissä
                const imgRegex = /["']([^"']+\.(png|jpg|jpeg))["']/gi;
                let match;
                while ((match = imgRegex.exec(content)) !== null) {
                    const imgPath = match[1];
                    // Skipataan tunnetut kirjastot tai ulkoiset URL:t
                    if (!imgPath.startsWith('http') && !imgPath.includes('node_modules')) {
                        unoptimizedImages.push({ file: relPath, image: imgPath });
                    }
                }
            }
        });
    }

    scanFiles(srcDir);

    if (unoptimizedImages.length > 0) {
        logWarning(`Löydettiin ${unoptimizedImages.length} viittausta pakkaamattomiin (.png/.jpg) kuviin koodissa. Harkitse niiden muuttamista .webp- tai .avif-muotoon:`);
        unoptimizedImages.forEach(item => {
            console.log(`  - Tiedostossa: ${colors.bold}${item.file}${colors.reset} -> ${colors.cyan}${item.image}${colors.reset}`);
        });
    } else {
        logSuccess("Kaikki kuvaviittaukset näyttävät käyttävän optimoituja formaatteja – OK!");
    }
}

// ----------------------------------------------------
// 5. ROBOTS.TXT JA AI-BOTIT TARKISTUS
// ----------------------------------------------------
function checkRobotsTxt() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan robots.txt...${colors.reset}`);
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
        logError("public/robots.txt tiedostoa ei löydy!");
        return;
    }

    const content = fs.readFileSync(robotsPath, 'utf-8');
    const requiredAgents = [
        'OAI-SearchBot',
        'GPTBot',
        'ClaudeBot',
        'PerplexityBot',
        'Google-Extended',
        'Meta-ExternalAgent'
    ];

    const normalized = content.replace(/\s+/g, '').toLowerCase();
    let missing = [];
    requiredAgents.forEach(agent => {
        const expected = `user-agent:${agent.toLowerCase()}allow:/`;
        if (!normalized.includes(expected)) {
            missing.push(agent);
        }
    });

    if (missing.length > 0) {
        logError(`robots.txt: Seuraavat AI-botit eivät ole sallittuja tai puuttuvat määrityksestä: ${missing.join(', ')}`);
    } else {
        logSuccess("robots.txt: Kaikki vaaditut tekoälybotit on sallittu – OK!");
    }
}

// ----------------------------------------------------
// 6. LLMS.TXT TARKISTUS
// ----------------------------------------------------
function checkLlmsTxt() {
    console.log(`\n${colors.cyan}${colors.bold}Analysoidaan llms.txt...${colors.reset}`);
    const llmsPath = path.join(process.cwd(), 'public', 'llms.txt');
    if (!fs.existsSync(llmsPath)) {
        logError("public/llms.txt tiedosto puuttuu! Luo standardi llms.txt verkkopalvelimen juureen.");
        return;
    }

    const content = fs.readFileSync(llmsPath, 'utf-8');
    if (!content.startsWith('# ')) {
        logError("llms.txt: Tiedoston pitäisi alkaa H1-tason otsikolla (esim. '# Sivumaakarit').");
    } else {
        logSuccess("llms.txt on olemassa ja oikeassa muodossa – OK!");
    }
}

// ----------------------------------------------------
// PÄÄOHJELMA
// ----------------------------------------------------
console.log(`${colors.cyan}${colors.bold}======================================`);
console.log("🛡️  SIVUMAASARIT SEO & GEO GUARDIAN");
console.log(`======================================${colors.reset}`);

checkFavicons();
checkCanonicals();
checkNoscriptAndPrices();
checkImageFormats();
checkRobotsTxt();
checkLlmsTxt();

console.log(`\n${colors.cyan}${colors.bold}======================================`);
console.log("TARKISTUKSEN LOPPUTULOS:");
console.log(`======================================${colors.reset}`);

if (hasErrors) {
    console.error(`${colors.red}${colors.bold}❌ VIRHE: Hakukone- tai tekoälyoptimoinnin tarkistus epäonnistui! Korjaa yllä olevat virheet ennen kääntämistä.${colors.reset}\n`);
    process.exit(1);
} else {
    logSuccess("Kaikki kriittiset SEO/GEO-tarkistukset menivät puhtaasti läpi!");
    if (hasWarnings) {
        console.log(`${colors.yellow}⚠️  Huomaa yllä olevat varoitukset (ne eivät estä julkaisua, mutta parantavat laatua).${colors.reset}`);
    }
    console.log(`${colors.green}${colors.bold}🎉 Sivusto on valmis julkaistavaksi!${colors.reset}\n`);
    process.exit(0);
}
