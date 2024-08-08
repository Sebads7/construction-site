import { useEffect, useState } from "react";
import { Ripple, initTWE } from "tw-elements";

initTWE({ Ripple });

const ButtonUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);
  return (
    <>
      <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className={`!fixed bottom-5 end-5  rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg 
         ${isVisible ? "" : "hidden"} z-10 `}
        onClick={backToTop}
      >
        <span className="[&>svg]:w-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default ButtonUp;
