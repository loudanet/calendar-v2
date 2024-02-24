import { useNavigate } from "react-router-dom";
import "./nav.css"

export default function Nav() {
    const navigate = useNavigate();
    
    return (
        <nav>
            <p onClick={() => navigate("/")}>Home</p>
            <p onClick={() => navigate("about")}>About</p>
            <p onClick={() => navigate("contact")}>Contact</p>
        </nav>
    );
}