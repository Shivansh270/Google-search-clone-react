import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContextProvider';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';


const Results = () => {

    const { results, loading, getResults, searchTerm } = useContext(StateContext);
    const location = useLocation();

    useEffect(() => {
        getResults('/search?q=JavaScript Mastery&num=20')
    }, [])

    if (loading) return <Loading />;

    switch (location.pathname) {
        case '/search':
          return (
            <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
              {results.map((item, index) => (
                <div key={index} className="md:w-2/5 w-full">
                  <a href={item.link} target="_blank">
                    <p className="text-sm">
                        {item.link.length > 30 ? item.link.substring(0, 30) : item.link}</p>
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                        {item.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          );
}
}

export default Results;