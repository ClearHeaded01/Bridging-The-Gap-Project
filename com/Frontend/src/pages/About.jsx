import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const cards = [
  {
    name: "Innovative Solutions",
    description: "Our project aims to create a Software that not only helps to convert real time video of hand gestures of American Sign Language but also shows the output for written text to ASL.",
    icon: PhoneIcon,
  },
  {
    name: "Dedicated Customer Support",
    description:
      "We believe in empowering our users with continuous support. Our dedicated team is always on standby to assist with any queries, ensuring a smooth, uninterrupted experience in content creation.",
    icon: LifebuoyIcon,
  },
  {
    name: "NGo & Media Collaborations",
    description:
      " We're eager to collaborate with media and Ngo to share insights and developments in AI technology, shaping the future .",
    icon: NewspaperIcon,
  },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background and layout elements */}
      {/* ... */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Universal Talk AI - ASL Translator
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Welcome to our AI-integrated platform, where advanced technology
            revolutionizes communication. We convert American Sign Language
            (ASL) hand gestures to text and vice versa, seamlessly translate
            between languages, and elevate dialogue with immersive
            text-to-speech synthesis. Experience the pinnacle of inclusive
            communication, where innovation meets precision. "Empowering the
            silent with a voice and the speechless with understanding."
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
