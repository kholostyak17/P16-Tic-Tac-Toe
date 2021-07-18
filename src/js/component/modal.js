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
				<Modal.Header className="show-grid bg-warning" closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<span className="text-danger">Tic Tac Toe GAME</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className="show-grid bg-warning">
					<Container>
						<div className="row text-center">
							<div className="col-12 col-sm-6">
								<span className="font-weight-bold">
									Player SUN
								</span>
								<div
									className="modal-icon "
									onClick={props.setSun}>
									<i className="fas fa-sun"></i>
								</div>
							</div>
							<div className="col-12 col-sm-6">
								<span className="font-weight-bold">
									Player MOON
								</span>
								<div
									className="modal-icon "
									onClick={props.setMoon}>
									<i className="fas fa-moon"></i>
								</div>
							</div>
						</div>
					</Container>
				</Modal.Body>
				<Modal.Footer className="show-grid bg-warning d-flex justify-content-center">
					<Button variant="danger" onClick={props.onHide}>
						Play!!
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
			<Button variant="danger" onClick={() => setModalShow(true)}>
				Resume
			</Button>
			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};
export default AppModal;

MyModal.propTypes = {
	setMoon: PropTypes.func,
	setSun: PropTypes.func,
	firstPlayer: PropTypes.any,
	onHide: PropTypes.func
};
