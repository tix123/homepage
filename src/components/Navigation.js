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
        fontWeight: "bold"
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
        "&:hover": {
            backgroundColor: "transparent",
          },
    })
    return (
        <Grid container justifyContent="space-between" sx={{ padding: "20px" }}>
            <Grid item>
                <Typography variant="h6" align="center" gutterBottom sx={textStyle}>
                    Sean Chen's Portfolio
                </Typography>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={2}>
                    <NaviButton onClick={() => scrollDown(props.projectSection)}>
                        PROJECTS
                    </NaviButton>
                    <NaviButton onClick={() => scrollDown(props.skillSection)}>
                        SKILLS
                    </NaviButton>
                    <NaviButton onClick={() => scrollDown(props.linkSection)}>
                        LINKS
                    </NaviButton>
                    {props.mode == "dark" ? (
                        <IconButton onClick={setLightMode}>
                            <LightModeIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={setDarkMode}>
                            <DarkModeIcon />
                        </IconButton>
                    )}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Navigation