import React, { useState, useEffect } from 'react'
import { Card, Col, Row, ButtonGroup, Alert } from "react-bootstrap";
import Loaders from '../utilities/Loaders';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";


const CollectionGallery = () => {
    const [dataPhotos, setDataPhotos] = useState([]);
    const [limit, setLimit] = useState(6);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCancelled = false
        if (isCancelled == false) {
            setLoading(true)
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDataPhotos(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
        }

        return () => isCancelled = true
    }, [limit])

    const handleLimit = (option) => {
        option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
    }

    if (loading) return <Loaders />

    return (
        <React.Fragment >
            <Alert variant={"info"} className="mt-4">
                Nyoba iseng2 dibikin card gini gapapa kan cuy? hehe<br />
                <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
                Currently showing "{limit}" {limit > 1 && "Photos"}{" "}
                {limit === 1 && "Photo"}
            </Alert>
            <ButtonGroup className="mt-4">
                <button className='btn btn-outline-primary' onClick={() => handleLimit("+")}>+</button>
                {limit > 1 &&
                    <button className='btn btn-outline-primary' onClick={() => handleLimit("-")}>-</button>
                }
            </ButtonGroup>

            <Row xs={1} md={3} className="g-4 mt-4 mb-4">
                {dataPhotos.map((data, i) => {
                    return (
                        <Col className='d-flex' key={i}>
                            <Card >
                                <Card.Img style={{ height: "auto" }} variant="top" src={data.url} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        This is a longer card wit
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )

                })}

            </Row>



        </React.Fragment>
    )
}

export default CollectionGallery