import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const PaginationBar = ({itemsPerPage, totalItems,paginate}) => {
    const numPages=[];
    for(let i=1;i<=Math.ceil(totalItems/itemsPerPage);i++){
        numPages.push(
            <Pagination.Item onClick={()=>paginate(i)}key={i}>
              {i}
            </Pagination.Item>,
          );
    }
    return (
        <div>
        <Pagination>{numPages}</Pagination>
        </div>
    )
}

export default PaginationBar