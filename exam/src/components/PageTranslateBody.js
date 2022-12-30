import React, {useEffect, useState} from "react"
import {
    TranslateBody,
    TranslateBodyHeader,
    TranslateBodyLanguage, TranslateBodySelectLanguage,
    TranslateBodySwapButton
} from "../styles/PageTranslateHeaderStyles"
import {SwapHoriz} from "@mui/icons-material"
import {
    TranslateBodyContent,
    TranslateBodyForm, TranslateBodyFormInput,
    TranslateBodyFrom,
    TranslateBodyTo
} from "../styles/TranslateBodyContentStyles"

export const PageTranslateBody = ({props}) => {
    const [text, setText] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("af")
    const [translatedText, setTranslatedText] = useState("Translation")
    const languages = props.languages

    useEffect(() => {
        props.getLanguages()
    }, [props])

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (text !== "") {
            getTranslation()
        }
    }

    const getTranslation = () => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{ "Text": "${text}" }]`
        }
        fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${selectedLanguage}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
            .then(response => response.json())
            .then(response => {
                const result = response[0].translations[0].text
                setTranslatedText(result)
                let history = JSON.parse(localStorage.getItem("translateHistory"));
                if (history === null) {
                    history = []
                }
                history.push({
                    text: text,
                    translatedText: result,
                    language: languages.find((element) => element.key === selectedLanguage).name
                })
                localStorage.setItem("translateHistory", JSON.stringify(history))
            })
            .catch(error => console.error(error))
    }

    return (
        <TranslateBody>
            <TranslateBodyHeader>
                <TranslateBodyLanguage style={{color: "black"}}>Language Autodetect</TranslateBodyLanguage>
                <TranslateBodySwapButton><SwapHoriz/></TranslateBodySwapButton>
                <TranslateBodyLanguage>
                    <span
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            position: "relative",
                            verticalAlign: "middle"
                        }}
                        onChange={handleLanguageChange}
                    >
                        <TranslateBodySelectLanguage>
                            {
                                languages
                                &&
                                languages.map((item, index) =>
                                    <option value={item.key} key={index}>
                                        { item.name + ' (' + item.nativeName + ')' }
                                    </option>
                                )
                            }
                        </TranslateBodySelectLanguage>
                    </span>
                </TranslateBodyLanguage>
            </TranslateBodyHeader>
            <TranslateBodyContent>
                <TranslateBodyFrom>
                    <TranslateBodyForm onSubmit={handleSubmit}>
                        <TranslateBodyFormInput
                            placeholder="Введите текст"
                            onChange={handleChange}
                            value={text}
                        />
                    </TranslateBodyForm>
                </TranslateBodyFrom>
                <TranslateBodyTo>
                    {translatedText}
                </TranslateBodyTo>
            </TranslateBodyContent>
        </TranslateBody>
    )
}