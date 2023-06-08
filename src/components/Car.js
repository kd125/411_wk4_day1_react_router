import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";

import { Container, Paper, Chip } from "@mui/material";

const Car = () => {
  const { id } = useParams();

  const car = cars.find((car) => car.id === parseInt(id));

  return (
    <div>
      <h1>A specific car</h1>
      <Container maxWidth="sm" fixed>
        <Paper variant="outlined" squared="true" sx={{ padding: "16px" }}>
          <h2>{car.Name}</h2>
          <Chip label={`Id: ${car.id}`} />
          <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} />
          <Chip label={`Cylinders: ${car.Cylinders}`} />
          <Chip label={`Displacement: ${car.Displacement}`} />
          <Chip label={`Horsepower: ${car.Horsepower}`} />
          <Chip label={`Weight in lbs: ${car.Weight_in_lbs}`} />
          <Chip label={`Acceleration: ${car.Acceleration}`} />
          <Chip label={`Year: ${car.Year}`} />
          <Chip label={`Origin: ${car.Origin}`} />
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
