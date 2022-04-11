import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getContacts} from "../../services/api/service";

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        (async () => {
            try{
                setContacts(await getContacts(props.question_id));
            }catch (e) {
                setError(e);
            }
        })();
    }, [props.question_id]);

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
                {contacts && contacts.map(contact => <p key={contact.service_id}>{contact.organizationName}, {contact.address}</p>)}
            </Modal.Body>
        </Modal>
    );
}

export default Contacts; 