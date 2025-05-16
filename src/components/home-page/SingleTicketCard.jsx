import React from "react";
// import Button from "@components/fields/button";

function SingleTicketsCard({
  img,
  title,
  date,
  location,
  description,
  buttonSeen = true,
  topTitle,
  buttonSize = "w-[280px]",
  isDateLocation = true,
  bulletPoint = [],
}) {
  return (
    <div className="w-full relative max-w-[1200px] h-auto lg:h-[490px] mx-auto flex flex-col lg:flex-row items-center text-white overflow-hidden rounded-[20px]">
      {/* Image Section */}
      <div className="w-full lg:w-3/5 h-[250px] lg:h-full">
        <img
          src={img}
          alt="Event"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>

      {/* Content Section */}
      <div
        className="
        w-full lg:w-1/2 max-h-[390px] h-full overflow-y-scroll no-scrollbar flex flex-col justify-between gap-y-5 items-start
        bg-white text-black
        p-6
        rounded-[20px]
        lg:absolute lg:right-0
        static"
      >
        <h2 className="text-secondary font-medium [font-size:clamp(14px,2vw,16px)] h-fit">
          {topTitle}
        </h2>

        <h2 className="text-center font-semibold [font-size:clamp(24px,2vw,28px)]">
          {title}
        </h2>

        {buttonSeen && (
          <div className="text-start text-[16px] font-light">
            <p>{description}</p>
          </div>
        )}

        {buttonSeen && (
          <ul className="list-disc list-inside text-start text-[16px] font-normal space-y-1">
            {isDateLocation ? (
              <>
                <li>Date: {date}</li>
                <li>Location: {location}</li>
              </>
            ) : (
              <>
                {bulletPoint.length > 0 && (
                  <ul className="list-disc list-inside text-start text-[16px] font-normal space-y-1">
                    {bulletPoint.map((point, index) => (
                      <li
                        key={index}
                        className="font-normal text-[16px]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </ul>
        )}

        {/* {buttonSeen && (
          <Button
            text="Get Your Ticket Now"
            height="h-[46px]"
            width={buttonSize}
            bgColor="bg-primary"
            textColor="text-black"
            textSize="text-[16px]"
          />
        )} */}
      </div>
    </div>
  );
}

export default SingleTicketsCard;
