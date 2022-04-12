import {Alert} from "react-bootstrap";

// Small HoC to show an error box with a custom message prefixing the
// JS error message.
const ErrorElement = ({ err, children }) => {
    return <Alert variant="danger">
        <p>{children}</p>
        <p>Erreur technique</p>
        <pre><code>{err.name} - {err.message}</code></pre>
    </Alert>
}

export default ErrorElement;