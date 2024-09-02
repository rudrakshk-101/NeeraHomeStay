import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="w-full">
      <header className="bg-[#004d40] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-5 w-5" />
            <span>(408) 555-0120</span>
            <MailIcon className="h-5 w-5" />
            <span>example@gmail.commmmmm</span>
          </div>
          <div className="flex items-center space-x-4">
            <FacebookIcon className="h-5 w-5" />
            <TwitterIcon className="h-5 w-5" />
            <InstagramIcon className="h-5 w-5" />
            <LinkedinIcon className="h-5 w-5" />
          </div>
        </div>
      </header>
      <nav className="bg-[#00695c] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <LogInIcon className="h-8 w-8" />
            <span className="text-xl font-bold">Cleaning.</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" prefetch={false}>
              Home
            </Link>
            <Link href="#" prefetch={false}>
              Services
            </Link>
            <Link href="#" prefetch={false}>
              Projects
            </Link>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Contact Us
            </Link>
          </div>
          <Button className="bg-[#ffeb3b] text-[#00695c]">Get A Quote</Button>
        </div>
      </nav>
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <Badge variant="secondary">The Best Cleaning Services Solution</Badge>
            <h1 className="text-4xl font-bold">
              Professional <span className="text-[#00695c]">Cleaning</span> Services Provider
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-[#ffeb3b] text-[#00695c]">Explore More</Button>
              <Link href="#" className="text-[#00695c]" prefetch={false}>
                View All Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center relative">
            <img
              src="/placeholder.svg"
              alt="Professional Teams"
              className="rounded-full"
              width="300"
              height="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded shadow-lg">
              <GroupIcon className="h-6 w-6" />
              <span>Professional Teams</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-lg">
              <ShoppingCartIcon className="h-6 w-6" />
              <span>Affordable Pricing</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#004d40] text-white py-4">
        <div className="container mx-auto flex justify-between items-center space-x-4">
          <span>House Cleaning</span>
          <span>Office Cleaning</span>
          <span>Kitchen Cleaning</span>
          <span>Furniture Cleaning</span>
          <span>Glass Cleaning</span>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="/placeholder.svg"
              alt="About Us"
              className="rounded-full"
              width="300"
              height="300"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <Badge variant="secondary">About Us</Badge>
            <h2 className="text-4xl font-bold">
              Your Top Choice for <span className="text-[#00695c]">Cleaning Services</span>
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// TypeScript props type definition
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
