import { useState } from "react";
import type { OrderItem,MenuItem} from "../types";

export default function useOrder(){
    const [order,setOrder] = useState<OrderItem[]>([]);

    //Funcion para añadir un item a la orden
    const addItem = (item : MenuItem) => {
        //Busca si el item ya existe en la orden comparado por id
        const itemExist = order.find(orderItem  => orderItem.id === item.id)

        //Si el item ya existe en la orden
        if(itemExist){
            //Crea un nuevo arreglo aumentando la cantidad del item existente
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?  
                {...orderItem, quantity : orderItem.quantity +1}// Incrementa la cantidad
                : orderItem); //Mantiene los demas sin cambios
                //Actualiza la orden con el nuevo arreglo
            setOrder(updateOrder); 
        }else{           
            //Si el item no existe
        const newItem = {...item,quantity:1} //Toma el item y añade cantidad incial 1
        //Agrega el nuevo item a la orden
        setOrder([...order,newItem]) 
        }
    }

    //Eliminar un item de la orden
    const deleteItem = (id : MenuItem['id']) => {
        //Busca si el item existe en la orden comparando por id
        const itemExist = order.find(orderItem  => orderItem.id === id)

        //Si el item existe
        if(itemExist){
            //Filtra los items que no coincidan con el id
            const updateOrder = order.filter(orderItem => orderItem.id !== id)

            //Actualiza la orden
            setOrder(updateOrder)
        }
    }
    return{
        order,
        addItem,
        deleteItem
    }
}