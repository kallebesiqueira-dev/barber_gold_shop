# Gold Barber Shop

Sito statico responsive per Gold Barber Shop, sviluppato con HTML, CSS e JavaScript Vanilla.

## Contenuto del progetto

- `index.html`: homepage principale.
- `style.css`: stile completo del sito.
- `script.js`: interazioni, traduzioni, animazioni e booking WhatsApp.
- `legal.js`: gestione lingua IT/EN e banner cookie nelle pagine legali.
- `legal.css`: stile condiviso per le pagine legali.
- `privacy.html`: privacy policy.
- `termini.html`: termini di utilizzo.
- `cookies.html`: cookie policy.
- `imgs/`: immagini del sito.
- `animazioni/`: frame usati per l'animazione hero.

## Funzionalità

- Layout responsive per desktop, tablet e mobile.
- Hero animato tramite sequenza di frame su canvas.
- Selettore lingua IT/EN con preferenza salvata in locale.
- Listino prezzi in stile lineare premium.
- Carousel touch friendly per la galleria.
- Prenotazione via WhatsApp con messaggio formattato.
- Banner cookie con scelta accept/reject salvata in locale.
- Footer con link social e link legali.

## Pubblicazione

Essendo un sito statico, può essere pubblicato su qualsiasi hosting statico, ad esempio:

- Netlify
- Vercel
- GitHub Pages
- Hosting condiviso tradizionale

### Dominio pubblico

La URL pubblica del sito è:

- `https://www.barbershopgold.com/`

### Upload su Namecheap

Per pubblicare correttamente su Namecheap, i file del sito devono stare nella root pubblica del dominio, di solito `public_html/` oppure `public_html/www.barbershopgold.com/` a seconda della configurazione del piano hosting.

Contenuto da caricare:

- `.htaccess`
- `index.html`
- `privacy.html`
- `cookies.html`
- `termini.html`
- `style.css`
- `legal.css`
- `script.js`
- `legal.js`
- `robots.txt`
- `sitemap.xml`
- cartelle `imgs/` e `animazioni/`

Verifiche dopo l'upload:

1. Aprire `https://www.barbershopgold.com/`.
2. Aprire `https://www.barbershopgold.com/robots.txt`.
3. Aprire `https://www.barbershopgold.com/sitemap.xml`.
4. Verificare che `http://barbershopgold.com` reindirizzi a `https://www.barbershopgold.com/`.

### Far apparire il sito su Google

Dopo la pubblicazione, il sito non entra subito nei risultati di ricerca. Serve completare questi passaggi:

1. Aprire Google Search Console.
2. Aggiungere la proprietà `https://www.barbershopgold.com/` oppure il dominio `barbershopgold.com`.
3. Verificare la proprietà, preferibilmente via DNS se si vuole coprire anche `www` e varianti del dominio.
4. Inviare la sitemap: `https://www.barbershopgold.com/sitemap.xml`.
5. Richiedere l'indicizzazione della home.

Sono stati inclusi nel progetto `robots.txt`, `sitemap.xml`, canonical URL e dati strutturati per aiutare Google a comprendere il sito. Dopo il deploy, verificare che `robots.txt` e `sitemap.xml` rispondano senza errore 404.

## Avvio locale

Aprire `index.html` nel browser oppure servire la cartella con un server statico locale.

Esempio con VS Code Live Server o qualsiasi server HTTP locale.

## Note legali

Le pagine `privacy.html`, `termini.html` e `cookies.html` sono bozze informative generiche e dovrebbero essere verificate da un professionista legale prima della pubblicazione definitiva.