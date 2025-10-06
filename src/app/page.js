import Header from "../components/Header";
import BookForm from "../components/BookForm";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import TrustedBrands from "../components/TrustedBrands";
import Footer from "../components/footer"
import Locations from "../components/Locations";

export default function Home() {
  return(
    <>
    <Header />
    <BookForm />
    <Benefits />
    <Services />
  <Locations />
  
    <Testimonials />
    <Footer />
    </>
  );
}