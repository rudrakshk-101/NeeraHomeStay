"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function NearbyAtraction() {
  return (
    <section className="">
        <div className="w-screen min-h-screen section7 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h2 className="text-lg text-gray-500">-- Our Latest Projects</h2>
          <h1 className="text-5xl font-bold mb-4">Explore our portfolio of <br/> <span className='text-[#0d726c]'>featured projects</span></h1> 
          {/* <Button className="mt-4 bg-yellow-400 text-black ml-auto">View All Projects</Button> */}
        </header>
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
          <Card className="url('https://picsum.photos/1201/1800')">
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1800`}
                alt="Software Company Office"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">Office Cleaning</p>
                  <h3 className="text-lg font-semibold">Software Company Office</h3>
                </div>
                <Button className="bg-yellow-400 text-black rounded-full p-2">
                  <XIcon className="text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1801`}
                alt="Rivanta Apartment Kitchen"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">Kitchen Cleaning</p>
                  <h3 className="text-lg font-semibold">Rivanta Apartment Kitchen</h3>
                </div>
                <Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1802`}
                alt="4 BHK Bungalow Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">House Cleaning</p>
                  <h3 className="text-lg font-semibold">4 BHK Bungalow Cleaning</h3>
                </div>
                <Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Image
                src={`https://picsum.photos/1201/1803`}
                alt="Bungalow Kitchen Cleaning"
                className="w-full mt-5 rounded-md h-48 object-cover"
                width="300"
                height="200"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-sm text-gray-500">Kitchen Cleaning</p>
                  <h3 className="text-lg font-semibold">Bungalow Kitchen Cleaning</h3>
                </div>
                <Button className="bg-green-600 text-white rounded-full p-2">
                  <PlusIcon className="text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
      </section>
  )
}

interface PlusIconProps {
  [key: string]: any;
}

const PlusIcon: React.FC<PlusIconProps> = (props) => {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


interface XIconProps {
  [key: string]: any;
}

const XIcon: React.FC<XIconProps> = (props) => {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
