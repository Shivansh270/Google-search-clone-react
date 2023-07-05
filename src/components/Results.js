import React, { useContext, useEffect } from 'react'
import { StateContext } from '../context/StateContextProvider';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';


const Results = () => {

    const { results, loading, getResults, searchTerm } = useContext(StateContext);
    const location = useLocation();

    // useEffect(() => {
    //     getResults('?q=JavaScript Mastery&num=10')
    // }, [])

    useEffect(() => {
        if (searchTerm !== '') {
          if (location.pathname === '/videos') {
            getResults(`search?q=${searchTerm} videos`);
          } else {
            getResults(`${location.pathname}?q=${searchTerm}&num=20`);
          }
        }
      }, [searchTerm, location.pathname]);

      
    if (loading) return <Loading />;

    switch (location.pathname) {
        case '/search':
          return (
            <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
              {results?.map((item, index) => (
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

        case '/imagesearch':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        results?.map((result, index) => (
                            <a className='sm:p-3 p-5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5' href={result.link} key={index} target="_blank">
                                <img src={result.originalImageUrl} width={500} height={200} alt={result.title} loading='lazy'/>

                                <p className='w-36 break-words text-sm mt-2'>
                                    {result.title}
                                </p>
                            </a>

                        ))
                    }
                </div>
            )
        
    case '/news':
          return (
            <div className="sm:px-56 flex flex-wrap justify-between space-y-6 items-center">
              {results?.map((result, index) => (
                <div key={index} className="md:w-2/5 w-full">
                  <a href={result.link} target="_blank">
                    
                    <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                      {result.title}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          );
}
}

export default Results;