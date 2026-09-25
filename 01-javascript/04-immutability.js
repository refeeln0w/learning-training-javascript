const cart = [
    { id: 1, title: "HTML Book", qty: 1 },
    { id: 2, title: "CSS Book", qty: 2 }
];

// เพิ่มสินค้าใหม่
// 1.ประกาศข้อมูลที่จะเพิ่ม
const newItem = { id: 3, title: "JS Book", qty: 1 };
const updatedCart = [...cart, newItem];
console.log(updatedCart);