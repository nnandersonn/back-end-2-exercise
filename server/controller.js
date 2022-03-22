
const houses = require('./db.json')

let houseID = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body
        let newAddress = {
            id: houseID,
            address,
            price: +price,
            imageURL
        }
        houses.push(newAddress)
        res.status(200).send(houses)

        houseID++
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        

        let index = houses.findIndex(house => house.id === +id)

        if(type == `minus` && houses[index].price <10000 && houses[index].price > 0){
            houses[index].price = 0
            res.status(200).send(houses)
        } else if(type == `minus` && houses[index].price > 10000){
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else if (type == `plus`){
            houses[index].price += 10000
            res.status(200).send(houses)
        }
        
    },



    deleteHouse: (req, res) => {
        let {id} = req.params
        let index = houses.findIndex(house => house.id === +id)

        houses.splice(index, 1)
        res.status(200).send(houses)
    }


}