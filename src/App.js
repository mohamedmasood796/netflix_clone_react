
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, documentaries, originals,romance } from './urls';




function App() {
  return (
    <>

      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
  
      
    </>
  );
}

export default App;
