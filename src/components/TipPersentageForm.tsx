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
    tip: number
}

//Componente para mostrar y seleccionar las diferentes opciones de propina (Tip)
export const TipPersentageForm = ({setTip, tip}: TipPersentageFormProps) => {
  return (
    <>
     <div>
        <h3 className="font-black text-2xl">Propina: </h3>
        <form>
            {tipOptions.map(tipOption=> (
                <div key={tipOption.id} className="flex gap-2 mt-1">
                    <input 
                    id = {tipOption.id}
                    type="radio"
                    name = "tip"
                    value = {tipOption.value}
                    checked = {tipOption.value === tip}
                    //Actualiza el valor seleccionado de la propina
                    onChange={e => setTip(+e.target.value)}
                    >
                    </input>
                    <label htmlFor={tipOption.id}>{tipOption.label}</label> 
                </div>
            ))}
        </form>
    </div>
    </>
   
  )
}
