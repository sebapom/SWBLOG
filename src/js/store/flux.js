const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favourites: [],
			loadPeople: [],
			personDetail: {},
			loadPlanets: [],
			planetDetail: {},
			loadVehicles: [],
			vehicleDetail: {}
		},
		actions: {
			loadPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPeople: result.results });
						//console.log("load all people", store.loadPeople);
					})
					.catch(error => console.log("error", error));
			},
			getPersonDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ personDetail: result.result.properties });
						console.log("personDetail", store.personDetail);
					})
					.catch(error => console.log("error", error));
			},
			loadPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadPlanets: result.results });
						console.log("load all planets", store.loadPlanets);
					})
					.catch(error => console.log("error", error));
			},
			planetDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ planetDetail: result.result.properties });
						console.log("planetDetail", store.planetDetail);
					})
					.catch(error => console.log("error", error));
			},
			loadVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(response => response.json())
					.then(result => {
						setStore({ loadVehicles: result.results });
						console.log("load all vehicles", store.loadVehicles);
					})
					.catch(error => console.log("error", error));
			},
			vehicleDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ vehicleDetail: result.result.properties });
						console.log("vehicleDetail", store.vehicleDetail);
					})
					.catch(error => console.log("error", error));
			},
			loadFavourites: name => {
				const store = getStore();
				setStore({ favourites: [...store.favourites, name] });
				let uniqueValue = [...new Set(store.favourites)];
				setStore({ favourites: uniqueValue });
				console.log(store.favourites);
			},
			removeFavourites: index => {
				const store = getStore();
				console.log(index);
				const newList = store.favourites.filter(key => key !== index);
				setStore({ favourites: newList });
			}
		}
	};
};

export default getState;
