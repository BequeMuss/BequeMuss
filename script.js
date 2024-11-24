
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Add event listeners to product buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', event => {
        // TO DO: Implement product configuration functionality
        console.log('Product button clicked!');
    });
});

// Add event listener to contact form submit button
document.querySelector('.contact').addEventListener('submit', event => {
    event.preventDefault();
    console.log('Contact form submitted!');
});

function showProduct(productName) {
    window.location.href = `productinfo.html?product=${productName}`;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Hier kannst du die Eingabewerte abrufen
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;

    // Hier kannst du die Daten verarbeiten, z.B. an einen Server senden
    console.log('Name:', name);
    console.log('E-Mail:', email);
    console.log('Nachricht:', message);

    // Optional: Zeige eine Bestätigungsmeldung an
    alert('⚠️⚠️⚠️ Diese Funktion ist (noch) nicht verfügbar !⚠️⚠️⚠️')
    //alert('Vielen Dank für Ihre Nachricht, ' + name + '! Wir werden uns bald bei Ihnen melden.');
    // Leere die Eingabefelder nach dem Absenden
    event.target.querySelector('input[type="text"]').value = '';
    event.target.querySelector('input[type="email"]').value = '';
    event.target.querySelector('textarea').value = '';
});