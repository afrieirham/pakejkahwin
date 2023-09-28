const util = require("util");
const foo = Bun.file("data.csv");
const csv = await foo.text();

const servicesType = [
  { id: 1, label: "Venue", color: "green" },
  { id: 2, label: "Makeup Artist", color: "purple" },
  { id: 3, label: "Photographer", color: "blue" },
  { id: 4, label: "Dress Rental", color: "orange" },
  { id: 5, label: "Door Gift", color: "teal" },
  { id: 6, label: "Pelamin & Deco", color: "fuchsia" },
  { id: 7, label: "Softwares", color: "yellow" },
  { id: 8, label: "Invitation Card", color: "sky" },
];

const [, ...entries] = csv.split("\n");
const json = entries.map((e) => {
  const props = e.split(",");
  return {
    id: props[0],
    name: props[3],
    location: {
      district: props[7],
      state: props[6],
    },
    typeId: servicesType.find((s) => s.label === props[4]).id,
    image: props[5],
    socials: [
      {
        name: "instagram",
        link: props[10],
      },
      {
        name: "whatsapp",
        link: `https://wa.me/${props[9]}`,
      },
      {
        name: "maps",
        link: props[8],
      },
      {
        name: "tiktok",
        link: props[11],
      },
      {
        name: "website",
        link: props[12],
      },
      {
        name: "facebook",
        link: props[13].trim(),
      },
    ],
  };
});

console.log(
  util.inspect(JSON.stringify(json), {
    showHidden: false,
    depth: null,
    colors: true,
  }),
);
