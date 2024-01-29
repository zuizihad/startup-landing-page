'use client';

import BlogPost from "@/components/BlogPost";
import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import OtherService from "@/components/OtherService";
import Service from "@/components/Service";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    !isClient ? <Loader /> :
      <main className="min-h-screen">
        <Hero />
        <Service />
        <Team />
        <OtherService />
        <Business />
        <BlogPost />
        <Subscribe />
        <Footer />
      </main>
  );
}
