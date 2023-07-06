import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/imagesearch', text: '📷 Images' }
  ];
  
  const Links = () => (
    <div className="flex sm:justify-start justify-between items-center mt-3">
    {links.map(({ url, text }, index) => (
      <NavLink key={index} to={url} className="p-2 mb-0 text-sm text-gray-700 dark:text-white  hover:text-blue-700">
        {text}
      </NavLink>
    ))}
  </div>
  )

export default Links