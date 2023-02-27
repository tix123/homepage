import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {

    const textStyle = {
        fontWeight: "bold"
    }

    return (
        <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ padding: "20px" }}>
            <Grid item>
                <Typography variant="h6" align="center" gutterBottom sx={textStyle}>
                    MADE WITH
                </Typography>
            </Grid>
            <Grid item>
                <FavoriteIcon style={{ color: "f00" }} />
            </Grid>
            <Grid item>
                <Typography variant="h6" align="center" gutterBottom sx={textStyle}>
                    BY SEAN CHEN
                </Typography>
            </Grid>
        </Grid>

    )

}

export default Footer