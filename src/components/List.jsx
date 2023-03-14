import React from 'react'
import Spent from './Spent';

//22.1 extraemos las props dadas desde app, en este caso es el objeto bills, que fue generado con los spent
const List = ({bills}) => {
    console.log(bills)
    return ( 
        <div className='gastos-realizados'>
            <h2>List</h2>
            {/* 23 vamos a hacer un map de cada spent dentro de bill para renderizar y mostrarlo en el componente Spent, para lo cual importamos Spent y lo usamos en este map, dándole las propiedades a traves del map al objeto Spent */}
            {bills.map(spent => (
                <Spent
                    key={spent.id}
                    spent={spent}
                />
            )
            )}
        </div>
     );
}
 
export default List;