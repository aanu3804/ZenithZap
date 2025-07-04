import Hero from "../components/Hero";
import ProductCarousel from "../components/ProductCarousel";
import ExploreProductsSection from "../components/ExploreProductsSection";
import OurStorySection from "../components/OurStorySection";
import AboutCompany from "../components/AboutCompany";
import TeamSection from "../components/TeamSection";
// ❌ Don't import Footer here anymore

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCarousel />
      <div id="explore-products">
        <ExploreProductsSection />
      </div>
      <div id="our-story">
        <OurStorySection />
      </div>
      <div id="about-company">
        <AboutCompany />
      </div>
      <div id="team-section">
        <TeamSection />
      </div>
      {/* ❌ Remove: <Footer /> */}
    </div>
  );
};

export default Home;
