import Listings from "@/components/Listings";
import SEOHead from "@/components/SEOHead";
import { AdvetisementResponse, ServiceResponse } from "@/types";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import { Source_Serif_4 } from "next/font/google";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export const getStaticProps: GetStaticProps<{
  initialServices: ServiceResponse[];
  ads: AdvetisementResponse[];
}> = async () => {
  const serviceRes = await fetch("https://api.pakejkahwin.com/services");
  const initialServices: ServiceResponse[] = await serviceRes.json();

  const advertisementRes = await fetch("https://api.pakejkahwin.com/ads");
  const ads: AdvetisementResponse[] = await advertisementRes.json();
  return {
    props: {
      initialServices: initialServices.reverse(),
      ads,
    },
    // revalidate every 1 minute
    revalidate: 60 * 1,
  };
};

export default function Home({
  initialServices,
  ads,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const title =
    "PakejKahwin.com – Your One-Stop Wedding Services Hub in Malaysia!";
  const description =
    "The most comprehensive list for wedding services in Malayisa. Find the best wedding venue, makeup artist, goodies & door gifts, wedding photographer, dress rental, pelamin decorations, invitation card and more!";

  return (
    <div className="flex flex-col">
      <SEOHead title={title} description={description} path="/" />
      <main className="md:mt-4">
        <h1
          className={`${sourceSerif4.className} px-4 text-center text-3xl font-semibold md:text-5xl`}
        >
          Your dream wedding starts here.
        </h1>

        <Listings ads={ads} initialServices={initialServices} />
      </main>
    </div>
  );
}
