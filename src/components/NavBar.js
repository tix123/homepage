import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeSwitch from "./DarkModeSwitch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const NavBar = (props) => {
  const boldStyle = {
    fontWeight: "bold",
    // display: { xs: "none", sm: "block" },
  };

  const switchMode = () => {
    props.setIsDarkMode((mode) => !mode);
  };

  const scrollDown = (section) => {
    window.scrollTo({
      top: section.current.offsetTop,
      behavior: "smooth",
    });
  };

  const linkFont = "h6";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static" enableColorOnDark>
        <Toolbar>
          <Box>
            <Typography
              component="span"
              variant="h4"
              // sx={{ display: { xs: 'none' } }}
              sx={boldStyle}
            >
              PORTFOLIO
            </Typography>
          </Box>

          {/* <Button color="inherit" >
                        <LinkedInIcon fontSize="large" />
                    </Button>
                    <Button color="inherit">
                        <GitHubIcon fontSize="large" />
                    </Button> */}

          <Box sx={{ flexGrow: 1 }} justifyContent="end" display="flex" gap={3} alignItems="center" >
            <Button
              color="inherit"
              onClick={() => scrollDown(props.projectSection)}
            >
              <Typography variant={linkFont} sx={boldStyle}>
                PROJECTS
              </Typography>
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollDown(props.skillSection)}
            >
              <Typography variant={linkFont} sx={boldStyle}>
                SKILLS
              </Typography>
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollDown(props.linkSection)}
            >
              <Typography variant={linkFont} sx={boldStyle}>
                LINKS
              </Typography>
            </Button>
            <Box>
              <DarkModeSwitch
                onChange={switchMode}
                checked={props.isDarkMode}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
