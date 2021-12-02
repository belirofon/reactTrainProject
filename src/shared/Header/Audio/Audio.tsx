import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


export function Audio() {
    return (
        <ReactAudioPlayer
            src="./audio/music.ogg"
            autoPlay
            controls/>
    )
}