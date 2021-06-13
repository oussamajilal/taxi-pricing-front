import './Ride.css';

function Ride({ ride }) {
    const longRideClass = ride.distance > 2 ? 'Long-ride' : ''
    return (
        <div className={`Ride ${longRideClass}`}>Ride N°{ride.id}</div>
    );
}

export default Ride;