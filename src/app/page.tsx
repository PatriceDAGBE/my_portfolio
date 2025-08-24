import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"


export default function Home() {

    const myStatsData = [
        { value: 2, label: "Years of<br/>Experience" },
        { value: 50, label: "Projects<br/>Completed" },
        { value: 6000, label: "Clients<br/>Worldwide" },
        { value: 12000, label: "Awards<br/>Archived" }
    ];

    return (
        <div className="relative font-sans text-white items-center justify-items-center min-h-screen py-8 px-72 bg-primary-dark">
            <div className="
                relative
                w-full
                rounded-3xl
                shadow-[16px_16px_20px_#00000008]
                overflow-hidden
                before:absolute
                before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
                before:bg-[conic-gradient(transparent,#403669,#403669)]
                before:animate-spin-slow
            ">
                <div className="
                    relative z-10
                    flex flex-col justify-center align-middle
                    rounded-2xl
                    top-0 right-0 bottom-0 left-0
                    m-[6px]
                    p-4 bg-primary-dark
                ">

                    {/* Page content */}
                    <div className="flex flex-col w-full px-16">
                        <main className="flex flex-col items-center w-full h-full">
                            <Header/>
                            <Hero/>
                            <Stats myStats={myStatsData}/>
                            <Services/>
                        </main>
                        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                            <p>Footer</p>
                        </footer>
                    </div>

                </div>
                                
            </div>
        </div>
    );
}