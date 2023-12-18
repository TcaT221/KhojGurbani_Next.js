import Image from "next/image";

export default function HomeWelcome() {
    return (
        <div className="shadow-common p-6">

            <Image
                src="/Images/Home/homewelcome.jpg"
                alt="Welcome to KhojGurbani"
                width={536}
                height={0}
                className="float-left pt-6 pb-6 pr-6 w-0 xl:w-[536px] md:w-1/2"
            />
            <div className="">

                <h2 className="pt-2 pb-6 text-lg md:text-3xl font-bold text-title text-center">
                    Welcome to KhojGurbani
                </h2>
                <p className="hidden mb-4 text-line md:block">
                    KhojGurbani is a collaborative platform that provides content and resources for anyone wishing to establish
                    or deepen their engagement with Gurbani - Sikh teachings.
                </p>
                <p className="hidden mb-4 text-line md:block">
                    KhojGurbani envisions a world where every Sikh commits
                    to at least ONE complete reading and study of the Guru Granth Sahib.
                </p>
                <p className="hidden mb-4 text-line md:block">
                    By leveraging technology and online collaborative tools, KhojGurbani hopes to establish a cyber-Sangat,
                    a virtual kinship that will create the necessary synergy to encourage and facilitate an individual Sikh’s apprenticeship to the Guru.
                </p>
                <p className="hidden mb-4 text-line md:block">
                    KhojGurbani resources include:
                    access to a digital version of the Guru Granth Sahib with unique functions and features including hyperlinks to dictionaries and
                    Panjabi and English commentaries. An unmatched repository of Gurbani Kirtan, an interactive blog, a weekly online discussion
                    forum with over 200 YouTube videos and podcasts.
                </p>
                <p className="text-sm mb-4 text-line md:hidden">
                    Your site for a holistic experience with the Guru. Engage Gurbani with interactive access to multiple commentaries and dictionaries.
                    Enjoy the bliss of listening to a vast collection of Gurmat sangeet with some rare collections.
                    Enhance your understanding of key Gurmat concepts by listening to KhojGurbani&apos;s thought-provoking webinars.
                </p>
            </div>
        </div>
    );
}