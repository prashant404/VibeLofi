
import { Box } from "@mui/system";
import { memo } from "react";
function SongCard({cover}){

    return(
        <Box sx={{
            borderRadius:'50%',
            width:'20rem', 
            height:'20rem',
            justifyContent:'center', 
            backgroundImage: 'url(' + cover+')',
            backgroundSize:'cover',
            padding:'0',
            margin:'0'
            }}>                
        </Box>

    )
}

export default memo(SongCard)