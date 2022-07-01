import './App.css';
import Simple from './components/Header';
import Inicio from './components/Início';
import Projetos from './components/Projetos';
import Skills from './components/Skills';
import SobreMim from './components/SobreMim';
import SmallWithSocial from './components/Contato';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box scrollBehavior={'smooth'}>
      <Simple></Simple>
      <Inicio></Inicio>
      <SobreMim></SobreMim>
      <Skills></Skills>
      <Projetos></Projetos>
      <SmallWithSocial></SmallWithSocial>
    </Box>
  );
}

export default App;
