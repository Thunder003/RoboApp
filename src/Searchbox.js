import React from 'react';


const SearchBox=({searchchange})=>{
	return(
		<div>
		<input className=' ma2 pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robot' onChange={searchchange}/>
		</div>
		);
};
export default SearchBox;