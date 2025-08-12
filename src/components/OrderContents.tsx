import type { OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem []
}

export default function orderContents({order} : OrderContentProps) {
  return (
    <>
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
    </div>

    <div className="space-y-3 mt-3">
        {order.length === 0? 
        <p className="text-center"> La orden esta vacia</p>
    : 
        (order.map( item => (
            <div key={item.id}
            
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">

                <div>
                <p>
                    {item.name} - ${item.price}
                </p>
                <p className="font-black"> Cantidad: {item.quantity} - {item.price * item.quantity}
                </p>
                </div>
             <button className="bg-red-600 h-7 w-7 rounded-full text-white font-black">
                X
            </button>
            </div>
            ))
        )}        
    </div>
    </>    
  )
}
