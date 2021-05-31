import React from 'react'
import { Table } from 'react-bootstrap'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
export const TicketTable = () => {
    const {searchTicketList,isLoading,error}=useSelector((state)=>state.tickets)
    if(isLoading) return <h2>Loading.....</h2>
    if(error) return <h3>{error}</h3>
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subjects</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {/* Loop through the all objects in JSON file */}
                {searchTicketList.length ? searchTicketList.map(row =>
                    <tr key={row._id}>
                        
                        <td>{row._id}</td>
                        <td>
                            <Link to={`/ticket/${row.id}`}>{row.subject}</Link>    
                        </td>
                        <td>{row.status}</td>
                        <td>{row.openAt}</td>
                    </tr>)
                    :
                    (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No Tickets available
                        </td>
                        </tr>
                    )
                }

            </tbody>

        </Table>
    )
}
// TicketTable.proptype={
//     tickets: Proptypes.array.isReuired
// }