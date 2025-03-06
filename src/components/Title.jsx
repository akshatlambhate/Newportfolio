import React from 'react'

const Title = ({title}) => {
  return (
    <div className="flex sm:pb-8 mt-6 sm:mt-8 w-[80vw] mx-auto sm:items-start sm:justify-normal justify-center ">
    <div className="flex items-center">
      <div className=" px-3 py-1 w-fit tracking-wider ">
        <p className=" text-3xl sm:text-2xl text-white border-none sm:border border-black">
          <span className=" text-primary"># </span>{title}{" "}
        </p>
      </div>
      <hr className="w-[40vw] text-primary hidden sm:inline" />
    </div>
  </div>
  )
}

export default Title