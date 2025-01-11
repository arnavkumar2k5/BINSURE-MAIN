'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Company() {
    const logosRef = useRef(null)

    const logos = [
        { name: 'td', src: '/td.png' },
        { name: 'company', src: '/companylogo9.png' },
        { name: 'company', src: '/image 12.png' },
        { name: 'sunlife', src: '/sunlife.png' },
        { name: 'rbc', src: '/rbc.svg' },
        { name: 'rbc', src: '/companylogo8.png' },
        { name: 'rbc', src: '/image 15.png' },
        { name: 'rbc', src: '/companyLogo3.svg' },
        { name: 'manulife', src: '/image 13.png' },


    ]

    const allLogos = [...logos, ...logos]

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.to(logosRef.current, {
                xPercent: -50,
                repeat: -1,
                ease: 'linear',
                duration: 30,
            })
        })

        return () => context.revert()
    }, [])

    return (
        <section className="w-full py-20 bg-background border border-gray-200 relative top-[-30px] bg-white">
            <div className="container flex flex-col md:flex-row items-center px-4 md:px-6 justify-between">
                <div className="text-center md:text-left w-full md:w-1/2 space-y-4 md:px-[10%]">
                    <h2 className="text-3xl font-bold tracking-tighter ">
                        Partnerships with leading
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto md:mx-0">
                        Canadian Insurance Providers
                    </p>
                </div>

                <div
                    className="logos mt-8 md:mt-0 md:ml-auto relative overflow-hidden bg-clouds w-full md:w-1/2"
                >
                    <div
                        ref={logosRef}
                        className="flex items-center justify-start gap-8 py-4"
                        style={{
                            width: 'fit-content'
                        }}
                    >
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[120px] h-16"
                            >
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                    width={80}
                                    // height={40}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
        

        .bg-clouds::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(240, 240, 255, 0.5) 20%, transparent 100%);
          z-index: -1;
          filter: blur(20px);
        }
      `}</style>
        </section>
    )
}
