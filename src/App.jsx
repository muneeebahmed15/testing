import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
