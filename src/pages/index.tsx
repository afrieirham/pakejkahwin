import { Source_Serif_4 } from "next/font/google";
import React from "react";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export default function Home() {
  const services = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ].map((_) => ({
    name: "Urban Park Hall",
    location: "Shah Alam, Selangor",
    type: { name: "Wedding Hall", color: "green" },
    image:
      "https://firebasestorage.googleapis.com/v0/b/pakejkahwincom.appspot.com/o/services%2F314825016_644859110439104_9041130988362878036_n.jpg?alt=media&token=8add9dc9-82ef-422c-849f-64e911a620bb",
    socials: [
      {
        id: "instagram",
        link: "https://www.instagram.com/urbanparkhall.my/",
      },
      {
        id: "whatsapp",
        link: "https://wa.me/60121231234",
      },
      {
        id: "maps",
        link: "https://wa.me/60121231234",
      },
      {
        id: "tiktok",
        link: "https://wa.me/60121231234",
      },
      {
        id: "website",
        link: "https://wa.me/60121231234",
      },
    ],
  }));
  return (
    <div className="flex flex-col">
      <header className="flex w-full items-center justify-between p-8">
        <img src="/logo.png" className="h-[52px]" />
        <button className="btn-primary btn">Submit Service</button>
      </header>
      <main className="pt-4">
        <h1 className={`${sourceSerif4.className} text-center font-semibold`}>
          Your dream wedding starts here.
        </h1>
        <div className="mx-auto mb-16 mt-8 max-w-6xl ">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <tbody className="divide-y divide-gray-200 bg-white">
                {services.map((service) => (
                  <tr key={service.image}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm ">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img
                            className="h-11 w-11 rounded-full border"
                            src={service.image}
                            alt=""
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
                      <div className="text-gray-900">{service.location}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <Badge color={service.type.color}>
                        {service.type.name}
                      </Badge>
                    </td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium ">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span className="sr-only">, {service.name}</span>
                      </a>
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
  color: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex ring-${color}-600/20 items-center rounded-md bg-${color}-50 px-2 py-1 text-xs font-medium text-${color}-700 ring-1 ring-inset`}
    >
      {children}
    </span>
  );
}
