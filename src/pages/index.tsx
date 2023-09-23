import { Source_Serif_4 } from "next/font/google";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p className="bg-base-100">hello world</p>
      <p className="bg-base-200">hello world</p>
      <p className="bg-base-300">hello world</p>
      <button className="btn btn-primary">Hello</button>
      <button className="btn btn-secondary">Hello</button>
      <button className="btn btn-accent">Hello</button>
      <h1 className={`${sourceSerif4.className} font-semibold`}>Hello World</h1>
      <h2 className={`${sourceSerif4.className} font-semibold`}>Hello World</h2>
      <h3 className={`${sourceSerif4.className} font-semibold`}>Hello World</h3>
      <h4 className={`${sourceSerif4.className} font-semibold`}>Hello World</h4>
      <h5 className={`${sourceSerif4.className} font-semibold`}>Hello World</h5>
      <h6 className={`${sourceSerif4.className} font-semibold`}>Hello World</h6>
    </div>
  );
}
