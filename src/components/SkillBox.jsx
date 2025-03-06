import React from "react";

const SkillBox = ({label, image, background, id}) => {
  return (
    <div>
      <div
        className="flex flex-col gap-2 items-center justify-center relative"
        id={id}
      >
        <img
          src={image}
          width={50}
          height={50}
          className={`rounded-full object-contain  bg-${background}`}
          alt=""
        />
        <h2 className="font-semibold text-xl text-white ">{label}</h2>
      </div>
    </div>
  );
};

export default SkillBox;
