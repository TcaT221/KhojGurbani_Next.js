
"use client"

import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useState } from "react";

export default function MediaTable(props: { medias: { id: number; title: string; duration: string; Scripture: string; ScriptureRomanEnglish: string; page: number; shabad_id: number; attachment_name: string; }[]; }) {

    // console.log(props.medias);
    const { isPlaying, pauseAudio, playAudio } = useAudioPlayer();
    const [mediaIndex, setMediaIndex] = useState<number | null>(null);

    return (
        <table className="border-collapse rounded-t-md overflow-hidden w-full">
            <thead className="bg-[#094457]">
                <tr className="border border-[#094457]">
                    <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[5%]">#</th>
                    <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[30%]">Title</th>
                    <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[15%]">Duration</th>
                    <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[30%]">Shabad</th>
                    <th className="text-white text-lg text-left font-normal px-[15px] py-[12px] w-[20%]">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.medias.map((
                    item: {
                        id: number; title: string; duration: string; Scripture: string;
                        ScriptureRomanEnglish: string; page: number; shabad_id: number; attachment_name: string;
                    },
                    index: number
                ) => (
                    <tr key={item.id} className="border border-[#DEE2E6]">
                        <td className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top">{index + 1}</td>
                        <td className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top">{item.title}</td>
                        <td className="text-[#707070] text-base text-left font-normal px-[15px] py-[12px] align-top">{item.duration}</td>
                        <td className="px-[15px] py-[12px] align-top">
                            <div className="text-blue-primary text-base text-left font-bold pb-1 leading-normal">
                                {item.Scripture}
                            </div>
                            <div className="text-[#252638] text-sm text-left font-normal leading-normal">
                                {item.ScriptureRomanEnglish}
                            </div>
                            <div className="text-[#707070] text-sm text-left font-normal leading-normal">
                                Page <span>{item.page}</span> Shabad <span>{item.shabad_id}</span>
                            </div>
                        </td>
                        <td className="px-[15px] py-[12px] align-top">
                            <button
                                className=""
                                onClick={() => {
                                    if (mediaIndex === index) {
                                        if (isPlaying) {
                                            pauseAudio();
                                        } else {
                                            playAudio(item.attachment_name, item.title);
                                        }
                                        return;
                                    }
                                    setMediaIndex(index);
                                    playAudio(item.attachment_name, item.title);
                                }}
                            >
                                {
                                    mediaIndex === index ?
                                        (
                                            isPlaying ?
                                                <img src="/Images/SVG/pause.svg" alt="pause" className="cursor-pointer w-9 h-9" />
                                                :
                                                <img src="/Images/SVG/play.svg" alt="play" className="cursor-pointer w-9 h-9" />
                                        ) :
                                        (
                                            <img src="/Images/SVG/preplay.svg" alt="preplay" className="cursor-pointer w-9 h-9" />
                                        )
                                }
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}