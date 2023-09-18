import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Box from "@mui/material/Box";
import SaitLogo from "../icons/sait-logo.svg"
import PtkLogo from "../icons/ptk-logo.png"
import Stack from '@mui/material/Stack';
import BackgroundPicture from "../img/background.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import { useEffect } from 'react';


const Header = () => {

    // loading picture
    useEffect(() => {
        new Image().src = BackgroundPicture
    }, [])

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

    const headerContainer = {
        width: "100%",
        position: "relative",
    }

    return (
        <Box>
            <Box style={headerContainer}>
                <img src={BackgroundPicture} className="head-picture" alt="hero-pic" />
                <Typography variant="h1" align="center" gutterBottom sx={titleStyle}>
                    PORTFOLIO
                </Typography>
            </Box>
            <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ padding: "20px" }}>
                {/* <Grid item>
                    <Typography variant="h4" align="center" sx={textStyle}>
                        Hi, I am Sean Chen. Welcome to my portfolio.
                    </Typography>
                </Grid> */}

                {/* <Grid item>
                    <Typography variant="h5" align="center" sx={textStyle}>
                        I love to build things with software technologies
                    </Typography>
                </Grid> */}

                {/* <Grid item>
                    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                        <Grid item>
                            <Button
                                variant="contained"
                                startIcon={<GitHubIcon />}
                                href="https://github.com/tix123"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Github
                            </Button>
                        </Grid>
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

                </Grid> */}

            </Grid>
        </Box>
    )

}

export default Header
