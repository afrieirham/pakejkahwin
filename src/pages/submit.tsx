import SEOHead from "@/components/SEOHead";
import Head from "next/head";

function Submit() {
  const config = {
    path: "/submit",
    title: "PakejKahwin.com – Your One-Stop Wedding Services Hub in Malaysia!",
    description:
      "The most comprehensive list for wedding services in Malayisa. Find the best wedding venue, makeup artist, goodies & door gifts, wedding photographer, dress rental, pelamin decorations, invitation card and more!",
  };
  return (
    <div>
      <Head>
        <SEOHead {...config} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <div className="mx-auto h-full w-full max-w-xl">
        <iframe
          className="w-full"
          loading="lazy"
          src="https://tally.so/embed/nraxlM?alignLeft=1&transparentBackground=1&dynamicHeight=1&hideTitle=1"
        ></iframe>
      </div>
    </div>
  );
}

export default Submit;
