import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One', 'Two' ])

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return; 
      

    setCategories( [ newCategory, ...categories ] )
    //setCategories( cat => [...cat, 'Valorant'])
  }

  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
         // setCategories={ setCategories } 
         onNewCategory = { onAddCategory }
         currentCategories = { categories } 
         
         />
        {/* Listado de GIFs */}
        
        <ol>
          { categories.map ( category => {
              return (
                <div  key={ category }>
                  <h3> {category} </h3>
                   <li> {category} </li>
                </div>
              )
            }) 
          }
        </ol>
            {/* GIF Item */}
    </>
  )
}
