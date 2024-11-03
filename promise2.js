const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs'); // Nos aseguramos de requerir el modulo 'fs' para poder utilizar readFile
const { resolve } = require('path');
//funcion para devolver una promesa para leer un archivo
const getText = (pathFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathFile, 'utf8', (err, data) => {
            if(err){
                reject("Error al leer el archivo: \n" + err);
                return;
            } 
            resolve("\nSe leyo el archivo:\n" +data);
        });
    });
};

// getText('data/archivo.txt')
//     .then(result => console.log(result));
// getText('data/archivo2.txt')
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// se simplifica de una manera Async
//async function read() {
    // const result1 = await getText("data/archivo.txt");
    // const result2 = await getText("data/archivo.txt");
    // console.log(result1, result2); 
//     try {
//         const result = await getText("data/uno.txt");
//         const result1 = await getText("data/tres.txt");
//         throw new Error("Esto es un error que no se esperaba")
//         const result2 = await getText("data/dos.txt");
//         const result3 = await getText("data/cuatro.txt");
//         console.log(result);
//         console.log(result1);
//         console.log(result2);
//         console.log(result3);
//     } catch (error) {
//     console.error("Ha ocurrido un error inesperado:\n",error);
//     }
// }
// read();

const getData = async () => {
    try {
        const result = await fetch ('https://jsonplaceholder.typicode.com/todos/3');
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener los datos",error);
    }
}
getData();