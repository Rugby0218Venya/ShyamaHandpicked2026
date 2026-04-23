document.addEventListener('DOMContentLoaded', () => {
    // --- PRODUCT DATA WITH TIERED PRICING ---
    // Each product has a 'pricing' array.
    // The tiers are sorted by MOQ (Minimum Order Quantity) in descending order.
    let products = [
        { 
            name: "SH Peachy Pink Rakhi Set", 
            image: "https://placehold.co/200x200/FFDAB9/8B4513?text=Peachy+Pink",
            pricing: [
                { moq: 20, price: 135 },
                { moq: 10, price: 140 },
                { moq: 1, price: 150 }
            ]
        },
        { 
            name: "SH Classic Maroon Lumba Set", 
            image: "https://placehold.co/200x200/E9967A/800000?text=Maroon+Lumba",
            pricing: [
                { moq: 20, price: 225 },
                { moq: 10, price: 235 },
                { moq: 1, price: 250 }
            ]
        },
        { 
            name: "SH Royal Blue Peacock Rakhi Set", 
            image: "https://placehold.co/200x200/ADD8E6/00008B?text=Royal+Peacock",
            pricing: [
                { moq: 20, price: 190 },
                { moq: 10, price: 205 },
                { moq: 1, price: 220 }
            ]
        },
        { 
            name: "SH Pearl Grace Rakhi Set", 
            image: "https://placehold.co/200x200/F5F5DC/A0522D?text=Pearl+Grace",
            pricing: [
                { moq: 20, price: 160 },
                { moq: 10, price: 170 },
                { moq: 1, price: 180 }
            ]
        },
        { 
            name: "SH Golden Weave Lumba Set", 
            image: "https://placehold.co/200x200/FFD700/B8860B?text=Golden+Lumba",
            pricing: [
                { moq: 20, price: 250 },
                { moq: 10, price: 265 },
                { moq: 1, price: 280 }
            ]
        },
        // Add all other products here in the same format...
    ];

    const productCatalogue = document.getElementById('product-catalogue');
    const billItems = document.getElementById('bill-items');
    const totalPriceEl = document.getElementById('total-price');
    const downloadBillBtn = document.getElementById('download-bill');

    /**
     * Finds the correct price for a given quantity based on MOQ tiers.
     * @param {number} quantity - The number of items.
     * @param {Array} pricingTiers - The pricing tiers for the product.
     * @returns {number} The price per item.
     */
    function getPriceForQuantity(quantity, pricingTiers) {
        // Tiers must be sorted from highest MOQ to lowest
        for (const tier of pricingTiers) {
            if (quantity >= tier.moq) {
                return tier.price;
            }
        }
        // Return the base price (lowest MOQ) if no other tier is met
        return pricingTiers[pricingTiers.length - 1].price;
    }

    function renderProducts() {
        productCatalogue.innerHTML = '';
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            // Get the base price to display (From ₹...)
            const basePrice = product.pricing[product.pricing.length - 1].price;
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>From ₹${basePrice.toFixed(2)}</p>
                <input type="number" min="0" value="0" data-index="${index}" class="quantity">
            `;
            productCatalogue.appendChild(productDiv);
        });
        updateBill();
    }

    function updateBill() {
        let total = 0;
        billItems.innerHTML = '';
        document.querySelectorAll('.quantity').forEach(input => {
            const index = input.dataset.index;
            const quantity = parseInt(input.value);

            if (quantity > 0) {
                const product = products[index];
                const pricePerItem = getPriceForQuantity(quantity, product.pricing);
                const itemPrice = pricePerItem * quantity;
                total += itemPrice;

                const billItem = document.createElement('div');
                billItem.textContent = `${product.name} x ${quantity} @ ₹${pricePerItem.toFixed(2)} = ₹${itemPrice.toFixed(2)}`;
                billItems.appendChild(billItem);
            }
        });
        totalPriceEl.textContent = total.toFixed(2);
    }

    productCatalogue.addEventListener('input', (e) => {
        if (e.target.classList.contains('quantity')) {
            updateBill();
        }
    });
    
    downloadBillBtn.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(22);
        doc.text("Shyama Handpicked Bill", 105, 20, { align: 'center' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
        doc.line(20, 35, 190, 35);
        let y = 45;
        doc.setFontSize(14);
        doc.text("Product (Qty @ Price/item)", 20, y);
        doc.text("Total", 190, y, { align: 'right' });
        y += 7;
        doc.line(20, y, 190, y);
        doc.setFontSize(12);
        let itemsExist = false;
        document.querySelectorAll('.quantity').forEach(input => {
            const index = parseInt(input.dataset.index);
            const quantity = parseInt(input.value);
            if (quantity > 0) {
                itemsExist = true;
                const product = products[index];
                const pricePerItem = getPriceForQuantity(quantity, product.pricing);
                const itemPrice = pricePerItem * quantity;
                y += 10;
                doc.text(`${product.name} (${quantity} @ ₹${pricePerItem.toFixed(2)})`, 20, y);
                doc.text(`₹${itemPrice.toFixed(2)}`, 190, y, { align: 'right' });
            }
        });
        if (!itemsExist) {
            doc.text("No items selected.", 105, y + 10, { align: 'center' });
            y += 10;
        }
        y += 10;
        doc.line(20, y, 190, y);
        y += 10;
        doc.setFontSize(16);
        doc.setFont('helvetica', 'bold');
        doc.text(`Total: ₹${totalPriceEl.textContent}`, 190, y, { align: 'right' });
        doc.save('Shyama_Handpicked_Bill.pdf');
    });

    renderProducts();
});
