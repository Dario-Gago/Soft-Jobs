const express = require('express') // Framework para crear el servidor
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000
const usuariosRoutes = require('./routes/usuariosRoutes')
const authRoutes = require('./routes/authRoutes')

app.use(cors())
app.use(express.json())

app.use('/usuarios', usuariosRoutes)
app.use('/login', authRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
