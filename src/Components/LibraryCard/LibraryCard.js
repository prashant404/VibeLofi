import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

import { PlayerContext } from "../../Contexts/PlayerContext";
import { useContext } from "react";

function LibraryCard({ music }) {
  const { handlerSpecifSong } = useContext(PlayerContext);

  function handlerSelectSong() {
    handlerSpecifSong(music.id);
  }

  return (
    <Card sx={{ marginBottom: "1em" }} onClick={handlerSelectSong}>
      <CardActionArea
        sx={{ display: "flex", width: "100%", justifyContent: "left" }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 120,
            height: 120,
            objectFit: "cover",
          }}
          image={music.cover}
          alt="Album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography component="div" variant="h5">
              {music.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {music.artist}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default LibraryCard;
