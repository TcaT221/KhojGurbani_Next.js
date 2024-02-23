'use client'

import { useState } from "react";
import { Ang } from "./Ang";
import { Pagination } from "./Pagination";
import { Scripture } from "./Scripture";
import { SettingButton } from "./SettingButton";
import { Setting } from "./Setting";
import { Print } from "./Print";
import { saveAs } from 'file-saver';
import { CommentaryList } from "./CommentaryList";
import { SriGuruMedia } from "./SriGuruMedia";

export const Sriguru = ({ route, item, shabadData, commentaryList, mediaData }: { route: string; item: string; shabadData: any; commentaryList: any, mediaData: any }) => {

    const [settingOpen, setSettingOpen] = useState<boolean>(false);
    const [setting, setSetting] = useState({
        option1: false,
        option2: true,
        option3: true,
        option4: false,
        option5: false,
        option6: true,
        option7: false,
        option8: false,
    });
    const [printOpen, setPrintOpen] = useState<boolean>(false);
    const [print, setPrint] = useState({
        print_opt1: true,
        print_opt2: false,
        print_opt3: true,
        print_opt4: true,
        print_opt5: false,
        print_opt6: false,
        print_opt7: true,
        print_opt8: false,
        print_opt9: false,
        print_opt10: "line",
    });

    const exportData = () => {
        let data = '';
        if (print.print_opt10 === 'line') {
            for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                if (print.print_opt1) data += shabadData.data.scriptures[i].Scripture + '\n';
                if (print.print_opt2) data += shabadData.data.scriptures[i].ScriptureOriginal + '\n';
                if (print.print_opt3) data += shabadData.data.scriptures[i].ScriptureRoman + '\n';
                if (print.print_opt4) data += shabadData.data.scriptures[i].translation.KhojgurbaaniEnglish + '\n';
                if (print.print_opt5) data += shabadData.data.scriptures[i].translation.ManmohanSinghEnglish + '\n';
                if (print.print_opt6) data += shabadData.data.scriptures[i].translation.SantSinghKhalsaEnglish + '\n';
                if (print.print_opt7) data += shabadData.data.scriptures[i].translation.HarbansSinghPunjabi + '\n';
                if (print.print_opt8) data += shabadData.data.scriptures[i].translation.ManmohanSinghPunjabi + '\n';
                if (print.print_opt9) data += shabadData.data.scriptures[i].translation.SahibSinghPunjabi + '\n';
                data += '\n';
            }
        }
        if (print.print_opt10 === 'section') {
            if (print.print_opt1) {
                data += "Gurmukhi-Pad Ched:\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].Scripture + '\n';
                }
                data += '\n';
            }
            if (print.print_opt2) {
                data += "Gurmukhi-Lareevaar:\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].ScriptureOriginal + '\n';
                }
                data += '\n';
            }
            if (print.print_opt3) {
                data += "Roman Script:\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].ScriptureRoman + '\n';
                }
                data += '\n';
            }
            if (print.print_opt4) {
                data += "Author(English) -KhojGurbani\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.KhojgurbaaniEnglish + '\n';
                }
                data += '\n';
            }
            if (print.print_opt5) {
                data += "Author(English) -Bhai Manmohan Singh\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.ManmohanSinghEnglish + '\n';
                }
                data += '\n';
            }
            if (print.print_opt6) {
                data += "Author(English) -Dr. Sant Singh Khalsa\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.SantSinghKhalsaEnglish + '\n';
                }
                data += '\n';
            }
            if (print.print_opt7) {
                data += "Author(Teeka) -Giani Harbans Singh\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.HarbansSinghPunjabi + '\n';
                }
                data += '\n';
            }
            if (print.print_opt8) {
                data += "Author(Teeka) -Bhai Manmohan Singh\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.ManmohanSinghPunjabi + '\n';
                }
                data += '\n';
            }
            if (print.print_opt9) {
                data += "Author(Teeka) -Prof. Sahib Singh\n\n"
                for (let i = 0; i < shabadData.data.scriptures.length; i++) {
                    data += shabadData.data.scriptures[i].translation.SahibSinghPunjabi + '\n';
                }
                data += '\n';
            }
        }
        const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, `export_${print.print_opt10}.txt`);
    }

    return (
        <>
            <div className="flex justify-between">
                <Ang currentPage={route} />
                <SettingButton setSettingOpen={setSettingOpen} setPrintOpen={setPrintOpen} />
            </div>
            <Pagination pages={shabadData.pages} currentRoute={route} currentItem={item} />
            {
                shabadData.data.scriptures.map((scripture: any) => {
                    return (
                        <Scripture key={scripture.id} scripture={scripture} setting={setting} />
                    );
                })
            }
            <CommentaryList commentaryList={commentaryList} />
            <SriGuruMedia mediaData={mediaData} />

            <Setting settingOpen={settingOpen} setSettingOpen={setSettingOpen} setting={setting} setSetting={setSetting} />
            <Print printOpen={printOpen} setPrintOpen={setPrintOpen} print={print} setPrint={setPrint} exportData={exportData} />
        </>
    );
}