import React, { useState } from "react";
import Ask from "./components/Ask";
import Form from "./components/Form";


function App() {

  //8 vamos a definir un state para guardar el presupuesto 
  const [ budget, setBudget] = useState(0)

  //9 definimos state para guardar el restante
  const [ rest, setRest ] = useState(0)

  //13 definimos otro state para que un componente se muestre o no dependiendo de su valor, en este caso al abrir la app el componente se debe ver por eso su valor inicial es true
  const [showAsk, setShowAsk] =useState(true)

  //19 creamos state para guardar gastos, como spent, es un objeto el estado inicial de este bill sera un array vació para asi poder almacenar los objetos spent 17.3 => que se vallan generando. 
  const [ bills, setBills] = useState([])

  //20 function que se ejecuta cuando agregamos un nuevo gasto, esta misma se la pasamos al Form como prop, de esta forma traemos el objeto spent desde el form hasta app, esta function entonces tiene el useState setBills para guardar los spent en el array vació inicial, ...bills es para crear una copia y no modificar el original 
  const addNewSpent = spent => {
    setBills([
      ...bills,
      spent
    ])
  }

  return (
      <div className="container">
          <h1>Weekly budget</h1>

          <div className="contenido-principal contenido">
              {/* 13.1 aca usamos el useState showAsk para mostrar el componente Ask entonces si showAsk es true mostrar e l componente si es false el resto del proyecto */}
              {showAsk ? (
                  <Ask
                      /* 10 al componente Ask le pasamos como propiedad las funciones que definen los estados  8 y 9 => */
                      setBudget={setBudget}
                      setRest={setRest}
                      setShowAsk={setShowAsk}
                  />
              ) : (
                  <div className="row">
                      <div className="one-half column">
                          {/* 12. agregamos el componente Form a esta mitad de la tabla, para que este en la mitad usamos one-half column propiedad de skeleton */}
                          <Form 
                            /* 19.1 le pasamos a form la prop addNewSpent que es una function para agregar los bill a un array de objetos */
                            addNewSpent={addNewSpent}
                          />
                      </div>
                      <div className="one-half column">2</div>
                  </div>
              )}
          </div>
      </div>
  );
}

export default App;
