// Material UI components
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, responsiveFontSizes, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Section components
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import NavBar from './components/NavBar';

function App() {

    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const [showTopBtn, setShowTopBtn] = useState(() => false);

    const projectSection = useRef(null);
    const skillSection = useRef(null);
    const linkSection = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const theme = responsiveFontSizes(createTheme({
        palette: {
            mode: isDarkMode ? "dark" : "light",
        },
    }));

    // theme = responsiveFontSizes(theme);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const componentStyle = {
        marginTop: "100px"
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <NavBar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    projectSection={projectSection}
                    skillSection={skillSection}
                    linkSection={linkSection}
                />
                {/* <Navigation
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                    projectSection={projectSection}
                    skillSection={skillSection}
                    linkSection={linkSection}
                /> */}
            </Box>
            <Box >
                <Header />
            </Box>
            <Box style={componentStyle} ref={projectSection}>
                <Projects />
            </Box>
            <Box style={componentStyle} ref={skillSection}>
                <Skills />
            </Box>
            <Box style={componentStyle} ref={linkSection}>
                <Links />
            </Box>

            <Box style={componentStyle}>
                <Footer />
            </Box>
            {showTopBtn ? (
                <Fab
                    color="primary"
                    onClick={goToTop}
                    sx={{
                        position: "fixed",
                        right: "30px",
                        bottom: "70px"
                    }}>
                    <KeyboardArrowUpIcon sx={{ fontSize: 45 }} />
                </Fab>
            ) : (
                <></>
            )}

        </ThemeProvider>
    );
}

export default App;
