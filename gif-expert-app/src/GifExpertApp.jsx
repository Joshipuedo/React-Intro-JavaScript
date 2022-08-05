import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One', 'Two' ])

  const onAddCategory = () => {
    setCategories( [ 'NEW', ...categories ] )
    //setCategories( cat => [...cat, 'Valorant'])
  }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory setCategories={ setCategories } />

        {/* Listado de GIFs */}
        
        <ol>
          { categories.map ( category => {
              return <li key={ category }> {category} </li>
            }) 
          }
        </ol>
            {/* GIF Item */}
    </>
  )
}
