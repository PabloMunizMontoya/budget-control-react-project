import React, {Fragment}from 'react'
//29.1 importamos la function desde helper, notar que aca es diferente la importación por el tipo de export que tiene la function.
import  {reviewBudget} from '../helpers'

//25 extraemos props dadas desde app
const BudgetControl = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                {/* 26 mostramos las props y las imprimimos en pantalla  */}
                Budget: $ {budget}
            </div>
            {/* 29.2 le damos a la clase el valor de la function importada desde helpers, con los parámetros en el mismo orden que los solicitamos en la function dentro de helpers */}
            <div className= {reviewBudget(budget, rest)}>
                {/* 26 => */}
                Remaining: $ {rest}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;