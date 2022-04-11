import React, { useEffect, useState } from 'react';
import HotelRoom from '../HotelRoom/HotelRoom';

const HotelRooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect( () => {
        
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRooms(data))

    },[])

    return (
        <div className='my-5 container'>
            <h1 className='text-center text-primary'>Most Modern Room at Hotel TaJ</h1>
            <div className='row'>
                {rooms.map(room => <HotelRoom key={room.id} room={room} />)}
            </div>
        </div>
    );
};

export default HotelRooms;