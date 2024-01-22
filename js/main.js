const carrito = []

const inventario = [{id:1001, nombre:"Cash Verano",precio:1910, presentacion:"madeja", temporada:"verano"},
                    {id:1002, nombre:"Algodon Fino",precio:2000,presentacion:"madeja",temporada:"verano"},
                    {id:1003, nombre:"Algodon Grueso",precio:2300,presentacion:"madeja",temporada:"verano"},
                    {id:1004, nombre:"Cashmilon 8/3",precio:1910,presentacion:"madeja",temporada:"invierno"},
                    {id:1005, nombre:"Afrodita",precio:2500,presentacion:"madeja",temporada:"invierno"},
                    {id:1006, nombre:"Nevilan",precio:3000,presentacion:"madeja",temporada:"invierno"},
                    {id:1008, nombre:"Nachito",precio:2450,presentacion:"ovillo",temporada:"invierno"},
                    {id:1009, nombre:"Nachito Matizado",precio:3450,presentacion:"ovillo",temporada:"invierno"},
                    {id:1010, nombre:"Sole",precio:2910,presentacion:"ovillo",temporada:"verano"},
                    {id:1011, nombre:"Luna",precio:3910,presentacion:"ovillo",temporada:"verano"},
                    {id:1012, nombre:"Patagonia",precio:4790,presentacion:"ovillo",temporada:"invierno"},
                ]

                function buscarArticulo(nombre) {
                    let articuloSeleccionado = inventario.filter((inventario)=> inventario.nombre.toUpperCase().includes(nombre.toUpperCase()))
                    if (articuloSeleccionado.length > 1)    {        
                        console.table(articuloSeleccionado)
                        artId = prompt("Tenemos varios articulos con ese mismo nombre \n Elija el codigo de articulo que desea")  
                        articuloSeleccionado = inventario.find((inventario)=> inventario.id === parseInt(artId))
                    }
                    else {articuloSeleccionado=inventario.find((inventario)=> inventario.nombre.toUpperCase().includes(nombre.toUpperCase()))}
                    return articuloSeleccionado
                } 
                function buscarTemporada(temporada) {
                    let temporadaBuscada = inventario.filter((inventario)=> inventario.temporada.toUpperCase().includes(temporada.toUpperCase()))
                    return temporadaBuscada
                } 
                function finalizarCompra(){
                    console.table(carrito)
                    const shopping = new Compra(carrito)
                    console.log("El costo de tu compra es: $" + shopping.obtenerSubtotal())
                }
                function verCatalogo(){
                    let temporada = prompt("Que catalogo desde ver? invierno / verano")
                    let temporadaElegida = buscarTemporada(temporada)
                    if (temporadaElegida.length === 0) {
                        alert("Error en el nombre de temporada ingresado. \nRefresca para comenzar de nuevo.")
                    } else {
                        console.table(temporadaElegida)
                    }
                }
                function comprar() {
                    let nombre = prompt("Ingresa el nombre del articulo deseado:")
                    if(nombre!==""){
                        let articuloElegido = buscarArticulo(nombre)
                        if (articuloElegido === undefined) {
                            alert("⛔️ Error en el nombre de lana ingresado. \nRefresca para comenzar de nuevo.")
                        } else {
                            carrito.push(articuloElegido)
                            alert(articuloElegido.nombre + " ha sido agregada al carrito.")
                            let respuesta = confirm("¿Deseas elegir otro articulo?")
                            if (respuesta === true) { 
                                comprar()  
                            }
                            else{ finalizarCompra()}
                        }
                    }
                }
                
                