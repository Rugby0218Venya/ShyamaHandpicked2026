document.addEventListener('DOMContentLoaded', () => {
    // --- ACCURATE PRODUCT DATA WITH TIERED PRICING FROM PDF ---
    // The pricing array is sorted from the highest MOQ to the lowest.
    // **IMPORTANT**: Replace the placeholder image URLs with your actual product image URLs.
    let products = [
        { 
            name: "SH \ Pink Rakhi Set", 
            image: "https://placehold.co/200x200/FFDAB9/8B4513?text=Peachy+Pink", // Replace with your image URL
            pricing: [
                { moq: 20, price: 135 }, // 20+ sets
                { moq: 10, price: 140 }, // 10-19 sets
                { moq: 1, price: 150 }   // 1-9 sets
            ]
        },
        { 
            name: "SH Classic Maroon Lumba Set", 
            image: "https://placehold.co/200x200/E9967A/800000?text=Maroon+Lumba", // Replace with your image URL
            pricing: [
                { moq: 20, price: 225 },
                { moq: 10, price: 235 },
                { moq: 1, price: 250 }
            ]
        },
        { 
            name: "SH Royal Blue Peacock Rakhi Set", 
            image: "https://placehold.co/200x200/ADD8E6/00008B?text=Royal+Peacock", // Replace with your image URL
            pricing: [
                { moq: 20, price: 198 },
                { moq: 10, price: 210 },
                { moq: 1, price: 220 }
            ]
        },
        { 
            name: "SH Pearl Grace Rakhi Set", 
            image: "https://placehold.co/200x200/F5F5DC/A0522D?text=Pearl+Grace", // Replace with your image URL
            pricing: [
                { moq: 20, price: 160 },
                { moq: 10, price: 170 },
                { moq: 1, price: 180 }
            ]
        },
        { 
            name: "SH Golden Weave Lumba Set", 
            image: "https://placehold.co/200x200/FFD700/B8860B?text=Golden+Lumba", // Replace with your image URL
            pricing: [
                { moq: 20, price: 250 },
                { moq: 10, price: 265 },
                { moq: 1, price: 280 }
            ]
        },
        { 
            name: "SH Emerald Green Stone Rakhi Set", 
            image: "https://placehold.co/200x200/98FB98/2E8B57?text=Emerald+Stone", // Replace with your image URL
            pricing: [
                { moq: 20, price: 180 },
                { moq: 10, price: 190 },
                { moq: 1, price: 200 }
            ]
        },
        { 
            name: "SH Rudraksha Rakhi Set", 
            image: "https://placehold.co/200x200/D2B48C/8B4513?text=Rudraksha", // Replace with your image URL
            pricing: [
                { moq: 20, price: 145 },
                { moq: 10, price: 150 },
                { moq: 1, price: 160 }
            ]
        },
        { 
            name: "SH Kundan Artistry Lumba Set", 
            image: "https://placehold.co/200x200/FFFACD/DAA520?text=Kundan+Lumba", // Replace with your image URL
            pricing: [
                { moq: 20, price: 315 },
                { moq: 10, price: 330 },
                { moq: 1, price: 350 }
            ]
        },
        { 
            name: "SH Saffron Thread Rakhi Set", 
            image: "https://placehold.co/200x200/FFDEAD/FF8C00?text=Saffron+Thread", // Replace with your image URL
            pricing: [
                { moq: 20, price: 115 },
                { moq: 10, price: 120 },
                { moq: 1, price: 130 }
            ]
        }
        // ... all other products from your PDF would follow this format
    ];

    const productCatalogue = document.getElementById('product-catalogue');
    const billItems = document.getElementById('bill-items');
    const totalPriceEl = document.getElementById('total-price');
    const downloadBillBtn = document.getElementById('download-bill');

    function getPriceForQuantity(quantity, pricingTiers) {
        for (const tier of pricingTiers) {
            if (quantity >= tier.moq) {
                return tier.price;
            }
        }
        return pricingTiers[pricingTiers.length - 1].price;
    }

    function renderProducts() {
        productCatalogue.innerHTML = '';
        products.forEach((product, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            // Create the pricing details string to display on the card
            let pricingDetailsHTML = '<div class="pricing-details">';
            // Reverse the array to show from lowest MOQ to highest for display purposes
            [...product.pricing].reverse().forEach(tier => {
                pricingDetailsHTML += `<span>${tier.moq}+ : ₹${tier.price}</span>`;
            });
            pricingDetailsHTML += '</div>';

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                ${pricingDetailsHTML}
                <input type="number" min="0" value="0" data-index="${index}" class="quantity" placeholder="Qty">
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
