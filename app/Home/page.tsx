import { getArchives, getCatResults, getFeaturedMedia, getTodayPodcast } from "@/lib/data"
import FeaturedTheme from "@/components/FeaturedTheme";
import HomeBanner from "@/components/HomeBanner";
import HomeWelcome from "@/components/HomeWelcome";
import Link from "next/link";
import Search from "@/components/Search";
import SlideTheme from "@/components/SlideTheme";
import SlidePodcast from "@/components/SlidePodcast";
import SlideArchive from "@/components/SlideArchive";

export default async function HomePage() {
    const cat_results = await getCatResults();
    const archives = await getArchives();
    const featuredMedias = await getFeaturedMedia();
    const todayPodcast = await getTodayPodcast();

    return (
        <div className="">
            <HomeBanner recent={todayPodcast} />
            <div className="mx-auto max-w-6xl p-4">
                <HomeWelcome />
                <div className="mt-4 md:my-6 flex sm:flex-row flex-col-reverse gap-4 justify-between">
                    <h2 className="text-[26px] pb-2 sm:pb-0 font-bold text-title">Featured Themes</h2>
                    <Search />
                </div>
                <div className="hidden md:grid grid-cols-2 gap-8">
                    {cat_results.map((item: { id: string; category_image: string; title: string; description: string; }) => (
                        <Link key={item.id} href={`/Home/${item.id}`}>
                            <FeaturedTheme
                                imgURL={item.category_image}
                                title={item.title}
                                description={item.description}
                            />
                        </Link>
                    ))}
                </div>
                <div className="md:hidden mx-auto max-w-[500px]">
                    <SlideTheme showCount={1} cat_results={cat_results}/>
                </div>
            </div>
            <div className="w-full md:py-16 bg-left-top bg-cover md:bg-[url('/Images/Home/homebottom.png')]">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-[26px] mx-auto pb-2 md:py-4 font-bold text-black md:text-white">
                        Featured Podcasts
                    </h2>
                    <div className="hidden lg:block">
                        <SlidePodcast showCount={3} featuredMedias={featuredMedias} />
                    </div>
                    <div className="md:hidden mx-auto max-w-[500px]">
                        <SlidePodcast showCount={1} featuredMedias={featuredMedias} />
                    </div>
                    <div className="hidden md:block lg:hidden mx-auto">
                        <SlidePodcast showCount={2} featuredMedias={featuredMedias} />
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-6xl px-4 mb-8">
                <div className="flex mx-auto max-w-6xl justify-between items-center">
                    <h2 className="text-[26px] py-2 font-bold text-title">Archive</h2>
                    <Link className="cursor-pointer text-blue-primary font-bold text-sm" href={"/Home/Archivelist?page=1"}>
                        View all Podcasts
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <SlideArchive showCount={4} archives={archives} />
                </div>
                <div className="md:hidden mx-auto max-w-[500px]">
                    <SlideArchive showCount={1} archives={archives} />
                </div>
                <div className="hidden md:block lg:hidden mx-auto">
                    <SlideArchive showCount={2} archives={archives} />
                </div>
            </div>
            <div className="w-full bg-right-top bg-cover bg-[url('/Images/Home/homesub.jpg')]">
                <div className="mx-auto max-w-6xl p-4">
                    <h2 className="text-lg sm:text-3xl py-4 font-bold text-title text-center">
                        SUBSCRIBE TO OUR NEWSLETTER
                    </h2>
                    <form className="sm:relative sm:mx-auto sm:max-w-3xl sm:h-16 sm:bg-white sm:rounded-[50px] sm:border-[1px] sm:border-[#929292]">
                        <input
                            id="search_val"
                            name="searchval"
                            placeholder="Enter Email Address"
                            type="email"
                            className="sm:absolute sm:border-none sm:left-10 sm:top-4 sm:w-3/5 outline-none text-xl border-[1px] border-[#929292] p-2 sm:p-0 w-full"
                        />
                        <span>
                            <button className="sm:absolute bg-primary sm:rounded-[50px] text-white text-center sm:h-14 w-full sm:w-40 sm:right-[3px] sm:top-[3px] sm:line-clamp-2 px-6 py-2 sm:pt-1 mt-2 sm:mt-0">
                                SUBSCRIBE NOW
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}