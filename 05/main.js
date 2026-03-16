// food delivery system
const users = [
  {
    name: "Anna",
    orders: [
      { food: "Burger", price: 5, quantity: 2 },
      { food: "Pizza", price: 8, quantity: 1 }
    ]
  },
  {
    name: "John",
    orders: [
      { food: "Burger", price: 5, quantity: 1 },
      { food: "Fries", price: 3, quantity: 3 }
    ]
  },
  {
    name: "Mike",
    orders: [
      { food: "Pizza", price: 8, quantity: 2 },
      { food: "Fries", price: 3, quantity: 2 }
    ]
  }
];

const foodDelivery = (users) => {

  for (let i = 0; i < users.length; i++) {

    let totalSpent = 0;

    for (let j = 0; j < users[i].orders.length; j++) {
      totalSpent += users[i].orders[j].price * users[i].orders[j].quantity;
    }
    console.log(users[i].name + " - " + totalSpent);
  }

  const getFoods = users.map((user) => {
    return user.orders.map((order) => {
      return order.food;
    });
  });
  console.log("all foods : " + getFoods);

  const findOrders = users.filter((user) => {
    return user.orders.some((order) => {
      return order.quantity > 2;
    });
  });
  console.log(findOrders);

  const totalRevenue = users.reduce((total,revenue) => {
    return total + revenue.orders.reduce((innnerTotal,innnerRevenue) => {
      return innnerTotal + innnerRevenue.price * innnerRevenue.quantity;
    },0);
  },0);
  console.log("Total revenue : " + totalRevenue);
};

foodDelivery(users);

