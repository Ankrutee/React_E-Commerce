import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Products = () => {
  const myOwnData = [
    {
      id: 1,
      title: "CPU",
      description: "Please select a suitable CPU",
      price: 24.99,
      image: "https://st4.depositphotos.com/20219168/22796/i/450/depositphotos_227961220-stock-photo-black-shiny-processor-metal-scratched.jpg",
    },
    {
      id: 2,
      title: "GPU",
      description: "Please select a suitable GPU",
      price: 39.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-C331UKRfdlr-IxoWU0jG9omcy2axo7gF6A&usqp=CAU",
    },
    {
      id: 3,
      title: "RAM",
      description: "Please select a suitable RAM",
      price: 39.99,
      image: "https://thumb.pccomponentes.com/w-140-140/articles/40/402590/1440-goodram-irdm-pro-ddr4-3600mhz-16gb-cl18.jpg",
    },
    {
      id: 4,
      title: "Motherboard",
      description: "Please select a suitable Motherboard",
      price: 39.99,
      image: "https://dlcdnwebimgs.asus.com/files/media/a0fe11eb-971d-483c-bd1e-f4358ea6a588/V1/img/spec-performance.webp",
    },
    {
      id: 5,
      title: "Case",
      description: "Please select a suitable Case",
      price: 39.99,
      image: "https://easypc.com.ph/cdn/shop/products/4866-a_a668adf8-3a13-432d-b753-79d302974831_1200x1200.jpg?v=1655098374",
    },
    {
      id: 6,
      title: "ROM",
      description: "Please select a suitable ROM",
      price: 39.99,
      image: "https://www.globalspec.com/ImageRepository/LearnMore/20142/amic-sram20b0b039c7304c3a9a6814ab34c6e999.png",
    },
    {
      id: 7,
      title: "Monitor",
      description: "Please select a suitable Monitor",
      price: 39.99,
      image: "https://www.thetechwire.com/wp-content/uploads/2021/04/blank-computer-monitor-isolated-on-white-background.jpg",
    },
    {
      id: 8,
      title: "Powersupply",
      description: "Please select a suitable Powersupply",
      price: 39.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg2wkE69cm0iglIWtmebNsE3kWSYzQCujQg&usqp=CAU",
    },
  ];

  const [data, setData] = useState(myOwnData);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        {/* Add more skeleton placeholders as needed */}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>
            All
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelry")}>
            Jewelry
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img className="card-img-top p-3" src={product.image} alt="Card" height={300} />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
