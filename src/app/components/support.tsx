'use client'



import Image from 'next/image'
import bg from '../../../public/tqc3.svg'



import { Button } from "@/components/ui/button"

export const Support = () => {
    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 z-0 bg-blue-700">
                <Image
                    src={bg.src}
                    width={1920}
                    height={1080}
                    alt="Conference audience"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>



            <main className="relative z-10 flex flex-col items-center justify-center gap-10 px-4 pt-60 pb-12 font-extrabold">
                <div className="text-center">
                    <div className="mt-4">
                        <h2 className="text-5xl md:text-4xl lg:text-6xl text-white font-serif tracking-wider">
                            LET US WORK TOGETHER!
                        </h2>
                    </div>
                    <p className="mt-6 text-4xl md:text-4xl text-white/90 max-w-3xl mx-auto mb-12">
                        SUPPORT OUR MISSION BY BECOMING A PARTNER OR SPONSOR
                    </p>
                    {/* <div className="flex items-center gap-4"> */}
                        <Button
                            variant="outline"
                            className="bg-neutral-800/80 text-white border-neutral-700 hover:bg-neutral-700/80 hover:text-white"
                        >
                            Become a Sponsor
                        </Button>
                        <Button className="bg-white text-black hover:bg-gray-100">
                            Join the Waitlist
                        </Button>
                    {/* </div> */}
                </div>
            </main>
        </div>
    )
}