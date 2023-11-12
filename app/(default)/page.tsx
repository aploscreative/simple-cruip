"use client";
import SoftwareDevelopmentCycle from "@/components/development-cycle";

import Hero from '@/components/hero'
import ServicesBlocks from '@/components/services-blocks'
import Testimonials from '@/components/testimonials'
import Industries from "@/components/industries";
import ContactSection from "@/components/contact-section";
import {Toaster} from "react-hot-toast";

export default function Home() {
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Hero/>
            <Industries/>
            <ServicesBlocks/>
            <Testimonials/>
            {/*<Features />*/}

            <SoftwareDevelopmentCycle/>
            <ContactSection/>
        </>
    )
}
