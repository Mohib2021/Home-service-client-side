import { Button, Modal } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth/useAuth";

function Confirmation() {
	const { showConfirmation, setShowConfirmation, setConfirm } = useAuth();

	const handleClose = () => {
		setConfirm(true);
		setShowConfirmation(false);
	};
	const handleCloseTow = () => {
		setConfirm(false);
		setShowConfirmation(false);
	};

	return (
		<>
			<Modal
				style={{ zIndex: "4000" }}
				show={showConfirmation}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					I will not close if you click outside me. Don't even try to press
					escape key.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						Yes
					</Button>
					<Button onClick={handleCloseTow} variant="danger">
						No
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Confirmation;
