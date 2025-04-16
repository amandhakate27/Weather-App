import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import './InfoBox.css';

export default function InfoBox({ info }) {
    let CLEAR_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1515411151407-107ae8bab7e4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXIlMjB0ZW1wZXJhdHVyZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1569241095162-e3b9a583b9d3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHJhaW4lMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";

    return (

        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : info.temp < 10 ? COLD_URL : CLEAR_URL}
                        title="Cloudly Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{info.city}&nbsp;
                            {
                                info.humidity > 80
                                    ? <ThunderstormRoundedIcon /> : info.temp > 25
                                        ? <LightModeRoundedIcon /> : info.temp < 10
                                            ? <AcUnitRoundedIcon /> : ""
                            } </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature - {info.temp}&deg;C</p>
                            <p>Humidity - {info.humidity}</p>
                            <p>Min Temp - {info.minTemp}&deg;C</p>
                            <p>Max Temp - {info.maxTemp}&deg;C</p>
                            <p>The weather can be describe as <b>{info.weather}</b> & feels like - {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>


    );
}



