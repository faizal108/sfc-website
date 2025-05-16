// src/components/fields/SearchableDropdown.jsx
'use client'

import { useState, useEffect, useRef } from 'react'

export default function SearchableDropdown({
  placeholder = 'Search...',
  options = [],
  bgType = 'dark',
}) {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState([])
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // filter logic
  useEffect(() => {
    if (query) {
      setFiltered(
        options.filter((o) =>
          o.toLowerCase().includes(query.toLowerCase())
        )
      )
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [query, options])

  // click outside
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative w-full" ref={ref}>
      <input
        type="text"
        className={`w-full p-3 rounded-full border bg-transparent ${
          bgType === 'dark' ? 'border-white text-white' : 'border-black text-black'
        }`}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {open && (
        <ul className="absolute z-50 w-full mt-2 bg-black border border-white rounded-lg overflow-auto max-h-60 shadow-lg">
          {filtered.length ? (
            filtered.map((opt, i) => (
              <li
                key={i}
                onClick={() => {
                  setQuery(opt)
                  setOpen(false)
                }}
                className="p-3 text-white hover:bg-primary hover:text-black cursor-pointer"
              >
                {opt}
              </li>
            ))
          ) : (
            <li className="p-3 text-gray-400 italic">No matches found</li>
          )}
        </ul>
      )}
    </div>
  )
}
