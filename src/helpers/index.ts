//Funcion que convierte texto en formato de moneda (dolares)
export function formatCurrency (quantity: number){
    //Retorna el resultado de formatear el numero recibido 
    return new Intl.NumberFormat('en-US',{
        style: 'currency',//Indica que el estilo de formato es en moneda
         currency: 'USD' //Indica que la moneda es en dolar  
         //Aplica el formato al numero recibido por paramento
    }).format(quantity)}