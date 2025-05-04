import HeroSection from "@/components/hero";
import FeaturedPost from "@/components/featured";
import Categories from "@/app/category/page";
import About from "@/components/about";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <FeaturedPost />
      <Categories />
      <About />
    </main>
  );
}
