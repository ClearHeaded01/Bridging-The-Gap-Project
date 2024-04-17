import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    



    name: "ASL to text",
    description:
      "This technology converts American Sign Language gestures captured on video into written text. Imagine someone signing, and the system translates their movements into words on a screen.",
    href: "/dashboard?tab=asltotext",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Text to ASL",
    description:
      "This flips the above concept. It transforms written text into a visual representation of American Sign Language signs. Think typing a sentence and seeing it translated into a video of ASL signs.",
    href: "/dashboard?tab=texttoasl",
    icon: LockClosedIcon,
  },
  {
    name: "Text to speech",
    description:
      " This is a common feature that converts written text into audible speech using a computer-generated voice. It's like having a digital narrator read text aloud.",
    href: "/dashboard?tab=texttospeech",
    icon: ArrowPathIcon,
  },
  {
    name: "Multilingual Text",
    description:
      "This refers to technology that supports translation between multiple written languages. So, you can type something in English and have it translated into Spanish, French, or any other supported language.",
    href: "/dashboard?tab=multilingualtext",
    icon: ArrowPathIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
          One stop solution for fluent communication

          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Empowering the silent with a voice and the speechless with understanding.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Our project aims to create a Software that not only helps to convert real time video of hand gestures of American Sign Language but also shows the output for written text to ASL.

          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}