import React, { useEffect, useState } from "react";
import { Modal, Button, Collapse, Card } from "react-bootstrap";
import { getContacts } from "../../services/api/service";
import ErrorElement from "../errors/ErrorElement";
import markdown_render from "../../helpers/markdown_render";

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getContacts(props.question_id).then(setContacts).catch(setError);
    }, [props.question_id]);

    const CollapsibleItem = ({ contact }) => {
        const [open, setOpen] = useState(false);
        const controlId = `collapse-text-${contact.service_id}`;
        //head
        return (
            <Card>
                <Card.Title>{contact.organizationName}</Card.Title>
                <Card.Subtitle>{contact.address}</Card.Subtitle>
                <Card.Body>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls={controlId}
                        aria-expanded={open}
                    >
                        Show more
                    </Button>
                </Card.Body>
                <Card.Footer>
                    <Collapse in={open}>
                        <Card.Text id={controlId} dangerouslySetInnerHTML={{ __html: markdown_render(contact.description) }}></Card.Text>
                    </Collapse>
                </Card.Footer>
            </Card>
        );
    };
    let modal_body;

    if (!contacts && !error) {
        modal_body = <p>Chargement des informations de contact</p>;
    } else if (error) {
        modal_body = (
            <ErrorElement err={error}>
                Une erreur de chargement de la liste des contacts est survenue.
            </ErrorElement>
        );
    } else {
        modal_body = contacts.map((contact) => (
            <CollapsibleItem key={contact.service_id} contact={contact}></CollapsibleItem>
        ));
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
            <Modal.Body>{modal_body}</Modal.Body>
        </Modal>
    );
};

export default Contacts;
