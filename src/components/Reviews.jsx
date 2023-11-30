import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Review from "./Review";

function Reviews({ reviewsData }) {
  return (
    <Carousel fullHeightHover={false} autoPlay={false} animation="slide">
      {reviewsData[0] ? (
        reviewsData.map((item, index) => (
          <Paper key={index}>
            <Review reviewId={index + 1} reviewText={item.body} />
          </Paper>
        ))
      ) : (
        <p className="text-white text-[1.1vmax] uppercase underline underline-offset-4">
          No reviews yet.
        </p>
      )}
    </Carousel>
  );
}

export default Reviews;
