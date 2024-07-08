import { Link, Typography } from "@mui/material";
import { Box, Button } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { AppContext } from "../../Contexts/AppContext";
import { useContext } from "react";

function Footer() {
  const { toggleLibraryOpen } = useContext(AppContext);

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em",
      }}
    >
      <Typography sx={{ textAlign: "center", padding: "1em" }}>
        <Link href="https://github.com/prashant404/" underline="none">
          prashant404
        </Link>
      </Typography>

      <Box>
        <Button
          startIcon={<ImportContactsIcon />}
          sx={{ color: "black", border: "1px solid black" }}
          onClick={toggleLibraryOpen}
        >
          Library
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;