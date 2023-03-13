import React, { Fragment, useState } from 'react'
import Error from './Error'

const Ask = () => {

    //1.Define state amount
    const [ amount, setAmount] = useState(0)

    //.4 define state error. el error inicia como false osea sin error
    const [error, setError] = useState(false)


    //2.Function that reads de budget, esta function le da valor a la variable amount este valor es el ingresado por el usuario, la function escucha un cambio en el input y define luego el valor de la variable con useState.parseInt convierte string en numero.
    const defineBudget = e => {
        setAmount(parseInt(e.target.value, 10))
    }

    //3.submit to define the budget, esta function, escucha el submit y valida que el valor amount sea un numero y sea mayor a 0. preventDefault para que la pagina no se recargue al hacer el submit. 
        const addingBudget = (e) => {
            e.preventDefault()
            
            //3.1 validate the quantity(amount), aca definimos que al hacer submit los datos sean correctos. isNan define si la entrada es un numero  1 =>
            if(amount < 1 || isNaN(amount)) {
                //4 =>
                setError (true)  
            }else {
                // 3.2 pass the validation, si pasa la validación el estado error es false.
            setError (false)
            }

             
        }

    return ( 
        <Fragment>

            <h2>Place your budget</h2>

            {/* 5. creamos mensaje de error con ternario, usando el estado error, este mensaje de error lo vamos a usar en varias partes asi que para poder usarlo creamos un componente, este componente tiene props para poder ser re utilizado de acuerdo a la pantalla donde se lo use 4 => */}

            {error ? <Error message='The budget is wrong'/>  : null}

            <form 
                //.3 =>
                onSubmit={addingBudget} >
                
                <input 
                    type="number" 
                    className='u-full-width'
                    placeholder='Place your budget here'
                    //2.=>
                    onChange={defineBudget}
                />
                <input 
                    type="submit" 
                    className='button-primary u-full-width'
                    value='Define budget'
                />
            </form>
        </Fragment>

     );
}
 
export default Ask;