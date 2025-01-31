import "./BackgroundAudio.css"
import audio from "../../assets/audio/Aim for One Piece.mp3"
import audioOff from "../../assets/img/i-audio-off.png"
import audioOn from "../../assets/img/i-audio-on.png"
import { useEffect, useRef, useState } from "react";

export function BackgroundAudio () {

    const audioRef = useRef(null)
    const buttonRef = useRef(null)
    const eyeRef = useRef(null)

    const [volume, setVolume] = useState(0.03);
    const [isVolumeVisible, setVolumeVisible] = useState(false);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [])



    const handleClick = () => {
        if (!audioRef.current.paused) {
            audioRef.current.pause();
            buttonRef.current.style.backgroundImage = `url(${audioOff})`

        } else{
            audioRef.current.play();
            buttonRef.current.style.backgroundImage = `url(${audioOn})`
        }
    }

    const handleVolumeChange = (event) => {

        const newVolume = event.target.value;
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume;
    }

    const handleVolumeButtonHover = () => {
        setVolumeVisible(true);
    }

    const handleVolumeButtonLeave = () => {
        setVolumeVisible(false);
    }

    return (
        <>
        <audio ref={audioRef} autoPlay loop>
            <source type="audio/mpeg" src={audio}></source>
        </audio>
        <span className="display" ref={eyeRef}></span>
        <div className="audio-container" onMouseLeave={handleVolumeButtonLeave}>
            <span ref={buttonRef} onMouseEnter={handleVolumeButtonHover} className="audio" role="button" onClick={handleClick}></span>
            {isVolumeVisible &&
            <input className="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
            }
        </div>
        </>
    )
}