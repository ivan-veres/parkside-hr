import React from 'react'

export const metadata = {
    title: 'Politika Privatnosti | Park Side',
    description: 'Politika privatnosti za Park Side. Saznajte kako prikupljamo, koristimo i štitimo vaše osobne podatke.',
}

export default function PrivacyPolicy() {
    return (
        <main className="container" style={{ padding: 'var(--spacing-3xl) var(--spacing-md)', maxWidth: '800px' }}>
            <h1>Politika Privatnosti</h1>
            <p><strong>Posljednje ažuriranje: {new Date().toLocaleDateString('hr-HR')}</strong></p>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>1. Uvod</h2>
                <p>
                    Dobrodošli na Park Side (&quot;mi&quot;, &quot;nas&quot; ili &quot;naše&quot;). Posvećeni smo zaštiti vaše privatnosti i osiguravanju da su vaši osobni podaci zaštićeni.
                    Ova Politika privatnosti objašnjava kako prikupljamo, koristimo i otkrivamo vaše podatke kada posjetite našu web stranicu.
                </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>2. Podaci koje prikupljamo</h2>
                <p>Možemo prikupljati sljedeće vrste podataka:</p>
                <ul>
                    <li><strong>Osobni podaci:</strong> Ime, prezime, e-mail adresa i druge informacije koje nam dobrovoljno date putem našeg kontakt obrasca.</li>
                    <li><strong>Podaci o korištenju:</strong> Informacije o tome kako pristupate i koristite web stranicu, uključujući vašu IP adresu, vrstu preglednika i stranice koje posjećujete.</li>
                    <li><strong>Kolačići (Cookies):</strong> Koristimo kolačiće za poboljšanje funkcionalnosti naše stranice i analizu prometa.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>3. Kako koristimo vaše podatke</h2>
                <p>Vaše podatke koristimo u sljedeće svrhe:</p>
                <ul>
                    <li>Za odgovaranje na vaše upite i pružanje informacija koje ste zatražili.</li>
                    <li>Za poboljšanje i održavanje naše web stranice.</li>
                    <li>Za analizu korištenja stranice putem Google Analyticsa (uz vaš pristanak).</li>
                    <li>Za zaštitu naše stranice od neželjene pošte i zloupotrebe putem Google reCAPTCHA.</li>
                </ul>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>4. Google Analytics</h2>
                <p>
                    Koristimo Google Analytics za prikupljanje anonimnih podataka o posjetiteljima kako bismo razumjeli kako se naša stranica koristi.
                    Google Analytics koristi kolačiće za prikupljanje ovih podataka. Možete odbiti korištenje kolačića putem postavki vašeg preglednika ili putem našeg bannera za kolačiće.
                    Za više informacija o tome kako Google koristi podatke, posjetite <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Googleova pravila privatnosti</a>.
                </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>5. Google reCAPTCHA</h2>
                <p>
                    Ova stranica je zaštićena s reCAPTCHA i primjenjuju se Google <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politika Privatnosti</a> i <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Uvjeti Korištenja</a>.
                </p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>6. Vaša prava</h2>
                <p>Prema GDPR-u, imate sljedeća prava:</p>
                <ul>
                    <li>Pravo na pristup vašim osobnim podacima.</li>
                    <li>Pravo na ispravak netočnih podataka.</li>
                    <li>Pravo na brisanje vaših podataka (&quot;pravo na zaborav&quot;).</li>
                    <li>Pravo na prigovor na obradu podataka.</li>
                </ul>
                <p>Za ostvarivanje ovih prava, molimo kontaktirajte nas putem kontakt obrasca.</p>
            </section>

            <section style={{ marginBottom: 'var(--spacing-xl)' }}>
                <h2>7. Kontakt</h2>
                <p>
                    Ako imate bilo kakvih pitanja o ovoj Politici privatnosti, slobodno nas kontaktirajte putem obrasca na našoj web stranici.
                </p>
            </section>
        </main>
    )
}
