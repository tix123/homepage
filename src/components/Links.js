import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';

const Links = () => {

    const textStyle = {
        fontWeight: "bold"
    }

    const boxStyle = {
        padding: "20px",
    }

    const links = [
        { icon: <LinkedInIcon />, name: "LinkedIn", url: "https://www.linkedin.com/in/sean-chen-canada/" },
        { icon: <GitHubIcon />, name: "GitHub", url: "https://github.com/tix123" },
        { icon: <HistoryEduIcon />, name: "Blog", url: "https://readandplay.pixnet.net/blog" },
    ]

    return (
        <Box sx={boxStyle}>
            <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                LINKS
            </Typography>

            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {links.map((item, index) => {
                    return (
                        <Grid item key={index}>
                            <Button
                                variant="contained"
                                startIcon={item.icon}
                                href={item.url}
                                rel="noreferrer"
                                target="_blank"
                            // size="large"
                            >
                                {item.name}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>

        </Box>
    )

}

export default Links