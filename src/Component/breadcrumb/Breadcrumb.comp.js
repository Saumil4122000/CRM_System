import React from 'react'
import {Breadcrumb} from 'react-bootstrap'

export const PageBreadcrumb = ({page}) => {
   
    return (
        <Breadcrumb style={{ display: 'block',
        color:'black',
        width: 700, padding: 30, Color: 'white',backgroundColor:'white' }}>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
        </Breadcrumb>
    )
}
