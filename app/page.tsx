import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image";
import {FlipWords} from "../components/ui/flip-words"
import awesomeVideo from "@/videos/example.mp4";
import Video from "next-video";
import StartAnimation from "../components/ui/StartAnimation"
// import bgImg from "./"
// import "./mainPage.css";

const Component: React.FC = () => {
  const words = ["Neera", "नीरा", "نیلا", "ਨੀਲਾ"];

  return (
    <div className="flex flex-col min-h-screen">
      <StartAnimation />
      <section className="relative h-screen flex flex-col justify-center items-center bg-[url('./bgimg1.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/900" />
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-4xl font-bold mb-4 sm:text-6xl">
          {/* <FlipWords words={words} /> <br /> */}
          Neera
          </h1>
          <p className="text-lg mb-8 sm:text-xl">
            Experience the comfort and charm of our cozy homestay, nestled in the heart of nature.
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Book Now
          </Link>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="https://picsum.photos/id/64/501" width={500} height={500} alt="Host" className="rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Meet Your Host</h2>
              <p className="text-muted-foreground mb-6">
                Hi, I'm Sarah, the proud owner of this cozy homestay. I've been hosting guests for over 10 years and I'm
                passionate about providing a warm and welcoming experience for everyone who stays with us.
              </p>
              <p className="text-muted-foreground mb-6">
                Our homestay is a reflection of my love for nature and hospitality. I've carefully curated every detail
                to ensure your stay is comfortable and memorable. I look forward to welcoming you and helping you create
                unforgettable memories.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-muted-foreground">Satisfied Guest</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Our stay at this cozy homestay was an absolute delight.\n The host, Sarah, was incredibly welcoming
                  and made us feel\n right at home. The attention to detail and the serene\n surroundings made for a
                  truly memorable experience."
                </p>
              </div>
            </div>
            <div>
              <div className="bg-background rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">Jane Appleseed</h3>
                    <p className="text-muted-foreground">Satisfied Guest</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "I had the most wonderful time at this charming homestay.\n The host, Sarah, went above and beyond to
                  ensure our stay\n was comfortable and enjoyable. The serene natural\n surroundings were the perfect
                  backdrop for a relaxing\n getaway."
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Video Testimonials</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              {/* <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              /> */}
              <div style={{ position: 'relative', width: '90vw', maxWidth: '1200px', margin: 'auto' }}>
          <Video src={awesomeVideo} controls style={{ width: '100%', height: 'auto' }} />
        </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Gallery</h2>
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
            </div>
            <Textarea placeholder="Your Message" required className="mb-8" />
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <footer className="py-10 bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">© 2024 Neera Homestay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Component;