// src/components/fields/CustomDropdown.jsx
'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export default function CustomDropdown({
  placeholder = 'Select an option',
  options = [],
  bgType = 'dark',
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(placeholder)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className={`flex justify-between items-center w-full p-3 rounded-full border ${
          bgType === 'dark'
            ? 'border-white text-white'
            : 'border-black text-black'
        } bg-transparent cursor-pointer`}
        onClick={() => setIsOpen((o) => !o)}
      >
        {selected}
        <ChevronDownIcon className="h-5 w-5" />
        </div>
      {isOpen && (
        <ul
          className={`absolute z-50 w-full mt-2 ${
            bgType === 'dark' ? 'bg-black' : 'bg-white'
          } border border-white rounded-lg overflow-hidden shadow-lg`}
        >
          {options.map((opt, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(opt)
                setIsOpen(false)
              }}
              className={`p-3 ${
                bgType === 'dark' ? 'text-white' : 'text-black'
              } hover:bg-primary hover:text-black cursor-pointer transition`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
