import { useNavigate } from "react-router-dom";

export default function ErrorComponent() {
    const navigate = useNavigate()
    
    return (
        <div>
            <p>The classic, error 404!</p>
           <button onClick={() => { navigate("/about") }}>Back to safety...</button>
        </div>
    );
}