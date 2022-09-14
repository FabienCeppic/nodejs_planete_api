const express = require("express")
const sqlite3 = require("sqlite3")

const app = express()
const port = 7500
const dbname = "univers.db"

let db = new sqlite3.Database(dbname, err => {
  if (err)
    throw err
  console.log(`Base de données initialisée dans le fichier: ${dbname}`)
})

app.listen(port, () => {
  console.log(`Serveur express en route ${port}`)
})

app.get('/', (req, res) => {
  res.send("Bienvenue dans l'api REST des planètes")
})

app.get('/planetes', (req, res) => {
  res.header("Content-type", "application/json")
  db.all("Select * From PLANETES", (err, data) => {
    if (err) throw err
    res.send(JSON.stringify(data))
  })
})
