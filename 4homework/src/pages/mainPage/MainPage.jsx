import {useEffect, useState} from "react";

function MainPage({user}) {
    const [state, setState] = useState({name: "", lastname: ""})



    useEffect(() => {
        setState({ name: user.name, lastname: user.lastname});
    }, [user])
    return (
        <>
                <h2>Добро пожаловать {state.name} {state.lastname} мы тебя ждали</h2>

        </>
    );
}

export default MainPage;