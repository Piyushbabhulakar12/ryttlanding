import { Divider } from "@mui/material";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Features from "./Features";
import HeroSection from "./HeroSection";
import Learning from "./Learning/Learning";
import Strategy from "./Strategy";
import Tools from "./Tools";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Strategy />
      <Tools />
      <Learning />
      <Divider />
      <Footer />
    </>
  );
};
export default Index;
