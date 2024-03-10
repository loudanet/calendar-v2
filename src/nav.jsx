import { NavLink } from "react-router-dom";
import "./nav.css"

export default function Nav() {
    return (
        <nav>
            <NavLink style={{ textDecoration: "none" }} activeClassName="active" to="/"><div className="navWrapper">Home</div></NavLink>
            <NavLink style={{ textDecoration: "none" }} activeClassName="active" to="/about"><div className="navWrapper">About</div></NavLink>
            <NavLink style={{ textDecoration: "none" }} activeClassName="active" to="/justanotherpage"><div className="navWrapper">Just Another Page</div></NavLink>
            <NavLink style={{ textDecoration: "none" }} activeClassName="active" to="/yetanotherpage"><div className="navWrapper">Yet Another Page</div></NavLink>
            <NavLink style={{ textDecoration: "none" }} activeClassName="active" to="/contact"><div className="navWrapper">Contact</div></NavLink>
        </nav>
    );
}