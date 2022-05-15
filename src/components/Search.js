import React from 'react';
import axios from 'axios';

const Search = ({ onDataChange }) => {

    const inputChangeHandler = async (e) => {
        try {
            const query = e.target.value;
            if (query === "") return;
            let URL = `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${query}&numResults=24`
            const data = await axios.get(URL);
            onDataChange(data.data.results);
        } catch (e) {
            onDataChange([]);
        }
    }
    return (
        <form className='navbar-form'>
            <input className='navbar-form-input' onChange={inputChangeHandler} type="text" placeholder="Search" name="query" />
        </form>
    );
}

export default Search;