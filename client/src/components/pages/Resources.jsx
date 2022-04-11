import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getResources} from "../../services/api/service";

const Resources = (props) => {
    const [resources, setResources] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setResources(await getResources(props.question_id))
            } catch (e) {
                setError(e);
            }
        })();
    }, [props.question_id]);

    return (
        <Modal
            show={props.showResources}
            backdrop={false}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ressources
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {resources && resources.map(item => <p key={item.resource_id}>{item.name}, <a href={item.url} target="_blank">{item.url}</a></p>)}
            </Modal.Body>
        </Modal>
    );
}

export default Resources; 