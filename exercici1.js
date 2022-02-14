// suma total de una matriz
var m = [[1,2,3],[4,5,6],[7,8,9]];
 
 function sumaMatriz(matriz) {
     
    var sumatotal=0;
    
    for (var fila=0; fila<3; fila++) {
        for(var columna=0; columna<3; columna++){
            sumatotal = sumatotal + matriz[fila][columna];
        }
    }
    
    return sumatotal;
 }
 
 console.log(sumaMatriz(m));
 console.table(m);
 
