import { useEffect, useState } from "react"


export default function AudioRecorder() {
    const [audio, setAudio] = useState("")
    const [isRecording, setIsRecording] = useState(false)
    const [recorder, setRecorder] = useState(null)

    async function requestRecorder() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        return new MediaRecorder(stream)
    }

    function handleAudio(data) {
        const audio = data
        const reader = new FileReader()
        reader.onload = () => {
            setAudio(new File([audio], "mp3"));
        }

        if (audio) {
            reader.readAsDataURL(audio)
        }
    }

    useEffect(() => {
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then((r) => {
                    setRecorder(r)
                })
            }
            return
        }

        if (isRecording) {
            recorder.start()
        } else {
            recorder.stop()
        }

        recorder.ondataavailable = (e) => {
            handleAudio(e.data)
        }

    }, [recorder, isRecording])

    const startRecording = () => {
        setIsRecording(true)
    }

    const stopRecording = () => {
        setIsRecording(false)
    }

    return [audio, setAudio, isRecording, startRecording, stopRecording]
}