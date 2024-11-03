const fs = require('fs'); // permite trabajar con el sistema de archivos para leer, escribir, eliminar o modificar archivos y directorios
const express = require('express');//servidor web que manejara las rutas y petiiciones HTTP
const fetch = require('node-fetch');// libreria que permite realizar solicitudes HTTP
const exp = require('constants');
const app = express();
const port = 3000;

//servir archivos estaticos
app.use(express.static('public'));

const getData = async () => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await result.json();

        //procedemos a crear filar en la tabla directamente
        //map itera sobre cada elemento de un array
        const tableFilas =  data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.completed ? 'Si' : 'No'}</td>
            </tr>
        `).join(''); //unimos el array en una sola cadena de texto
        const htmlTemplate = fs.readFileSync('public/tabla.html', 'utf8').replace('<!--datos de la tabla-->', tableFilas);
        fs.writeFileSync('public/datosApi.html', htmlTemplate);
        console.log("Archivo datosApi.html creado con los datos respectivos.");
    } catch (error) {
        console.error('Error al obtener los datos\n', error);
    }
}

getData().then(() => {
    //iniciamos el servidor despues de generar el archivo
    //__dirname que contiene la ruta absoluta del directorio en el que se encuentra el archivo de ejecucion
    app.get('/', (req, res) => res.sendFile(__dirname + '/public/datosApi.html'));
    app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
})