import Places from "../components/Places";
import globe from "../assets/globe.png";
import { useState, useEffect } from "react";
import { updateUserPlaces } from "../https";

export default function AvailablePlaces() {

    const [userPlaces, setUserPlaces] = useState([]);
    const [availablePlaces, setAvailablePlaces] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/places')
            .then((res) => res.json())
            .then((json) => setAvailablePlaces(json.places));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/user-places')
            .then((res) => res.json())
            .then((json) => setUserPlaces(json.places));
    }, []);

    function handleSelectPlace(onSelectPlace) {
        setUserPlaces((current) => {
            if (!current) {
                current = [];
            }
            if (current.some((place) => place.id === onSelectPlace.id)) {
                return current;
            }
            return [onSelectPlace, ...current];
        });
        !userPlaces.includes(onSelectPlace) && updateUserPlaces([onSelectPlace, ...userPlaces]);
    }

    function handleRemovePlace(selectedPlace) {
        setUserPlaces((prevPickedPlaces) =>
            prevPickedPlaces.filter((place) => place.id !== selectedPlace.id)
        );

        updateUserPlaces(userPlaces.filter((place) => place.id != selectedPlace.id));
    }

    return (
        <>
            <div>
                <img src={globe} alt="Stylized globe" />
                <h1>PlacePicker</h1>
                <p>
                    Create your personal collection of places you would like to visit or
                    you have visited.
                </p>
            </div>
            <main>
                <Places
                    title="User Places"
                    fallbackText="Please select places below"
                    places={userPlaces}
                    onSelectPlace={handleRemovePlace}
                />
                <Places
                    title="Available Places"
                    fallbackText="No Places Available"
                    places={availablePlaces}
                    onSelectPlace={handleSelectPlace}
                />
            </main>
        </>
    );
}