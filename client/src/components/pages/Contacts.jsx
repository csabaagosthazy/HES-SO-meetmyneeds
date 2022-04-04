import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import {getContacts} from "../../services/api/service";

const Contacts = (props) => {
    const [contacts, setContacts] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        //call fetch
        let isMounted = true;
        (async () => {
            getContacts(props.question_id)
                .then((obj) => {
                    if (isMounted) {
                        setContacts(obj);
                    }
                })
                .catch((err) => setError(err));
        })();
        return () => {
            isMounted = false;
        };
    }, []);

    let contacts_render = "";
    if (contacts) {
        contacts_render = contacts.map((item) => {
            return (<div key={item.service_id}>
                <p>{item.organizationName}, {item.address}</p>
            </div>)
        })
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
                {contacts_render}
            </Modal.Body>
        </Modal>
    );
}

export default Contacts; 