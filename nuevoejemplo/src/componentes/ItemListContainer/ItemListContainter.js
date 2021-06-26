import {useState, useEffect} from "react"
import {ItemList} from "../ItemList/ItemList"


export const ItemListContainer =()=>{

    const [catalogo, setCatalogo] = useState([])

  const prod= [{
    id: '1',
    title: 'Rick and Morty',
    pictureUrl: "https://media.ambito.com/p/91318edf0836ef4255a8287ff18c4ca4/adjuntos/239/imagenes/038/786/0038786596/rick-and-morty.jpg",
    description: 'Sci-Fi - Comedia - Serie',
    price: '$1000'
},
{
    id: '2',
    title: 'Bojack Horseman',
    pictureUrl: "https://www.ecartelera.com/carteles-series/200/223/006_p.jpg",
    description: 'Drama - Comedia - Serie',
    price: '$2000'
},
{
    id: '3',
    title: 'South-Park',
    pictureUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/South_Park_main_characters.png/250px-South_Park_main_characters.png",
    description: 'Comedia - Serie',
    price: '$89.990'
}]

    useEffect(()=>{

        const nuevaPromesa = new Promise((res, rej)=>{

            setTimeout(()=>{
                res(prod)
            },2000)
    
        })
    
        nuevaPromesa.then((res)=>{
            console.log(res)
            setCatalogo(res)
        })

    },[])
    

    return(
        <>
            <ItemList items={catalogo}/>
        </>

    )


}