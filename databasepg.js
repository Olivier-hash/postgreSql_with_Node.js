// First 


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



// 2. Insert a new actor
const insertQuery = "INSERT INTO actor (first_name, last_name) VALUES ($1, $2) RETURNING *";
const values = ['John', 'Doe'];
client.query(insertQuery, values, (err, res) => {
    if (!err) {
        console.log("Inserted actor:", res.rows[0]);
    } else {
        console.log(err.message);
    }
});

// 3. Update an actor
const updateQuery = "UPDATE actor SET first_name=$1 WHERE actor_id=$2 RETURNING *";
const updateValues = ['Johnny', 1]; // update actor with ID 1
client.query(updateQuery, updateValues, (err, res) => {
    if (!err) {
        console.log("Updated actor:", res.rows[0]);
    } else {
        console.log(err.message);
    }
});

// 4. Delete an actor
const deleteQuery = "DELETE FROM actor WHERE actor_id=$1 RETURNING *";
const deleteValue = [2]; // delete actor with ID 2
client.query(deleteQuery, deleteValue, (err, res) => {
    if (!err) {
        console.log("Deleted actor:", res.rows[0]);
    } else {
        console.log(err.message);
    }
});