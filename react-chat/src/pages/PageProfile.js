import {PageProfileHeaderWrapper} from "../components/PageProfileHeaderWrapper";
import {PageProfileImage} from "../components/PageProfileImage";
import {PageProfileInfo} from "../components/PageProfileInfo";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";


export const PageProfile = () => {
    const { id } = useParams()
    const [user, setUser] = useState(null)
    const [chatId, userId] = id.split("&")

    useEffect(() => {
        fetch(`api/users/user/${parseInt(userId)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "X-CSRFToken": "Osdeegez52LCNUXWMgFyr4MeO56Nb0p8",
            }
        })
            .then(resp => resp.json())
            .then(data => setUser(data))
    }, [userId])

    return (
        <>
            <PageProfileHeaderWrapper chatId={chatId}/>
            <PageProfileImage/>
            <PageProfileInfo user={user}/>
        </>
    )
}