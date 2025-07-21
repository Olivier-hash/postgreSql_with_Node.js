
 const {Client} = require('pg')

 const client = new Client({
    host:"localhost",
    user:"postgres",
    password:"Rukundo1@",
    database:"postgres"
 })


 client.connect();


client.query('SELECT * FROM users', (err, res)=>{
    if (!err) {
        console.log(res.rows);
        
    }else{
        console.log(err.message);
        
    }
})