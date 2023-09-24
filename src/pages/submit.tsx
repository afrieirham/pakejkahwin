import SEOHead from "@/components/SEOHead";
import { Source_Serif_4 } from "next/font/google";
import Script from "next/script";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

function Submit() {
  const config = {
    path: "/submit",
    title: "PakejKahwin.com – Your One-Stop Wedding Services Hub in Malaysia!",
    description:
      "The most comprehensive list for wedding services in Malayisa. Find the best wedding venue, makeup artist, goodies & door gifts, wedding photographer, dress rental, pelamin decorations, invitation card and more!",
  };
  return (
    <div>
      <SEOHead {...config} />
      <Script>{`var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`}</Script>
      <div className="mx-auto h-full w-full max-w-xl">
        <h1
          className={`${sourceSerif4.className} px-2 text-2xl font-semibold md:text-3xl`}
        >
          Service Submission
        </h1>
        <iframe
          data-tally-src="https://tally.so/embed/nraxlM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="1285"
          title="Service Submission"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Submit;
