import {useParams} from "react-router-dom";

export default function World() {

    const urlParams = useParams();

    return <h1>World (Willkommen an alle {urlParams.planet} Bewohner*innen)</h1>
}
