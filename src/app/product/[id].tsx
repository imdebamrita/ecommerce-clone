// "use client";

import React from "react";
// import { useRouter } from "next/router";

export default function BuyNow(id: any, data: any) {
  //   const router = useRouter();
  //   const product = router.query;
  console.log("hiii");
  return (
    <div>
      page
      <p>{id}</p>
      <p>{data}</p>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  // const id = context.params.id;
  // console.log(id);
  const { params } = context;
  const { id } = params;
  const response = await fetch(`http://localhost:3000/product?id=${id}`);
  const data = await response.json();
  console.log(id);
  return {
    props: {
      data: data,
      id,
    },
  };
};
