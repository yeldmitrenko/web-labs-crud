export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const countryInput = document.getElementById("country_input");
const nameInput = document.getElementById("name_input");
const durationInput = document.getElementById("duration_input");
const priceInput = document.getElementById("price_input");

const itemsContainer = document.getElementById("container__items");


const itemTemplate = ({ id, country, name, duration, price }) => `
<li id="${id}" class="item-card">
    <img 
        src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
        class="item-container__image" alt="card">
    <div>
        <h4>${country}</h4>
        <h5>${name}</h5>
        <p>Duration: ${duration} days</p>
        <p>Price: ${price} $</p>
    </div>
    <div>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
    </div>
</li>`;

export const clearInputs = () => {
    countryInput.value = ""; 
    nameInput.value = "";
    durationInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({ id, country, name, duration, price }, onEditItem, onRemoveItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({ id, country, name, duration, price })
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const removeButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
    removeButton.addEventListener("click", onRemoveItem);
};

export const renderItemsList = (items, onEditItem, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);
    }
};

export const getInputValues = () => {
    return {
        country: countryInput.value,
        name: nameInput.value,
        duration: durationInput.value,
        price: priceInput.value,
    };
};
