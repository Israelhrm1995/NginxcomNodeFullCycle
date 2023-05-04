const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Israel')`
connection.query(sql)
connection.end()

const retornoPeople = selectPeople();

async function selectPeople(){
    const connection = mysql.createConnection(config)
    const [rows] = await connection.query('SELECT * FROM people;');
    return rows;
    connection.end()
}

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle<h1>')
    res.send('<h2>'+ retornoPeople +'<h2>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})