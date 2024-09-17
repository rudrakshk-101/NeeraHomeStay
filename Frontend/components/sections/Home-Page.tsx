import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import placeholder from "../images/placeholder.jpeg";
import placeholder2 from "../images/placeholder2.jpeg";
import HomePageImg from "../images/homepageimage.png";

const HomePage: React.FC = () => {
  return (
    <section className='flex justify-center items-start min-h-screen bg-gray-100'>
      <div className="leftSection w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2 ">
        {/* Heading */}
        <div className="mb-10 relative mt-[10vh] md:mt-[5vh]">
          <h1 className="sectionHeadings font-bold mt-[12vh] mb-[-2vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl">
            Welcome to
          </h1>
          <h1 className="sectionHeadings font-bold mb-[-2vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl">
            Neera
          </h1>
          <h1 className="sectionHeadings font-bold mb-[-2vh] text-center md:text-left text-3xl md:text-4xl lg:text-5xl mt-6">
          <span className='text-[#0d726c]'> The Guest House! </span>
        </h1>
        </div>

        {/* Image for mobile */}
        <div className='w-full max-w-md mx-auto md:hidden'>
          <Image
            src={HomePageImg}
            alt="Professional Teams"
            className="rounded-full w-full"
            layout="responsive"
            objectFit="cover"
          />
        </div>

        {/* Subheading */}
        <p className="section1subheading text-center md:text-left mt-6 mb-8 text-sm sm:text-base md:text-lg lg:text-xl">
          Situated in front of a calm lake in Ujjain, Neera blends traditional Indian hospitality with modern comfort for a peaceful and memorable stay for your Family and Friends.
        </p>

        {/* Third heading part */}
        

        {/* Button */}
        <div className="flex justify-center md:justify-start space-x-4">
          <Button 
            variant="default" 
            className="exploreMoreBtn bg-yellow-500 text-white w-full md:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg"
          >
            Book Now 
          </Button>
          {/* <Link href="#" className="exploreMoreBtn2 text-gray-700" prefetch={false}>
            View All Services
          </Link> */}
        </div>
      </div>

      {/* Image for desktop */}
      <div className="w-full md:w-1/2 px-4 py-8 sm:px-6 lg:px-8 gap-2 hidden md:block mt-[15vh]">
        <div className='w-full max-w-md mx-auto'>
          <Image
            src={HomePageImg}
            alt="Professional Teams"
            className="rounded-full w-full"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;

// Icon components (if needed)

function GroupIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  );
}

function ShoppingCartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

interface IconProps {
  className?: string;
}
