import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";


export const Detail = () => {
    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(true);
    const {char_id} = useParams();

    useEffect(() => {
        axios(`https://breakingbadapi.com/api/characters/${char_id}`)
            .then(res => res.data)
            .then(data => setChar(data[0]))
            .finally(() => setLoading(false));
    }, [char_id])

    return loading ? 'loading' :
        <div>
            <h1 style={{textAlign:'center'}}>{char.name}</h1>
            <img src={char.img} alt={char.name} />
            <div>{JSON.stringify(char)}</div>
        </div>
}
