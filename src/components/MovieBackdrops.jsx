import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function MovieBackdrops({ backdrops }) {
  return (
    <Carousel
      stopAutoPlayOnHover={false}
      fullHeightHover={false}
      duration={2000}
      indicators={false}
    >
      {backdrops.map((backdrop, index) => (
        <Paper key={index}>
          <img src={backdrop} />
        </Paper>
      ))}
    </Carousel>
  );
}

export default MovieBackdrops;
