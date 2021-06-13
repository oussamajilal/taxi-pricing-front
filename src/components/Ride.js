import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ride.css';

function Ride({ ride }) {
    const [price, setPrice] = useState(undefined);

    useEffect(() => {
        async function fetchPrice() {
            const result = await axios.post(
                'http://localhost:8080/rides/calculate-price',
                {
                    distance: ride.distance,
                    startTime: ride.startTime,
                }
            );
            console.log(result.data);
            setPrice(result.data.price);
        };
        fetchPrice();
    }, [ride.distance, ride.startTime]);

    const longRideClass = ride.distance > 2 ? 'Long-ride' : ''
    return (
        <div className={`Ride ${longRideClass}`}>
            <div>Ride N°{ride.id}</div>
            <div>Price: {price}</div>
        </div>
    );
}

export default Ride;