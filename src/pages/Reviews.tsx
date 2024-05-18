import Container from "@/components/Container";
import Review from "@/components/Review";
import { Rating } from "@mui/material";
import { useState } from "react";

const Reviews = () => {
  const [value] = useState<number | null>(5);
  return (
    <Container>
      <div className="bg-black opacity-80 w-full h-[65px] flex fixed"></div>
      <div className="w-full left-0 h-full flex  flex-col items-center  pt-10  ">
        <div className=" w-full h-[15rem] flex justify-center items-center  ">
          <div className=" bg-red-500/90 h-[4.5rem] w-[18rem] flex justify-center items-center  ">
            <h1 className="flex text-lg  text-center justify-center text-white font-semibold outline  outline-offset-8 outline-gray-300 w-[25rem]  ">
              See our Work
            </h1>
          </div>
        </div>
      </div>

      <Review />

      <div className="w-full h-full px-[8rem] my-[10rem] ">
        {/* first review */}
        <div className="border-2 rounded-lg w-[60rem] h-[10rem]">
          <div className="p-4  ">
            <div className="flex flex-row gap-2 items-center ">
              <p>2024/2/15</p>
              <Rating
                value={value}
                name="read-only "
                defaultValue={4.5}
                size="small"
                onChange={() => {}}
                readOnly
              />
            </div>
            <p className="mt-3">
              We highly recommend ABJ Painting & Remodeling for anyone seeking
              top-notch service and impeccable craftsmanship.
            </p>
          </div>
        </div>
        {/* second review */}
        <div className="mt-10 border-2 rounded-lg w-[60rem] h-[10rem]">
          <div className="p-4  ">
            <div className="flex flex-row gap-2 items-center ">
              <p>2024/2/15</p>
              <Rating
                value={value}
                name="read-only "
                defaultValue={4.5}
                size="small"
                onChange={() => {}}
                readOnly
              />
            </div>
            <p className="mt-3">
              We highly recommend ABJ Painting & Remodeling for anyone seeking
              top-notch service and impeccable craftsmanship.
            </p>
          </div>
        </div>

        {/* third review */}

        <div className="mt-10 border-2 rounded-lg w-[60rem] h-[10rem]">
          <div className="p-4  ">
            <div className="flex flex-row gap-2 items-center ">
              <p>2024/2/15</p>
              <Rating
                value={value}
                name="read-only "
                defaultValue={4.5}
                size="small"
                onChange={() => {}}
                readOnly
              />
            </div>
            <p className="mt-3">
              We highly recommend ABJ Painting & Remodeling for anyone seeking
              top-notch service and impeccable craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
