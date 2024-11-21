import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ColthDeatils = () => {
    const {colthid} = useParams()
    const data = useLoaderData()
    const colth = data.find(colt => colth.colthid === colthid)
   // console.log(data.colth)
    return (
        <div>
            <h2> colth deails{colthid}</h2>
        </div>
    );
};

export default ColthDeatils;