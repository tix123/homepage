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
import taiwanWeatherReport from "../img/taiwan_weather_small.jpg"
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
        borderColor: 'text.disabled'
    }

    const projects = [
        {
            title: "Taiwan Weather Report",
            image: taiwanWeatherReport,
            skills: [
                "Google map API",
                "Taiwan open weather API",
                "React",
                "Redux"
            ],
            code_url: "https://github.com/tix123/taiwan-weather-public",
            link_url: "https://weathertaiwan.netlify.app/"
        },
        {
            title: "Happy Bird Friends",
            image: happyBirdFriends,
            skills: [
                "C#",
                "Unity",
                "Google Play Store",
            ],
            code_url: null,
            link_url: "https://play.google.com/store/apps/details?id=com.SeanChen.HappyBirdFriends"
        },
        {
            title: "WordPress Mockup",
            image: coachingRightNow,
            skills: [
                "WordPress",
                "JavaScript",
                "HTML",
                "CSS",
            ],
            code_url: "https://github.com/tix123/coaching-right-now-mockup",
            link_url: "https://34.64.181.188"
        },
        {
            title: "WordPress Mockup",
            image: discuss,
            skills: [
                "WordPress",
                "JavaScript",
                "HTML",
                "CSS",
            ],
            code_url: "https://github.com/tix123/discuss-mockup",
            link_url: "https://34.106.187.195"
        },
        {
            title: "WordPress Mockup",
            image: mulliganFunding,
            skills: [
                "WordPress",
                "JavaScript",
                "HTML",
                "CSS",
            ],
            code_url: "https://github.com/tix123/mulligan-funding-mockup",
            link_url: "https://35.236.206.74"
        },
        {
            title: "Life Countdown",
            image: lifeCountdown,
            skills: [
                "Java",
                "android studio",
                "Amazon Appstore",
            ],
            code_url: null,
            link_url: "https://www.amazon.com/Sean-Chen-Life-countdown/dp/B00VPPLDJG/"
        },
    ]

    return (
        <Box sx={{ padding: "20px" }}>
            <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                PROJECTS
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={11} xl={10}>
                    <Grid
                        container
                        spacing={4}
                        alignItems="center"
                    >
                        {projects.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                                    <Grid container justifyContent="center">
                                        <Grid item>
                                            <Card sx={cardStyle}>
                                                <CardMedia
                                                    component="img"
                                                    image={item.image}
                                                    alt={item.title}
                                                />
                                                <CardContent sx={contentStyle}>
                                                    <Typography variant="h6" sx={titleStyle} gutterBottom>
                                                        {item.title}
                                                    </Typography>

                                                    <Typography variant="body2" sx={listStyle} >
                                                        {item.skills.map((item, index) => {
                                                            return (
                                                                <li key={index}>{item}</li>
                                                            )
                                                        })}
                                                    </Typography>

                                                </CardContent>
                                                <CardActions sx={{ justifyContent: "center" }}>
                                                    {item.code_url ? (
                                                        <Button
                                                            variant="outlined"
                                                            startIcon={<GitHubIcon />}
                                                            href={item.code_url}
                                                            rel="noreferrer"
                                                            target="_blank"
                                                        >
                                                            Code
                                                        </Button>
                                                    ) : (
                                                        <></>
                                                    )}

                                                    <Button
                                                        variant="outlined"
                                                        startIcon={<NearMeIcon />}
                                                        href={item.link_url}
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
                            )
                        })}

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Projects