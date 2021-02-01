import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';

let estilos = { color: 'violeta', background: 'red', paddingLeft: '20px' }
const AppComponent = () => {
  return (
    <>
      <NavbarComponent />
      Hola  a Todos
    </>    
  );
}

export default AppComponent;
