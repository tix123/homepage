// Material UI components
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Section components
import Header from "./components/Header";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {

    const componentStyle = {
        marginTop: "100px"
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box style={componentStyle}>
                <Header />
            </Box>
            <Box style={componentStyle}>
                <Project />
            </Box>
            <Box style={componentStyle}>
                <Skills />
            </Box>
            <Box style={componentStyle}>
                <Contact />
            </Box>

            <Box style={componentStyle}>
                <Footer />
            </Box>

        </ThemeProvider>
    );
}

export default App;
