
const Hero = () => {
    return (
        <section
            className="relative overflow-hidden bg-cover bg-top bg-no-repeat h-screen"
            style={{ backgroundImage: "url('https://czavvhluawsifnoyvywv.supabase.co/storage/v1/object/public/data/dd.jpg?t=2024-05-20T09%3A24%3A42.448Z')" }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
            <div className="relative bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col md:flex-row md:items-start md:justify-start items-center justify-center h-full">
                <div className="text-center md:text-start max-w-lg">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Tokyo Revengers: Christmas Showdown
                    </h2>
                    <p className="hidden max-w-lg text-white/80 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        The hit Danga San Kyoudai song was adapted into shorts that aired on NHK during commercial breaks in Okaasan to Issho's timeslot. The cheery series about three dango brothers was meant to give children quick lessons about sharing and humbleness.
                    </p>
                    <div className="mt-4 sm:mt-8">
                        <button className="bg-gradient-to-r hover:scale-105 rounded-full from-red-500 to-blue-500 text-white font-semibold p-0.5">
                            <span className="flex w-full bg-black text-white rounded-full p-2">
                                Explore Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
