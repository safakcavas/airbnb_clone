import "./App.css";
import Nav from "../src/components/Nav";
import Hero from "../src/components/Hero";
// import Card from "./components/Card_this_card_is_spagetti_code"; //spagetti code
import CardProps from "./components/CardProps";
import data from "./components/data";


function App() {
  const cards = data.map(item => {
    return(
    <CardProps className="cardprops-general"
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
    )
  })

  return (
    <div className="body">
      <Nav />
      <Hero />
      <section className="cards-section">
      {cards}
      </section>
    </div>
  );
}

export default App;