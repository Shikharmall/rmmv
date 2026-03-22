export default function SubHeading({ language, english, hindi }) {
    return (
        <div className="flex items-center gap-4 my-5">
            <div className="h-px flex-grow"></div>
            <h1
                className="
          text-3xl 
          md:text-3xl
          uppercase
          text-gray-500
          inline-block
          px-20
          bg-no-repeat
        "
                style={{
                    backgroundImage: `
            url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774185897/orange-star-img_l9heyo.png'),
            url('https://res.cloudinary.com/drb1ds8e3/image/upload/v1774185897/orange-star-img_l9heyo.png')
          `,
                    backgroundPosition: "left 0.25em, right 0.25em",
                    backgroundSize: "20px auto, 20px auto",
                }}
            >
                {language === "english" ? english : hindi}
            </h1>
            <div className="h-px flex-grow"></div>
        </div>
    )
}
