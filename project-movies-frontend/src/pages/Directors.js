import '../styles/Directors.css'
import { useEffect, useState } from 'react';
import { getDirectors } from '../services/DirectorService';
import Director from '../components/Director';

function Directors({inputText}) {
    const [directors, setDirectors] = useState([]);

    useEffect(() =>{
        getDirectors().then((res) => {
            setDirectors(res.data);
        })
        .catch((error) =>
        alert("Error fetching directors : \n"+error));
    }, [])

    return (
        <div className="pl-directors">
            {directors.map((director) => 
                <Director key={director.id} director={director}/>
            )}
        </div>
    )
}

export default Directors;