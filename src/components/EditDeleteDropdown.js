import React from "react"
import Dropdown from "react-bootstrap/Dropdown"
import styles from "../styles/EditDeleteDropdown.module.css"
import { useHistory } from "react-router";

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
    return (
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
            onClick={handleDelete}
            aria-label="delete"
          >
            <i className="fas fa-trash-alt" />
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
 
  export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
      <Dropdown className="ml-auto" drop="left">
        <Dropdown.Toggle as={DropdownIcon} />
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit`)}
            aria-label="edit-profile"
          >
            <i className="fas fa-edit" /> edit profile
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => history.push(`/profiles/${id}/edit/username`)}
            aria-label="edit-username"
          >
            <i className="far fa-id-card" />
            change username
          </Dropdown.Item>
          <Dropdown.Item
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