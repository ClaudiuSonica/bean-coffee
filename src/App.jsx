import Banner from "./components/molecules/banner/Banner";
import Header from "./components/molecules/header/Header";
import CoffeeInfo from "./components/molecules/coffeeInfo/CoffeeInfo";


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <CoffeeInfo />
      </main>
    </div>
  )
}

export default App;
