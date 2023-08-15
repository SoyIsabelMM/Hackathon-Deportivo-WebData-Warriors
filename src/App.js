import Grafica from "./components/Grafica/Grafica.jsx";
import Header from "./components/Header";
import Imagen from './components/Grafica/Imagen.jsx';
import './components/Grafica/Grafica.css';

function App() {
  console.log(Imagen);
  return (
    <div className="page">
      <Header />
      <Grafica descripcion={0} imagen={Imagen} />
      <Grafica descripcion={1} imagen={Imagen} className='reverse' />
      <Grafica descripcion={2} imagen={Imagen} />
      <Grafica descripcion={3} imagen={Imagen} className='reverse' />
    </div>
  );
}

export default App;
