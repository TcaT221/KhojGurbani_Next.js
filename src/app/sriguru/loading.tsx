import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex justify-center items-center">
            <Image src='/images/loading/loading.gif' width={100} height={100} alt="loading..." />
        </div>
    )
}