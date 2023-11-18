import HomeBannerSection from "./components/pages/home/HomeBannerSection";
import ProductsSection from "./components/pages/home/ProductsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeBannerSection />
      <ProductsSection />
    </main>
  );
}
