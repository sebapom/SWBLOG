import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	const { planetid } = useParams();

	useEffect(() => {
		actions.planetDetail(planetid);
	}, []);

	return (
		<div>
			<div className="container text-white text-center mt-5">
				<h1 className="m-4 p-4 display-3">
					<span className="text-warning">Name</span> {store.planetDetail.name}
				</h1>
				<h3>
					<span className="text-warning">Diameter</span> {store.planetDetail.diameter}
				</h3>
				<h3>
					<span className="text-warning">Population</span> {store.planetDetail.population}
				</h3>
				<h3>
					<span className="text-warning">Terrain</span> {store.planetDetail.terrain}
				</h3>
				<h3>
					<span className="text-warning">Gravity</span> {store.planetDetail.gravity}
				</h3>
				<h3>
					<span className="text-warning">Population</span> {store.planetDetail.population}
				</h3>
				<h3>
					<span className="text-warning">Terrain</span> {store.planetDetail.terrain}
				</h3>
				<h3>
					<span className="text-warning">Surface Water</span> {store.planetDetail.surface_water}
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
