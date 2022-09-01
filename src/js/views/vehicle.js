import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	const { vehicleid } = useParams();

	useEffect(() => {
		actions.vehicleDetail(vehicleid);
	}, []);

	return (
		<div>
			<div className="container text-white text-center mt-5">
				<h1 className="m-4 p-4 display-3">
					<span className="text-warning">Name</span> {store.vehicleDetail.name}
				</h1>
				<h3>
					<span className="text-warning">Model</span> {store.vehicleDetail.model}
				</h3>
				<h3>
					<span className="text-warning">Vehicle Class </span> {store.vehicleDetail.vehicle_class}
				</h3>
				<h3>
					<span className="text-warning">Crew</span> {store.vehicleDetail.crew}
				</h3>
				<h3>
					<span className="text-warning">Cargo capacity</span> {store.vehicleDetail.cargo_capacity}
				</h3>
				<h3>
					<span className="text-warning">Manufacturer</span> {store.vehicleDetail.manufacturer}
				</h3>
				<h3>
					<span className="text-warning">Passengers</span> {store.vehicleDetail.passengers}
				</h3>
				<Link to={"/"}>
					<a href="#" className="btn btn-secondary text-white m-4">
						Back home
					</a>
				</Link>
			</div>
		</div>
	);
};
