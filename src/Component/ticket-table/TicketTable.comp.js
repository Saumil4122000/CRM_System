import React from 'react'
import { Table } from 'react-bootstrap'
import Proptypes from 'prop-types'

export const TicketTable = ({ tickets }) => {
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
                {tickets.length ? tickets.map(row =>
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.addedAt}</td>
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
TicketTable.proptype={
    tickets: Proptypes.array.isReuired
}