import React from "react";
import {
    ProfileInfo,
    ProfileInfoDiv,
    ProfileInfoInput,
    ProfileInfoSpan
} from "../styles/PageProfileStyles";

export const PageProfileInfo = ({user}) => {
    if (user) {
        return (
            <>
                <ProfileInfo>
                    <ProfileInfoDiv>
                        <ProfileInfoSpan>Full name</ProfileInfoSpan>
                        <ProfileInfoInput placeholder="Enter your full name" type="text" value={user.first_name + user.last_name}/>
                    </ProfileInfoDiv>
                    <ProfileInfoDiv>
                        <ProfileInfoSpan>Username</ProfileInfoSpan>
                        <ProfileInfoInput placeholder="Enter your username" type="text" defaultValue={user.username}/>
                    </ProfileInfoDiv>
                    <ProfileInfoDiv>
                        <ProfileInfoSpan>Bio</ProfileInfoSpan>
                        <ProfileInfoInput placeholder="Enter your bio" type="text" defaultValue={"Моя биография"}/>
                    </ProfileInfoDiv>
                </ProfileInfo>
            </>
        )
    }
    else return (<></>)
}