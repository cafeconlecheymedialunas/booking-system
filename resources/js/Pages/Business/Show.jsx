import React from 'react';

const Show = ({business}) => {
    

    return (
        <div>
            <h1>{business.name}</h1>
            <p>{business.description}</p>
            <p>{business.contact}</p>
            <a href={`/business/${business.id}/edit`}>Edit</a>
        </div>
    );
};

export default Show;
