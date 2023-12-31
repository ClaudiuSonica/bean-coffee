import Banner from "./components/molecules/banner/Banner";
import Header from "./components/molecules/header/Header";
import CoffeeInfo from "./components/organisms/coffeeInfo/CoffeeInfo";
import MainContent from "./components/organisms/mainContent/MainContent";
import Cta from "./components/molecules/cta/Cta";
import Feedback from "./components/molecules/feedback/Feedback";
import Newsletter from "./components/molecules/newsletter/Newsletter";
import Footer from "./components/molecules/footer/Footer";


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
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App;
