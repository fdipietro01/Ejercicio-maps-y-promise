

export const Item = ({item, onAdd})=>{
    console.log(item)
    return (
        <>
        
            <p>nombre: <span>{item.title}</span></p>
            <p>precio:<span>{item.price} </span></p>
        </>
    )


}

