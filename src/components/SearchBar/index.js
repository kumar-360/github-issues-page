import React from 'react';

const SearchBar = ({type, placeholder,value,onChange}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

export default SearchBar;