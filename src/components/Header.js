import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Box from "@mui/material/Box";
import SaitLogo from "../icons/sait-logo.svg"
import PtkLogo from "../icons/ptk-logo.png"
import Stack from '@mui/material/Stack';
import BackgroundPicture from "../img/sea.jpg"

const Header = () => {

    const textStyle = { fontWeight: "bold" };

    const titleStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: 1,
        color: "#fff",
        transform: "translateX(-50%) translateY(-50%)",
        letterSpacing: "5px",
        width: "100%",
        textAlign: "center",
        fontWeight: "bold"
    };

    return (
        <Box>
            <Box style={{ width: "100%", position: "relative", }}>
                <img src={BackgroundPicture} alt="sait-logo" style={{ width: "100%", }} />
                <Typography variant="h1" align="center" gutterBottom sx={titleStyle}>
                    Sean Chen
                </Typography>
            </Box>
            <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ padding: "20px" }}>
                <Grid item>
                <Typography variant="h4" align="center" gutterBottom sx={textStyle}>
                        Hi, I am a Front End Developer
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom sx={textStyle}>
                        I love to build things with software technologies
                    </Typography>

                </Grid>

                <Grid item>
                    <Grid container spacing={2} >
                        {/* <Grid item>
                            <Button
                                variant="outlined"
                                startIcon={<ContentPasteIcon />}
                                href="#"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Resume
                            </Button>
                        </Grid> */}
                        <Grid item>
                            <Button
                                variant="contained"
                                startIcon={<LinkedInIcon />}
                                href="https://www.linkedin.com/in/sean-chen-canada/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Linkedin
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Box>
    )

}

export default Header
