
const greeting = (name) => {
    return 'Hello, ' + name
}


export const FirstApp = () => {
    
    return (
    <div> 
        <h2>{greeting('Joshi')}</h2>
        <p> Soy un párrafo </p>

    </div>
  )
}
