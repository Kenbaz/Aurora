import Image from "next/image";
import { Suspense } from "react";

const VideoSection = () => {
  return (
    <>
      {/* Mobile Video Section */}
      <main className="main1 w-full -mt-[4%] relative lg:hidden min-h-[40vh] flex items-center justify-center px-4">
        <div className="w-[56.19%] h-[30%] relative -left-[1.2vw]  md:w-[51.2vw] md:h-[19.5vh] md:top-[0.1vh] md:-left-[1.1vw] aspect-video border-2 border-black md:border-none">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/Screen-recording.mp4" type="video/mp4" />
          </video>
          <Suspense
            fallback={
              <div className="absolute hidden md:block rounded-[50px] left-[10%] -bottom-[5%] w-[300px] h-[33px] bg-gray-700/30 animate-pulse" />
            }
          >
            <Image
              src={"/images/Frame 16.png"}
              alt="artifact"
              width={300}
              height={33.37}
              className="absolute hidden md:block rounded-[50px] left-[10%] -bottom-[5%]"
              loading="lazy"
            />
          </Suspense>
          <Suspense
            fallback={
              <div className="absolute md:hidden rounded-[50px] left-[10%] -bottom-[5%] w-[150px] h-[33px] bg-gray-700/30 animate-pulse" />
            }
          >
            <Image
              src={"/images/Frame 16.png"}
              alt="artifact"
              width={150}
              height={33.37}
              className="absolute md:hidden rounded-[50px] left-[10%] -bottom-[5%]"
              loading="lazy"
            />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="absolute hidden md:block rounded-md right-[8%] bottom-[10%] w-[150px] h-[60px] bg-gray-700/30 animate-pulse" />
          }
        >
          <Image
            src={"/images/Frame 17.svg"}
            alt="artifact"
            width={150}
            height={60}
            className="absolute hidden md:block rounded-md right-[8%] bottom-[10%]"
            loading="lazy"
          />
        </Suspense>
      </main>

      {/* Tablet Video Section */}
      <main className="main w-full relative hidden lg:block xl:hidden lg:h-[40vh] lg:landscape:h-[75vh]">
        <div className="relative lg:w-[53.5vw] lg:h-[21.8vh] lg:top-[9.2vh] lg:left-[22vw] lg:landscape:w-[50.95vw] lg:landscape:h-[47.1vh] lg:landscape:left-[23.3vw] lg:landscape:top-[14.2vh]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/Screen-recording.mp4" type="video/mp4" />
          </video>
          <Suspense
            fallback={
              <div className="absolute rounded-[50px] left-[10%] -bottom-[5%] w-[420px] h-[33px] bg-gray-700/30 animate-pulse" />
            }
          >
            <Image
              src={"/images/Frame 16.png"}
              alt="artifact"
              width={420}
              height={33.37}
              className="absolute rounded-[50px] left-[10%] -bottom-[5%]"
              loading="lazy"
            />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="absolute rounded-md lg:landscape:right-[5%] lg:right-[8%] bottom-[5%] w-[150px] h-[60px] bg-gray-700/30 animate-pulse" />
          }
        >
          <Image
            src={"/images/Frame 17.svg"}
            alt="artifact"
            width={150}
            height={60}
            className="absolute rounded-md lg:landscape:right-[5%] lg:right-[8%] bottom-[5%]"
            loading="lazy"
          />
        </Suspense>
      </main>

      {/* Desktop Video Section */}
      <main className="main w-full hidden xl:block relative h-[40vh] 2xl:h-[100vh] xl:h-[82.45vh]">
        <div className="2xl:w-[50.5vw] 2xl:h-[59.5vh] relative 2xl:left-[23.1vw] 2xl:top-[20.5%] xl:w-[51.55vw] xl:h-[44.94vh] xl:left-[23.05vw] xl:top-[19vh] lg:w-[66.6vw] hidden xl:block">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/Screen-recording.mp4" type="video/mp4" />
          </video>
          <Suspense
            fallback={
              <div className="absolute rounded-[50px] left-[20%] -bottom-[5%] w-[436px] h-[33px] bg-gray-700/30 animate-pulse" />
            }
          >
            <Image
              src={"/images/Frame 16.png"}
              alt="artifact"
              width={436.5}
              height={33.37}
              className="absolute rounded-[50px] left-[20%] -bottom-[5%]"
              loading="lazy"
            />
          </Suspense>
        </div>
        <Suspense
          fallback={
            <div className="absolute rounded-md right-[5%] bottom-[5%] w-[213px] h-[60px] bg-gray-700/30 animate-pulse" />
          }
        >
          <Image
            src={"/images/Frame 17.svg"}
            alt="artifact"
            width={213}
            height={60}
            className="absolute rounded-md right-[5%] bottom-[5%]"
            loading="lazy"
          />
        </Suspense>
        <Suspense
          fallback={
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 w-[61px] h-[61px] bg-gray-700/30 animate-pulse rounded-full" />
          }
        >
          <Image
            src={"/images/ri_arrow-down-wide-fill.svg"}
            alt="artifact"
            width={61}
            height={61}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2"
            loading="lazy"
          />
        </Suspense>
      </main>
    </>
  );
};

export default VideoSection;
