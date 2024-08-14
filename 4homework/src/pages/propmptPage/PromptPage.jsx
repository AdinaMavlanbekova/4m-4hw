import MainPage from "../mainPage/MainPage";
import ErrorPage from "../errorPage/ErrorPage";
import {useEffect, useState} from "react";


const promptName = prompt('inter your name').toLowerCase()
const promptLastname = prompt('inter your lastname').toLowerCase()

export default function PromptPage () {

    const [user, setUser] = useState({name: "", lastname: ""})

    function getPrompt () {
        setUser({name: promptName, lastname: promptLastname})
    }

    useEffect(() => {
        getPrompt()
    }, []);

    return (
        <>
            {
                user.name === "john" && user.lastname === 'johns' ? <MainPage user={user}/> : <ErrorPage user={user}/>
            }

        </>
    )
}