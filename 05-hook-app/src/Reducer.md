Que es un reducer?
Es una funcion comun y corriente
Debe ser una funcion pura
No debe tener efectos secundarios(debe resolver sus necesidades internamente sin consultar funciones externas)
No debe realizar tareas asincronas
Debe de retornar siempre un nuevo estado
No debe llamar al localStorage o sessionStorage(ambas asincronas)
Para modificar el state no debe de requerir mas que una accion que puede tener un argumento o no
Debe de retornar un nuevo estado
Usualmente reciben dos argumentos: El valor inicial y la accion a ejecutar

El gran concepto de este Reducer es tener controlado en un solo lugar todas las acciones que modifican mi estado de la app y esto nos permite visualizar de
manera general todas las posibles modificaciones que nuestra aplicacion tiene o puede realizar
