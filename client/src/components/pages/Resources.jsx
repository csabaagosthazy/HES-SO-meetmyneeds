import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getResources} from "../../services/api/service";

const Resources = (props) => {
    const [resources, setResources] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        //call fetch
        let isMounted = true;
        (async () => {
            getResources(props.question_id)
                .then((obj) => {
                    if (isMounted) {
                        setResources(obj);
                    }
                })
                .catch((err) => setError(err));
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    let resources_render = "";
    if (resources) {
        resources_render = resources.map((item) => {
            return (<div key={item.resource_id}>
                <p>{item.name}, <a href={item.url} target="_blank">{item.url}</a></p>
            </div>)
        })
    }

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
                {resources_render}
            </Modal.Body>
        </Modal>
    );
}

export default Resources; 