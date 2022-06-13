import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Peoples = () => {
    const [peoples, setPeoples] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPeoples(data))
    }, [])
    return (
        <div>
            <h1>All peoples are here</h1>
            <div className='row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4'>
            {
                peoples.map(people => <Person people ={people}></Person>)
            }
            </div>
            
        </div>
    );
};

export default Peoples;