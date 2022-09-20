import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Chapter from "./Chapter";

const Index = () => {
  const router = useRouter();
  const catagory_name = router.query.chaptername;
  return (
    <>
      <Navbar />
      <Chapter catagory_name={catagory_name} />
    </>
  );
};
export default Index;
