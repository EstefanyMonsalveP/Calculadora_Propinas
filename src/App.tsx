import MenuItem from "./components/MenuItem"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";

function App() {

  const {order, addItem, deleteItem} = useOrder();
  return (
    <>
      <header className="bg-amber-200 py-5">
        <h1 className="text-center text-3xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="space-y-5" >
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
            <MenuItem
            key={item.id}
            item={item}
            addItem={addItem}
            />
          ))}
          </div>
          
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ml-10">
          <OrderContents
          order = {order}
          deleteItem={deleteItem}/>

          <OrderTotals
          order={order}/>
        </div>
        
        
      </main>
    </>
  )
}

export default App
