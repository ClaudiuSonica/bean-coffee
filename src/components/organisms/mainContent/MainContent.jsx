import CoffeeSection from "../coffeeSection/CoffeeSection";
import AdvantagesSection from "../advantagesSection/AdvantagesSection";
import "./MainContent.scss";
import CoffeeAdd from "../../molecules/coffeeAdd/CoffeeAdd";

const MainContent = () => {
  return (
    <>
      <CoffeeAdd />
      <CoffeeSection />
      <AdvantagesSection />
    </>
  )
}

export default MainContent;