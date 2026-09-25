//แบบฝึกหัดที่ 1
const products = [
    { id: 1, name: "Keyboard", price: 1200, inStock: true },
    { id: 2, name: "Mouse", price: 650, inStock: false },
    { id: 3, name: "Monitor", price: 4900, inStock: true },
    { id: 4, name: "Headset", price: 890, inStock: true }
];


const filProd = products.filter(product => product.inStock === true);
// console.log(filProd)

//แบบฝึกหัดที่ 2
const mapProd = products.map(product => product.name);
// console.log(mapProd)

//แบบฝึกหัดที่ 3
const findProduct = products.find(product => product.id === 3);
// console.log(findProduct);

//แบบฝึกหัดที่ 4
const result = products.filter(product => product.inStock && product.price > 1000)
    .map(product =>
        product.name
    )
// console.log(result);  