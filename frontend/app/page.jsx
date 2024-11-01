import Footer from "@/components/footer/Footer";
import Features from "@/components/home/Features";
import MainSection from "@/components/home/MainSection";
import SubscribeForm from "@/components/home/SubscribeForm";
import Header from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <MainSection />
        <Features />
        <SubscribeForm />
      </main>
      <Footer />
    </div>
  );
}
