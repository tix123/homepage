import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Header = () => {

    const textStyle = { fontWeight: "bold" };

    return (
        <div>
            <Grid container spacing={10} justifyContent="center" alignItems="center" sx={{ padding: "100px 20px 100px 20px" }}>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center" gutterBottom sx={textStyle}>
                        Hi, I am Sean.
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom sx={textStyle}>
                        I love to build things with software technologies.
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={2}>
                        {/* <Grid item>
                            <Button
                                variant="outlined"
                                startIcon={<ContentPasteIcon />}
                                href="https://github.com/tix123/taiwan-weather-public"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Resume
                            </Button>
                        </Grid> */}
                        <Grid item>
                            <Button
                                variant="outlined"
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
        </div>
    )

}

export default Header
