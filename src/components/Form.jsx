import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid';

const Form = () => {

    //15 creamos el state para el nombre de los gastos 
    const [name, setName] = useState('')

    //16 creamos el state para el valor de los gastos
    const [quantity, setQuantity ] = useState(0)

    //18 creamos el estado para el error
    const [ error, setError] = useState(false)

    //17.1 activamos la function addExpense desde el onSubmit
    const  addExpense = e => {
        e.preventDefault()

        //17.2 validamos, si hay un error el mismo cambia a true
        if( quantity < 1 || isNaN(quantity) || name.trim() === '' ){
            setError(true)
            return
        } else {
            setError(false)
        }

        // 17.3 construir el gasto, construimos el objeto para luego usarlo en el componente principal, si no hay un error al dar en el botón el objeto spent se crea con estos valores. el valor id se lo damos con la dependencia  npm i shortid, la importamos y usamos para generar un id único cada ve que hacemos submit
        const spent = {
            name,
            quantity,
            id: shortid.generate()
        }
        console.log(spent)
        // pasar el gasto al componente principal

        // reset form 
    }
    return (
        <form 
            /* 17 agregamos el onSubmit para poder guardar los datos una vez que le damos al botón click o enter */
            onSubmit={addExpense}
        >
            <h2>add your expenses here</h2>

                {/* 19. con un ternario mostramos el mensaje que tiene el componente Error usando el estado de error que cambia al pasar o no la validación  del onSubmit 18=> */}
                {error ? <Error message='Both fields are required or incorrect budget'/> : null }

            <div className='campo'>
                <label >Name of expense</label>
                <input 
                    type="text"
                    className='u-full-width'
                    placeholder='name of expense here'
                    /* 15.1 aca ponemos el value y ponemos la function que va a cambiar el valor de name dentro de un onChange que escucha los cambios, en este caso escribimos la function entera dentro de las llaves no como antes es solo para mostrar otras formas  */
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label >Quantity of expense</label>
                <input 
                    type="number"
                    className='u-full-width'
                    placeholder='cost value here'
                    /* 16.1 aca ponemos el value y ponemos la function que va a cambiar el valor de quantity dentro de un onChange que escucha los cambios, en este caso escribimos la function entera dentro de las llaves no como antes, es solo para mostrar otras formas  */
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value,10))}
                />
            </div>
            <input 
                type="submit" 
                className='button-primary u-full-width'
                value='add expense'
            />
        </form>
    );
}
 
export default Form;