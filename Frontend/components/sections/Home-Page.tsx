import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import placeholder from "../images/placeholder.jpeg";

const HomePage: React.FC = () => {
    return (

<section className='section1'>
          <div className="leftSection">
          <Badge variant="default" className="sectionSubheadings md:text-md text-lg thebestcleaning bg-white text-black mb-4">
            The Best Home Stay to Stay
          </Badge>
          
          <h1 className="sectionHeadings font-bold mb-2">Welcome to Neera : <span className='text-[#0d726c]'> The Guest House! </span></h1>
          <p className="section1subheading text-gray-700 pr-14 mb-8">
          Situated in front of a calm lake in Ujjain, Neera blends traditional Indian hospitality with modern comfort for a peaceful and memorable stay for your Family and Friends.
          </p>
          <div className="flex space-x-4">
            <Button variant="default" className="exploreMoreBtn bg-yellow-500 text-white">
              Explore More --
            </Button>
            <Link href="#" className="exploreMoreBtn2 text-gray-700" prefetch={false}>
              View All Services
            </Link>
          </div>
          </div>
          {/* <div className="rightsection"> */}
          <div className="sectionImage md:w-1/2 flex justify-center items-center relative">
            <div className='section1img'>
            <Image
              src={placeholder}
              alt="Professional Teams"
              className="rounded-full section1img"
              width="300"
              height="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-lg">
              <GroupIcon className="h-6 w-6" />
              <span>Professional Teams</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Affordable Pricing</span>
            </div>
          </div>
        </section>
    )
}


export default HomePage;










interface IconProps {
    className?: string
  }




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
    )
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
    )
  }