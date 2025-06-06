'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ServiceSection = () => {
    return (
        <section className="pb-[72px] sm:pb-[100px] bg-dark-section relative">
            <style jsx global>{`
                @keyframes blinkFade {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0;
                    }
                }

                .heading-underline {
                    position: relative;
                    cursor: pointer;
                    display: inline-block;
                }

                .heading-underline::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 4px;
                    bottom: -4px;
                    left: 0;
                    background-color: rgb(255, 255, 255);
                    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .heading-underline:hover::after {
                    width: 100%;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 items-start">
                    <div className="flex flex-col justify-center h-full">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-gray-400 tracking-wider text-sm uppercase" style={{ fontFamily: 'Space Grotesk' }}>
                                CLICK TO VIEW SERVICE
                            </span>

                            <div className="space-y-4 relative">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="font-bold text-white text-[57px] md:text-[101px]"
                                    style={{
                                        fontFamily: 'Clash Display Semibold',
                                        lineHeight: '100%',
                                        letterSpacing: '-1px'
                                    }}
                                >
                                    <span className="heading-underline block">BRANDING</span>
                                    <div className="flex items-center my-2">
                                        <div
                                            className="w-12 md:w-24 h-12 md:h-24 bg-[#FFDB71] rounded-full"
                                            style={{ animation: 'blinkFade 2.5s ease-in-out infinite' }}
                                        ></div>
                                        <span className="heading-underline">VIDEO</span>
                                    </div>
                                    <div className="whitespace-nowrap lg:absolute lg:z-20 heading-underline">WEB DESIGN</div>
                                </motion.h2>
                            </div>

                            <div>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-gray-400 leading-relaxed max-w-xl pb-[32px]"
                                    style={{ fontFamily: 'Space Grotesk', fontSize: '18px', lineHeight: '100%', letterSpacing: '-1px', fontWeight: 400 }}
                                >
                                    7AVENUE® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                                </motion.p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/4] rounded-2xl overflow-hidden lg:w-[102%] lg:-ml-[2%]">
                            <Image
                                src="/img/service-section-img.png"
                                alt="Service section image"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
