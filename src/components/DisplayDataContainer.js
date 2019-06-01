import React, { useState, useCallback } from "react";
import DisplayData from "./DisplayData";

const DisplayDataContainer = () => {
    const [query, setQuery] = useState("");

    const handleChangeInput = useCallback(
        event => setQuery(event.target.value),
        [],
    );

    return (
        <div>
            <input type='text' value={query} onChange={handleChangeInput} />
            <DisplayData query={query} />
        </div>
    );
};

export default DisplayDataContainer;
