import {
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js";

import { 
    getAllVouchers, 
    postVoucher, 
    updateVouchers 
} from "./vouchers.js";

const formField = document.getElementById("item_form");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let vouchers = [];

const onEditItem = async (e) => {
    if (!validateInput()) {
        return;
    };

    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateVouchers(itemId, getInputValues());

    clearInputs();

    refetchAllVouchers();
};

export const refetchAllVouchers = async () => {
    const allVouchers = await getAllVouchers();
    
    vouchers = allVouchers.sort((a, b) => b.country.localeCompare(a.country));

    renderItemsList(vouchers, onEditItem, onDeleteItem);
};

const validateInput = () => {
    if (Array.from(formField).filter(e => e.value.trim() == "").length != 0) {
        alert("Please input data");
        return false;
    }
    return true;
};

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    if (!validateInput()) {
        return;
    };

    const { country, name, duration, price } = getInputValues();

    clearInputs();

    postVoucher({
        country,
        name, 
        duration,
        price
    });

    refetchAllVouchers();
});

searchButton.addEventListener("click", () => {
    const foundVouchers = vouchers.filter((voucher) => voucher.country.search(searchInput.value) !== -1);

    renderItemsList(foundVouchers, onEditItem, onDeleteItem);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(vouchers, onEditItem, onDeleteItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedVouchers = vouchers.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price));
        
        renderItemsList(sortedVouchers, onEditItem, onDeleteItem);
    } else {
        refetchAllVouchers();
    }
});

countButton.addEventListener("click", () => {
    let sum = vouchers.map(o => o.price).reduce((a, c) => { return a + c });
    document.getElementById("total-price").innerText = sum;
    console.log(sum);
});

refetchAllVouchers();
