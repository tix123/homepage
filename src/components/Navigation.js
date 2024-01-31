import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const Navigation = (props) => {

    const textStyle = {
        fontWeight: "bold",
        // display: { xs: "none", sm: "block" },
    }

    const setLightMode = () => {
        props.setMode("light")
    }

    const setDarkMode = () => {
        props.setMode("dark")
    }

    const scrollDown = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const NaviButton = styled(Button)({
        // fontSize: "18px",
        // fontWeight: "bold",
        "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline 3px",
            textUnderlineOffset: "8px"
        },
    })

    const containerStyle = {
        padding: "1rem 0",
        width: "95%",
        margin: "0 auto"
    }

    return (
        <Grid container justifyContent="space-between" alignItems="center" sx={containerStyle}>

            <Grid item>
                <Stack direction="row" spacing={{ xs: 2, sm: 3}}>
                    <NaviButton color="error" onClick={() => scrollDown(props.projectSection)}>
                        <Typography variant="h5" sx={textStyle}>
                            PROJECTS
                        </Typography>
                    </NaviButton>
                    <NaviButton color="error" onClick={() => scrollDown(props.skillSection)}>
                        <Typography variant="h5" sx={textStyle}>
                            SKILLS
                        </Typography>
                    </NaviButton>
                    <NaviButton color="error" onClick={() => scrollDown(props.linkSection)}>
                        <Typography variant="h5" sx={textStyle}>
                            LINKS
                        </Typography>
                    </NaviButton>

                </Stack>
            </Grid>

            <Grid item>
                {/* <Typography variant="h5" align="center" gutterBottom sx={textStyle}>
                    Sean Chen's Portfolio
                </Typography> */}
                {props.mode === "dark" ? (
                    <IconButton onClick={setLightMode} >
                        <LightModeIcon fontSize="large"   />
                    </IconButton>
                ) : (
                    <IconButton onClick={setDarkMode} >
                        <DarkModeIcon fontSize="large" />
                    </IconButton>
                )}
            </Grid>

        </Grid>
    )
}

export default Navigation