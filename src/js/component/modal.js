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
						<Row>
							<Col md={6}>
								<input
									type="text"
									placeholder="Player SUN"></input>
							</Col>
							<Col md={6}>
								<input
									type="text"
									placeholder="Player MOON"></input>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
				<Modal.Footer className="show-grid bg-warning d-flex justify-content-center">
					<Button variant="danger" onClick={props.onHide}>
						Go!
					</Button>
				</Modal.Footer>
			</form>
		</Modal>
	);
}

const App = () => {
	const [modalShow, setModalShow] = useState(true);

	return (
		<>
			<Button variant="danger" onClick={() => setModalShow(true)}>
				Game over! / New game
			</Button>

			<MyModal show={modalShow} onHide={() => setModalShow(false)} />
		</>
	);
};

export default App;

MyModal.propTypes = {
	onHide: PropTypes.func
};

//reactDOM.renderDOM(<App />);
