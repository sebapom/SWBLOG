import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Card = () => {
	return (
		<div>
			<div className="card" style={{ width: "18rem" }}>
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<Link to="./person">
						<a href="#" className="btn btn-warning text-dark">
							Read more
						</a>
					</Link>
					<a href="#" className="btn btn-outline-warning float-right">
						<i className="fas fa-heart text-warning" />
					</a>
				</div>
			</div>
		</div>
	);
};
