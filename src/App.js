import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";
import "./App.css";

// handle Event , pass from parent (APP) to child (pCard)
function handleClick(product) {
  alert(`You clicked on the button ${product.price}`);
}

function App() {
  const products = [
    {
      imageSrc: "/images/iphone.png",
      title: "iPhone 15 Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 999,
    },
    {
      imageSrc: "/images/apple-watch.png",
      title: "Apple Watch Series 8",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 800,
    },
    {
      imageSrc: "/images/airpods.png",
      title: "Airpods Pro",
      specification: [
        "A17 Pro chip with 6-core GPU",
        "3x or 5x Telephoto camera",
        "Up to 29 hours video playback",
      ],
      price: 600,
    },
  ];

  return (
    <div className="App">
      <ProductList>
        <ProductCard
          background="darkolivegreen"
          product={products[0]}
          onClick={handleClick}
        />
        <ProductCard product={products[1]} onClick={handleClick} />
        <ProductCard
          background="peru"
          product={products[2]}
          onClick={handleClick}
        />
      </ProductList>
    </div>
  );
}

export default App;
