// Material UI components
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// Import icons
import csharp from "../icons/csharp-original.svg"
import HeidiSQL from "../icons/HeidiSQL_logo_image.png"
import MariaDB from "../icons/mariadb-logo-vert_blue-transparent.png"
import CSP from "../icons/csp_logo.png"
import Insomnia from "../icons/insomnia-logo.png"
import android from "../icons/android-original.svg"
import androidStudio from "../icons/androidstudio-original.svg"
import CSS from "../icons/css3-original-wordmark.svg"
import Figma from "../icons/figma-original.svg"
import GitHub from "../icons/github-original.svg"
import Git from "../icons/git-original.svg"
import HTML from "../icons/html5-original-wordmark.svg"
import Java from "../icons/java-original.svg"
import JavaScript from "../icons/javascript-original.svg"
import MaterialUI from "../icons/materialui-original.svg"
import MySQL from "../icons/mysql-original.svg"
import NodeJS from "../icons/nodejs-original.svg"
import npm from "../icons/npm-original-wordmark.svg"
import Photoshop from "../icons/photoshop-line.svg"
import React from "../icons/react-original.svg"
import Redux from "../icons/redux-original.svg"
import Unity from "../icons/unity-original.svg"
import VisualStudio from "../icons/visualstudio-plain.svg"
import VSCode from "../icons/vscode-original.svg"
import WordPress from "../icons/wordpress-plain.svg"
import AdobeXD from "../icons/xd-line.svg"



const Skills = () => {

    const textStyle = {
        fontWeight: "bold"
    }
    
    const cardStyle = {
        display: 'flex',
        padding: "2px",
        border: "1px solid",
        borderColor:'text.disabled'
        // bgcolor: 'text.disabled'
    }

    const boxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pl: 1,
        pr: 1
    }
    const skills = [
        { name: "React", img: React },
        { name: "JavaScript", img: JavaScript },
        { name: "HTML", img: HTML },
        { name: "CSS", img: CSS },
        { name: "Redux", img: Redux },
        { name: "Material UI", img: MaterialUI },
        { name: "MySQL", img: MySQL },
        { name: "MariaDB", img: MariaDB },
        { name: "Java", img: Java },
        { name: "android", img: android },
        { name: "C#", img: csharp },
        { name: "WordPress", img: WordPress },
        { name: "Insomnia", img: Insomnia },
        { name: "Git", img: Git },
        { name: "GitHub", img: GitHub },
        { name: "Node.js", img: NodeJS },
        { name: "npm", img: npm },
        { name: "Unity", img: Unity },
        { name: "Visual Studio", img: VisualStudio },
        { name: "Visual Studio Code", img: VSCode },
        { name: "Android Studio", img: androidStudio },
        { name: "HeidiSQL", img: HeidiSQL },
        { name: "Adobe XD", img: AdobeXD },
        { name: "Figma", img: Figma },
        { name: "Photoshop", img: Photoshop },
        { name: "CLIP STUDIO PAINT", img: CSP },
    ]

    return (
        <Box sx={{padding:"20px"}}>
            <Typography variant="h2" align="center" gutterBottom sx={textStyle}>
                SKILLS
            </Typography>
            <Grid container justifyContent="center">

                <Grid item xs={12} sm={10} md={8} xl={7}>

                    <Grid
                        container
                        direction="row"
                        spacing={1}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {skills.map((item, index) => {
                            return (
                                <Grid item key={index}>
                                    <Card sx={cardStyle}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 30 }}
                                            image={item.img}
                                            alt={item.name}
                                        />
                                        <Box sx={boxStyle}>
                                            <Typography variant="body1" align="center">
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Skills