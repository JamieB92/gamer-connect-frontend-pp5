import React, { useState } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import styles from "../styles/EditDeleteDropdown.module.css"
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";





const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
    <i
    className="fas fa-ellipsis-v"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    />
  ));
  
  export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
      // post and comment drop down
      <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={DropdownIcon} />

        <Dropdown.Menu className="text-center">
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleEdit}
            aria-label="edit"
          >
            <i className="fas fa-edit" />
          </Dropdown.Item>
          <Dropdown.Item
            className={styles.DropdownItem}
            onClick={handleShow}
            aria-label="delete"
          >
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </Dropdown.Menu>
        <Modal show={show} onHide={handleClose}>
         
         {/* Cofirm delete model*/}  
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to delete this post?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                       Cancel
                    </Button>
                    <Button
                      varient="Primary"
                      onClick={handleDelete}
                    >
                      Confirm
                    </Button>
                  </Modal.Footer>
                </Modal>    
          </Dropdown>
    )
  };
 // Profile edit Dropdown menu
  export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
      <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={DropdownIcon} />
        <Dropdown.Menu>
          <Dropdown.Item
          // sends user to edit profile form
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fas fa-edit" /> edit profile
          </Dropdown.Item>
          <Dropdown.Item
          // sends user to edit username form
            onClick={() => history.push(`/profiles/${id}/edit/username`)}
            aria-label="edit-username"
          >
            <i className="far fa-id-card" />
            change username
          </Dropdown.Item>
          <Dropdown.Item
          //send users to change password form
            onClick={() => history.push(`/profiles/${id}/edit/password`)}
            aria-label="edit-password"
          >
            <i className="fas fa-key" />
            change password
          </Dropdown.Item>

          <Dropdown.Item
          // sends user to create game form
          onClick={() => history.push("/games/create")}
          aria-label="Add Game"
        >
          <i className="fa-solid fa-plus"></i>
          Add a game
        </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        
    );
  }