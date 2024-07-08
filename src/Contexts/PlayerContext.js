import { createContext } from "react";
import chillHop from "../playlist";
import { useState, useRef } from "react";

export const PlayerContext = createContext()


function PlayerContextProvider({children}){

    const playlist = chillHop();

    const [currentSong, setCurrentSong] = useState(playlist[0])
    const [currentTime, setCurrentTime] = useState(0)
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isPlaying, setPlaying] = useState(false)
    const audioRef = useRef()
    
    function handlerSkipSong(){
        let nextSong = currentSongIndex + 1 


        if(nextSong >= playlist.length){
            setCurrentSong(playlist[0])
            setCurrentSongIndex(0)
        }else{
            setCurrentSong(playlist[nextSong])
            setCurrentSongIndex(nextSong)
        }   
        setCurrentTime(0)

    }

 
   
    function handlerPreviousSong(){
        let nextSong = currentSongIndex - 1 
  
        if(nextSong < 0){
            setCurrentSong(playlist[playlist.length-1])
            setCurrentSongIndex(playlist.length-1)
        }else{
            setCurrentSong(playlist[nextSong])
            setCurrentSongIndex(nextSong)
        }   
        setCurrentTime(0)

    }

    function handlerSpecifSong(songId){
        let searchSong = playlist.find( song => song.id === songId)
        let songIndex = playlist.indexOf(searchSong)
        setCurrentSong(searchSong)
        setCurrentSongIndex(songIndex)
        setCurrentTime(0)        
    }

    function handlerPlayPauseSong(){
        if(isPlaying){
            audioRef.current?.pause()
        }else{
            audioRef.current?.play()
        }  
        setPlaying(!isPlaying)
    }

    function handlerCurrentTime(){
        const percent = (audioRef.current?.currentTime/ audioRef.current.duration) * 100;
        setCurrentTime(percent)
    }

    return(
        <PlayerContext.Provider value={{
            playlist,
            currentSong,
            isPlaying,
            handlerSkipSong,
            handlerPreviousSong,
            handlerSpecifSong,
            handlerPlayPauseSong,
            audioRef,
            handlerCurrentTime,
            currentTime
        }}>
        {children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider