import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "../CSS/Searchbar.css";

function Searchbar() {
  return (
    <div className="searchbar">
      <InputGroup>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control type="text" placeholder="Search" />
      </InputGroup>
    </div>
  );
}

export default Searchbar;
