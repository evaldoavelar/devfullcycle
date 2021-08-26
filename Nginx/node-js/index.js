const express = require('express')
const app = express()
const mysql =  require('mysql')
const config = {
    host:'db',
    user: 'root',
    password:'mestre',
    database: 'teste'
}
// const conn = mysql.createConnection(config)
// conn.connect();
// const sql = `INSERT INTO usuarios(nome) VALUE ("${'José das flores'}");`
// conn.query(sql);
// conn.end();
 
app.get('/', function (req, res) {  
    
    const conn = mysql.createConnection(config)
    conn.connect();          
    conn.query('select * from usuarios', function (error, results) {
        
        if (error) throw error;  

        res.send(`Fullcycle ${JSON.stringify(results[0].nome)}!`)
      });

    conn.end();
})
 
app.listen(3000,()=>{
    console.log("Escutando na porta 3000");
})