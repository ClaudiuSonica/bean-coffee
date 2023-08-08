import Banner from "./components/molecules/banner/Banner";
import Header from "./components/molecules/header/Header";
import CoffeeInfo from "./components/molecules/coffeeInfo/CoffeeInfo";
import MainContent from "./components/organisms/mainContent/MainContent";


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <CoffeeInfo />
        <MainContent />
      </main>
    </div>
  )
}

export default App;
