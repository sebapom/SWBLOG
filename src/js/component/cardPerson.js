import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import loadFavourites from "../store/flux";
import "../../styles/home.css";

export const CardPerson = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [favourites, setFavourites] = useState([]);

	return (
		<>
			{store.loadPeople.map((person, position) => {
				return (
					<div className=" col-8 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1" style={{ height: "130px" }}>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>

								<Link to={"./person/" + person.uid}>
									<a href="#" className="btn btn-warning text-dark">
										Read more
									</a>
								</Link>

								<button
									className="btn btn-outline-warning float-right"
									onClick={() => {
										//setFavs(planet.name);
										actions.loadFavourites(person.name);
										console.log(store.favourites);
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
