function ProductCard(props) {
  // variable

  function ProductTitle(title) {
    return title;
  }

  // styles
  const cardStyle = {
    width: "240px",
    backgroundColor: "#f0f8ff",
    border: "1px solid #d0e0f0",
    borderRadius: "15px",
    padding: "18px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', sans-serif",
    transition: "transform 0.2s, box-shadow 0.2s",
  };

  const imgStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "14px",
  };

  const titleStyle = {
    color: "#1e3a8a", // deep blue
    marginBottom: "8px",
  };

  const detailsStyle = {
    color: "#333",
    fontSize: "14px",
  };

  const priceStyle = {
    color: "#22c55e", // green
    fontWeight: "bold",
    marginTop: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#2563eb", // blue
    color: "white",
    border: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.2s",
  };

  return (
    <div
      className="product-card"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={props.Product.ImgSrc}
        alt={props.Product.title}
        style={imgStyle}
      />
      <h3 style={titleStyle}>{ProductTitle(props.Product.title)}</h3>

      {props.Product.details.map((d, i) => (
        <p key={i} style={detailsStyle}>
          {d}
        </p>
      ))}

      <p style={priceStyle}>${props.Product.price}</p>

      <button
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#1d4ed8")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#2563eb")
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
