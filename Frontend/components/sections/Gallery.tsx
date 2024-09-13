import Image from "next/image"
import Link from "next/link"

const Gallery: React.FC = () => {
    return (
        <section className="section5 py-20 bg-background">
        <div className="container flex justify-center items-center flex-col mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="sectionHeadings font-bold mb-4"> Explore Our <span className='text-[#0d726c]'>Gallery</span></h1>
        <p className="text-justify mr-10 ml-10 text-gray-700 pr-14 pl-14 mb-8">
        Explore the beauty and calm of &quot;Neera: The Guest House&quot; in our gallery. See the peaceful views of the waterbody, our comfortable rooms, and the serene surroundings. Our images show what makes Neera a special and welcoming place to stay.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Link href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
              <Image
                src="https://picsum.photos/1200/1200"
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
                src="https://picsum.photos/1200/1201"
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
                src="https://picsum.photos/1200/1202"
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
                src="https://picsum.photos/1200/1203"
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
                src="https://picsum.photos/1200/1204"
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
                src="https://picsum.photos/1200/1205"
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
    )}

    export default Gallery;
