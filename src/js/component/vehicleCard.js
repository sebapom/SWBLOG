import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VehicleCard = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.loadVehicles.map((vehicle, position) => {
				return (
					<div className=" col-8 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1" style={{ height: "130px" }}>
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>

								<Link to={"./vehicle/" + vehicle.uid}>
									<a href="#" className="btn btn-warning text-dark">
										Read more
									</a>
								</Link>

								<button
									className="btn btn-outline-warning float-right"
									onClick={() => {
										actions.loadFavourites(vehicle.name);
									}}>
									<i className="fas fa-heart text-warning" />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
