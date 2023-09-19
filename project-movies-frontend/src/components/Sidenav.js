import '../styles/Sidenav.css'
import { useNavigate } from 'react-router-dom';


function Banner() {
    const navigate = useNavigate();

    return (
        <div className="pl-banner">
            <span className='pl-logo'>&#127916;</span>
            <h1 className='pl-title'>Cinéthèque</h1>

            <div className='pl-navlinks'>
                <button onClick={() => navigate("movies")}>Films</button>
                <button onClick={() => navigate("directors")}>Réalisateurs</button>
            </div>
        </div>
    )
}

export default Banner;