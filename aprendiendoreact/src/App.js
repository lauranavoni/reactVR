import logo from './logo.svg';
import './App.css';

//importar componentes
 



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola estas en mi proyecto, MLN
        </p>
        
      
      </header>
      
    </div>
  );
}

export default App;

//Componente Funcional Ejercicio 1
function Principal (props){
  return(
    <div className="Encabezado">
      <h1>{"Componente Encabezado"}</h1>
      <div className="Titulo">
        <h2>{"Titulo"}</h2>
      </div>
    </div>
  );
}

export default Principal;
