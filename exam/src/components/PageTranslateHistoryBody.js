import {useEffect, useState} from "react"
import {FromLanguage, FromLanguageText, ToLanguage, ToLanguageText} from "../styles/PageTranslateHistoryStyles"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

export const PageTranslateHistoryBody = () => {
    const [translates, setTranslates] = useState([])

    useEffect(() => {
        let history = localStorage.getItem("translateHistory")
        if (history !== null) {
            setTranslates(JSON.parse(history))
        } else {
            setTranslates([])
        }
    }, [])

    return (
        translates.map((translate, index) =>
            <section key={index} style={{borderBottom: "1px solid"}}>
                <div style={
                    {
                        margin: "10px",
                        display: "flex",
                        flexFlow: "row",
                        justifyContent: "space-evenly",
                        fontSize: "20px"
                    }
                }>
                    <FromLanguage>
                        {translate.fromLanguage}
                    </FromLanguage>
                    <ArrowRightAltIcon style={{color: "black"}}/>
                    <ToLanguage>
                        {translate.toLanguage}
                    </ToLanguage>
                </div>

                <div style={
                    {
                        margin: "10px",
                        display: "flex",
                        flexFlow: "column",
                        justifyContent: "center",
                        textAlign: "center",
                        fontSize: "20px"
                    }
                }
                >
                    <FromLanguageText>
                        {translate.text}
                    </FromLanguageText>
                    <ToLanguageText>
                        {translate.translatedText}
                    </ToLanguageText>
                </div>
            </section>
        )
    )
}