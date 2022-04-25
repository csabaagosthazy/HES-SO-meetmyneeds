import React, { useEffect, useState } from "react";

import { Container, Card, Spinner } from "react-bootstrap";
import { useAuth } from "../../services/pryv/service";
import { getLastEvents } from "../../services/pryv/functions";

const History = () => {
    const { connection } = useAuth();
    const [history, setHistory] = useState();

    useEffect(async () => {
        const res = await getLastEvents(connection);
        setHistory(res);
    }, []);

    if (!history) return <Spinner animation="border" variant="primary" />;
    return (
        <Card className="text-center mb-4">
            <Card.Header>My history</Card.Header>
            <Card.Body>
                {history.length === 0 ? (
                    <p>No items saved yet</p>
                ) : (
                    history.map((item) => {
                        let date = new Date(item.created * 1000);
                        return <p key={item.id}>{date.toLocaleString()}</p>;
                    })
                )}
            </Card.Body>
        </Card>
    );
};

export default History;
