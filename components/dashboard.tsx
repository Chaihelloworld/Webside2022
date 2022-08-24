import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import Form from './form';

function Content() {
  return (
  <div className="bg-light border">
    <Form/>
  </div>
  );
}

export default Content;