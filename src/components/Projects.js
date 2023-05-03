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

// Project image
import weatherTaiwan from "../img/taiwan_weather_small.jpg"
import happyBirdFriends from "../img/happy_bird_friends_small.jpg"
import lifeCountdown from "../img/life_countdown_small.png"
import coachingRightNow from "../img/coaching_right_now_mockup_small.png"
import discuss from "../img/discuss_mockup_small.png"
import mulliganFunding from "../img/mulligan_funding_mockup_small.png"


const Projects = () => {

    const textStyle = { fontWeight: "bold" };

    const titleStyle = { fontWeight: "bold" };

    const listStyle = {
        // color: "#666" 
    };

    const contentStyle = { height: "180px" };

    const cardStyle = { 
        border: "1px solid #100",
        borderColor:'text.disabled'
     }

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                PROJECTS
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={11} xl={10}>

                    <Grid
                        container
                        // direction="row"
                        spacing={4}
                        // justifyContent="space-around"
                        alignItems="center"
                    >

                        <Grid item xs={12} sm={6} md={4} xl={3} >
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={weatherTaiwan}
                                            alt="Taiwan Weather Report "
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                Taiwan Weather Report
                                            </Typography>

                                            <Typography variant="body2" sx={listStyle}>
                                                <li>Google map API</li>
                                                <li>Taiwan open weather API</li>
                                                <li>React</li>
                                                <li>Redux</li>
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

                        <Grid item xs={12} sm={6} md={4} xl={3}>
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
                                                <li>Google Play Store</li>
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

                        <Grid item xs={12} sm={6} md={4} xl={3}>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={coachingRightNow}
                                            alt="coaching_right_now_mockup"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                WordPress Mockup
                                            </Typography>

                                            <Typography variant="body2" sx={listStyle}>
                                                <li>WordPress</li>
                                                <li>JavaScript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<GitHubIcon />}
                                                href="https://github.com/tix123/coaching-right-now-mockup"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://34.64.181.188"
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

                        <Grid item xs={12} sm={6} md={4} xl={3} >
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={discuss}
                                            alt="discuss_mockup"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                WordPress Mockup
                                            </Typography>

                                            <Typography variant="body2" sx={listStyle}>
                                                <li>WordPress</li>
                                                <li>JavaScript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<GitHubIcon />}
                                                href="https://github.com/tix123/discuss-mockup"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://34.106.187.195"
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

                        <Grid item xs={12} sm={6} md={4} xl={3} >
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            image={mulliganFunding}
                                            alt="mulligan_funding_mockup"
                                        />
                                        <CardContent sx={contentStyle}>
                                            <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                WordPress Mockup
                                            </Typography>

                                            <Typography variant="body2" sx={listStyle}>
                                                <li>WordPress</li>
                                                <li>JavaScript</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                            </Typography>

                                        </CardContent>
                                        <CardActions sx={{ justifyContent: "center" }}>
                                            <Button
                                                variant="outlined"
                                                startIcon={<GitHubIcon />}
                                                href="https://github.com/tix123/mulligan-funding-mockup"
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                startIcon={<NearMeIcon />}
                                                href="https://35.236.206.74"
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



                        <Grid item xs={12} sm={6} md={4} xl={3}>
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

export default Projects