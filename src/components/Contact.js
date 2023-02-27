import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {

    const textStyle = {
        fontWeight: "bold"
    }

    return (
        <Box sx={{padding: "20px", textAlign:"center"}}>
            <Typography variant="h3" align="center" gutterBottom sx={textStyle}>
                CONTACT
            </Typography>

            <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/sean-chen-canada/"
                rel="noreferrer"
                target="_blank"
                sx={{margin:"50px"}}
            >
                Linkedin
            </Button>
        </Box>
    )

}

export default Contact