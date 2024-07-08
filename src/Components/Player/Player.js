
import { PlayerContext } from "../../Contexts/PlayerContext";
import { useContext } from "react";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import { Box } from "@mui/system";
import Slider from "../Slider/Slider";

import SongCard from "../SongCard/SongCard";
import SongInfo from "../SongInfo/SongInfo";

function Player(){

    const {currentSong,audioRef,handlerCurrentTime,handlerSkipSong, isPlaying} = useContext(PlayerContext)

    return(   
        <Box sx={{ display:'flex',justifyContent:'center', alignItems:'center', flexDirection:'column'}}>       
            <SongCard cover={currentSong.cover}/>
            <SongInfo title={currentSong.name} artist={currentSong.artist}/>    
            <Slider colors={currentSong.color}/>  
              
            <audio  ref={audioRef} 
                    src={currentSong.audio}
                    onTimeUpdate={handlerCurrentTime}
                    onEnded={handlerSkipSong}
                    autoPlay={isPlaying}
            />  
            <PlayerControlls/> 
        </Box>                  
    )

}

export default Player;