import React from 'react';
import _ from 'lodash';

const Pagination = ({itemCount, pageSize, currentPage, onPageChange}) => {
  
    const pageCount = Math.ceil(itemCount/ pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)
    return ( 
        <nav>
            <ul>
                {pages.map(page => (
                    <li key={page}><a onClick={() => onPageChange(page)}>{page}</a></li>
                ))}
            </ul>
        </nav>
     );
}
 
export default Pagination;

// const pagesCount = Math.ceil(itemsCount / pageSize);
// if (pagesCount === 1) return null;
// const pages = _.range(1, pagesCount + 1);

// return (
//   <nav>
//     <ul className="pagination">
//       {pages.map(page => (
//         <li
//           key={page}
//           className={page === currentPage ? "page-item active" : "page-item"}
//         >
//           <a className="page-link" onClick={() => onPageChange(page)}>
//             {page}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );
// };