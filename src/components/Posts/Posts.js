import React from 'react'
import CollectionPosts from './CollectionPosts'
import { Container } from "react-bootstrap"

const Posts = () => {
    return (
        <React.Fragment>
            <Container className="mt-4 mb-4">
                <CollectionPosts />
            </Container>
        </React.Fragment>
    )
}

export default Posts