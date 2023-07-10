import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import { useState } from "react";
import React from "react";
import AddItem from "./Components/AddItem";

function App() {
  const products = [
    {
      price: 79999,
      name: "Apple Iphone 11",
      qty: 0,
    },
    {
      price: 7999,
      name: "Redmi Note 11",
      qty: 0,
    },
    {
      price: 59999,
      name: "Samsung Galaxy S",
      qty: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  let [totalAmount, setTotalAmmount] = useState(0);

  let [resetPList, resetDataList] = useState({});

  const addqty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmmount(newTotalAmount);
    newProductList[index].qty++;

    setProductList(newProductList);
  };

  const subqty = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].qty > 0) {
      newProductList[index].qty--;
      newTotalAmount -= newProductList[index].price;
    } else {
      newProductList[index].qty = 0;
    }

    setProductList(newProductList);
    setTotalAmmount(newTotalAmount);
  };

  const resetdata = () => {
    let newProductList = [...productList];
    newProductList.map((prod) => {
      prod.qty = 0;
    });
    setProductList(newProductList);
    setTotalAmmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].qty * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      qty: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          addqty={addqty}
          subqty={subqty}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetdata={resetdata} />
    </>
  );
}

export default App;
