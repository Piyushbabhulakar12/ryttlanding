import { useRouter } from "next/router";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Catagory from "./Catagory";

const Index = () => {
  const router = useRouter();
  const catagory_name = router.query.catagoryname;
  return (
    <>
      <Navbar />
      <Catagory catagory_name={catagory_name} />
      <Footer />
    </>
  );
};
export default Index;
