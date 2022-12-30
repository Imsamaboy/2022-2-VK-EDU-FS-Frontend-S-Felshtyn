import React, {useEffect, useState} from "react"
import {PageTranslateHistoryClearButton} from "../components/PageTranslateHistoryClearButton";
import {PageTranslateHistoryBody} from "../components/PageTranslateHistoryBody";
import {PageTranslateHistoryHeaderWrapper} from "../components/PageTranslateHistoryHeader";
import {PageTranslateHistoryBodyWrapper, PageTranslateHistoryButtons} from "../styles/PageTranslateHistoryStyles";
import {PageTranslateHistoryBackButton} from "../components/PageTranslateHistoryBackButton";
import {Link} from "react-router-dom";

export const PageTranslateHistory = () => {
    const [isClear, setIsClear] = useState(true);

    useEffect(() => {
        let history = JSON.parse(localStorage.getItem("translateHistory"))
        if (history == null || history.length === 0) {
            setIsClear(true)
        } else {
            setIsClear(false)
        }
    }, [])

    return (
        <>
            <PageTranslateHistoryHeaderWrapper/>
            <PageTranslateHistoryButtons>
                <Link key={0} style={{textDecoration: 'none'}} to={"/translate"}>
                    <PageTranslateHistoryBackButton/>
                </Link>
                <PageTranslateHistoryClearButton/>
            </PageTranslateHistoryButtons>
            { isClear ?
                <PageTranslateHistoryBodyWrapper>
                    History is clear
                </PageTranslateHistoryBodyWrapper> :
                <PageTranslateHistoryBodyWrapper>
                    <PageTranslateHistoryBody/>
                </PageTranslateHistoryBodyWrapper>
            }
        </>
    )
}