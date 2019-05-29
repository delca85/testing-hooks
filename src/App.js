import React, { useState } from "react";
import "./App.css";
import DisplayData from "./components/DisplayData";

const App = () => {
    const [query, setQuery] = useState("");
    return (
        <div className='App'>
            <DisplayData query={query} onQueryChange={setQuery} />
        </div>
    );
};

export default App;
