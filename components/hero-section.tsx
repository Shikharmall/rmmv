import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative h-[calc(100vh-140px)] min-h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={`${title} - ${subtitle}`}
          fill
          className="object-cover"
          priority
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.2em] mb-4 text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.15em] text-white/90 drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
