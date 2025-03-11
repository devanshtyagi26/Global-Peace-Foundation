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

const About = () => {
  const [qr, setqr] = React.useState(false);
  const { t } = useTranslation();
  const shareUrl = window.location.origin;
  const title = t("hero.title");

  const partners = [
    {
      name: t("about.partners.list.asean.name"),
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&fit=crop",
      description: t("about.partners.list.asean.description"),
      website: "https://aseanyouth.org",
    },
    {
      name: t("about.partners.list.pacific.name"),
      logo: "https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?w=200&fit=crop",
      description: t("about.partners.list.pacific.description"),
      website: "https://www.forumsec.org",
    },
    {
      name: t("about.partners.list.un.name"),
      logo: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=200&fit=crop",
      description: t("about.partners.list.un.description"),
      website: "https://unyouth.org",
    },
    {
      name: t("about.partners.list.asia.name"),
      logo: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=200&fit=crop",
      description: t("about.partners.list.asia.description"),
      website: "https://asiafoundation.org",
    },
  ];

  const testimonials = [
    {
      quote: t("about.testimonials.list.first.quote"),
      author: t("about.testimonials.list.first.author"),
      role: t("about.testimonials.list.first.role"),
      image: "/Testimonials/rai.jpg",
    },
    {
      quote: t("about.testimonials.list.second.quote"),
      author: t("about.testimonials.list.second.author"),
      role: t("about.testimonials.list.second.role"),
      image: "/Testimonials/trivedi.jpg",
    },
    {
      quote: t("about.testimonials.list.third.quote"),
      author: t("about.testimonials.list.third.author"),
      role: t("about.testimonials.list.third.role"),
      image: "/Testimonials/shashank.jpg",
    },
    {
      quote: t("about.testimonials.list.fourth.quote"),
      author: t("about.testimonials.list.fourth.author"),
      role: t("about.testimonials.list.fourth.role"),
      image: "/Testimonials/sanjay.jpg",
    },
    {
      quote: t("about.testimonials.list.fifth.quote"),
      author: t("about.testimonials.list.fifth.author"),
      role: t("about.testimonials.list.fifth.role"),
      image: "/Testimonials/rekha.jpg",
    },
    {
      quote: t("about.testimonials.list.sixth.quote"),
      author: t("about.testimonials.list.sixth.author"),
      role: t("about.testimonials.list.sixth.role"),
      image: "/Testimonials/winnie.jpg",
    },
  ];

  const caseStudies = [
    {
      title: t("about.impact.list.environmental.title"),
      description: t("about.impact.list.environmental.description"),
      impact: t("about.impact.list.environmental.impact"),
      image:
        "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&fit=crop",
    },
    {
      title: t("about.impact.list.peace.title"),
      description: t("about.impact.list.peace.description"),
      impact: t("about.impact.list.peace.impact"),
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
          <div className="flex mt-10 space-x-4 relative max-md:-bottom-12">
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
              {t("about.AboutUs.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>

            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("about.AboutUs.subtitle")
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
      <Carousel />
      <SdgOutline />
      {/* Vision Section */}
      <section id="vision" className="py-16 pt-16 bg-white pt-8 pb-0  ">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left text-[1.7rem] leading-[1.75rem] relative">
              {t("about.Vision.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("about.Vision.subtitle")
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
              {t("about.mission.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <p className="md:max-w-[57rem] w-full mt-4 text-xl text-gray-500 lg:mx-auto text-justify text-lg">
              {t("about.mission.subtitle")
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
              {t("about.mission.impactStories.title")}
              <span className="absolute left-0 w-[14%] border-t-4 border-[#009edb] mt-[2.7rem]"></span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-[1.5rem]">
              <div className="p-6 rounded-lg  w-[28rem] sm:w-[22rem] bg-[#e8f5f9]">
                <img src={first_story} className="object-cover w-full h-48" />
                <p className="mt-2 text-justify text-lg text-gray-600">
                  {t("about.mission.impactStories.first.description")}
                </p>
              </div>
              <div className="p-6 rounded-lg  w-[28rem] sm:w-[22rem] bg-[#e8f5f9]">
                <img src={second_story} className="object-cover w-full h-48" />
                <p className="mt-2 text-justify text-lg text-gray-600">
                  {t("about.mission.impactStories.second.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 pt-16 bg-white pt-8 pb-0  ">
        <div className="px-4 mx-auto md:max-w-[57rem] w-full sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-extrabold text-center text-gray-900">
            {t("about.testimonials.title")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-lg bg-gray-50">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="text-justify text-lg font-medium text-gray-900">
                      {testimonial.author}
                    </h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-600">"{testimonial.quote}"</p>
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
              {t("about.social.title")}
            </h2>
            <p className="md:max-w-[57rem] w-full mx-auto mt-4 text-xl text-gray-500">
              {t("about.social.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-16 lg:grid-cols-2">
            {/* Instagram Feed */}
            <div className="space-y-6">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                {t("about.social.updates.title")}
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
                  {t("about.social.share.title")}
                </h3>
                <p className="mt-2 mb-6 text-gray-500">
                  {t("about.social.share.subtitle")}
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
                  {t("about.social.follow.title")}
                </h3>
                <p className="mt-2 mb-6 text-gray-500">
                  {t("about.social.follow.subtitle")}
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/ippf_gpfindia?igsh=OW45a2VqcGtneDZu"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                      alt={t("about.social.follow.instagram.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("about.social.follow.instagram.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("about.social.follow.instagram.handle")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://x.com/ippf_gpfindia?s=09"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/225px-X_icon.svg.png"
                      alt={t("about.social.follow.twitter.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("about.social.follow.twitter.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("about.social.follow.twitter.handle")}
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/indo-pacific-peace-forum/"
                    className="flex items-center p-4 transition-colors duration-300 rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/108px-LinkedIn_icon.svg.png"
                      alt={t("about.social.follow.linkedin.name")}
                      className="w-8 h-8 mr-4"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {t("about.social.follow.linkedin.name")}
                      </p>
                      <p className="text-sm text-gray-500">
                        {t("about.social.follow.linkedin.handle")}
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

export default About;
