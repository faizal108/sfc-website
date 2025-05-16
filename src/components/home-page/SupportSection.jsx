// src/components/home-page/SupportSection.jsx
"use client";

import SupportCard from "@/components/home-page/SupportCard";
import Button from "@/components/fields/button";
import CustomDropdown from "@/components/fields/dropdown";
import SearchableDropdown from "@/components/fields/searchField";

const cards = [
  {
    imgSrc: "/photos/support1.png",
    title: "Green Future Foundation",
    subtitle: "Advancing solar power in rural communities.",
  },
  {
    imgSrc: "/photos/support2.png",
    title: "Eco Energy Alliance",
    subtitle: "Innovating wind energy solutions worldwide.",
  },
  {
    imgSrc: "/photos/support3.png",
    title: "Bright Earth Initiative",
    subtitle: "Providing clean energy to underdeveloped regions.",
  },
  {
    imgSrc: "/photos/support4.png",
    title: "Zero Carbon Mission",
    subtitle: "Fighting climate change through renewable resources.",
  },
  {
    imgSrc: "/photos/support5.png",
    title: "United Family",
    subtitle: "Advancing solar power in rural communities.",
  },
  {
    imgSrc: "/photos/support6.png",
    title: "Eco Energy Alliance",
    subtitle: "Innovating wind energy solutions worldwide.",
  },
];

export default function SupportSection() {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-12 lg:px-20 gap-y-14">
      {/* Header */}
      <div className="text-center mb-10 flex flex-col gap-y-7">
        <h2 className="text-[36px] md:text-4xl font-bold uppercase">
          Support Renewable Energy Initiatives
        </h2>
        <p className="text-[18px]">Explore global non‑profits…</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 flex flex-col gap-7">
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-[14px]">Search here</h3>
              <SearchableDropdown
                placeholder="Search organization"
                options={[
                  "Green Future Foundation",
                  "Climate Action Alliance" /*…*/,
                ]}
              />
            </div>
            <div>
              <h3 className="font-medium text-[14px]">Organization name</h3>
              <CustomDropdown
                placeholder="Select Organization"
                options={[
                  "Green Future Foundation",
                  "Eco Warriors United" /*…*/,
                ]}
              />
            </div>
            <div>
              <h3 className="font-medium text-[14px]">Country</h3>
              <CustomDropdown
                placeholder="Please Select"
                options={["India", "Canada", "Egypt"]}
              />
            </div>
            <div>
              <h3 className="font-medium text-[14px]">Browse by A–Z</h3>
              <CustomDropdown
                placeholder="Please Select"
                options={["Green", "Climate", "Warriors"]}
              />
            </div>
          </div>
          <Button
            text="Apply Filter"
            height="h-[44px]"
            width="w-full"
            bgColor="bg-primary"
            textColor="text-black"
            textSize="text-[14px]"
          />
        </aside>

        {/* Cards */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
          {cards.map((c, i) => (
            <SupportCard
              key={i}
              imageSrc={c.imgSrc}
              title={c.title}
              description={c.subtitle}
              showButton={false}
              locationShow={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
