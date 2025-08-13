import type { MenuItem, } from "../types"

type MenuItemProps = {
    item : MenuItem 
    addItem : (item : MenuItem) => void
}
//Componente para mostrar la lista de items del arreglo
//Añade el item seleccionado a la orden
export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <>
    <button className="border-2 hover:bg-amber-100 border-amber-400 w-full p-3 flex justify-between cursor-pointer"
    onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  
    </>
  )
}

