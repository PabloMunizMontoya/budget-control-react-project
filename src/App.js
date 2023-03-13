import React, { useState } from "react";
import Ask from "./components/Ask";
import Form from "./components/Form";


function App() {

  //8 vamos a definir un state para guardar el presupuesto 
  const [ budget, setBudget] = useState(0)

  //9 definimos state para guardar el restante
  const [ rest, setRest ] = useState(0)

  return (
    <div className="container">
      <h1>Weekly budget</h1>

      <div className="contenido-principal contenido">
        <Ask
           /* 10 al componente Ask le pasamos como propiedad las funciones que definen los estados  8 y 9 => */
          setBudget={setBudget}
          setRest={setRest}
        />
        <div className="row">
          <div className="one-half column">
            <Form/>
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
