const express = require('express')
const app = express()
const PORT = 3000
const bodyParser = require('body-parser');
const crypto = require('crypto');
app.use(bodyParser.json());



const myData = [
    {
        id: 1,
        brandName: "BMW",
        modelName: "BMW",
        year: 2004,
        color: "blue",
        isNew: true
    },
    {
        id: 2,
        brandName: "Volvo",
        modelName: "Volvo",
        year: 1997,
        color: "black",
        isNew: false
    },
    {
        id: 3,
        brandName: "Kia",
        modelName: "Kia",
        year: 2022,
        color: "white",
        isNew: true
    },
    {
        id: 4,
        brandName: "Audi",
        modelName: "Audi",
        year: 1978,
        color: "gray",
        isNew: false
    }
]



//base API URL
app.get('/api', (req, res) => {
    res.send('Welcome!')
});


//get Cars
app.get('/api/cars', (req, res) => {
    res.send(myData)
});


//Get Car by ID
app.get("/api/cars/:id", (req, res) => {
    const id = req.params.id;
    const car = myData.find((x) => x.id == id);
    if (car === undefined) {
        res.send({
            message: "Car not found!",
        });
    } else {
        res.status(200).send(car);
    }
});


//Post Car
app.post("/api/cars", (req, res) => {
    const {
        brandName,
        modelName,
        year,
        color,
        isNew } = req.body;
    const newCar = {
        id: crypto.randomUUID(),
        brandName: brandName,
        modelName: modelName,
        year: year,
        color: color,
        isNew: isNew
    };
    myData.push(newCar);
    res.status(201).send(newProduct);
});


//Delete Car
app.delete("/api/cars/:id", (req, res) => {
    const id = req.params.id;
    const deleteCars = myData.find((x) => x.id == id);
    let idx = myData.indexOf(deleteCars);
    myData.splice(idx, 1);
    if (deleteCars === undefined) {
        res.status(204).send("Car not found!");
    } else {
        res.status(203).send({
            message: "Car deleted successfully!",
        });
    }
});


//Edit Car
app.put("/api/cars/:id", (req, res) => {
    const id = req.params.id;
    const {
        brandName,
        modelName,
        year,
        color,
        isNew } = req.body;

    let editCar = myData.find((x) => x.id == id);
    if (brandName) {
        editingProduct.brandName = brandName;
    }
    if (modelName) {
        editingProduct.modelName = modelName;
    }
    if (year) {
        editingProduct.year = year;
    }
    if (color) {
        editingProduct.color = color;
    }
    if (isNew) {
        editingProduct.isNew = isNew;
    }
    res.status(200).send({
        message: "Car editing successfully!",
    });
});





app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})