import CoffeeSection from "../../molecules/coffeeSection/CoffeeSection";
import AdvantagesSection from "../../molecules/advantagesSection/AdvantagesSection";
import "./MainContent.scss";
import CoffeeAdd from "../../atoms/coffeeAdd/CoffeeAdd";

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