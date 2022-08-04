import { useState } from "react"

export const AddCategory = () => {
    
    const [ inputValue, setInputValue ] = useState('NewInput')

    const onInputCange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value= { inputValue }
                onChange={ onInputCange }
            />
        </form>

  )
}
