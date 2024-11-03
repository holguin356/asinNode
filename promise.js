// Resuelve en una función que marca una promesa como cumplida y envia su valor de éxito a las operaciones que la manejen (.then)
// Reject es una función que marca una promesa como rechazada y envia un motivo o error en las operaciones que la manejan (.catch)
const { error } = require('console');
const { readFile } = require('fs');
const promesa = new Promise((resolve, reject) => {
    // const exito = true;
    // if(exito){
    //     resolve("La operación fue exitosa");
    // } else {
    //     reject("Ocurrio un error");
    // }
    readFile('data/archivo.txt', 'utf-8', (err, data) => {
        if(err){
            console.log("Ocurrio un error " + err);
        } else {
            console.log("La operación fue exitosa: \n" + data );
        }
    })
});

promesa
    .then(result => console.log(result)) //se ejecuta por que cumple
    .catch(error => console.log(error)); //se ejecuta si rechaza