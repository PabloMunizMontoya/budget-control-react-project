// Un helper es donde ponemos funciones que podemos re utilizar dentro del proyecto. como aca pueden haber muchas functions lo necesario es hacer el export en cada una e ellas por separado.

//29. creamos una function que va a mostrar diferentes alertas, o colores de renderizado sobre el presupuesto restante. este renderizado esta en el componente BudgetControl.
export const reviewBudget = (budget, rest) => {
    let clase

    if( (budget/4) > rest ) {

        clase = 'alert alert-danger'
    } else if ((budget / 2) > rest) {
        clase= 'alert alert-warning'
    } else {
        clase = 'alert alert-success'
    }

    return clase
}