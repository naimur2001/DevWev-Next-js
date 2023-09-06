import Button from "@/components/Button/Button";
import Image from "next/image";
import hero1 from "public/hero1.png"

export default function Home() {
  return (
  <>
  <div className="flex items-center gap-24">
    <div className="texts flex-1 flex flex-col gap-12">
<h1 className="text-6xl text-col font-bold">
  Better Design For Your Digital Product.
</h1>
<p className="text-2xl font-light">
  Turning your idea into reality. We bring together the teams from global tech industry.
</p>
<Button url={"/portfolio"} text={"See Our Works"} ></Button>

    </div>
    <div className="imgs flex-1 object-cover">
    <Image src={hero1} width={300} height={300} className="w-full h-[400px] image" alt="home-img"  />
    </div>
    </div>
    </>
  )
}
