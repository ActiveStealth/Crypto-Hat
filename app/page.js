import Banner from "@/component/Banner";
import Topseller from "@/component/Topseller";
import Hotbirds from "@/component/Hotbirds";

export default function Home() {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          name="Discover, collect and sell extraordinary NFTs"
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left text-white"
          parentStyles="justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />{" "}
        <Topseller />
        <Hotbirds />
      </div>
    </div>
  );
}
