document.addEventListener('DOMContentLoaded', () => {
    // --- ACCURATE PRODUCT DATA WITH TIERED PRICING FROM PDF ---
    // The pricing array is sorted from the highest MOQ to the lowest.
    // **IMPORTANT**: Replace the placeholder image URLs with your actual product image URLs.
    let products = [
       
    {
        "name": "BHAGWANJI RAKHI LUMBA SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=BHAGWANJI+RAKHI+LUMBA+SET",
        "pricing": [
            { "moq": 7, "price": 56 }
        ]
    },
    {
        "name": "BHAGWANJI MOLI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=BHAGWANJI+MOLI+SET",
        "pricing": [
            { "moq": 7, "price": 31 }
        ]
    },
    {
        "name": "SMALL SOAN",
        "image": "https://placehold.co/200x200/E9967A/800000?text=SMALL+SOAN",
        "pricing": [
            { "moq": 21, "price": 25 }
        ]
    },
    {
        "name": "RAM RAM PARROT SOAN",
        "image": "https://placehold.co/200x200/E9967A/800000?text=RAM+RAM+PARROT+SOAN",
        "pricing": [
            { "moq": 11, "price": 45 }
        ]
    },
    {
        "name": "HANDPAINTED MOLI SOAN",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HANDPAINTED+MOLI+SOAN",
        "pricing": [
            { "moq": 11, "price": 45 }
        ]
    },
    {
        "name": "TASSEL SWASTIK SOAN",
        "image": "https://placehold.co/200x200/E9967A/800000?text=TASSEL+SWASTIK+SOAN",
        "pricing": [
            { "moq": 11, "price": 65 }
        ]
    },
    {
        "name": "KUNDAN RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=KUNDAN+RAKHI",
        "pricing": [
            { "moq": 18, "price": 27 },
            { "moq": 24, "price": 45 },
            { "moq": 12, "price": 52 }
        ]
    },
    {
        "name": "SAADI DIAMOND FLOWER RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=SAADI+DIAMOND+FLOWER+RAKHI",
        "pricing": [
            { "moq": 7, "price": 65 }
        ]
    },
    {
        "name": "DIAMOND SAADI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=DIAMOND+SAADI+RAKHI",
        "pricing": [
            { "moq": 7, "price": 70 }
        ]
    },
    {
        "name": "DELICATE BUTI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=DELICATE+BUTI+RAKHI",
        "pricing": [
            { "moq": 18, "price": 19 }
        ]
    },
    {
        "name": "PINK AND BLUE STONE BUTI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=PINK+AND+BLUE+STONE+BUTI+RAKHI",
        "pricing": [
            { "moq": 24, "price": 21 }
        ]
    },
    {
        "name": "MOP OHM GANESHA RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MOP+OHM+GANESHA+RAKHI",
        "pricing": [
            { "moq": 24, "price": 25 }
        ]
    },
    {
        "name": "MOLI MOTI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MOLI+MOTI+RAKHI",
        "pricing": [
            { "moq": 24, "price": 22 }
        ]
    },
    {
        "name": "INFINITY LOOP MOLI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=INFINITY+LOOP+MOLI+RAKHI",
        "pricing": [
            { "moq": 12, "price": 24 }
        ]
    },
    {
        "name": "PURE TULSI BEAD RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=PURE+TULSI+BEAD+RAKHI",
        "pricing": [
            { "moq": 36, "price": 16 }
        ]
    },
    {
        "name": "INTRICATE PURE TULSI BEAD RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=INTRICATE+PURE+TULSI+BEAD+RAKHI",
        "pricing": [
            { "moq": 24, "price": 20 }
        ]
    },
    {
        "name": "BEAD MOLI SAADI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=BEAD+MOLI+SAADI+RAKHI",
        "pricing": [
            { "moq": 24, "price": 18 }
        ]
    },
    {
        "name": "GANESHA MOLI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=GANESHA+MOLI+RAKHI",
        "pricing": [
            { "moq": 24, "price": 15 }
        ]
    },
    {
        "name": "GANESHA RAKHI BAND",
        "image": "https://placehold.co/200x200/E9967A/800000?text=GANESHA+RAKHI+BAND",
        "pricing": [
            { "moq": 24, "price": 35 },
            { "moq": 12, "price": 40 }
        ]
    },
    {
        "name": "HAND-PAINTED ANTI-TARNISH RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HAND-PAINTED+ANTI-TARNISH+RAKHI",
        "pricing": [
            { "moq": 36, "price": 24 },
            { "moq": 18, "price": 32 }
        ]
    },
    {
        "name": "CROCHET BASE RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=CROCHET+BASE+RAKHI",
        "pricing": [
            { "moq": 24, "price": 15 }
        ]
    },
    {
        "name": "RED STONE BUTI RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=RED+STONE+BUTI+RAKHI",
        "pricing": [
            { "moq": 24, "price": 27 },
            { "moq": 12, "price": 31 }
        ]
    },
    {
        "name": "TRADITIONAL BUTI CHAKALIYA",
        "image": "https://placehold.co/200x200/E9967A/800000?text=TRADITIONAL+BUTI+CHAKALIYA",
        "pricing": [
            { "moq": 12, "price": 32 }
        ]
    },
    {
        "name": "RUDRAKSH MOLI BAND",
        "image": "https://placehold.co/200x200/E9967A/800000?text=RUDRAKSH+MOLI+BAND",
        "pricing": [
            { "moq": 24, "price": 65 },
            { "moq": 12, "price": 72 }
        ]
    },
    {
        "name": "INTRICATE STAR COUPLE RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=INTRICATE+STAR+COUPLE+RAKHI",
        "pricing": [
            { "moq": 12, "price": 100 },
            { "moq": 6, "price": 110 }
        ]
    },
    {
        "name": "MOLI LEAF COUPLE BAND",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MOLI+LEAF+COUPLE+BAND",
        "pricing": [
            { "moq": 24, "price": 110 },
            { "moq": 12, "price": 125 }
        ]
    },
    {
        "name": "UNDERSTATED MOLI COUPLE RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=UNDERSTATED+MOLI+COUPLE+RAKHI",
        "pricing": [
            { "moq": 24, "price": 85 },
            { "moq": 12, "price": 95 }
        ]
    },
    {
        "name": "FLOWER BEAD MOLI BAND",
        "image": "https://placehold.co/200x200/E9967A/800000?text=FLOWER+BEAD+MOLI+BAND",
        "pricing": [
            { "moq": 12, "price": 70 }
        ]
    },
    {
        "name": "MOTI MOLI BAND",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MOTI+MOLI+BAND",
        "pricing": [
            { "moq": 24, "price": 105 },
            { "moq": 12, "price": 120 }
        ]
    },
    {
        "name": "PINK BUTTERFLY LUMBI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=PINK+BUTTERFLY+LUMBI",
        "pricing": [
            { "moq": 18, "price": 60 }
        ]
    },
    {
        "name": "HANDPAINTED CHORI LUMBI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HANDPAINTED+CHORI+LUMBI",
        "pricing": [
            { "moq": 12, "price": 70 }
        ]
    },
    {
        "name": "LITTLE HEART BRACELET LUMBI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=LITTLE+HEART+BRACELET+LUMBI",
        "pricing": [
            { "moq": 12, "price": 75 }
        ]
    },
    {
        "name": "KUNDAN STUDDED FLEXIBLE BRACELET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=KUNDAN+STUDDED+FLEXIBLE+BRACELET",
        "pricing": [
            { "moq": 12, "price": 125 }
        ]
    },
    {
        "name": "CERAMIC FLOWER BUTTERFLY LUMBA",
        "image": "https://placehold.co/200x200/E9967A/800000?text=CERAMIC+FLOWER+BUTTERFLY+LUMBA",
        "pricing": [
            { "moq": 12, "price": 80 }
        ]
    },
    {
        "name": "TRADITIONAL MARWARI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=TRADITIONAL+MARWARI+SET",
        "pricing": [
            { "moq": 12, "price": 225 }
        ]
    },
    {
        "name": "BOUQUET BRACELET RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=BOUQUET+BRACELET+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 125 },
            { "moq": 6, "price": 135 }
        ]
    },
    {
        "name": "HEAVY GOL ZARDOSI LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HEAVY+GOL+ZARDOSI+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 6, "price": 190 }
        ]
    },
    {
        "name": "MIRROR LUMBI RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MIRROR+LUMBI+RAKHI+SET",
        "pricing": [
            { "moq": 24, "price": 50 }
        ]
    },
    {
        "name": "EVIL EYE MULTICOLOR LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=EVIL+EYE+MULTICOLOR+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 130 },
            { "moq": 6, "price": 140 }
        ]
    },
    {
        "name": "BUTTERFLY LUMBI BRACELET SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=BUTTERFLY+LUMBI+BRACELET+SET",
        "pricing": [
            { "moq": 18, "price": 100 },
            { "moq": 12, "price": 110 }
        ]
    },
    {
        "name": "HEAVY BANDHEJ LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HEAVY+BANDHEJ+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 18, "price": 140 },
            { "moq": 12, "price": 155 }
        ]
    },
    {
        "name": "HAND FINISHED FLOWER BRACELET SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=HAND+FINISHED+FLOWER+BRACELET+SET",
        "pricing": [
            { "moq": 12, "price": 145 },
            { "moq": 6, "price": 155 }
        ]
    },
    {
        "name": "TASSEL JADAOO BRACELET SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=TASSEL+JADAOO+BRACELET+SET",
        "pricing": [
            { "moq": 24, "price": 75 },
            { "moq": 18, "price": 85 }
        ]
    },
    {
        "name": "LOTUS FRILL LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=LOTUS+FRILL+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 75 }
        ]
    },
    {
        "name": "YELLOW FLOWER BUTI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=YELLOW+FLOWER+BUTI+SET",
        "pricing": [
            { "moq": 12, "price": 145 },
            { "moq": 6, "price": 155 }
        ]
    },
    {
        "name": "TISSUE FLOWER EVIL EYE SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=TISSUE+FLOWER+EVIL+EYE+SET",
        "pricing": [
            { "moq": 12, "price": 180 },
            { "moq": 6, "price": 195 }
        ]
    },
    {
        "name": "ROSE LACE LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=ROSE+LACE+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 24, "price": 65 },
            { "moq": 12, "price": 75 }
        ]
    },
    {
        "name": "GOTA GHUNGHROO LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=GOTA+GHUNGHROO+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 130 },
            { "moq": 6, "price": 145 }
        ]
    },
    {
        "name": "MINT GREEN LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MINT+GREEN+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 140 },
            { "moq": 6, "price": 150 }
        ]
    },
    {
        "name": "MORPANKH LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=MORPANKH+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 150 },
            { "moq": 6, "price": 160 }
        ]
    },
    {
        "name": "FLORAL BRACELET LUMBA RAKHI SET",
        "image": "https://placehold.co/200x200/E9967A/800000?text=FLORAL+BRACELET+LUMBA+RAKHI+SET",
        "pricing": [
            { "moq": 12, "price": 210 },
            { "moq": 6, "price": 225 }
        ]
    },
    {
        "name": "RAKHI ENVELOPE",
        "image": "https://placehold.co/200x200/E9967A/800000?text=RAKHI+ENVELOPE",
        "pricing": [
            { "moq": 2, "price": 110 }
        ]
    },
    {
        "name": "DOLL LIPS BROCHE RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=DOLL+LIPS+BROCHE+RAKHI",
        "pricing": [
            { "moq": 12, "price": 85 },
            { "moq": 6, "price": 95 }
        ]
    },
    {
        "name": "SCRUNCHY KIDS RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=SCRUNCHY+KIDS+RAKHI",
        "pricing": [
            { "moq": 12, "price": 40 }
        ]
    },
    {
        "name": "STONE PAPER SCISSOR GAME RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=STONE+PAPER+SCISSOR+GAME+RAKHI",
        "pricing": [
            { "moq": 8, "price": 48 }
        ]
    },
    {
        "name": "EVIL EYE BIKER RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=EVIL+EYE+BIKER+RAKHI",
        "pricing": [
            { "moq": 12, "price": 35 }
        ]
    },
    {
        "name": "DONALD DUCK PENCIL CAP RAKHI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=DONALD+DUCK+PENCIL+CAP+RAKHI",
        "pricing": [
            { "moq": 24, "price": 24 }
        ]
    },
    {
        "name": "RAINBOWS AND FLOWERS LUMBI",
        "image": "https://placehold.co/200x200/E9967A/800000?text=RAINBOWS+AND+FLOWERS+LUMBI",
        "pricing": [
            { "moq": 6, "price": 80 }
        ]
    },
    {
        "name": "ROLI CHAWAL PLATTER",
        "image": "https://placehold.co/200x200/E9967A/800000?text=ROLI+CHAWAL+PLATTER",
        "pricing": [
            { "moq": 12, "price": 60 }
        ]
    },
    {
        "name": "SHANK ROLI CHAWAL PLATTER",
        "image": "https://placehold.co/200x200/E9967A/800000?text=SHANK+ROLI+CHAWAL+PLATTER",
        "pricing": [
            { "moq": 12, "price": 150 }
        ]
    },
    {
        "name": "ROLI CHAWAL NARIYAL PACKING",
        "image": "https://placehold.co/200x200/E9967A/800000?text=ROLI+CHAWAL+NARIYAL+PACKING",
        "pricing": [
            { "moq": 11, "price": 68 }
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
