import React, {useEffect} from 'react'
import DataTable from '../../components/DataTable'
import {getBooksActionCreator} from '../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

const ViewBook = () => {
    const headerData = ['#', 'Book Name', 'Book Author', 'Book Price', 'Book Description']
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getBooksActionCreator())
    }, [])

    return (
        <>
            <DataTable headers={headerData} data={books} />
        </>
    )
}

export default ViewBook