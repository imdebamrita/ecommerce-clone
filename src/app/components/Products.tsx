"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Router from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [allProducts, setProducts] = useState<any[]>([]);
  // let allProducts: any = [];
  useEffect(() => {
    productData();
  }, []);
  const productData = () => {
    axios
      .get("https://dummyjson.com/products", {
        params: {},
      })
      .then(function (response) {
        // allProducts = response.data.products;
        // console.log(allProducts);
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    const request = {
      url: "https://dummyjson.com/products",
      params: {},
    };
  };

  return (
    <div>
      <h1>hiii Rick</h1>
      <div className="container">
        <div className="allproducts">
          <div className="row">
            {allProducts.map((item: any) => (
              <div className="col-3" key={item.id}>
                <div className="card">
                  <img
                    className="card-img-top card_img"
                    src={item.thumbnail}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      {item.description} <br /> Price: Rs.{item.price}
                    </p>

                    <a href="#" className="btn btn-primary">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
