import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css"; // Custom styling

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone X",
      price: "$999",
      image: "https://m-cdn.phonearena.com/images/hub/432-wide-two_1200/Apple-iPhone-16-Pro-Max-release-date-predictions-price-specs-and-expected-upgrades.jpg",
      description: "The latest in smartphone technology with a sleek design."
    },
    {
      id: 2,
      name: "Laptop Pro",
      price: "$1299",
      image: "https://cdn.arstechnica.net/wp-content/uploads/2021/10/14-inch-MacBook-Pro-open-1280x1017.jpeg",
      description: "Powerful laptop for professionals with high performance."
    },
    {
      id: 3,
      name: "Wireless Headphones",
      price: "$199",
      image: "https://tse3.mm.bing.net/th?id=OIP.Oeu9K29QzYN7eDnLrjgTzQHaHa&pid=Api&P=0&h=180",
      description: "Noise-canceling wireless headphones with superior sound."
    },
    {
      id: 4,
      name: "Smartwatch 5",
      price: "$399",
      image: "https://images.priceoye.pk/z70-ultra-smartwatch-series-8-pakistan-priceoye-j0qby.jpg",
      description: "Track your health and stay connected with style."
    },
    {
        id: 5,
        name: "4K Smart TV",
        price: "$799",
        image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6378/6378035_rd.jpg",
        description: "Ultra HD 4K Smart TV with crystal-clear picture quality."
      },
      {
        id: 6,
        name: "Gaming Console",
        price: "$499",
        image: "https://assets-prd.ignimgs.com/2023/11/16/best-consoles-1700170299771.png?width=1280",
        description: "Next-gen gaming console for the ultimate gaming experience."
      },
      {
        id: 7,
        name: "Wireless Earbuds",
        price: "$149",
        image: "https://www.lbtechreviews.com/wp-content/uploads/2020/09/Sport-Earbuds-Triple-Black-3-scaled-1.jpg",
        description: "Compact wireless earbuds with noise cancellation."
      },
      {
        id: 8,
        name: "DSLR Camera",
        price: "$999",
        image: "https://i.pinimg.com/originals/09/01/24/0901241fee529bc19918ad3b7b579826.jpg",
        description: "High-quality DSLR camera with 24MP sensor and 4K recording."
      }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h6 className="card-price">{product.price}</h6>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
