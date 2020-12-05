import React, {useState} from 'react'
import styled from 'styled-components'

const DataTable = ({headers, data}) => {
    console.log('datatable rendered ..')
    const StyledDatatable = styled.div`
        width: calc(100% - 13%);
        table {
            width: 90%;
            margin-right: auto;
            margin-left: auto;
            margin-top: 2%;
            color: #858891;
        }
    `

    const StyledFilters = styled.div`
        
    `;

    return (
        <StyledDatatable>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        {headers.map((thName, index) => {
                            return <th key= {index}> {thName} </th>
                        })}
                    </tr>
                </thead>
                <tbody>
                     
                    {data.map((row, index) => (
                        <tr key={index}> 
                            <td> {index + 1} </td>
                            <td> {row.book_name} </td>
                            <td> {row.book_author} </td>
                            <td> {row.book_price} </td>
                            <td> {row.book_description} </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>   

            <PaginationLinks maxItems={data[0]?.max_books ?? 1} />
        </StyledDatatable>
    )
}

const PaginationLinks = ({maxItems}) => {
    console.log('pagination links rendered ..')
    const currentPageNumber = useState(1); 

    const StyledDatatable = styled.div`
        width: 90%; 
        margin-right: auto;
        margin-left: auto;    
        
        .active {
            color: #ba8ce0;
        }

        a {
            text-decoration: none;
            color: black;
            margin: 3px;
        }

        span.prev, span.next {
            font-size: 0.8em;
            padding: 2px 7px;
            background-color: #ba8ce0;
            border-radius :10px;
        } 
    `
    
    return (
        <StyledDatatable>
            <span className="prev">  <a href="#"> Prev </a> </span>
            <span className="pages">
                <a href='#'> 1 </a>  
                <a href='#'> 2 </a>  
                <a href='#'> 3 </a>  
                <a href='#'> 4 </a>  
                <a href='#'> 5 </a>  
            </span>      
            <span className="next"> <a href="#">Next</a> </span>  
        </StyledDatatable>
    )
}

export default DataTable