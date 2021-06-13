import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Ride.css';
import urls from '../urls';
import moment from 'moment';

function Ride({ ride }) {
    const [price, setPrice] = useState(undefined);
    const [isClicked, setIsClicked] = useState(false);

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

    const handleRideClick = () => {
        setIsClicked(true);

        const formattedDuration = moment.utc(ride.duration * 1000).format('HH:mm:ss');
        const arrivalTime = moment(ride.startTime).add(ride.duration, 's').toISOString();
        alert(`${formattedDuration} - ${arrivalTime}`);
    }

    const longRideClass = ride.distance > 2 ? 'Long-ride' : '';
    return (
        <div className={`Ride ${longRideClass}`} onClick={handleRideClick}>
            <div>
                Ride N°{ride.id}
                {isClicked && <span> - Clicked</span>}
            </div>
            <div>Price: {price}</div>
        </div>
    );
}

export default Ride;