const express = require('express')
const chors = require('cors')
const { getHouses, createHouse, updateHouse, deleteHouse } = require('./controller')

const app = express()

app.use(express.json())
app.use(chors())

app.get(`/api/houses`, getHouses)
app.post('/api/houses', createHouse)
app.put(`/api/houses/:id`, updateHouse)
app.delete('/api/houses/:id', deleteHouse)




app.listen(4004, ()=> console.log('Server running on 4004'))