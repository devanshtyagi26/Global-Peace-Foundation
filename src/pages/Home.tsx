import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InstagramEmbed } from "react-social-media-embed";
import QR from "/qr.jpg";
import Banner from "/Picture1.jpg";
import first_story from "/Impact Stories/first.jpg";
import second_story from "/Impact Stories/second.jpg";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
} from "react-share";
import SdgOutline from "../components/SdgOutline";
import { Carousel } from "../components/Carousel";

const Home = () => {
  const [qr, setqr] = React.useState(false);
  const { t } = useTranslation();
  const shareUrl = window.location.origin;
  const title = t("hero.title");

  // extra
  const partners = [
    {
      name: t("home.partners.list.asean.name"),
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&fit=crop",
      description: t("home.partners.list.asean.description"),
      website: "https://aseanyouth.org",
    },
    {
      name: t("home.partners.list.pacific.name"),
      logo: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=200&fit=crop",
      description: t("home.partners.list.pacific.description"),
      website: "https://www.forumsec.org",
    },
    {
      name: t("home.partners.list.un.name"),
      logo: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=200&fit=crop",
      description: t("home.partners.list.un.description"),
      website: "https://unyouth.org",
    },
    {
      name: t("home.partners.list.asia.name"),
      logo: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=200&fit=crop",
      description: t("home.partners.list.asia.description"),
      website: "https://asiafoundation.org",
    },
  ];

  const testimonials = [
    {
      quote: t("home.testimonials.list.first.quote"),
      author: t("home.testimonials.list.first.author"),
      role: t("home.testimonials.list.first.role"),
      image: "/Testimonials/rai.jpg",
    },
    {
      quote: t("home.testimonials.list.second.quote"),
      author: t("home.testimonials.list.second.author"),
      role: t("home.testimonials.list.second.role"),
      image: "/Testimonials/trivedi.jpg",
    },
    {
      quote: t("home.testimonials.list.third.quote"),
      author: t("home.testimonials.list.third.author"),
      role: t("home.testimonials.list.third.role"),
      image: "/Testimonials/shashank.jpg",
    },
    {
      quote: t("home.testimonials.list.fourth.quote"),
      author: t("home.testimonials.list.fourth.author"),
      role: t("home.testimonials.list.fourth.role"),
      image: "/Testimonials/sanjay.jpg",
    },
    {
      quote: t("home.testimonials.list.fifth.quote"),
      author: t("home.testimonials.list.fifth.author"),
      role: t("home.testimonials.list.fifth.role"),
      image: "/Testimonials/rekha.jpg",
    },
    {
      quote: t("home.testimonials.list.sixth.quote"),
      author: t("home.testimonials.list.sixth.author"),
      role: t("home.testimonials.list.sixth.role"),
      image: "/Testimonials/winnie.jpg",
    },
  ];

  const caseStudies = [
    {
      title: t("home.impact.list.environmental.title"),
      description: t("home.impact.list.environmental.description"),
      impact: t("home.impact.list.environmental.impact"),
      image:
        "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&fit=crop",
    },
    {
      title: t("home.impact.list.peace.title"),
      description: t("home.impact.list.peace.description"),
      impact: t("home.impact.list.peace.impact"),
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&fit=crop",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {qr ? <Payment setqr={setqr} /> : null}
      <div className="relative bg-indigo-900">
        <div className="absolute inset-0">
          <img
            className="object-cover max-md:object-contain w-full h-full"
            src={Banner}
            alt={t("hero.imageAlt")}
          />
          <SdgOutline />
        </div>
        <div className="relative px-4 py-24 mx-auto md:max-w-[57rem] w-full sm:py-32 sm:px-6 lg:px-8 sm:pt-[13rem] sm:pb-[2rem] max-md:pt-[0.1rem] max-md:pb-16">
          <div className="flex mt-10 space-x-4 relative max-md:-bottom-12 md:left-[-18.5rem] md:bottom-[-1rem] max-sm:bottom-[-3.5rem] max-sm:scale-80 max-sm:right-[0.3rem]">
            <button
              onClick={() => setqr(true)}
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#7cbac9] border border-transparent rounded-md max-md:text-[0.7rem] max-md:px-2 max-md:pt-0 max-md:pb-0 max-md:leading-[1.5rem] hover:bg-[#ABCFD8]"
            >
              {t("hero.joinButton")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a
              href="/events"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md max-md:text-[0.7rem] max-md:px-2 max-md:pt-0 max-md:pb-0 max-md:leading-[1.5rem] hover:bg-gray-50"
            >
              {t("hero.eventsButton")}
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="aboutUs" className="py-16 pt-16 bg-white pt-8 pb-0  ">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative">
              {t("home.AboutUs.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>

            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("home.AboutUs.subtitle")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      </section>
      <section className="py-0 bg-white">
        <div className="px-0 mx-auto w-full">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative mb-8 px-4 md:px-6 lg:px-8 mx-auto md:max-w-[57rem] w-full">
            <span className="absolute left-4 md:left-6 lg:left-8 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
          </h2>
          <Carousel />
        </div>
      </section>
      <SdgOutline />
      {/* Vision Section */}
      <section id="vision" className="py-16 pt-16 bg-white pt-8 pb-0  ">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative">
              {t("home.Vision.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("home.Vision.subtitle")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>
        </div>
      </section>
      {/* Mission Section */}
      <section id="mission" className="py-16 pt-16 bg-white pt-8 pb-0  ">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative">
              {t("home.mission.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("home.mission.subtitle")
                .split("\n")
                .map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative pb-[2rem]">
              {t("home.mission.impactStories.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[1.5rem]">
              <div className="p-6 rounded-lg w-[28rem] sm:w-[22rem] bg-[#e8f5f9] h-[28rem]">
                <img src={first_story} className="object-cover w-full h-48" />
                <div className="h-[calc(100%-12rem)] overflow-auto">
                  <p className="mt-2 text-justify text-lg text-gray-600">
                    {t("home.mission.impactStories.first.description")}
                  </p>
                </div>
              </div>
              <div className="p-6 rounded-lg w-[28rem] sm:w-[22rem] bg-[#e8f5f9] h-[28rem]">
                <img src={second_story} className="object-cover w-full h-48" />
                <div className="h-[calc(100%-12rem)] overflow-auto">
                  <p className="mt-2 text-justify text-lg text-gray-600">
                    {t("home.mission.impactStories.second.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 pt-16 bg-white pt-8 pb-0">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900">
            {t("home.testimonials.title")}
          </h2>

          {/* Mobile horizontal scroller (hidden on md and above) */}
          <div className="md:hidden -mx-4 px-4 pb-4 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 snap-x">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[80vw] max-w-xs snap-center relative overflow-hidden rounded-xl shadow-xl h-[30rem] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Content container with semi-transparent background panel at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-sm h-[35%] md:h-[40%]">
                    <div className="flex flex-col justify-between h-full">
                      <p className="italic text-gray-800 text-[clamp(0.7rem,3vw,0.9rem)] leading-tight overflow-hidden">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center mt-3">
                        <div className="w-10 h-10 mr-3 overflow-hidden border-2 border-white rounded-full shadow-md">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">
                            {testimonial.author}
                          </h3>
                          <p className="text-gray-700 text-xs">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/tablet grid layout (hidden on small screens) */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-xl h-[30rem] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Content container with semi-transparent background panel at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/70 backdrop-blur-sm h-[40%]">
                  <div className="flex flex-col justify-between h-full">
                    <p className="italic text-gray-800 text-[clamp(0.75rem,1.5vw,0.95rem)] leading-tight overflow-hidden">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center mt-3">
                      <div className="w-10 h-10 mr-3 overflow-hidden border-2 border-white rounded-full shadow-md">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {testimonial.author}
                        </h3>
                        <p className="text-gray-700 text-xs">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {t("home.social.title")}
            </h2>
            <p className="md:max-w-[57rem] w-full mx-auto mt-4 text-xl text-gray-500">
              {t("home.social.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-2">
            {/* Instagram Feed */}
            <div className="space-y-6">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {t("home.social.updates.title")}
              </h3>
              <div className="overflow-hidden rounded-lg shadow-lg instagram-feed-container">
                <InstagramEmbed
                  url="https://www.instagram.com/ippf_gpfindia?igsh=OW45a2VqcGtneDZu"
                  width={500}
                />
              </div>
            </div>

            {/* Social Sharing and Links */}
            <div className="space-y-8">
              {/* Share Section */}
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.social.share.title")}
                </h3>
                <p className="mt-2 mb-6 text-gray-500">
                  {t("home.social.share.subtitle")}
                </p>
                <div className="flex items-center space-x-4">
                  <FacebookShareButton url={shareUrl} title={title}>
                    <div className="p-3 transition-colors duration-300 rounded-full hover:bg-blue-50">
                      <FacebookIcon size={48} round />
                    </div>
                  </FacebookShareButton>

                  <TwitterShareButton url={shareUrl} title={title}>
                    <div className="p-3 transition-colors duration-300 rounded-full hover:bg-blue-50">
                      <XIcon size={48} round />
                    </div>
                  </TwitterShareButton>

                  <LinkedinShareButton url={shareUrl} title={title}>
                    <div className="p-3 transition-colors duration-300 rounded-full hover:bg-blue-50">
                      <LinkedinIcon size={48} round />
                    </div>
                  </LinkedinShareButton>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-white shadow-sm rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("home.social.follow.title")}
                </h3>
                <p className="mt-2 mb-6 text-gray-500">
                  {t("home.social.follow.subtitle")}
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/ippf_gpfindia?igsh=OW45a2VqcGtneDZu"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                      alt={t("home.social.follow.instagram.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("home.social.follow.instagram.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("home.social.follow.instagram.handle")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://x.com/ippf_gpfindia?s=09"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/225px-X_icon.svg.png"
                      alt={t("home.social.follow.twitter.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("home.social.follow.twitter.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("home.social.follow.twitter.handle")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/indo-pacific-peace-forum/"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
                      alt={t("home.social.follow.linkedin.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("home.social.follow.linkedin.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("home.social.follow.linkedin.handle")}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Payment = ({
  setqr,
}: {
  setqr: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("overflow-hidden");
    return () =>
      document.querySelector("body")?.classList.remove("overflow-hidden");
  }, []);
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center w-screen h-screen bg-black/60">
      <div className="w-full max-w-md mx-auto bg-white border-4 border-purple-700 rounded-xl">
        <div className="overflow-hidden glass rounded-2xl shadow-apple">
          {/* Header */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 overflow-hidden rounded-full bg-secondary">
                  <img
                    src={"https://www.svgrepo.com/show/2576/money.svg"}
                    alt={"GLOBAL PEACE"}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Donate to</p>
                  <h3 className="font-medium">{"GLOBAL PEACE"}</h3>
                </div>
              </div>
              <button
                className="px-3 py-1 text-sm font-medium text-white bg-purple-400 rounded-full bg-primary/10 text-primary"
                onClick={() => {
                  setqr(false);
                }}
              >
                Back
              </button>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center p-2 rounded-xl">
            <div className="relative p-4 mb-4 bg-white border-2 shadow-sm rounded-xl">
              <img
                src={QR}
                alt="Payment QR Code"
                width={200}
                height={200}
                className="rounded-md"
              />
            </div>

            <p className="text-sm text-center text-muted-foreground mt-2 mb-4 max-w-[250px]">
              Your one donation can save million of lives!
            </p>
            <div className="p-4 text-xs text-center text-muted-foreground">
              Upi, Bhim, Paypal
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 text-xs text-center text-muted-foreground">
            Secure payment processed by Example Payment Provider
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
