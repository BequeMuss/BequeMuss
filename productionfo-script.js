  // Funktion, um die Produktdetails basierend auf der URL abzurufen
  function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');

    const products = {
        kissen1: {
            title: "Sitzkissen",
            image: "assets/product1-lightblue.png", // Standardbild
            description: "Ein einfaches, bequemes Sitzkissen für Stühle, ohne Personalisierung.",
            price: "15 €",
            images: {
                grau: "assets/product1-grey.png",
                hellblau: "assets/product1-lightblue.png",
                dunkelblau: "assets/product1-darkblue.png",
                rosa: "assets/product1-pink.png",
                grün: "assets/product1-green.png",
                schwarz: "assets/product1-black.png"
            },
            views: {
                view1: "assets/view-1.png",
                view2: "assets/view-2.png"
            }
        },
        kissen2: {
            title: "Sitzkissen mit Personalisierung",
            image: "assets/product1-green.png", // Standardbild
            description: "Ein einfaches, bequemes Sitzkissen für Stühle, personalisiert mit Namen (Eingabe bei Bestellung)",
            price: "16 €",
            images: {
                grau: "assets/product1-grey.png",
                hellblau: "assets/product1-lightblue.png",
                dunkelblau: "assets/product1-darkblue.png",
                rosa: "assets/product1-pink.png",
                grün: "assets/product1-green.png",
                schwarz: "assets/product1-black.png"
            },
            views: {
                view1: "assets/view-1.png",
                view2: "assets/view-2.png"
            }
        },
        kissen3: {
            title: "Spezial",
            image: "assets/product3.png", // Standardbild
            description: "Nicht verfügbar",
            price: "-- €",
            images: {
                rot: "assets/product3-red.png",
                blau: "assets/product3-blue.png",
                grün: "assets/product3-green.png",
                gelb: "assets/product3-yellow.png"
            },
            views: {
                view1: "assets/view-1.png",
                view2: "assets/view-2.png"
            }
        }
    };

    // Produktdaten abrufen und anzeigen
    const product = products[productName];
    if (product) {
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price;

        // Event Listener für die Farbauswahl
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', function() {
                colorOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');

                const selectedColor = this.dataset.color;
                document.getElementById('product-image').src = product.images[selectedColor]; // Bild aktualisieren
            });
        });
        //###################################################################################
        // Event Listener für die Ansichtsauswahl
        const viewOptions = document.querySelectorAll('.view-option');
        viewOptions.forEach(option => {
            option.addEventListener('click', function() {
                viewOptions.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');

                const selectedView = this.classList.contains('view1') ? 'view1' : 'view2';
                document.getElementById('product-image').src = product.views[selectedView]; // Bild aktualisieren
            });
        });
        //###################################################################################
    } else {
        document.getElementById('product-detail').innerHTML = "<p>Produkt nicht gefunden.</p>";
    }
}

// Lade die Produktdetails, wenn die Seite geladen wird
window.onload = loadProductDetails;

document.getElementById('buy-button').addEventListener('click', function() {
    const productTitle = document.getElementById('product-title').textContent;
    const selectedColor = document.querySelector('.color-option.selected');
    const color = selectedColor ? selectedColor.dataset.color : 'keine Farbe gewählt';
    const productPrice = document.getElementById('product-price').textContent; // Preis abrufen

    // Weiterleitung zur Bestellseite mit den gewählten Parametern
    window.location.href = `bestellung.html?title=${encodeURIComponent(productTitle)}&color=${encodeURIComponent(color)}&price=${encodeURIComponent(productPrice)}`;
});