
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TopRestaurants from "@/components/home/TopRestaurants";
import PopularRestaurants from "@/components/home/PopularRestaurants";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TopRestaurants />
        <PopularRestaurants />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
