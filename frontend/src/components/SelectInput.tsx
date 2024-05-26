import { useState } from "react";
import { motion, Variants } from "framer-motion";
import React from "react";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const HoverList = "py-2 px-3 hover:bg-black/80 hover:text-white cursor-pointer";

export interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
  ({ onChange, ...props }, ref) => {
    const value = props.value as string;
    const [isOpen, setIsOpen] = useState(true);
    const [selected, setSelected] = useState(value || "Select a Project");
    // console.log(selected);

    const hasSelected = selected !== "Select a Project";

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    type ProjectType = string | any;

    const handleSelect = (project: string | ProjectType) => {
      setSelected(project);
      setIsOpen(!isOpen);
      if (onChange) {
        onChange(project);
      }
    };

    return (
      <motion.div
        className={`flex w-full bg-white border border-gray-300 text-sm rounded-lg text-slate-500 h-[4.5vh] `}
        whileTap={{ scale: 0.97 }}
      >
        <motion.div
          className=" w-full transition "
          initial={true}
          animate={!isOpen ? "open" : "closed"}
        >
          {!isOpen && (
            <div className=" relative top-10 ">
              <motion.div
                className="absolute w-full  mt-1 border bg-white border-gray-300 rounded-lg shadow-2xl "
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.ul
                  style={{ pointerEvents: isOpen ? "none" : "auto" }}
                  className="  cursor-pointer  "
                >
                  <motion.li
                    variants={itemVariants}
                    className={`hover:rounded-t-lg ${HoverList}`}
                    onClick={() => {
                      handleSelect("Carpentry");
                    }}
                  >
                    Carpentry
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className={HoverList}
                    onClick={() => {
                      handleSelect("Painting");
                    }}
                  >
                    Painting
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className={HoverList}
                    onClick={() => {
                      handleSelect("Bathroom Remodeling");
                    }}
                  >
                    Bathroom Remodeling
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className={HoverList}
                    onClick={() => {
                      handleSelect("Kitchen Remodeling");
                    }}
                  >
                    Kitchen Remodeling
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className={`hover:rounded-b-lg ${HoverList}`}
                    onClick={() => {
                      handleSelect(" General Remodeling");
                    }}
                  >
                    General Remodeling
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>
          )}

          <motion.div
            className="relative flex items-center w-full h-full px-2.5 cursor-pointer focus:border-black focus:border-2 focus:rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-full border-none ring-white ${
                hasSelected ? "text-black" : " text-slate-500"
              }`}
              contentEditable={false}
              onInput={(event) => {
                const target = event.target as HTMLSelectElement;
                if (onChange) {
                  const newEvent = {
                    target: {
                      value: target.value,
                    },
                  } as React.ChangeEvent<HTMLSelectElement>;
                  onChange(newEvent);
                }
              }}
              ref={ref}
            >
              {selected}
            </div>
            <motion.div
              className="cursor-pointer"
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

export default SelectInput;
