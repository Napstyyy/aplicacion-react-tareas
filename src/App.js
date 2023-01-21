import './App.css';
import Logo from './imagenes/LOGO.png';
import ListaDeTareas from './componentes/ListaDeTareas';
import Modal from './componentes/Modal';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <Modal />
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={Logo}
          className='freecodecamp-logo'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
