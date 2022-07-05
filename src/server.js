const express = require('express');
const app = express();
const morgan=require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 8080);//Define el Puerto que Usara esta API
app.set('json spaces', 2)//Formatea como se vera el JSON


//Routes
app.use(require('./routes/routes'));

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());//Usar JSON en esta API

//Iniciando el servidor

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});