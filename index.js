const mongodb = require('mongodb')

const dburi = "mongodb+srv://sid:krsid4321@cluster0.htdw8.mongodb.net/PJ?retryWrites=true&w=majority";


mongodb.connect(dburi, function(err, client) {
   const db = client.db()
   // const results = db.collection("tasks").find().toArray()

   tasks.insertOne({name='Hinata', city='Concrete', hobbie='Vollyball'})

   console.log('new list')
   client.close()
})
