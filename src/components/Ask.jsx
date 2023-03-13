import React, { Fragment } from 'react'

const Ask = () => {
    return ( 
        <Fragment>
            <h2>Place your budget</h2>

            <form>
                <input 
                    type="number" 
                    className='u-full-width'
                    placeholder='Place your budget here'
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