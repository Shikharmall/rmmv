
export default function Banner({ title, bgImage }) {
  return (
    <div
      className="relative h-40 md:h-80  flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage ? bgImage : 'https://res.cloudinary.com/drb1ds8e3/image/upload/v1773591410/rmmv/mallmahajanpada/warOverBuddhaRelics_u3t4ws.jpg'})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional overlay */}
      <div className="text-center">
        <h1
          className="
          relative
          text-4xl md:text-5xl
          uppercase
          text-black
          inline-block
          px-20
          bg-no-repeat
          text-white
        "
          style={{
            backgroundImage: `
            url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774185464/hdr-icon-white_zrj0wu.png'),
            url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774185464/hdr-icon-white_zrj0wu.png')
          `,
            backgroundPosition: "left 0.25em, right 0.25em",
            backgroundSize: "30px auto, 30px auto",
          }}
        >
          {title || ""}
        </h1>

        {/* <h2 className="text-lg md:text-xl mt-2 text-gray-700"> */}
        {/* <h2 className="relative text-lg md:text-xl mt-2 text-white">
          What makes rajasthan Tick (upcoming Events)
        </h2> */}
      </div>
      {/* <h1 className="relative z-10 text-3xl md:text-5xl text-white">{title || ""}</h1> */}
    </div>
  );
}
