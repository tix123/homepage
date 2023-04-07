import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

const Links = () => {

    const textStyle = {
        fontWeight: "bold"
    }

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                LINKS
            </Typography>

            <Grid container spacing={2} align="center" justifyContent="center">
                <Grid item>
                    <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/tix123"
                        rel="noreferrer"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Grid>

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
        </Box>
    )

}

export default Links