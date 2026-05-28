import Container from '@/components/Container'
import Review from '@/components/Review'

import { Rating } from '@mui/material'
import { useState } from 'react'

const Reviews = () => {
  const [value] = useState<number | null>(5)
  return (
    <Container>
      <div className="fixed flex h-[65px] w-full bg-black opacity-80"></div>

      {/* TITLE SECTION */}
      <div className="left-0 flex h-[30rem] w-full flex-col items-center justify-center py-10">
        <div className="flex h-[300px] w-full items-center justify-center">
          <div className="flex h-[5.5rem] w-[22rem] items-center justify-center bg-zinc-800/85">
            <h1 className="flex w-[30rem] justify-center text-center text-xl font-semibold text-white outline outline-offset-8 outline-gray-300">
              See Our Work
            </h1>
          </div>
        </div>
      </div>

      <div className="my-[10rem] h-full w-full px-[8rem]">
        {/* first review */}
        <div className="h-[10rem] w-[60rem] rounded-lg border-2">
          <div className="p-4">
            <div className="flex flex-row items-center gap-2">
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
        <div className="mt-10 h-[10rem] w-[60rem] rounded-lg border-2">
          <div className="p-4">
            <div className="flex flex-row items-center gap-2">
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

        <div className="mt-10 h-[10rem] w-[60rem] rounded-lg border-2">
          <div className="p-4">
            <div className="flex flex-row items-center gap-2">
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
      <div className="flex justify-center">
        <Review />
      </div>
    </Container>
  )
}

export default Reviews
