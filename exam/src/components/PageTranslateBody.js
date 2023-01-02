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
    const [selectedToLanguage, setSelectedToLanguage] = useState("af")
    const [selectedFromLanguage, setSelectedFromLanguage] = useState("af")
    const [translatedText, setTranslatedText] = useState("Translation")
    const languages = props.languages

    useEffect(() => {
        props.getLanguages()
    }, [props])

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleFromLanguageChange = (event) => {
        setSelectedFromLanguage(event.target.value)
    }

    const handleToLanguageChange = (event) => {
        setSelectedToLanguage(event.target.value)
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

        fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${selectedToLanguage}&api-version=3.0&from=${selectedFromLanguage}&profanityAction=NoAction&textType=plain`, options)
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
                    toLanguage: languages.find((element) => element.key === selectedToLanguage).name,
                    fromLanguage: languages.find((element) => element.key === selectedFromLanguage).name
                })
                localStorage.setItem("translateHistory", JSON.stringify(history))
            })
            .catch(error => console.error(error))
    }

    return (
        <TranslateBody>
            <TranslateBodyHeader>
                <TranslateBodyLanguage>
                    <span
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            position: "relative",
                            verticalAlign: "middle"
                        }}
                        onChange={handleFromLanguageChange}
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
                <TranslateBodySwapButton><SwapHoriz/></TranslateBodySwapButton>
                <TranslateBodyLanguage>
                    <span
                        style={{
                            display: "inline-block",
                            margin: "10px",
                            position: "relative",
                            verticalAlign: "middle"
                        }}
                        onChange={handleToLanguageChange}
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