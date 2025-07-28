"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Lazy load the video sections that are below the fold
const VideoSection = dynamic(() => import("./VideoSection"), {
  loading: () => (
    <div className="w-full h-[40vh] bg-gray-900/20 animate-pulse rounded-lg" />
  ),
  ssr: false,
});

// Image placeholder component
const ImagePlaceholder = ({ width, height, className }: { width: number; height: number; className?: string }) => (
  <div
    className={`bg-gray-700/30 animate-pulse ${className}`}
    style={{ width, height }}
  />
);

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className={`${inter.variable} overflow-x-hidden min-h-screen`}
      animate={{
        background: [
          // Start at center
          "radial-gradient(ellipse 35% 35% at 50% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
          // Move left
          "radial-gradient(ellipse 35% 35% at 40% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
          // Move right
          "radial-gradient(ellipse 35% 35% at 60% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
          // Return to center
          "radial-gradient(ellipse 35% 35% at 50% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
          // Stay at center (pause)
          "radial-gradient(ellipse 35% 35% at 50% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
          "radial-gradient(ellipse 35% 35% at 50% top, #5589A7 0%, rgba(85, 137, 167, 0.7) 0%, rgba(85, 137, 167, 0.4) 0%, rgba(8, 8, 21, 0.8) 60%, #080815 80%)",
        ],
      }}
      transition={{
        duration: 8,
        times: [0, 0.15, 0.35, 0.5, 0.75, 1],
        repeat: Infinity,
        ease: "easeInOut",
        repeatDelay: 10,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Desktop Header */}
        <header className="hidden lg:flex h-[7.69rem] w-full items-center px-[30px] justify-between">
          <div className="relative w-[7%]">
            <div className="ellipse absolute border -left-16 -top-[5rem] w-[300px] h-[250px]"></div>
            <Suspense
              fallback={
                <ImagePlaceholder
                  width={52.48}
                  height={37}
                  className="rounded"
                />
              }
            >
              <Image
                src={"/images/image 1.png"}
                alt="logo"
                width={52.48}
                height={37}
                priority // This logo should load first
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Wq/rNLr5bzW8gNveeV9ZyhMcLlsYleZKj8Vl6BVtWtxYfWp/EGg+qK1nTXH6Q4oXmxvlXrmGMUgfO6sWbVgqZHcxqO/bOhbqUjuL8WLvj4aDe7bOYHqpKdLEDQXo0K6K1TGKYrTslOjAIqEAhLZyJJJJ="
              />
            </Suspense>
          </div>
          <nav className="2xl:w-[50%] xl:w-[65%] lg:w-[68%]">
            <ul className="flex gap-[3%] items-center gradient-border relative w-[100%] h-[50px] rounded-[50px] px-[4%] justify-between">
              <li className="xl:text-[80%] lg:text-[67%]">Home</li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Product <ChevronDown width={14} height={14} />
              </li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Webcams <ChevronDown width={14} height={14} />
              </li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Projectors <ChevronDown width={14} height={14} />
              </li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Aurora Pro MKII <ChevronDown width={14} height={14} />
              </li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Explore <ChevronDown width={14} height={14} />
              </li>
              <li className="flex items-center gap-2 xl:text-[80%] lg:text-[67%]">
                Services <ChevronDown width={14} height={14} />
              </li>
            </ul>
          </nav>
          <div className="flex items-center relative justify-between w-[155px] h-[24px]">
            <div className="ellipse absolute -top-[7rem] -right-20 w-[300px] h-[300px]"></div>
            <Search width={24} height={24} />
            <Suspense
              fallback={
                <ImagePlaceholder width={20} height={20} className="rounded" />
              }
            >
              <Image
                src={"/images/Group.svg"}
                alt="profile icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Suspense>
            <Suspense
              fallback={
                <ImagePlaceholder width={24} height={24} className="rounded" />
              }
            >
              <Image
                src={"/images/solar_heart-outline.svg"}
                alt="heart icon"
                width={24}
                height={24}
                loading="lazy"
              />
            </Suspense>
            <Suspense
              fallback={
                <ImagePlaceholder width={24} height={24} className="rounded" />
              }
            >
              <Image
                src={"/images/proicons_cart.svg"}
                alt="cart icon"
                width={24}
                height={24}
                loading="lazy"
              />
            </Suspense>
          </div>
        </header>

        {/* Mobile Header */}
        <header className="lg:hidden flex h-[4rem] w-full items-center px-4 justify-between relative z-20">
          <button
            onClick={toggleMenu}
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
          >
            <Menu width={24} height={24} />
          </button>

          <div className="flex items-center gap-4">
            <Search width={20} height={20} className="text-white" />
            <Suspense
              fallback={
                <ImagePlaceholder width={18} height={18} className="rounded" />
              }
            >
              <Image
                src={"/images/Group.svg"}
                alt="profile icon"
                width={18}
                height={18}
                loading="lazy"
              />
            </Suspense>
            <Suspense
              fallback={
                <ImagePlaceholder width={20} height={20} className="rounded" />
              }
            >
              <Image
                src={"/images/solar_heart-outline.svg"}
                alt="heart icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Suspense>
            <Suspense
              fallback={
                <ImagePlaceholder width={20} height={20} className="rounded" />
              }
            >
              <Image
                src={"/images/proicons_cart.svg"}
                alt="cart icon"
                width={20}
                height={20}
                loading="lazy"
              />
            </Suspense>
          </div>
        </header>

        {/* Mobile Sliding Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                onClick={toggleMenu}
              />

              {/* Sliding Menu */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                className="fixed top-0 left-0 h-full w-[280px] gradient-border2 dark-gradient-with-blue-center2 z-50 lg:hidden"
              >
                <div className="flex flex-col h-full">
                  {/* Header with Logo and Close Button */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="relative">
                      <div className="ellipse absolute -left-8 -top-8 w-[120px] h-[100px] opacity-30"></div>
                      <Suspense
                        fallback={
                          <ImagePlaceholder
                            width={42}
                            height={30}
                            className="rounded"
                          />
                        }
                      >
                        <Image
                          src={"/images/image 1.png"}
                          alt="logo"
                          width={42}
                          height={30}
                          loading="lazy"
                        />
                      </Suspense>
                    </div>
                    <button
                      onClick={toggleMenu}
                      className="p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    >
                      <X width={20} height={20} />
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex-1 px-6 bg-gradient py-8">
                    <ul className="space-y-6">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Home
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Product <ChevronDown width={16} height={16} />
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Webcams <ChevronDown width={16} height={16} />
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Projectors <ChevronDown width={16} height={16} />
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Aurora Pro MKII <ChevronDown width={16} height={16} />
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Explore <ChevronDown width={16} height={16} />
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 text-white text-lg font-medium transition-colors duration-200 cursor-pointer"
                      >
                        Services <ChevronDown width={16} height={16} />
                      </motion.li>
                    </ul>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center bg-[#0E0F1663] backdrop-blur-[30px] mt-[4%] lg:mt-[2%] w-[90%] max-w-[40.7rem] h-auto rounded-[1.25rem] gap-5 px-4 py-6">
          <h1 className="font-[700] text-[2rem] sm:text-[3rem] leading-normal text-center">
            Aurora Pro MKII
          </h1>
          <small className="text-center -mt-4 text-xs inline-flex gap-2 items-center">
            Infinite Depth Of Vision{" "}
            <div className="w-1 h-1 rounded-full font-bold bg-white"></div> See
            Beyond Ordinary
          </small>
          <button className="bg-[#FFFFFF] mb-2 rounded-[50px] text-gray-900 text-[0.875rem] font-[700] w-[8.1rem] h-[2.4rem]">
            Shop now
          </button>
        </div>
      </div>

      {/* Lazy loaded video sections */}
      <Suspense
        fallback={
          <div className="w-full h-[40vh] bg-gray-900/20 animate-pulse" />
        }
      >
        <VideoSection />
      </Suspense>
    </motion.div>
  );
}
