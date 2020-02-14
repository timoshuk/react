import React from 'react';
import ReactDOM from "react-dom";

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}`);
    }

    const body = await res.json();

    return body;
};

const dd = getResource('https://swapi.co/api/people/1').then((body) => {
    console.log(body)
}).catch((err) => {
    console.error(err)
});




const Data = () => {
    return (
        <div>
            <h1>Data</h1>
        </div>
    )
}

ReactDOM.render(<Data />, document.getElementById('root'));