import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IoMdClose } from 'react-icons/io'
import { Button } from '@/components/ui/button'

type GalleryModalProps = {
  images: string[]
  selectedImageIndex: number
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number | null>>
  handleImageClick: (index: number) => void
}

const GalleryModal = ({
  images,
  selectedImageIndex,
  setSelectedImageIndex,
  handleImageClick,
}: GalleryModalProps) => {
  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? prevIndex === 0
          ? images.length - 1
          : prevIndex - 1
        : 0,
    )
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : 0,
    )
  }

  const handleCloseModal = () => {
    setSelectedImageIndex(null)
  }

  // Calculate indices for showing images
  const getVisibleImages = (index: number | null) => {
    if (index === null) return []
    const halfVisibleCount = 3 // Half of the 5 images shown
    const totalVisibleCount = 5
    let start = Math.max(index - halfVisibleCount, 0)
    let end = start + totalVisibleCount

    if (end > images.length) {
      end = images.length
      start = Math.max(end - totalVisibleCount, 0)
    }

    return images.slice(start, end)
  }

  // Get the range of visible images based on the selected index
  const visibleImages = getVisibleImages(selectedImageIndex)
  return (
    <div className="fixed left-0 top-0 z-[9999999] h-full w-full bg-black/90 backdrop-blur-md">
      <div className="flex h-full w-full flex-col">
        {/* //////////   CloseModal BUTTON //////////////////// */}

        <div className="flex h-[60rem] w-full flex-col gap-4 overflow-y-auto tablet:px-10 mobile:h-full mobile:px-4">
          <div className="mb-3 flex w-full justify-end pr-14 pt-5 mobile:mb-0 mobile:translate-x-4 mobile:pr-0">
            <button
              type="button"
              title="Close"
              onClick={handleCloseModal}
              className="flex items-center justify-center py-6 pr-6 text-white tablet:py-0 tablet:pt-4 mobile:py-3"
            >
              <IoMdClose size={30} className="" />
            </button>
          </div>
          <img
            src={images[selectedImageIndex]}
            alt="selected"
            className="mx-auto h-3/5 w-full max-w-4xl object-cover lg:max-w-2xl tablet:h-3/4 mobile:h-[60dvh] mobile:w-full"
          />

          {/* //////////         Prev BUTTON //////////////////// */}

          <div className="flex flex-row items-center justify-center gap-2 overflow-x-auto">
            <Button
              variant="custom"
              size="icon"
              onClick={handlePrevImage}
              className="rounded-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {visibleImages.map((image) => {
              const imageIndex = images.indexOf(image)
              return (
                <img
                  key={imageIndex}
                  src={image}
                  alt="gallery"
                  className={`${
                    imageIndex === selectedImageIndex
                      ? 'selected h-16 w-16 mobile:h-10 mobile:w-10'
                      : 'h-10 w-10 mobile:h-5 mobile:w-5'
                  } rounded-md border border-neutral-200`}
                  onClick={() => handleImageClick(imageIndex)}
                />
              )
            })}

            {/* //////////         Next  BUTTON //////////////////// */}
            <Button
              variant="custom"
              size="icon"
              onClick={handleNextImage}
              className="rounded-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          {/* //////////      Count      //////////////////// */}
          <p className="col-span-4 mt-5 justify-self-center text-center text-white tablet:mt-1">{`Photo ${
            selectedImageIndex + 1
          } of ${images.length}`}</p>
        </div>
      </div>
    </div>
  )
}

export default GalleryModal
