


    



    
    
    let datos_compra = [];
    
    let ingresar = prompt("¡Bienvenidos!. Desea realizar una compra: ingrese Si o No.").toLowerCase();

    while( ingresar != "no"){

    // precios de productos
    let Buzo = 7500;
    let Campera = 9500;
    let Remera = 3000;
    let Chaleco = 5500;

    class producto{
        constructor(dato_uno, dato_dos, dato_tres,){
            
            this.dato_uno = dato_uno;
            this.dato_dos = dato_dos;
            this.dato_tres = dato_tres;
            
        }
    }

        let dato_uno = prompt("Seleccione el producto; Buzo, Campera, Remera, Chaleco.");
    console.log("Producto seleccionado:", dato_uno);
    
    let dato_dos = prompt("Seleccione talle; S, M, L, XL.");
    console.log("Talle seleccionado:", dato_dos);
    
    let dato_tres = prompt("Ingrese cantidad que necesita del producto.");
    console.log("Cantidad ingresada:", dato_tres);

    
    function suma_producto(){
        
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

        else if( dato_uno == "Remera"){
            let suma = Remera * parseInt(dato_tres);
            console.log("Valor total:", suma);
            alert("El valor total de la compra es:" + " " + "$" +suma);
        
    
        }

        else if( dato_uno == "Chaleco"){
            let suma = Chaleco * parseInt(dato_tres);
            console.log("Valor total:", suma);
            alert("El valor total de la compra es:" + " " + "$" +suma);
        
    
        }
    }
    
    suma_producto();

    let compra_usuario = new producto (dato_uno, dato_dos, dato_tres,);

    datos_compra.push(compra_usuario);


    alert("¡Muchas gracias por su compra!");

    ingresar = prompt("Desea seguir comprando; Si o No.")



    }

    console.log("El usuario realizo la siguiente compra:", datos_compra);



    



    



