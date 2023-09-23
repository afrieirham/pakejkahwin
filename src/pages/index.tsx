import { locations, serviceType } from "@/constants";
import { TailwindColors } from "@/types";
import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export default function Home() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const services = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].map((_) => ({
    name: "Urban Park Hall",
    location: {
      district: "Shah Alam",
      state: "Selangor",
    },
    type: { name: "Wedding Hall", color: "purple" as TailwindColors },
    image:
      "https://firebasestorage.googleapis.com/v0/b/pakejkahwincom.appspot.com/o/services%2Faustin-chen--WqFNA_8yMQ-unsplash.jpg?alt=media&token=832f0eba-790d-4190-89e6-4f15ea96ed0c",
    socials: [
      {
        name: "instagram",
        link: "https://www.instagram.com/urbanparkhall.my/",
      },
      {
        name: "whatsapp",
        link: "https://wa.me/60121231234",
      },
      {
        name: "maps",
        link: "https://wa.me/60121231234",
      },
      {
        name: "tiktok",
        link: "https://wa.me/60121231234",
      },
      {
        name: "website",
        link: "https://wa.me/60121231234",
      },
      {
        name: "facebook",
        link: "https://wa.me/60121231234",
      },
    ],
  }));

  return (
    <div className="flex flex-col">
      <header className="relative flex w-full items-center justify-between p-8">
        <img
          src="/logo.png"
          className="h-[52px] "
          alt="PackageKahwin.com logo"
        />
        <button className="btn-primary btn">Submit Service</button>
      </header>
      <main className="pt-4">
        <h1 className={`${sourceSerif4.className} text-center font-semibold`}>
          Your dream wedding starts here.
        </h1>

        <div className="mt-8 flex w-full justify-center space-x-2">
          <select
            id="service"
            name="service"
            className="mt-2 block w-full max-w-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option disabled selected>
              Service
            </option>
            {serviceType.map((type) => (
              <option>{type}</option>
            ))}
          </select>
          <select
            id="state"
            name="state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setDistrict("");
            }}
            className="mt-2 block w-full max-w-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option disabled selected value="">
              State
            </option>
            {locations.map((location) => (
              <option>{location.state}</option>
            ))}
          </select>
          <select
            id="district"
            name="district"
            disabled={!state}
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-2 block w-full max-w-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
          >
            <option disabled selected value="">
              District
            </option>
            {locations
              .find((s) => s.state === state)
              ?.district.map((d) => <option>{d}</option>)}
          </select>
        </div>

        <div className="mx-auto mb-16 mt-8 max-w-6xl ">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200 bg-white">
                {services.map((service) => (
                  <tr key={service.image}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm ">
                      <div className="flex items-center">
                        <div className="relative h-11 w-11 flex-shrink-0">
                          <Image
                            className="rounded-full border border-stone-800 object-cover object-center"
                            src={service.image}
                            alt={`${service.name} logo`}
                            fill
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {service.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">
                        {service.location.district}, {service.location.state}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <Badge color={service.type.color}>
                        {service.type.name}
                      </Badge>
                    </td>
                    <td className="relative flex items-center justify-end space-x-2 whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium">
                      {service.socials
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((social) => (
                          <a
                            href={social.link}
                            className="mt-2 rounded outline-none focus:ring-2 focus:ring-primary"
                            target="_blank"
                          >
                            <SocialIcon name={social.name} />
                          </a>
                        ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function Badge({
  color,
  children,
}: {
  color: TailwindColors;
  children: React.ReactNode;
}) {
  const colorVariants = {
    slate: "ring-slate-600/20 bg-slate-50 text-slate-700",
    gray: "ring-gray-600/20 bg-gray-50 text-gray-700",
    zinc: "ring-zinc-600/20 bg-zinc-50 text-zinc-700",
    neutral: "ring-neutral-600/20 bg-neutral-50 text-neutral-700",
    stone: "ring-stone-600/20 bg-stone-50 text-stone-700",
    red: "ring-red-600/20 bg-red-50 text-red-700",
    orange: "ring-orange-600/20 bg-orange-50 text-orange-700",
    amber: "ring-amber-600/20 bg-amber-50 text-amber-700",
    yellow: "ring-yellow-600/20 bg-yellow-50 text-yellow-700",
    lime: "ring-lime-600/20 bg-lime-50 text-lime-700",
    green: "ring-green-600/20 bg-green-50 text-green-700",
    emerald: "ring-emerald-600/20 bg-emerald-50 text-emerald-700",
    teal: "ring-teal-600/20 bg-teal-50 text-teal-700",
    cyan: "ring-cyan-600/20 bg-cyan-50 text-cyan-700",
    sky: "ring-sky-600/20 bg-sky-50 text-sky-700",
    blue: "ring-blue-600/20 bg-blue-50 text-blue-700",
    indigo: "ring-indigo-600/20 bg-indigo-50 text-indigo-700",
    violet: "ring-violet-600/20 bg-violet-50 text-violet-700",
    purple: "ring-purple-600/20 bg-purple-50 text-purple-700",
    fuchsia: "ring-fuchsia-600/20 bg-fuchsia-50 text-fuchsia-700",
    pink: "ring-pink-600/20 bg-pink-50 text-pink-700",
    rose: "ring-rose-600/20 bg-rose-50 text-rose-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colorVariants[color]}`}
    >
      {children}
    </span>
  );
}

const SocialIcon = ({ name }: { name: string }) => {
  const size = "h-6 w-6";

  if (name === "facebook") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-brand-facebook fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-brand-instagram fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>
    );
  }

  if (name === "maps")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-map-pin fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
      </svg>
    );

  if (name === "tiktok")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-brand-tiktok fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
      </svg>
    );

  if (name === "website")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-world fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
      </svg>
    );

  if (name === "whatsapp")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`icon icon-tabler icon-tabler-brand-whatsapp fill-none stroke-stone-500 ${size}`}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    );

  return null;
};
