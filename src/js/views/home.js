import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { CardPerson } from "../component/cardPerson";
import { PlanetCard } from "../component/planetCard";
import { VehicleCard } from "../component/vehicleCard";

export const Home = () => (
	<>
		<h2 className="p-3 text-light text-center display-4">Characters</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap mb-1">
				<CardPerson />
			</div>
		</div>
		<h2 className="p-3 text-light text-center display-4">Planets</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap mb-1">
				<PlanetCard />
			</div>
		</div>
		<h2 className="p-3 text-light text-center display-4">Vehicle</h2>
		<div className="container-fluid scrolling-wrapper">
			<div className="row d-flex flex-nowrap mb-1">
				<VehicleCard />
			</div>
		</div>
	</>
);
