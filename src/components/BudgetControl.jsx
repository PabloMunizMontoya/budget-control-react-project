import React, {Fragment}from 'react'


//25 extraemos props dadas desde app
const BudgetControl = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className='alert alert-primary'>
                {/* 26 mostramos las props y las imprimimos en pantalla  */}
                Budget: $ {budget}
            </div>
            <div className='alert'>
                {/* 26 => */}
                Remaining: $ {rest}
            </div>
        </Fragment>
     );
}
 
export default BudgetControl;