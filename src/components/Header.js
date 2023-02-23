import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import Chip from '@mui/material/Chip';
// import Avatar from '@mui/material/Avatar';


const Header = () => {

    return (
        <div>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", width: "100%" }}>
                <Grid item xs={12}>
                    <Typography variant="h3" align="center">
                        Hi, I am Sean.
                    </Typography>
                    <Typography variant="h3" align="center">
                        I love to build things with software technologies.
                    </Typography>
                </Grid>

            </Grid>
        </div>
    )


}

export default Header
