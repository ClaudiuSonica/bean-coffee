import Banner from "./components/molecules/banner/Banner";
import Header from "./components/molecules/header/Header";
import CoffeeInfo from "./components/molecules/coffeeInfo/CoffeeInfo";
import MainContent from "./components/organisms/mainContent/MainContent";
import Cta from "./components/molecules/cta/Cta";
import Feedback from "./components/molecules/feedback/Feedback";


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <CoffeeInfo />
        <MainContent />
        <Cta />
        <Feedback />
      </main>
    </div>
  )
}

export default App;
