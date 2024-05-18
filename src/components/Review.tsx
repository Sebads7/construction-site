import { Rating } from "@mui/material";
import { useState } from "react";

const Review = () => {
  const [value] = useState<number | null>(5);
  return (
    <div className="w-full h-[25rem] grid grid-cols-3 gap-10 px-[8rem] py-[1rem] ">
      <div className=" h-full border-2 p-10 col-span-2 ">
        <div className=" flex justify-center">
          <Rating
            value={value}
            name="read-only "
            defaultValue={4.5}
            size="large"
            onChange={() => {}}
            readOnly
          />
        </div>
        <div className="text-center px-10 mt-10">
          <h2 className=" px-10 text-slate-600 ">
            ABJ Painting & Remodeling deserves a solid five-star rating for
            their exceptional service and attention to detail. Their skilled
            craftsmen exceeded our expectations, delivering results that not
            only refreshed our home but also revitalized our living experience.
            We highly recommend ABJ Painting & Remodeling for anyone seeking
            top-notch service and impeccable craftsmanship.
          </h2>
          <p className="mt-5 text-cyan-600">John Doe</p>
        </div>
      </div>
      <div className=" h-full bg-red-300"></div>
    </div>
  );
};

export default Review;
