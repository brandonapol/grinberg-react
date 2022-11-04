import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";

export default function Sidebar() {
    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" end>Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/explore" end>Explore</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}