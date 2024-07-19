import Image from "next/image";
import Logo from '@/images/Nlogo.png'
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2">
    <div className="bg-gray-300 flex flex-col space-y-5 justify-center items-center order-1 lg:-order-1 pb-10">
      <Image src={Logo} height={250} alt="logo"/>
      <Button asChild className="px-10 bg-blue-700 p-5 mt-5 text-xl">
<Link href="/stories">Explore Story Library</Link>
</Button>
     </div>
    <StoryWriter/>
     </section>
     
    </main>
  );
}
