import React from "react"

const HighlightText = ({ text }) => {
  return (
    <span className="bg-[#ff6d2d] bg-clip-text font-bold text-transparent">
      {" "}
      {text}
    </span>
  )
}

export default HighlightText
