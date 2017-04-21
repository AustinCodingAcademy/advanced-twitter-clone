import React from 'react';

function HeaderSearch(){
   return (
     <div id="headersearch">
         <span className="icon"><i className="fa fa-search"></i></span>
         <input type="search" id="searchBar" placeholder="Search" />
       </div>);
}

export default HeaderSearch;
