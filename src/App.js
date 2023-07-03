import React, { useContext, useState } from 'react';

import Navbar from './components/Navbar';
import Routing from './components/Routing';
import Footer from './components/Footer';
import { StateContext } from './context/StateContextProvider';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  // const {getResults} = useContext(StateContext)

  // useEffect(() => {
  //   getResults()
  // }, [])
  

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200  min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routing />
        <Footer />
      </div>
    </div>

  );
};

export default App;