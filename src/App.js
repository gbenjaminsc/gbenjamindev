import "./App.css";
import Simple from "./components/Header";
import Inicio from "./pages/Start";
import Projetos from "./pages/Projects";
import Skills from "./pages/Skills";
import SobreMim from "./pages/AboutMe";
import SmallWithSocial from "./components/Footer";
import { Flex } from "@chakra-ui/react";
import ContactFormWithSocialButtons from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Flex direction={"column"} scrollBehavior={"smooth"}>
      <Simple></Simple>
      <Inicio></Inicio>
      <SobreMim></SobreMim>
      <Skills></Skills>
      <Projetos></Projetos>
      <ContactFormWithSocialButtons></ContactFormWithSocialButtons>
      <SmallWithSocial></SmallWithSocial>
      <ToastContainer />
    </Flex>
  );
}

export default App;
