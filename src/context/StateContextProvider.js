import React, { createContext, useState } from 'react'

export const StateContext = createContext()

const baseUrl = 'https://google-search72.p.rapidapi.com';

export const StateContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async (type) => {
        setLoading(true);

        
        const res = await fetch(`${baseUrl}${type}`,{
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e40ea65b67msh5af1f0eff8d9c30p11475ajsn4d172f751a5d',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
          }
      })
        const data = await res.json();

        console.log(data.items)
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
