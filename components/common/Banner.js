
export default function Banner({ title, bgImage }) {
  return (
    <div
      className="relative h-40 md:h-80 mb-12 flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage ? bgImage : 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional overlay */}
      <h1 className="relative z-10 text-3xl md:text-5xl text-white">{title || ""}</h1>
    </div>
  );
}
