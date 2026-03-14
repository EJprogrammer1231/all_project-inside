const sales = [
  {
    store: "Store A",
    products: [
      { name: "Laptop", price: 800, sold: 2 },
      { name: "Mouse", price: 50, sold: 5 }
    ]
  },
  {
    store: "Store B",
    products: [
      { name: "Laptop", price: 800, sold: 1 },
      { name: "Keyboard", price: 100, sold: 4 }
    ]
  },
  {
    store: "Store C",
    products: [
      { name: "Mouse", price: 50, sold: 3 },
      { name: "Monitor", price: 300, sold: 2 }
    ]
  }
];

function productSales(sales) {

  let Totalrevenue = 0;
  let FindMostsold = 0;
  let Storename = "";
  let MostSoldproduct = "";

  for (let i = 0; i < sales.length; i++) {

    let PerStorerevenue = 0;

    for (let j = 0; j < sales[i].products.length; j++) {
      Totalrevenue += sales[i].products[j].price * sales[i].products[j].sold;
      PerStorerevenue += sales[i].products[j].price * sales[i].products[j].sold;;
      Storename = sales[i].store;

      if (sales[i].products[j].sold > FindMostsold) {
        FindMostsold += sales[i].products[j].sold;
        MostSoldproduct = sales[i].products[j].name;
      }
    }

    console.log(Storename + " : " + PerStorerevenue);
  }
  console.log("Most sold : " + MostSoldproduct + " - " + FindMostsold);
  return Totalrevenue;
}

console.log("Total Revenue :", productSales(sales));