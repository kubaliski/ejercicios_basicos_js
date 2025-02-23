const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
    { name: "Heura", isVegan: true },
    { name: "Salmon", isVegan: false },
    { name: "Tofu", isVegan: true },
    { name: "Burger", isVegan: false },
    { name: "Rice", isVegan: true },
    { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (const food of foodSchedule) {
    if (!food.isVegan) {
        food.name = fruits[fruitIndex % fruits.length];
        food.isVegan = true;
        fruitIndex++;
    }
}

console.log(foodSchedule);