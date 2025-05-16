// src/components/fields/Button.js

export default function Button({
  text,
  height,
  width,
  bgColor = 'bg-secondary',
  textColor = 'text-white',
  textSize = 'text-[18px]',
  border = 'border-none',
  borderColor = 'border-transparent',
  rounded = false,
}) {
  // If rounded is true → full pill. Otherwise apply a custom pair of corners.
  const borderRadiusClass = rounded ? 'rounded-full' : '';
  const customRadiusStyle = !rounded
    ? {
        borderTopLeftRadius: '15px',
        borderBottomRightRadius: '15px',
      }
    : {};

  return (
    <button
      style={customRadiusStyle}
      className={`
        ${bgColor} ${border} ${borderColor}
        ${textColor} ${height} ${width} ${textSize}
        ${borderRadiusClass}
        font-normal transition duration-300
      `}
    >
      {text}
    </button>
  )
}
