import React from 'react';
function Pagination(props) {
    const pageNumbers = [];
    const {totalFlight, flightPerPage, paginate}=props;


    for (let i=1; i <= Math.ceil(totalFlight/flightPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(num=>(
                    <li key={num} className='page-item'>
                        <a onClick={()=>paginate(num)} href='#' className='page-link'>{num}</a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default Pagination;
