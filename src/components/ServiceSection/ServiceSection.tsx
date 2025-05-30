'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ServiceSection = () => {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-[#1A1B1E]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="text-gray-400 tracking-wider text-sm uppercase">
                            CLICK TO VIEW SERVICE
                        </span>

                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                                style={{ fontFamily: 'Clash Display Semibold' }}
                            >
                                BRANDING
                                <div className="flex items-center gap-4 my-2">
                                    <div className="w-12 h-12 bg-yellow-300 rounded-full"></div>
                                    <span>VIDEO</span>
                                </div>
                                WEB DESIGN
                            </motion.h2>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-lg leading-relaxed max-w-xl"
                        >
                            7AVENUE® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.            </motion.p>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/img/service-section-img.png"
                                alt="Service section image"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* <div className="absolute bottom-6 left-6 text-white text-sm">
                NOEL SCJARIS — YOUSIC PLAY
              </div> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection; 