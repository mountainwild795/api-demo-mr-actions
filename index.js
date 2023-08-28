// import express library
import express from 'express';
import env from 'dotenv';
import cars from './cars-data.js';

env.config();

// initialise express server
const server = express();
server.use(express.json());

const getAllCars = () => {
	return cars;
};

// default - use GET, return a string
server.get('/', (req, res) => {
	res.send(getAllCars());
});

server.get('/:id', (req, res) => {
	const id = req.params.id;
	const carWithIdSupplied = cars.find((c) => c.id === Number(id));
	res.send(carWithIdSupplied);
});

server.post('/', (req, res) => {
	const newCar = req.body;
	newCar.id = cars.length + 1;
	cars.push(newCar);
	res.send(cars);
});

server.put('/:id', (req, res) => {
	const id = req.params.id;
	const updatedCar = req.body;

	const carsExcludingTheIdCar = cars.filter((c) => c.id !== Number(id));
	cars = carsExcludingTheIdCar;

	cars.push(updatedCar);
	res.send(cars);
});

const partialUpdateACar = (carId, carDetails) => {
	const carWithIdSupplied = cars.find((c) => c.id === Number(id));

	const updatedCarDetails = req.body;

	const carsExcludingTheIdCar = cars.filter((c) => c.id !== Number(id));
	cars = carsExcludingTheIdCar;

	const updatedCar = { ...carWithIdSupplied, ...updatedCarDetails };
	cars.push(updatedCar);
	return cars;
};

server.patch('/:id', (req, res) => {
	const id = req.params.id;
	const updatedCarDetails = req.body;

	const cars = partialUpdateACar(id, updatedCarDetails);
	res.send(cars);
});

server.delete('/:id', (req, res) => {
	const id = req.params.id;
	const carsExcludingTheIdCar = cars.filter((c) => c.id !== Number(id));
	cars = carsExcludingTheIdCar;
	res.send(cars);
});

const port = process.env.PORT || 8001;

// open up a port for this server and start listening
server.listen(port, () => {
	console.log(`Server started and listening on port ${port}`);
});
