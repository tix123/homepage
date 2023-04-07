import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import Box from "@mui/material/Box";
import SaitLogo from "../icons/sait-logo.svg"
import PtkLogo from "../icons/ptk-logo.png"
import Stack from '@mui/material/Stack';

const Header = () => {

    const textStyle = { fontWeight: "bold" };

    return (
        <Box>
            <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center" sx={{ padding: "20px" }}>
                <Grid item>
                    <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                        Hi, I am Sean.
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom sx={textStyle}>
                        I love to build things with software technologies.
                    </Typography>

                </Grid>

                <Grid item>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typography variant="h4" align="center" sx={textStyle}>
                                Alumni of
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box style={{ width: "230px" }}>
                                <img src={SaitLogo} alt="sait-logo" style={{ width: "100%" }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item>
                            <Box style={{ width: "40px" }}>
                                <img src={PtkLogo} alt="sait-logo" style={{ width: "100%" }} />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" sx={textStyle}>
                                Phi Theta Kappa
                            </Typography>
                            <Typography variant="h6" sx={textStyle}>
                                Honor Society Member
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container spacing={2} sx={{ margin: "40px 0" }}>
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
