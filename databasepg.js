// First attemps


const {Client} = require('pg')

 const client = new Client({
    host:"localhost",
    user:"postgres",
    password:"Rukundo1@",
    database:"dvdrental"
 })


client.connect();


client.query('SELECT * FROM actor', (err, res)=>{
    if (!err) {
        console.log(res.rows);
        
    }else{
        console.log(err.message);
        
    }
    client.end;
})