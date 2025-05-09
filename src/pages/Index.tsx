
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TopRestaurants from "@/components/home/TopRestaurants";
import PopularRestaurants from "@/components/home/PopularRestaurants";
import RecommendedFoodItems from "@/components/home/RecommendedFoodItems";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <RecommendedFoodItems />
        <TopRestaurants />
        <PopularRestaurants />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
