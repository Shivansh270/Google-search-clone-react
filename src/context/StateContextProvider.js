import React, { createContext, useState } from 'react'

export const StateContext = createContext()

const baseUrl = 'https://google-search72.p.rapidapi.com';

export const StateContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('elson musk')

    const getResults = async (type) => {
        setLoading(true);

        
        const res = await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '48cddf3795mshd254632d05a7064p1c2cd2jsn158a0b9d4775',
          'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
        }
      
      
      })
        const data = await res.json();

        console.log(data)
        setResults(data.items);
        setLoading(false)
      }

    const value = {
        results,
        setResults,
        loading,
        setLoading,
        searchTerm,
        setSearchTerm,
        getResults
    };

    return <StateContext.Provider value={value}>
          {children}
           </StateContext.Provider>

};
