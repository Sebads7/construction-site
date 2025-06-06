import { useEffect, useRef, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

const HoverList = 'py-2 px-3 hover:bg-black/80 hover:text-white cursor-pointer'

interface SelectInputProps {
  value: string
  onChange: (value: string) => void
  options: string[]
}

const SelectInput: React.FC<SelectInputProps> = ({
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(value)
  const selectRef = useRef<HTMLDivElement>(null)
  // console.log(selected);

  useEffect(() => {
    setSelected(value)
  }, [value])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.body.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange(option)
    setIsOpen(false)
  }

  return (
    <motion.div
      className={`flex h-[2.5rem] w-full rounded-lg border border-gray-300 bg-white text-sm text-slate-500`}
      whileTap={{ scale: 0.97 }}
      ref={selectRef}
    >
      <motion.div
        className="w-full transition"
        initial={true}
        animate={isOpen ? 'open' : 'closed'}
      >
        {isOpen && (
          <div className="relative top-10 z-[2] tablet:translate-y-[-14.4rem]">
            <motion.div
              className="absolute mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-2xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.ul
                style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
                className="cursor-pointer"
              >
                {options.map((option, index) => (
                  <motion.li
                    variants={itemVariants}
                    key={option}
                    className={
                      index === 0
                        ? `hover:rounded-t-lg ${HoverList}`
                        : index === options.length - 1
                          ? `hover:rounded-b-lg ${HoverList}`
                          : HoverList
                    }
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        )}

        <motion.div
          className="relative flex h-full w-full cursor-pointer items-center px-2.5 focus:rounded-lg focus:border-2 focus:border-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-full border-none ring-white ${
              selected ? 'text-black' : 'text-slate-500'
            }`}
            // contentEditable={false}
          >
            {selected ? selected : 'Select a Project'}
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
  )
}

export default SelectInput
