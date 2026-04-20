document.addEventListener('DOMContentLoaded', () => {
    // This array will hold your product data
    let products = [
        // Placeholder data. This will be updated with actual data from your PDF.
        { name: "Sample Rakhi Set A", price: 150, image: "https://via.placeholder.com/150/f0e68c/584a3c?text=Rakhi+A" },
        { name: "Sample Rakhi Set B", price: 200, image: "https://via.placeholder.com/150/d2b48c/584a3c?text=Rakhi+B" },
        { name: "Sample Lumba Rakhi Set", price: 250, image: "https://via.placeholder.com/150/deb887/584a3c?text=Lumba+Set" }
    ];

    const productCatalogue = document.getElementById('product-catalogue');
    const addProductBtn = document.getElementById('addProduct');
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');
    const productImageInput = document.getElementById('productImage');
    const billItems = document.getElementById('bill-items');
    const totalPriceEl = document.getElementById('total-price');
    const downloadBillBtn = document.getElementById('download-bill');

    function renderProducts() {
        productCatalogue.innerHTML = ''; // Clear existing products
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price.toFixed(2)}</p>
                <input type="number" min="0" value="0" data-index="${index}" class="quantity">
                <button class="delete-product" data-index="${index}">Delete</button>
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

    // Admin: Add New Product
    addProductBtn.addEventListener('click', () => {
        const name = productNameInput.value.trim();
        const price = parseFloat(productPriceInput.value);
        const image = productImageInput.value.trim();

        if (name && !isNaN(price) && price > 0 && image) {
            products.push({ name, price, image });
            renderProducts();
            // Clear input fields
            productNameInput.value = '';
            productPriceInput.value = '';
            productImageInput.value = '';
        } else {
            alert('Please enter valid product name, price, and image URL.');
        }
    });

    // Handle quantity changes and product deletion
    productCatalogue.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity')) {
            updateBill();
        }
    });

    productCatalogue.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-product')) {
            const indexToDelete = parseInt(e.target.dataset.index);
            if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < products.length) {
                products.splice(indexToDelete, 1);
                renderProducts(); // Re-render to update indices and display
            }
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
        document.querySelectorAll('.quantity').forEach(input => {
            const index = parseInt(input.dataset.index);
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                const product = products[index];
                const itemPrice = product.price * quantity;
                y += 10;
                doc.text(`${product.name} (${quantity})`, 20, y);
                doc.text(`₹${itemPrice.toFixed(2)}`, 170, y, { align: 'right' });
            }
        });

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
