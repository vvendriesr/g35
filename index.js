import express from 'express'
const app = express()

app.get('/', function (req, res) {
    res.send('🚀Bienvenidos a la clase de😁 Desarollo de Aplicaciones Web🚀 ')
  })

  app.listen(8000, () => {
     console.log("El servidor esta corriendo en http://localhost:8000")
})
