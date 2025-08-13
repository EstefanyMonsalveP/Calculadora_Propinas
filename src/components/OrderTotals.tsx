import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import { useMemo } from "react";

type orderTotalsProps = {
  order : OrderItem []
  tip:number
}

//Componente que muestras los valores a pagar de la orden (Consumo)
export default function OrderTotals({order, tip}: orderTotalsProps ) {
  //Calcula el subtotal solo cuando cambia la orden
  const subTotal = useMemo(() => {
    return order.reduce((total,item) => total + (item.price * item.quantity), 0)
  }, [order])

  //Calcula la propina , teniendo en cuenta el input de la propina (tip) y la orden
  const tipAmount = useMemo(() => subTotal * tip, [tip, order])

  //Calcula el total de la orden 
  const totalOrder = useMemo(() => subTotal + tipAmount, [tip,order])
  return (
    <>
     <div className="space-y-3 ">
      <h2 className="font-black text-2xl">Totales y propina: </h2>
      <p>Subtotal a pagar: 
        <span className="font-bols">{formatCurrency(subTotal)}</span>
      </p>

      <p>Propina
        <span className="font-bols">{formatCurrency(tipAmount )}</span>
      </p>

      <p>Total a pagar
        <span className="font-bols">{formatCurrency(totalOrder)}</span>
      </p>
     </div>

    <button>

    </button>
    </>
  )
}
