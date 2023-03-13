import React, {useState} from 'react'

const Form = () => {
    return (
        <form >
            <h2>add your expenses here</h2>

            <div className='campo'>
                <label >Name of expense</label>
                <input 
                    type="text"
                    className='u-full-width'
                    placeholder='name of expense here'
                />
            </div>
            <div className='campo'>
                <label >Quantity of expense</label>
                <input 
                    type="number"
                    className='u-full-width'
                    placeholder='cost value here'
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