import '../styles/Directors.css'
import { useEffect, useState } from 'react';
import { getDirectors } from '../services/DirectorService';
import Director from '../components/Director';

function Directors({inputText,sortDirectors}) {
    const [directors, setDirectors] = useState([]);

    useEffect(() =>{
        getDirectors().then((res) => {
            setDirectors(res.data);
        })
        .catch((error) =>
        alert("Error fetching directors : \n"+error));
    }, [])

    sortDirectorsArray();

    function sortDirectorsArray() {
        switch (sortDirectors) {
            case "ordreAlphabetique":
                directors.sort((directorA, directorB) => {
                    const nameA = directorA.name.toLowerCase();
                    const nameB = directorB.name.toLowerCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                break;
            default:
                break;
        }
    };

    return (
        <div className="pl-directors">
            {directors.map((director) => 
                <Director key={director.id} director={director}/>
            )}
        </div>
    )
}

export default Directors;