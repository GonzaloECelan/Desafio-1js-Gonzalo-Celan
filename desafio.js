


    
   

    let ingresar = prompt("¡Bienvenidos!. Desea realizar una compra: ingrese Si o No.");

    while( ingresar != "No"){


    let Buzo = 7500;
    let Campera = 9500;

        let dato_uno = prompt("Seleccione el producto; Buzo, Campera.");
    console.log("Producto seleccionado:", dato_uno);
    
    let dato_dos = prompt("Seleccione talle; S, M, L, XL.");
    console.log("Talle seleccionado:", dato_dos);
    
    let dato_tres = prompt("Ingrese cantidad que necesita del producto.");
    console.log("Cantidad ingresada:", dato_tres);

    if( dato_uno == "Buzo"){

        let suma = Buzo * parseInt(dato_tres);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" + suma);

    }

    else if( dato_uno == "Campera"){
        let suma = Campera * parseInt(dato_tres);
        console.log("Valor total:", suma);
        alert("El valor total de la compra es:" + " " + "$" +suma);
    

    }
    
    alert("¡Muchas gracias por su compra!");

    ingresar = prompt("Desea seguir comprando; Si o No.")

  

    }
    
    
    



    



