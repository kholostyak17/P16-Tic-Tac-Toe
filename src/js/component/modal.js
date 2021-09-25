import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

function MyModal(props) {
	return (
		<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
			<form>
				<Modal.Header className="show-grid bg-modal" closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<span className="modal-title">TIC TAC TOE JUEGO</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid bg-modal">
					<Container>
						<div className="row text-center">
							<div className="col-12 col-sm-6">
								<span className="font-weight-bold">
									JUGADOR ESTRELLA
								</span>
								<div className="modal-icon">
									<i className="fas fa-star"></i>
								</div>
							</div>
							<div className="col-12 col-sm-6">
								<span className="font-weight-bold">
									JUGADOR LUNA
								</span>
								<div className="modal-icon">
									<i className="fas fa-moon"></i>
								</div>
							</div>
						</div>
					</Container>
				</Modal.Body>
				<Modal.Footer className="show-grid bg-modal d-flex justify-content-center">
					<Button
						className="btn button-color"
						variant="secondary"
						onClick={props.onHide}>
						¡EMPEZAMOS!
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
}

const AppModal = () => {
	const [modalShow, setModalShow] = useState(true);

	return (
		<>
			<button
				className="btn button-color"
				onClick={() => setModalShow(true)}>
				PAUSA
			</button>
			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};
export default AppModal;

MyModal.propTypes = {
	onHide: PropTypes.func
};
