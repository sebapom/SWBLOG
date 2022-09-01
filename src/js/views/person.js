import React, { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Person = () => {
	const { store, actions } = useContext(Context);
	const { personid } = useParams();

	useEffect(() => {
		actions.getPersonDetail(personid);
	}, []);

	return (
		<div>
			<div className="container text-white text-center mt-5">
				<h1 className="m-4 p-4 display-3">
					<span className="text-warning">Name</span> {store.personDetail.name}
				</h1>
				<h3>
					<span className="text-warning">Birth Year</span> {store.personDetail.birth_year}
				</h3>
				<h3>
					<span className="text-warning">Skin Color</span> {store.personDetail.skin_color}
				</h3>
				<h3>
					<span className="text-warning">Hair Color</span> {store.personDetail.hair_color}
				</h3>
				<h3>
					<span className="text-warning">Eye Color</span> {store.personDetail.eye_color}
				</h3>
				<h3>
					<span className="text-warning">Height</span> {store.personDetail.height}
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
