import React from 'react';

//23.1 extraemos la prop spent traída desde List con el map, por que usamos map, para qeu recorra todo el objeto bills
const Spent = ({spent}) => {
    console.log(spent)
    return (
        <li className='gastos'>
        {/* 24.extraemos los valores de la prop spent y los renderiza */}
        <p>
            {spent.name}

            <span className='gasto'> $ {spent.quantity}</span>
        </p>
    </li>

    )
    
}

export default Spent;