


const getFruits =  async (req, res) => {
    let databaseResponse = await Fruit.find();
    res.send(databaseResponse)
}

module.exports = {
    getFruits
}