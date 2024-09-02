import React from 'react';
import "./styles.css"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import placeholder from "../components/images/placeholder.jpeg";
import Image from "next/image"
import placeholder1 from "./download.jpeg";
import person1 from "../components/images/person1.jpg"
import person2 from "../components/images/person2.jpg"
import person3 from "../components/images/person3.jpg"
import ReviewSection from "../components/sections/reviews";
import ContactUs from "../components/sections/contactUs"
import NearbyAtraction from "../components/sections/nearby-atraction";
import Navbar from "../components/ui/navbar"

const Home: React.FC = () => {
  return (
    <div className="allOfTheAbove">
        <header className="topBar">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-5 w-5" />
            <span>(408) 555-0120</span>
            <MailIcon className="hiddensmall h-5 w-5" />
            <span className='hiddensmall'>example@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FacebookIcon className="h-5 w-5" />
            <TwitterIcon className="h-5 w-5" />
            <InstagramIcon className="h-5 w-5" />
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </div>
        </header>
        <Navbar />
        <section className='section1'>
          <div className="leftSection">
          <Badge variant="default" className="sectionSubheadings md:text-md text-lg thebestcleaning bg-white text-black mb-4">
            The Best Cleaning Services Solution
          </Badge>
          
          <h1 className="sectionHeadings font-bold mb-2"><span className='text-[#0d726c]'>Professional</span> Cleaning Services Provider</h1>
          <p className="section1subheading text-gray-700 pr-14 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore.
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
        <section className='section2'>
          <div className="starStrip">
          <p>✨</p> <p>HouseCleaning</p> <p>✨</p> <p>OfficeCleaning</p> <p>✨</p> <p>KitchenCleaning</p> <p>✨</p> <p>FurnitureCleaning</p> <p>✨</p>
          </div>

          <div className="section2-1">
          <div className="leftsection2">
          <div>
          <Image
              src={placeholder1}
              alt="Professional Teams"
              className="rounded-full section1img"
              width="500"
              height="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
          </div>
          <div className="rightsection2">
            {/* <p className='ml-0 rightsection2p'>--About Us</p> */}
            <h1 className="sectionHeadings sectionHeadingsa font-bold mb-4">Your Top Choice for Cleaning Services</h1>
            <div className="section2numbers flex justify-between mb-4 space-x-12">
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">6500+</span>
                  <p className="text-gray-700 mt-2">Projects Completed</p>
                </div>
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">60</span>
                  <p className="text-gray-700 mt-2">Expert Cleaners</p>
                </div>
                <div className="text-centers">
                  <span className="text-4xl font-bold text-green-700">99%</span>
                  <p className="text-gray-700 mt-2">Satisfied Customers</p>
                </div>
              </div>
          </div>
          </div>
        </section>
        {/* <div className="starStrip">
          <p>HouseCleaning</p> <p>✨</p> <p>OfficeCleaning</p> <p>✨</p> <p>KitchenCleaning</p> <p>✨</p> <p>FurnitureCleaning</p> <p>✨</p>
          </div> */}
        <section className="section4">
          <p className='text-xl font-semibold'>-- Your Stay Host</p>
          <h1 className="sectionHeadings font-bold mb-2">Meet Your <span className='text-[#0d726c]'>Host</span></h1>
          <div className="section4cards">
          <div className="section4card">
          <Image
              src={person1}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          <div className="section4card">
          <Image
              src={person2}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          <div className="section4card">
          <Image
              src={person3}
              alt="Professional Teams"
              className="section1img rounded-3xl w-[25vw]"
              style={{height:"auto", aspectRatio: "300/300", objectFit: "cover" }}
            />
            <p className='font-semibold text-xl'>Jenny Alexander</p>
            <p className='xl'>[Ceo,Host]</p>
          </div>
          </div>
        </section>
        <section className="section5 py-20 bg-background">
        <div className="container flex justify-center items-center flex-col mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="sectionHeadings font-bold mb-4"> Explore Our <span className='text-[#0d726c]'>Gallery</span></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1200/1800"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1201/1800"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1200/1801"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1200/1802"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1202/1800"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1200/1803"
                width={500}
                height={500}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="w-8 h-8 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>
        <section className="section3">
          <div className="topsection3">
              <div className="lefttopsection3">
              <p className='text-white md:ml-5 ml-7 text-xl'>-- Our Services</p>

              {/* <h1 className='section3heading text-5xl text-white font-bold mb-4'>Explore Our Cleaning Services</h1> */}
              {/* <div className="section3heading flex flex-col">
            <span className="text-5xl font-bold mb-4 text-black mr-2">Exlore Our</span>
            <span className="text-5xl font-bold mb-4 text-yellow-500">HomeStay Services</span>
          </div>   */}
              <h1 className="section3Heading md:sectionHeadings text-white md:ml-5 ml-7 sectionHeadings w-[30.5rem] font-bold mb-4"><span className='text-yellow-500'>Explore Our </span>HomeStay Services</h1>
              </div>
              <button className='exploreMoreBtn3 bg-yellow-500 text-black'>
                  View All Services --
              </button>
          </div>
          <div className="bottomsection3">
              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>House Cleaning</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>

              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>House Cleaning</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>

              <div className="section3card">
                <h1 className='text-3xl font-bold mb-4'>House Cleaning</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero</p>
                <Image
              src={placeholder1}
              alt="Professional Teams"
              className="section1img rounded-2xl"
              height="200"
              width="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
              </div>
          </div>
        </section>
        <NearbyAtraction />
        <ReviewSection />
        <ContactUs />
    </div>
  );
};

export default Home;






interface IconProps {
    className?: string
  }


function FacebookIcon(props: IconProps) {
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
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
  
  function InstagramIcon(props: IconProps) {
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  function LinkedinIcon(props: IconProps) {
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  function LogInIcon(props: IconProps) {
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
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
    )
  }
  
  function MailIcon(props: IconProps) {
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  function PhoneIcon(props: IconProps) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
  
  function TwitterIcon(props: IconProps) {
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
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
  