import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DarkModeSwitch from './DarkModeSwitch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const NavBar = (props) => {

    const textStyle = {
        fontWeight: "bold",
        // display: { xs: "none", sm: "block" },
    }

    const switchMode = () => {
        props.setIsDarkMode(mode => !mode)
    }

    const scrollDown = (section) => {
        window.scrollTo({
            top: section.current.offsetTop,
            behavior: 'smooth',
        });
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar color="primary" position="static" enableColorOnDark>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Button color="inherit" onClick={() => scrollDown(props.projectSection)}>
                            <Typography variant="h5" sx={textStyle}>
                                PROJECTS
                            </Typography>
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(props.skillSection)}>
                            <Typography variant="h5" sx={textStyle}>
                                SKILLS
                            </Typography>
                        </Button>
                        <Button color="inherit" onClick={() => scrollDown(props.linkSection)}>
                            <Typography variant="h5" sx={textStyle}>
                                LINKS
                            </Typography>
                        </Button>
                    </Box>

                    {/* <Button color="inherit" >
                        <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button color="inherit">
                        <GitHubIcon fontSize="large" />
                    </Button> */}


                    <DarkModeSwitch
                        onChange={switchMode}
                        checked={props.isDarkMode}
                    />

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar