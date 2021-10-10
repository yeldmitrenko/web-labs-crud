import { renderItemsList } from "./dom_util.js";
import { getAllVouchers } from "./vouchers.js";

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let vouchers = [];

export const refetchAllVouchers = () => {
    const allVouchers = getAllVouchers();

    vouchers = allVouchers.sort((a, b) => b.country.localeCompare(a.country));

    renderItemsList(vouchers);
};

searchButton.addEventListener("click", () => {
    const foundVouchers = vouchers.filter((voucher) => voucher.country.search(searchInput.value) !== -1);

    renderItemsList(foundVouchers);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(vouchers);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedVouchers = vouchers.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price));
        
        renderItemsList(sortedVouchers);
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
