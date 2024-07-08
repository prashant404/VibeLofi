import { Box , Button } from '@mui/material';
import {AppContext} from '../../Contexts/AppContext'
import { PlayerContext } from '../../Contexts/PlayerContext';
import { useContext } from 'react';
import { Drawer } from "@mui/material";
import LibraryCard from '../LibraryCard/LibraryCard';

function Library(){

    const {toggleLibraryOpen, isLibraryOpen} = useContext(AppContext)
    const {playlist} = useContext(PlayerContext)

    const musics = playlist.map( music =>{
        return (
            <LibraryCard key={music.id} music={music}/>
        )
    })

    return(
        <aside>
        {isLibraryOpen &&       
            <Drawer open={isLibraryOpen} onClose={toggleLibraryOpen} >
                <Box >     
                    <Box sx={{display:'flex', justifyContent:'flex-end', width:'94%'}}>
                        <Button sx={{color:'black', border:'1px solid black', margin:'0.5em'}} onClick={toggleLibraryOpen}>
                            Close
                        </Button>
                    </Box>
                </Box>
                <Box  sx={{display:'flex', flexDirection:'column', margin:'2em'}}>
                   {musics}
                </Box>
          </Drawer>                   
        }
        </aside>   
    )
}

export default Library