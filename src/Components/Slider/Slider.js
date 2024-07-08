
import './Slider.modules.css'
import ReactSlider from 'react-slider'
import { Box } from '@mui/material'
import { PlayerContext } from '../../Contexts/PlayerContext'
import { useContext } from 'react'


function Slider({colors}){

    const {currentTime, audioRef, isPlaying} = useContext(PlayerContext);

    function handlerSkipTime(e){
        
        if(currentTime > 0 ){
            let newTime = (audioRef.current.currentTime * e)/currentTime;
            audioRef.current.currentTime = newTime;
        }
    }
    
    return (
        <Box sx={{display:'flex', justifyContent:'center', width:{xs:'70%', md:'35%'}}}>
            <ReactSlider                 
                className="horizontal-slider"
                trackClassName="track"
                value={currentTime}
                onChange={handlerSkipTime}
                renderThumb={(props,state) =>

                     <div {...props} className='thumb' style={{
                        width:state.valueNow+'%',              
                        backgroundImage:`linear-gradient(to right, ${colors[0]}, ${colors[1]})`
                     }}>

                    </div>
                }
            />            
        </Box>
    )

}

export default Slider