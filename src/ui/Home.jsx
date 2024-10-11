import About from "./About/About";
import Banner from "./Banner/Banner";
import Deals from "./Deals/Deals";
import Favourites from "./Favourites/Favourites";
import Footer from "./Footer";
import Gallery from "./Gallery/Gallery";
import Header from "./Header/Header";
import styles from "./Home.module.css";
import Lunch_Specials from "./Lunch_Specials/Lunch_Specials";
import Menu from "./Menu/Menu";
import Section_CTA from "./Section_CTA/Section_CTA";

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="../../public/bg-black-large.webp"
          alt="background image"
          className={styles.bg_img}
        />
      </div>
      <Header />
      <Banner />
      <Section_CTA />
      <Favourites />
      <Menu />
      <Lunch_Specials />
      <Deals />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
