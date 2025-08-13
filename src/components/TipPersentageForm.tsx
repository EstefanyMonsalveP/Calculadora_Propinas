//Arreglo con las opciones de descuento
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

//Type para definir el tipo de dato del prop (setTip)
type TipPersentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>
}

//Componente para mostrar y seleccionar las diferentes opciones de propina (Tip)
export const TipPersentageForm = ({setTip}: TipPersentageFormProps) => {
  return (
    <>
     <div>
        <h3 className="font-black text-2xl">Propina: </h3>
        <form>
            {tipOptions.map(tip=> (
                <div key={tip.id} className="flex gap-2 mt-1">
                    <input 
                    id = {tip.id}
                    type="radio"
                    name = "tip"
                    value = {tip.value}
                    //Actualiza el valor seleccionado de la propina
                    onChange={e => setTip(+e.target.value)}
                    >
                    </input>
                    <label htmlFor={tip.id}>{tip.label}</label> 
                </div>
            ))}
        </form>
    </div>
    </>
   
  )
}
