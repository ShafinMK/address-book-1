import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
    const { personID } = useParams();
    console.log(personID);
    const [details, setDetails] = useState({});
    useEffect(() => {
        console.log('loading');
        fetch(`https://jsonplaceholder.typicode.com/users/${personID}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    console.log(details);
    return (
        <div>
            <h4>a person's details</h4>
            <div className="card border-info mb-3">
                <div className="card-header">Header</div>
                <div className="card-body">
                    <h5 className="card-title">{details?.name}</h5>
                    <h6>User name: {details?.username}</h6>
                    <h6>Email: {details?.email}</h6>
                    <h6>Phone: {details?.phone}</h6>
                    <h6>Website: {details?.website}</h6>
                    <h6>Address: {details?.address?.street}, {details?.address?.city}, {details?.address?.zipcode}</h6>

                </div>
            </div>
        </div>
    );
};

export default PersonDetails;