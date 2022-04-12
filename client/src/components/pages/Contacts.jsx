import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getContacts} from "../../services/api/service";
import ErrorElement from "../errors/ErrorElement";

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getContacts(props.question_id)
            .then(setContacts)
            .catch(setError);
    }, [props.question_id]);

    let modal_body;

    if(!contacts && !error){
        modal_body = <p>Chargement des informations de contact</p>;
    } else if (error){
        modal_body = <ErrorElement err={error}>Une erreur de chargement de la liste des contacts est survenue.</ErrorElement>
    } else {
        modal_body = contacts.map(contact => <p key={contact.service_id}>{contact.organizationName}, {contact.address}</p>);
    }

    return (
        <Modal
            show={props.showContacts}
            backdrop={false}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Obtenir des informations
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {modal_body}
            </Modal.Body>
        </Modal>
    );
}

export default Contacts; 