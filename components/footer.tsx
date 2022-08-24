import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function Example(props: any) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div >
            <Navbar className="my-2"
                color="dark"
                dark>
                <NavbarBrand href="/" className="m-auto">
                Copyright © 2022 FORM GOOGLE. All Rights Reserved.
                </NavbarBrand>


            </Navbar>
        </div>
    );
}

export default Example;