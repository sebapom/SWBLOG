import React, { Component, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ListBtn = () => {
	const { store, actions } = useContext(Context);
	const [dropdownlist, setDropdownlist] = useState([store.favourites]);

	return (
		<>
			<div className="btn-group">
				<button
					type="button"
					className="btn btn-secondary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu dropdown-menu-right" style={{ width: "250px" }}>
					{store.favourites.map((favourite, position) => {
						if (favourite !== undefined) {
							return (
								<button className="dropdown-item" type="button" key={position}>
									{favourite}
									<button className="btn btn-sm btn-outline-danger float-right">
										<i
											className="fa fa-times text-danger float-right"
											onClick={index => {
												actions.removeFavourites(favourite);
											}}
										/>
									</button>
								</button>
							);
						} else {
							return <h5>buuu... your list is empty</h5>;
						}
					})}
				</div>
			</div>
		</>
	);
};
