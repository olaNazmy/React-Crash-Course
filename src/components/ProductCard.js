export function ProductCard({ product, background = "slategray" }) {
  return (
    <article
      style={{
        background,
        width: "220px", // smaller width
        border: "1px solid white",
        borderRadius: "8px",
        padding: "12px", // smaller padding
        textAlign: "center",
        fontSize: "14px", // smaller font
      }}
    >
      <h2 style={{ fontSize: "16px" }}>{product.title}</h2>

      <img
        src={product.imageSrc}
        alt={product.title}
        width="90px" // smaller image
        height="90px"
        style={{ marginBottom: "8px" }}
      />

      <p>Specification:</p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {product.specification.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <button
        style={{ marginTop: "10px", padding: "6px 12px", fontSize: "12px" }}
      >
        Buy (From ${product.price})
      </button>
    </article>
  );
}
