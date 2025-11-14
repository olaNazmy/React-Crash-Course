export function ProductList(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      {props.children}
    </div>
  );
}
