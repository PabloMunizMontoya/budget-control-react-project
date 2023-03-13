import React from 'react'

//6. definimos el componente Error, el cual tiene como prop, message, el valor de esta prop cambiara de acuerdo a donde se muestre el error.
const Error = ({message}) => (
    <p className='alert alert-danger error'> {message}</p>
)

export default Error;