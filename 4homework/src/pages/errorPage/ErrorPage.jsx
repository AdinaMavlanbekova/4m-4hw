

import {useEffect, useState} from "react";

function ErrorPage({user}) {
    const [state, setState] = useState({name: "", lastname: ""})

    useEffect(() => {
        setState({ name: user.name, lastname: user.lastname});
    }, [user])

    return (
        <>
            <h2>Тебе сюда нельзя - {state.name} {state.lastname}</h2>

        </>
    );
}

export default ErrorPage;