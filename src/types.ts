export type TailwindColors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type Service = { id: number; label: string; color: TailwindColors };

export interface ServiceResponse {
  id: number;
  name: string;
  location: Location;
  typeId: number;
  image: string;
  socials: Social[];
}

export interface Location {
  district: string;
  state: string;
}

export interface Social {
  name: string;
  link: string;
}

export interface AdvetisementResponse {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  link: string;
}
