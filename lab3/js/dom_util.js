const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, country, name, duration, price}) => `
<li id="${getItemId(id)}" class="item-card">
    <img 
        src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80"
        class="item-container__image" alt="card">
    <div>
        <h4>${country}</h4>
        <h5>${name}</h5>
        <p>Duration: ${duration} days</p>
        <p>Price: ${price} $</p>
    </div>
</li>`;

export const addItemToPage = ({id, country, name, duration, price}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, country, name, duration, price})
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
