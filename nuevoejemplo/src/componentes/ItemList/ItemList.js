import {Item} from "../Item/Item"

export const ItemList =({items})=>{


    return(
        <>
            {items.map(item=> <Item item={item}/>)   } 
        </>
    )

}