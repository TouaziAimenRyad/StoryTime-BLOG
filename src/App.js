import './App.css';
import Imgzone from './components/Imgzone';
import Nav from './components/Nav.js'
import imgLink from './imgs/img.jpg'

function App() {
  return (
    <div className="App ">
      <Nav></Nav>
      <Imgzone img={imgLink}></Imgzone>
    </div>
  );
}

export default App;
