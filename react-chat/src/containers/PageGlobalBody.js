import {
    Chat, DiscardAudioButton,
    Form,
    FormInput,
    MessageInfo,
    MessageLeft,
    MessageRight,
    MessageTime, SendButton
} from "../styles/PageChatStyles"
import Mic from '@mui/icons-material/Mic'
import ShareLocation from '@mui/icons-material/ShareLocation'
import Close from '@mui/icons-material/Close'
import Send from '@mui/icons-material/Send'
import React, {useEffect, useState} from "react"
import AudioRecorder from "../components/AudioRecorder"
import {
    AudioButton,
    AudioButtonOnRecord,
    DiscardButton,
    ImageInput, ImageLabel,
    LocationButton
} from "../styles/PageChatButtonsStyles"
import {Attachment} from "@mui/icons-material"


export const PageGlobalBody = () => {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState("")
    const author = "Felshtyn Stanislav"
    const [file, setFile] = useState([])
    let [audio, setAudio, isRecording, startRecording, stopRecording] = AudioRecorder()
    const messageText = {
        fontSize: "16px"
    }

    const sleep = ms => new Promise(r => setTimeout(r, ms))

    useEffect(() => {
        fetch('https://tt-front.vercel.app/messages')
            .then(resp => resp.json())
            .then(data => setMessages(data))
    }, [])

    useEffect(() => {
        const pollItems = () => {
            fetch('https://tt-front.vercel.app/messages')
                .then((resp) => resp.json())
                .then((data) => setMessages(data))
        }
        setInterval(() => pollItems(), 1000)
    }, [])

    const getMessages = () => {
        fetch('https://tt-front.vercel.app/messages')
            .then(res => res.json())
            .then(data => setMessages(data.reverse()))
    }

    function sendMessage(message) {
        fetch('https://tt-front.vercel.app/message', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
    }

    async function sendFile (file) {
        const data = new FormData()
        data.append('image', file)
        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })
        return response.json()
    }
    async function sendAudio (audio) {
        const data = new FormData()
        data.append('audio', audio)
        const response = await fetch('https://tt-front.vercel.app/upload', {
            method: "POST",
            body: data,
        })
        return response.json()
    }
    function handleChange(event) {
        setText(event.target.value)
    }

    function handleFiles (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            setFile([file, URL.createObjectURL(file)])
        }
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    async function handleSubmit (event) {
        event.preventDefault()
        let img_src
        if (file.length !== 0) {
            img_src = await getImgSrc()
        }

        const message = {
            "text": (text + (img_src ? ('&&&' + img_src) : '')),
            "author": author
        }

        if (message.text === "") {
            if (file.length === 0) {
                return
            }
            return
        }
        sendMessage(message)
        await sleep(1000)
        getMessages()
        setText("")
        setFile([])
    }

    async function getImgSrc() {
        return await sendFile(file[0]).then(value => value["imgSrc"])
    }

    async function getAudioSrc() {
        return await sendAudio(audio).then(value => value["audioSrc"])
    }

    function discardAudio() {
        stopRecording();
        setAudio("");
    }

    async function submitAudio () {
        let audio_src
        if (audio) {
            audio_src = await getAudioSrc()
        }
        const message = {
            "text": (text + (audio_src ? ('^^^' + audio_src) : '')),
            "author": author
        }
        if (!audio) {
            return
        }
        if (message.text !== "") {
            sendMessage(message)
        }
        console.log(message.text.split('^^^')[1])
        await sleep(1000)
        getMessages()
        setText("")
        setFile([])
        stopRecording()
    }

    function geoFindMe() {
        function success(position) {
            const latitude  = position.coords.latitude
            const longitude = position.coords.longitude
            setText(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`)
        }

        function error() {
            alert('Unable to get your location')
        }

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }

    const createMessages = () => {
        return (
            messages.map((message) => {
                if (message.author !== author) {
                    return (
                        <MessageLeft>
                            <div style={messageText}>{message.text}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageLeft>
                    )
                } else {
                    return (
                        <MessageRight>
                            <div style={messageText}>{message.text}</div>
                            <MessageInfo>
                                <MessageTime>{
                                    new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                                }
                                </MessageTime>
                            </MessageInfo>
                        </MessageRight>
                    )
                }
            })
        )
    }

    return (
        <>
            <Chat>{createMessages()}</Chat>
            {file.length !== 0 && (
                <>
                    <DiscardButton type="button" onClick={() => setFile([])}><Close/></DiscardButton>
                    <img src={file[1]} alt="imagePreview"/>
                </>
            )}
            {isRecording && (
                <>
                    <div style={{display: "flex", flexDirection: "row-reverse", marginRight: "40px", marginBottom: "5px"}}>
                        <SendButton type="button" onClick={submitAudio}>
                            <Send/>
                        </SendButton>
                        <DiscardAudioButton type="button" onClick={discardAudio}>
                            <Close/>
                        </DiscardAudioButton>
                    </div>
                </>
            )}
            <Form onSubmit={handleSubmit}>
                <FormInput
                    name="message-text"
                    placeholder="Cообщение"
                    type="textarea"
                    value={text}
                    onChange={handleChange}
                    handleFiles={handleFiles}
                />
                <ImageInput
                    type="file"
                    id="fileElem"
                    accept="image/*"
                    onChange={handleFiles}>
                </ImageInput>
                <ImageLabel htmlFor="fileElem">
                    <Attachment/>
                </ImageLabel>
                <LocationButton onClick={geoFindMe} type="button" title='Click to type your location'>
                    <ShareLocation></ShareLocation>
                </LocationButton>
                {
                    !isRecording ?
                    <AudioButton onClick={startRecording} type="button"><Mic/></AudioButton>
                    :
                    <AudioButtonOnRecord onClick={startRecording} type="button"><Mic/></AudioButtonOnRecord>
                }
            </Form>
        </>
    )
}