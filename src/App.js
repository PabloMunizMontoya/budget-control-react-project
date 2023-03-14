import React, { useState, useEffect } from "react";
import Ask from "./components/Ask";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";


function App() {

  //8 vamos a definir un state para guardar el presupuesto 
  const [ budget, setBudget] = useState(0)

  //9 definimos state para guardar el restante
  const [ rest, setRest ] = useState(0)

  //13 definimos otro state para que un componente se muestre o no dependiendo de su valor, en este caso al abrir la app el componente se debe ver por eso su valor inicial es true
  const [showAsk, setShowAsk] =useState(true)

  //19 creamos state para guardar gastos, como spent, es un objeto el estado inicial de este bill sera un array vació para asi poder almacenar los objetos spent 17.3 => que se vallan generando. 
  const [ bills, setBills] = useState([])

  //26.2 creamos el nuevo useState para darle valor a spent, como spent es un objeto, el estado inicial es un objeto vació 
  const [spent, setSpent] = useState({})

  //27 creamos un useState para mostrar un renderizado de spent si el mismo es true y si es false no mostrar nada.
  const [createSpent, setCreateSpent] = useState(false)

  // 26 usamos el hook useEffect que actualiza el restante, para esto usamos los datos de el paso 20, cortamos e introducimos, el use Effect tiene como dependencia spent, entonces cada que spent se actualiza el se modifica. Como spent se actualizaba con el paso 20, ahora necesitamos un nuevo useState spent. con esto el gasto se actualiza de forma automática.
  // 27.1 ingresamos el useState setCreateSpent dentro del useEffect para mostrar o no el gasto en una condicional
  useEffect(() => {

    //27 explicación: aca creamos el nuevo gasto
      if(createSpent === true) {
        setBills([
          ...bills,
          spent
        ])
    // 28 restamos el presupuesto actual, creamos una variable que contiene este valor, usamos la variable rest y les sacamos la cantidad del gasto, después seteamos rest = a la variable que contiene el valor de la resta. este valor se imprime en el componente BudgetControl
      const remainingBudget = rest - spent.quantity
      setRest(remainingBudget)

      } else {
        setCreateSpent (false)
      }
  }, [spent])
  

  //20 function que se ejecuta cuando agregamos un nuevo gasto, esta misma se la pasamos al Form como prop, de esta forma traemos el objeto spent desde el form hasta app, esta function entonces tiene el useState setBills para guardar los spent en el array vació inicial, ...bills es para crear una copia y no modificar el original.
  //26.1 sacamos esta function y ahora usamos el useEffect.
  /* const addNewSpent = spent => {
    setBills([
      ...bills,
      spent
    ])
  } */

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
                            /* addNewSpent={addNewSpent} */
                            
                            /* 26.3 aca como la manera de tomar el spent cambio le agregamos ahora el useState para modificar el spent */
                            setSpent={setSpent}

                            /* 27.2 pasamos al formulario como propiedad la function que crea el componente gasto que es un useState */
                            setCreateSpent={setCreateSpent}
                          />
                      </div>
                      <div className="one-half column">
                        {/* 21 agregamos el componente List al otro lado de la tabla */}
                        {/* 22  a List le pasamos el objeto recién generado bills a traves de props */}
                        <List
                          bills={bills}
                          
                        />
                       {/*  24. insertamos el componente BudgetControl y le agregamos propiedades, en este caso presupuesto y restante */}
                      <BudgetControl
                        budget={budget}
                        rest={rest}
                      />
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
}

export default App;
