// Material Ui components
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import weatherTaiwan from "../img/taiwan_weather.png"
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const Project = () => {
    return (
        <Grid container justifyContent="center" sx={{ backgroundColor: "#999" }}>
            <Grid item xs={12} md={10} xl={8}>
                <Typography variant="h4" align="center">
                    Projects
                </Typography>
                <Grid
                    container
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <Card sx={{}}>

                            <CardMedia
                                component="img"

                                image={weatherTaiwan}
                                alt="Current Weather for Taiwan"
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Current Weather for Taiwan
                                </Typography>
                                <Typography variant="body2" >
                                    A combination of Google map API and Taiwan open weather API
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Project