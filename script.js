document.addEventListener('DOMContentLoaded', () => {
    // This array now holds your full product data from the PDF.
    let products = [
        { name: "SH Peachy Pink Rakhi Set", price: 150, image: "https://placehold.co/200x200/FFDAB9/8B4513?text=Peachy+Pink" },
        { name: "SH Classic Maroon Lumba Set", price: 250, image: "https://placehold.co/200x200/E9967A/800000?text=Maroon+Lumba" },
        { name: "SH Royal Blue Peacock Rakhi Set", price: 220, image: "https://placehold.co/200x200/ADD8E6/00008B?text=Royal+Peacock" },
        { name: "SH Pearl Grace Rakhi Set", price: 180, image: "https://placehold.co/200x200/F5F5DC/A0522D?text=Pearl+Grace" },
        { name: "SH Golden Weave Lumba Set", price: 280, image: "https://placehold.co/200x200/FFD700/B8860B?text=Golden+Lumba" },
        { name: "SH Emerald Green Stone Rakhi Set", price: 200, image: "https://placehold.co/200x200/98FB98/2E8B57?text=Emerald+Stone" },
        { name: "SH Rudraksha Rakhi Set", price: 160, image: "https://placehold.co/200x200/D2B48C/8B4513?text=Rudraksha" },
        { name: "SH Kundan Artistry Lumba Set", price: 350, image: "https://placehold.co/200x200/FFFACD/DAA520?text=Kundan+Lumba" },
        { name: "SH Saffron Thread Rakhi Set", price: 130, image: "https://placehold.co/200x200/FFDEAD/FF8C00?text=Saffron+Thread" },
        { name: "SH Kids Elephant Rakhi Set", price: 120, image: "https://placehold.co/200x200/E6E6FA/483D8B?text=Kids+Elephant" },
        { name: "SH Silver Bead Lumba Set", price: 300, image: "https://placehold.co/200x200/C0C0C0/696969?text=Silver+Lumba" },
        { name: "SH Floral Bloom Rakhi Set", price: 170, image: "https://placehold.co/200x200/FFB6C1/C71585?text=Floral+Bloom" },
        { name: "SH Traditional Gota Patti Lumba Set", price: 260, image: "https://placehold.co/200x200/F0E68C/CD853F?text=Gota+Patti" },
        { name: "SH Divine Om Rakhi Set", price: 155, image: "https://placehold.co/200x200/FFE4B5/FF4500?text=Divine+Om" },
        { name: "SH Jade Tassel Lumba Set", price: 275, image: "https://placehold.co/200x200/AFEEEE/008080?text=Jade+Tassel" }
    ];

    const productCatalogue = document.getElementById('product-catalogue');
    const billItems = document.getElementById('bill-items');
    const totalPriceEl = document.getElementById('total-price');
    const downloadBillBtn = document.getElementById('download-bill');

    function renderProducts() {
        productCatalogue.innerHTML = ''; // Clear existing products
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            // The delete button has also been removed for the customer-facing view.
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price.toFixed(2)}</p>
                <input type="number" min="0" value="0" data-index="${index}" class="quantity">
            `;
            productCatalogue.appendChild(productDiv);
        });
        updateBill(); // Recalculate bill whenever products are rendered
    }

    function updateBill() {
        let total = 0;
        billItems.innerHTML = ''; // Clear existing bill items
        document.querySelectorAll('.quantity').forEach(input => {
            const index = input.dataset.index;
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                const product = products[index];
                const itemPrice = product.price * quantity;
                total += itemPrice;

                const billItem = document.createElement('div');
                billItem.textContent = `${product.name} x ${quantity} = ₹${itemPrice.toFixed(2)}`;
                billItems.appendChild(billItem);
            }
        });
        totalPriceEl.textContent = total.toFixed(2);
    }

    // Handle quantity changes
    productCatalogue.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity')) {
            updateBill();
        }
    });

    // Download Bill as PDF
    downloadBillBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.text("Shyama Handpicked Bill", 105, 20, { align: 'center' });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
        doc.line(20, 35, 190, 35); // Horizontal line

        let y = 45;
        doc.setFontSize(14);
        doc.text("Product (Quantity)", 20, y);
        doc.text("Price", 170, y, { align: 'right' });
        y += 7;
        doc.line(20, y, 190, y); // Horizontal line

        doc.setFontSize(12);
        let itemsExist = false;
        document.querySelectorAll('.quantity').forEach(input => {
            const index = parseInt(input.dataset.index);
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                itemsExist = true;
                const product = products[index];
                const itemPrice = product.price * quantity;
                y += 10;
                doc.text(`${product.name} (${quantity})`, 20, y);
                doc.text(`₹${itemPrice.toFixed(2)}`, 170, y, { align: 'right' });
            }
        });

        if (!itemsExist) {
            doc.text("No items selected.", 105, y + 10, { align: 'center' });
            y += 10;
        }

        y += 10;
        doc.line(20, y, 190, y); // Horizontal line

        y += 10;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total: ₹${totalPriceEl.textContent}`, 190, y, { align: 'right' });

        doc.save('Shyama_Handpicked_Bill.pdf');
    });

    // Initial render when the page loads
    renderProducts();
});
