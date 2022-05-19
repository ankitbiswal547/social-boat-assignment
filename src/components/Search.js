import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onDataChange }) => {

    const [t, setT] = useState();

    const inputChangeHandler = (e) => {

        clearTimeout(t);
        const p = setTimeout(async () => {
            try {
                const query = e.target.value;
                if (query === "") return;
                let URL = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=24`
                const data = await axios.get(URL);
                onDataChange(data.data.results);
            } catch (e) {
                onDataChange([]);
            }
        }, 2000);
        setT(p);
    }
    return (
        <form className='navbar-form'>
            <input className='navbar-form-input' onChange={inputChangeHandler} type="text" placeholder="Search" name="query" />
        </form>
    );
}

export default Search;