import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayData = ({ query, onQueryChange }) => {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                `http://hn.algolia.com/api/v1/search?query=${query}`,
            );
            setData(result.data);
        };
        console.log("query :", query);
        if (!!query) fetchData();
    }, [query]);

    return (
        <>
            <input
                type='text'
                value={query}
                onChange={event => onQueryChange(event.target.value)}
            />
            <ul>
                {data.hits.map(item => (
                    <li key={item.id}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DisplayData;
