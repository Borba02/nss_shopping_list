const groceries = [
  {
    id: 1,
    name: "Milk",
    price: 12,
  },
  {
    id: 2,
    name: "Eggs",
    price: 3,
  },
  {
    id: 3,
    name: "Raspberries",
    price: 9,
  },
];

//
//
//* Bk2 Ch9
//
//
const addToShoppingList = (groceryObject) => {
  const lastIndex = groceries.length - 1;
  const currentLastGrocery = groceries[lastIndex];
  const maxId = currentLastGrocery.id;
  const idForNewGrocery = maxId + 1;
  groceryObject.id = idForNewGrocery;
  groceries.push(groceryObject);
};

const bread = {
  name: "Bread",
  price: 5,
};

addToShoppingList(bread);

//console.log (groceries)

//
//
//
//* Bk2 Ch9
//
//
for (expensive of groceries) {
  if (expensive.price >= 8) 
  console.log(expensive)
};
