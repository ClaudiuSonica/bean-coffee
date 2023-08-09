import Banner from "./components/molecules/banner/Banner";
import Header from "./components/molecules/header/Header";
import CoffeeInfo from "./components/molecules/coffeeInfo/CoffeeInfo";
import MainContent from "./components/organisms/mainContent/MainContent";
import Cta from "./components/molecules/cta/Cta";


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <CoffeeInfo />
        <MainContent />
        <Cta />
      </main>
    </div>
  )
}

export default App;
