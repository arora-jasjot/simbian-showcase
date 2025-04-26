import WithoutSimbianSection from "@/components/WithoutSimbianSection";
import WithSimbianSection from "@/components/WithSimbianSection";
import Image from "next/image";

import backgroundImage from '@/assets/background.png'

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <Image src={backgroundImage} alt="background" />
      <div className="absolute top-0 left-0 w-full h-full overflow-auto bg-purple-700/50">
        {/* <WithSimbianSection /> */}
        {/* bg-purple-700/50 */}
        
      {/* <WithoutSimbianSection /> */} 
      {/* bg-[#020816]/80 */}
      </div>
    </main>
  );
}