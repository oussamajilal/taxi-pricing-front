import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ride from './Ride';
import urls from '../urls';

function RideList() {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        async function fetchRides() {
            const result = await axios(urls.rideList);
            setRides(result.data);
        };
        fetchRides();
    }, []);

    return (
        <div>
            <h2>Ride List:</h2>
            <div>
                {rides.map(ride => (
                    <Ride key={ride.id} ride={ride} />
                ))}
            </div>
        </div>
    );
}

export default RideList;