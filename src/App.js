
import './App.css';
import Product from './Components/Product';

const selection
 = [
  {
    img: <img src="https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg" alt="oil"/>,
    name: "cocooil",
    price: "30$"
  },
  {
    img: <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="polaroid"/>,
    name: "Polaroid",
    price: "60$"

  },
  {
    img: <img src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="moist"/>,
    name: "Maul Moist",
    price: "20$"

  },
]


function App() {
  return (
    <div className="App">
      <h2>SUPERSHOP</h2>
      <section>
        {selection
        .map((elt, i) =>
          <Product
            key={i}
            img={elt.img}
            name={elt.name}
            price={elt.price}
          />
        )}
      </section>

    </div>
  );
}

export default App;