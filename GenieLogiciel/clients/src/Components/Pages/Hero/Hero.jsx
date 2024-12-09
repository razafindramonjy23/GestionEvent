import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/src/assets/img/01.png",
    "/src/assets/img/02.jpg",
    "/src/assets/img/03.jpg",
];

const texts = [
    { title: "Bienvenue dans E-vent", subtitle: "Let’s build a better future together" },
    { title: "Empowering innovation", subtitle: "Your future starts here" },
    { title: "Join the transformation", subtitle: "Together, we make progress" }
];


const animationVariants = [
    { opacity: 0, scale: 0.8 }, // Zoom arrière
    { opacity: 0, x: "-100%" }, // Glissement gauche
    { opacity: 0, x: "100%" },  // Glissement droit
    { opacity: 0, y: "-100%" }, // Glissement haut
    { opacity: 0, y: "100%" },  // Glissement bas
    { opacity: 0, rotate: 10 }, 
];

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentText, setCurrentText] = useState(0);
    const [currentVariant, setCurrentVariant] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setCurrentText((prev) => (prev + 1) % texts.length);
            setCurrentVariant((prev) => (prev + 1) % animationVariants.length);
        }, 3000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="relative w-full h-screen overflow-hidden ">
                {/* Images en arrière-plan avec animations dynamiques */}
                <div className="absolute inset-0 z-0">
                    {images.map((src, index) => (
                        <AnimatePresence key={index}>
                            {index === currentImage && (
                                <motion.img
                                    src={src}
                                    alt={`Background ${index}`}
                                    className="absolute inset-0 object-cover w-full h-screen blur-xl"
                                    initial={animationVariants[currentVariant]} 
                                    animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 }} 
                                    exit={{ opacity: 0 }} 
                                    transition={{ duration: 1.5 }}
                                />
                            )}
                        </AnimatePresence>
                    ))}
                </div>

                {/* Texte principal au premier plan */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold text-white sm:text-6xl"
                    >
                        {texts[currentText].title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="mt-4 text-lg text-white sm:text-2xl opacity-80"
                    >
                        {texts[currentText].subtitle}
                    </motion.p>
                </div>

                {/* Indicateur animé */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute left-0 right-0 bottom-4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 mx-auto text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </div>

            <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
                <img src="https://readymadeui.com/cardImg.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

                <div className="min-h-[350px] relative z-0 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
                    <h2 className="mb-6 text-2xl font-bold sm:text-4xl">Explore the World</h2>
                    <p className="text-base text-center text-gray-200 sm:text-lg">Embark on unforgettable journeys. Book your dream vacation today!</p>

                    <button
                        type="button"
                        className="px-6 py-3 mt-12 text-base text-white transition duration-300 bg-transparent border border-white rounded-lg hover:bg-white hover:text-black">
                        Book Now
                    </button>
                </div>
            </div>

            <section className='mt-40'>
                <div className="font-sans bg-primary">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">Bienvenue dans E-vent Kayne-Tarik</h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">Si vous voulez marquer le coup et faire la faite. Il suffit de dealer un peu 🤣</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900 hover:bg-purple-200">Commencer</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50">Voir plus</button>
                        </div>
                    </div>
                </div>
                <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md dark:bg-gray-500 lg:-mt-40" />
            </section>


            <div className="font-[sans-serif] p-4 mt-40">
                <div className="max-w-3xl mx-auto max-md:max-w-md">
                    <h2 className="text-4xl font-extrabold text-gray-800">The Team</h2>

                    <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:justify-center text-center mt-12">

                        <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full">
                            <img src="https://readymadeui.com/team-1.webp" className="rounded-full" />

                            <div className="p-4">
                                <h4 className="text-base font-bold text-gray-800">Voloso</h4>
                                <span className="mt-1 text-xs text-gray-600">Software Engineer</span>
                                <p className="mt-4 text-sm text-gray-600">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>

                                <div className="mt-4 space-x-4">
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" className="fill-gray-800" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" className="fill-gray-800" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" className="fill-gray-800" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full">
                            <img src="https://readymadeui.com/team-2.webp" class="rounded-full" />

                            <div class="p-4">
                                <h4 className="text-base font-bold text-gray-800">Mark Adair</h4>
                                <span className="mt-1 text-xs text-gray-600">Software Engineer</span>
                                <p className="mt-4 text-sm text-gray-600">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>

                                <div className="mt-4 space-x-4">
                                    <button type="button"
                                        class="w-7 h-7 inline-flex items-center justify-center rounded-full border-none outline-none bg-gray-100 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" class="fill-gray-800" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" class="fill-gray-800" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" className="fill-gray-800" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

            <div className="bg-gray-200 max-w-[230px] rounded-tl-full rounded-tr-full">
                            <img src="https://readymadeui.com/team-3.webp" className="rounded-full" />

                            <div className="p-4">
                                <h4 className="text-base font-bold text-gray-800">Simon Konecki</h4>
                                <span className="mt-1 text-xs text-gray-600">Web Designer</span>
                                <p className="mt-4 text-sm text-gray-600">Eiusmod commodo aliquip laboris qui anim non voluptate consectetur.</p>

                                <div className="mt-4 space-x-4">
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" className="fill-gray-800" viewBox="0 0 155.139 155.139">
                                            <path
                                                d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                                                data-original="#010002" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12px" className="fill-gray-800" viewBox="0 0 512 512">
                                            <path
                                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                                data-original="#03a9f4" />
                                        </svg>
                                    </button>
                                    <button type="button"
                                        className="inline-flex items-center justify-center bg-gray-100 border-none rounded-full outline-none w-7 h-7 hover:bg-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" className="fill-gray-800" viewBox="0 0 24 24">
                                            <path
                                                d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                                                data-original="#0077b5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
            </div>
                </div>
            </div>

            <section className="flex flex-col items-center justify-between p-8 md:flex-row bg-blue-50">
            {/* Texte à gauche */}
            <div className="md:w-1/2">
                    <h2 className="mb-4 text-3xl font-bold text-purple-800">REJOIGNEZ-NOUS</h2>
                    <p className="mb-4 text-gray-700">
                        Groupe multi-métier, multiculturel, multilingues, nous travaillons
                        avec les entreprises et les administrations à se renouveler pour
                        offrir des expériences utilisateurs uniques, à construire un
                        lendemain meilleur. Nous cultivons l’audace, la créativité,
                        l’excellence mais aussi la bienveillance et la solidarité. Nous
                        rejoindre, c’est adhérer à ces valeurs auxquelles nous devons notre
                        réussite. C’est aussi évoluer au sein d’équipes jeunes et dynamiques.
                    </p>
                    <p className="mb-6 text-gray-700">
                        Nous chérissons nos talents. Tout a été pensé pour leur permettre
                        d’apprendre, de grandir et de s’épanouir au sein d’un leader mondial
                        à l’esprit résolument jeune qui fait de l’agilité son fer de lance.
                        Nous avons 20 ans, et pour longtemps encore.
                    </p>
                    <button className="px-6 py-2 text-white transition rounded-lg shadow-md bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg">
                        Postuler ➜
                    </button>
                </div>

            {/* Image à droite */}
            <div className="mt-6 md:w-1/2 md:mt-0">
                    <img
                        src="https://via.placeholder.com/500" // Remplacez par l'URL de votre image
                        alt="Rejoignez-nous"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </section>

        </>
    )


}

export default Hero
