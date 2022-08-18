import React, { useEffect, useState } from 'react'
import { ButtonGroup, Card, Alert } from 'react-bootstrap'
import CenteredModal from '../utilities/CenteredModal';
import Loaders from '../utilities/Loaders';
import axios from "axios";
import "./posts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";

const CollectionPosts = () => {
    const [dataPosts, setDataPosts] = useState([]);
    const [limit, setLimit] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        if (isCancelled == false) {
            setLoading(true);
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
            }).then((result) => setDataPosts(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        return () => { isCancelled = true };
    }, [limit]);

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1);
    }

    if (loading) return <Loaders />

    return (
        <React.Fragment>
            <Alert variant={"info"} className="mt-4">
                <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
                Currently showing "{limit}" {limit > 1 && "Posts"}
                {limit === 1 && "Post"}
            </Alert>
            <ButtonGroup>
                <button className='btn btn-outline-primary' onClick={() => handleLimit("+")}>+</button>
                {limit > 1 &&
                    <button className='btn btn-outline-primary' onClick={() => handleLimit("-")}>-</button>
                }
            </ButtonGroup>

            {dataPosts.map((data, i) => {
                return (
                    <Card className='mt-4 mb-4' key={i}>
                        <Card.Header as="h5">Posts API</Card.Header>
                        <Card.Body>
                            <CenteredModal
                                activator={({ setShow }) => (
                                    <>
                                        <Card.Title>Data ke : {data.id} nih cuy</Card.Title>
                                        <Card.Text>
                                            Title : <a onClick={() => setShow(true)} className="text">{data.title}</a>
                                        </Card.Text>
                                    </>
                                )}
                            >
                                <h3>Post ID: {data.id}</h3>
                                <strong>User ID</strong>: {data.userId}
                                <hr />
                                <p>
                                    <strong>Title</strong>: {data.title}
                                    <br />
                                    <br />
                                    <strong>Description</strong>: {data.body}
                                </p>
                            </CenteredModal>

                        </Card.Body>
                    </Card>
                )
            })}


        </React.Fragment>
    )
}

export default CollectionPosts