function Review({ reviewId, reviewText }) {
  return (
    <div className="bg-secondaryBlack w-full text-white flex flex-col items-start gap-[3vmin]">
      <p className="text-[1.1vmax]">#{reviewId}</p>
      <p className="text-[1.1vmax]">
        <span className="uppercase underline underline-offset-4">Review</span>:{" "}
        {reviewText}
      </p>
    </div>
  );
}

export default Review;
