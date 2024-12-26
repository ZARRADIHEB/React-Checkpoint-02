import "./App.css";
import product from "./components/product";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let name = "";
  return (
    <>
      <Card product={product}>
        <h3>{name ? `Hello ${name}` : "Hello There"}</h3>
        {name && (
          <img
            src="https://via.placeholder.com/150x150"
            alt=""
            style={{ borderRadius: "50%" }}
          />
        )}
      </Card>
    </>
  );
}

export default App;
