import './side.css'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

export default function SideNavbar(props) {
    const [open, setOpen] = useState(false);
    return (
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>

            <Nav.Link eventKey="link-2">

                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    click
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        <ul>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                </Collapse>

            </Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav>
    )
}