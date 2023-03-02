// Material UI components
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import Fab from '@mui/material/Fab';                                                                

// Section components
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Links from "./components/Links";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";



function App() {

    const [mode, setMode] = React.useState("light");

    const [showTopBtn, setShowTopBtn] = useState(false);

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

    // console.log("projectSection",projectSection)
    // console.log("showTopBtn",showTopBtn)
    
   

    const theme = createTheme({
        palette: {
            mode: mode,
        },
    });

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // const darkTheme = createTheme({
    //     palette: {
    //         mode: 'light',
    //     },
    // });


    const componentStyle = {
        marginTop: "100px"
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box>
                <Navigation
                    mode={mode}
                    setMode={setMode}
                    projectSection={projectSection}
                    skillSection={skillSection}
                    linkSection={linkSection}
                />
            </Box>
            <Box style={componentStyle}>
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
                    <KeyboardDoubleArrowUpIcon />
                </Fab>
            ) : (
                <></>
            )}


        </ThemeProvider>
    );
}

export default App;
