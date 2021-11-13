import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Bookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = ``
        fetch('')
    }, [])
    return (
        <div>
            <h2>Bookings all</h2>
        </div>
    );
};

export default Bookings;