import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getResources} from "../../services/api/service";
import ErrorElement from "../errors/ErrorElement";

const Resources = (props) => {
    const [resources, setResources] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getResources(props.question_id)
            .then(setResources)
            .catch(setError);
    }, [props.question_id]);

    let modal_body;

    if(!resources && !error){
        modal_body = <p>Chargement des ressources</p>;
    } else if (error){
        modal_body = <ErrorElement err={error}>Une erreur de chargement de la liste des ressources est survenue.</ErrorElement>
    } else {
        modal_body = resources.map(item => <p key={item.resource_id}>{item.name}, <p><a href={item.url} rel="noreferrer" target="_blank">{item.url}</a></p></p>);
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
                {modal_body}
            </Modal.Body>
        </Modal>
    );
}

export default Resources; 