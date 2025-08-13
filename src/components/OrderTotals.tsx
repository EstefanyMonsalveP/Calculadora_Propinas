import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import { useMemo } from "react";

type orderTotalsProps = {
  order : OrderItem []
}

export default function OrderTotals({order}: orderTotalsProps ) {
  //Calcula el subtotal solo cuando cambia la orden
  const subTotal = useMemo(() => {
    return order.reduce((total,item) => total + (item.price * item.quantity), 0)
  }, [order])
  return (
    <>
     <div className="space-y-3 ">
      <h2 className="font-black text-2xl">Totales y propina: </h2>
      <p>Subtotal a pagar: 
        <span className="font-bols">{formatCurrency(subTotal)}</span>
      </p>

      <p>Propina
        <span className="font-bols">{formatCurrency(subTotal)}</span>
      </p>

      <p>Total a pagar
        <span className="font-bols">{formatCurrency(subTotal)}</span>
      </p>
      

     </div>

    <button>

    </button>
    </>

  )
}
