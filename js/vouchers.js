var VOUCHERS = [
    { id:1, country: "Dominican", name: "Impressive Resort & Spa", duration:12, price:500},
    { id:2, country: "Turkey", name: "Eftalia Splash Resort", duration:8, price:200},
    { id:3, country: "Cyprus", name: "Vergi Hotel", duration:7, price:1200},
    { id:4, country: "Dominican", name: "Grand Bavaro Princess", duration:10, price:800},
    { id:5, country: "Turkey", name: "Orange Country Resort Hotel", duration:7, price:350},
    { id:6, country: "Turkey", name: "Grand Mir'amor Hotel", duration:7, price:400},
    { id:7, country: "Turkey", name: "Alva Donna World Palace", duration:7, price:270},
    { id:8, country: "Portugal", name: "Duas Torres", duration:5, price:180},
    { id:9, country: "Mexico", name: "Riu Cancun", duration:12, price:2000},
    { id:10, country: "Turkey", name: "Eftalia Splash Resort", duration:6, price:300},
    { id:11, country: "Turkey", name: "Kolibri Hotel", duration:7, price:450}
]

export const getAllVouchers = () => {
    return VOUCHERS;
};

export const postVouchers = (body) => {
    VOUCHERS.push(body);
}

export const updateVouchers = (id, body) => {
    let index = VOUCHERS.findIndex(idx => idx.id == id);
    VOUCHERS[index].country = body.country;
    VOUCHERS[index].name = body.name;
    VOUCHERS[index].duration = body.duration;
    VOUCHERS[index].price = body.price;
}
