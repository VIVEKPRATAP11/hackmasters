import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`rounded-md px-6 py-3 text-center text-[13px] font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] sm:text-[16px] ${
          active
            ? "bg-[#ff6d2d] text-white "
            : "bg-richhack-900 outline  text-[#ff6d2d] outline-1 outline-[#ff6d2d]"
        } transition-all duration-200 hover:scale-95 hover:shadow-none `}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
