// Material UI components
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import NearMeIcon from '@mui/icons-material/NearMe';

// Report image
import weatherTaiwan from "../img/taiwan_weather_small.png"
import happyBirdFriends from "../img/happy_bird_friends_small.jpg"
import lifeCountdown from "../img/life_countdown_small.png"

const Project = () => {

    const textStyle = { fontWeight: "bold" };

    const titleStyle = { fontWeight: "bold" };

    const listStyle = { color: "#666" };

    const contentStyle = { height: "150px" };

    const cardStyle = { width: "300px", border: "1px solid #100" }

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h3" align="center" gutterBottom sx={textStyle}>
                PROJECTS
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={9} xl={8}>

                    <Grid
                        container
                        // direction="row"
                        spacing={4}
                        // justifyContent="space-around"
                        alignItems="center"
                    >
                        <Grid item xs={12} md={6} xl={4} >
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={weatherTaiwan}
                                            alt="Current Weather for Taiwan"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                Weather Report
                                            </Typography>

                                            <Typography variant="body2" sx={listStyle}>
                                                <li>Google map API</li>
                                                <li>Taiwan open weather API</li>
                                                <li>React</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<GitHubIcon />}
                                                href="https://github.com/tix123/taiwan-weather-public"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://weathertaiwan.netlify.app/"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Link
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} xl={4}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={happyBirdFriends}
                                            alt="Happy Bird Friends"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                Happy Bird Friends
                                            </Typography>
                                            <Typography variant="body2" sx={listStyle}>
                                                <li>C#</li>
                                                <li>Unity</li>
                                                <li>Google play</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://play.google.com/store/apps/details?id=com.SeanChen.HappyBirdFriends"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Link
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={6} xl={4}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={lifeCountdown}
                                            alt="Life Countdown"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                Life Countdown
                                            </Typography>
                                            <Typography variant="body2" sx={listStyle}>
                                                <li>Java</li>
                                                <li>android studio</li>
                                                <li>Amazon Appstore</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://www.amazon.com/Sean-Chen-Life-countdown/dp/B00VPPLDJG/"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Link
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Project