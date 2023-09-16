// "use client";
// import Image from "next/image";
// import styles from "./page.module.css";
// import Router from "next/router";
// import { useEffect, useState } from "react";
// import axios from "axios";

// import Card from "./Card";

// const Products = () => {
//   const [allProducts, setProducts] = useState<any[]>([]);
//   // let allProducts: any = [];
//   useEffect(() => {
//     productData();
//   }, []);
//   const productData = () => {
//     axios
//       .get("https://dummyjson.com/products", {
//         params: {},
//       })
//       .then(function (response) {
//         // allProducts = response.data.products;
//         // console.log(allProducts);
//         setProducts(response.data.products);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .finally(function () {
//         // always executed
//       });
//     const request = {
//       url: "https://dummyjson.com/products",
//       params: {},
//     };
//   };

//   return (
//     <div>
//       <h1 className="text-light my-4">Suggested Products</h1>
//       <div className="container">
//         <div className="allproducts">
//           <div className="row">
//             {allProducts.map((item: any) => (
//               <Card
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 discountPercentage={item.discountPercentage}
//                 thumbnail={item.thumbnail}
//                 rating={item.rating}
//                 images={item.images}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
