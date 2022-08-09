import { Fragment, useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One' ])

  const onAddCategory = (newCategory) => {

    if ( categories.includes(newCategory) ) return; 
      

    setCategories( [ newCategory, ...categories ] )
    
  }

  return (
    <>
      {/* Título */}
      <h1>GifExpertApp</h1>
        
      {/* Input */}
      <AddCategory 
        onNewCategory = { onAddCategory }         
      />
  
      {/* Listado de GIFs */}        
      { categories.map (( category ) => (
        <GifGrid 
          key={ category } 
          category={ category }  
        />
        ))
      }
      
      {/* GIF Item */}


    </>
  )
}
