import Listings from "@/components/Listings";
import SEOHead from "@/components/SEOHead";
import { locations } from "@/constants";
import { AdvetisementResponse, ServiceResponse } from "@/types";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps<{
  ads: AdvetisementResponse[];
  location: (typeof locations)[number];
  initialServices: ServiceResponse[];
}> = async (context) => {
  const location = locations.find(
    (l) => l.slug === String(context.params?.location),
  )!;

  const serviceRes = await fetch(
    `https://api.pakejkahwin.com/services?location.state=${location.state}`,
  );
  const initialServices: ServiceResponse[] = await serviceRes.json();

  const advertisementRes = await fetch("https://api.pakejkahwin.com/ads");
  const ads: AdvetisementResponse[] = await advertisementRes.json();
  return {
    props: {
      ads,
      location: location,
      initialServices: initialServices.reverse(),
    },
    // revalidate every 1 minute
    revalidate: 60 * 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = locations.map((l) => ({ params: { location: l.slug } }));

  return {
    paths,
    fallback: false,
  };
};

function LocationPage({
  ads,
  location,
  initialServices,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const stateName = location.state.replaceAll("WP", "");
  const title = `Find wedding services in ${stateName} | PakejKahwin.com`;
  const description =
    "The most comprehensive list for wedding services in Malayisa. Find the best wedding venue, makeup artist, goodies & door gifts, wedding photographer, dress rental, pelamin decorations, invitation card and more!";

  return (
    <div className="flex flex-col">
      <SEOHead title={title} description={description} path="/" />
      <main className="md:mt-4">
        <h1
          className={`${sourceSerif4.className} px-4 text-center text-3xl font-semibold md:text-5xl`}
        >
          Wedding venues in {stateName}
        </h1>
        <Listings
          ads={ads}
          location={location}
          initialServices={initialServices}
        />
      </main>
    </div>
  );
}

export default LocationPage;
