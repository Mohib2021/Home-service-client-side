import { Button, Modal } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth/useAuth";

function AlertBox({ heading, message }) {
	const { show, setShow } = useAuth();
	const handleClose = () => setShow(false);
	return (
		<>
			<Modal style={{ zIndex: "4000" }} show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<h3>{heading}</h3>
				</Modal.Header>
				<Modal.Body>{message}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AlertBox;
