document.addEventListener('DOMContentLoaded', () => {
    // --- PAGE ELEMENTS ---
    const detailsPage = document.getElementById('details-page');
    const orderingPage = document.getElementById('ordering-page');
    const proceedToOrderBtn = document.getElementById('proceed-to-order');
    const backToDetailsBtn = document.getElementById('back-to-details');

    // --- CUSTOMER DETAIL INPUTS ---
    const customerNameInput = document.getElementById('customerName');
    const customerPhoneInput = document.getElementById('customerPhone');
    const customerAddressInput = document.getElementById('customerAddress');
    const customerNotesInput = document.getElementById('customerNotes');
    
    // --- ORDERING ELEMENTS ---
    const productCatalogue = document.getElementById('product-catalogue');
    const billItems = document.getElementById('bill-items');
    const totalPriceEl = document.getElementById('total-price');
    const downloadBillBtn = document.getElementById('download-bill');
    const clearSelectionBtn = document.getElementById('clear-selection');

    // --- YOUR COMPLETE AND UPDATED PRODUCT LIST ---
    let products = [
        { "name": "BHAGWANJI RAKHI LUMBA SET", "image": "https://placehold.co/200x200/E9967A/800000?text=BHAGWANJI+RAKHI+LUMBA+SET", "pricing": [{ "moq": 7, "price": 56 }] },
        { "name": "BHAGWANJI MOLI SET", "image": "https://placehold.co/200x200/E9967A/800000?text=BHAGWANJI+MOLI+SET", "pricing": [{ "moq": 7, "price": 31 }] },
        { "name": "SMALL SOAN", "image": "https://placehold.co/200x200/E9967A/800000?text=SMALL+SOAN", "pricing": [{ "moq": 21, "price": 25 }] },
        { "name": "RAM RAM PARROT SOAN", "image": "https://placehold.co/200x200/E9967A/800000?text=RAM+RAM+PARROT+SOAN", "pricing": [{ "moq": 11, "price": 45 }] },
        // --- PRICE UPDATED HERE ---
        { "name": "HANDPAINTED MOLI SOAN", "image": "https://placehold.co/200x200/E9967A/800000?text=HANDPAINTED+MOLI+SOAN", "pricing": [{ "moq": 11, "price": 50 }] },
        { "name": "TASSEL SWASTIK SOAN", "image": "https://placehold.co/200x200/E9967A/800000?text=TASSEL+SWASTIK+SOAN", "pricing": [{ "moq": 11, "price": 65 }] },
        // --- NEW ITEM ADDED HERE ---
        { "name": "Swastik Ganesh Soan", "image": "https://placehold.co/200x200/E9967A/800000?text=SWASTIK+GANESH+SOAN", "pricing": [{ "moq": 11, "price": 35 }] },
        { "name": "KUNDAN RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=KUNDAN+RAKHI", "pricing": [{ "moq": 24, "price": 45 }, { "moq": 18, "price": 27 }, { "moq": 12, "price": 52 }] },
        { "name": "SAADI DIAMOND FLOWER RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=SAADI+DIAMOND+FLOWER+RAKHI", "pricing": [{ "moq": 7, "price": 65 }] },
        { "name": "DIAMOND SAADI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=DIAMOND+SAADI+RAKHI", "pricing": [{ "moq": 7, "price": 70 }] },
        { "name": "DELICATE BUTI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=DELICATE+BUTI+RAKHI", "pricing": [{ "moq": 18, "price": 19 }] },
        { "name": "PINK AND BLUE STONE BUTI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=PINK+AND+BLUE+STONE+BUTI+RAKHI", "pricing": [{ "moq": 24, "price": 21 }] },
        { "name": "MOP OHM GANESHA RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=MOP+OHM+GANESHA+RAKHI", "pricing": [{ "moq": 24, "price": 25 }] },
        { "name": "MOLI MOTI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=MOLI+MOTI+RAKHI", "pricing": [{ "moq": 24, "price": 22 }] },
        { "name": "INFINITY LOOP MOLI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=INFINITY+LOOP+MOLI+RAKHI", "pricing": [{ "moq": 12, "price": 24 }] },
        { "name": "PURE TULSI BEAD RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=PURE+TULSI+BEAD+RAKHI", "pricing": [{ "moq": 36, "price": 16 }] },
        { "name": "TRIPLE KUNDAN RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=TRIPLE+KUNDAN+RAKHI", "pricing": [{ "moq": 24, "price": 65 }, { "moq": 12, "price": 72 }] },
        { "name": "INTRICATE PURE TULSI BEAD RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=INTRICATE+PURE+TULSI+BEAD+RAKHI", "pricing": [{ "moq": 24, "price": 20 }] },
        { "name": "BEAD MOLI SAADI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=BEAD+MOLI+SAADI+RAKHI", "pricing": [{ "moq": 24, "price": 18 }] },
        { "name": "GANESHA MOLI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=GANESHA+MOLI+RAKHI", "pricing": [{ "moq": 24, "price": 15 }] },
        { "name": "GANESHA RAKHI BAND", "image": "https://placehold.co/200x200/E9967A/800000?text=GANESHA+RAKHI+BAND", "pricing": [{ "moq": 24, "price": 35 }, { "moq": 12, "price": 40 }] },
        { "name": "HAND-PAINTED ANTI-TARNISH RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=HAND-PAINTED+ANTI-TARNISH+RAKHI", "pricing": [{ "moq": 36, "price": 24 }, { "moq": 18, "price": 32 }] },
        // --- NEW ITEM ADDED HERE ---
        { "name": "Anti Tarnish temple jewellery set", "image": "https://placehold.co/200x200/E9967A/800000?text=TEMPLE+JEWELLERY", "pricing": [{ "moq": 6, "price": 170 }] },
        { "name": "CROCHET BASE RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=CROCHET+BASE+RAKHI", "pricing": [{ "moq": 24, "price": 15 }] },
        { "name": "RED STONE BUTI RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=RED+STONE+BUTI+RAKHI", "pricing": [{ "moq": 24, "price": 27 }, { "moq": 12, "price": 31 }] },
        { "name": "TRADITIONAL BUTI CHAKALIYA", "image": "https://placehold.co/200x200/E9967A/800000?text=TRADITIONAL+BUTI+CHAKALIYA", "pricing": [{ "moq": 12, "price": 32 }] },
        { "name": "RUDRAKSH MOLI BAND", "image": "https://placehold.co/200x200/E9967A/800000?text=RUDRAKSH+MOLI+BAND", "pricing": [{ "moq": 24, "price": 65 }, { "moq": 12, "price": 72 }] },
        { "name": "INTRICATE STAR COUPLE RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=INTRICATE+STAR+COUPLE+RAKHI", "pricing": [{ "moq": 12, "price": 100 }, { "moq": 6, "price": 110 }] },
        { "name": "MOLI LEAF COUPLE BAND", "image": "https://placehold.co/200x200/E9967A/800000?text=MOLI+LEAF+COUPLE+BAND", "pricing": [{ "moq": 24, "price": 110 }, { "moq": 12, "price": 125 }] },
        { "name": "UNDERSTATED MOLI COUPLE RAKHI", "image": "https://placehold.co/200x200/E9967A/800000?text=UNDERSTATED+MOLI+COUPLE+RAKHI", "pricing": [{ "moq": 24, "price": 85 }, { "moq": 12, "pric
