import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card(item: any) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2" key={item.id}>
      <div className="card bg-black border border-light">
        <div>
          <Image
            src={item.thumbnail}
            width={200}
            height={200}
            className="card-img-top card_img object-fit-contain"
            alt={"Image of " + item.title}
          />
          {/* <div
            id="carouselExampleSlidesOnly"
            className="carousel slide card_img"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={item.images[0]}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={item.images[1]}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={item.images[2]}
                  alt="Third slide"
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className="card-body text-light">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            <small>
              Rating:{" "}
              <span className="text-success">
                {item.rating}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star p-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </span>
            </small>
          </p>
          <p className="card-text">
            Price: ₹
            {Math.ceil((item.price * (100 - item.discountPercentage)) / 100)}{" "}
            <span>
              <small>
                <del className="text-secondary">₹{item.price}</del>{" "}
                <span className="text-success">
                  {item.discountPercentage}% OFF
                </span>
              </small>
            </span>
          </p>

          <Link href={`/product/` + item.id} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
