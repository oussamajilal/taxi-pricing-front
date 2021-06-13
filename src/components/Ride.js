import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ride.css';
import urls from '../urls';

function Ride({ ride }) {
    const [price, setPrice] = useState(undefined);

    useEffect(() => {
        async function fetchPrice() {
            const result = await axios.post(
                urls.rideCalculatePrice,
                {
                    distance: ride.distance,
                    startTime: ride.startTime,
                }
            );
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