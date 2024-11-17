import React, { useEffect } from "react";
import "./styleSiteNews.css"

const SiteNews = ({funcNav}) => {
  useEffect(() => {
    funcNav(false);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  }

  const btnToTupSite = document.querySelector("#btnToTupSite");
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnToTupSite.style.transform = "translateY(0px)";
    } else {
      btnToTupSite.style.transform = "translateY(80px)";
    }
  }

  const showMenuMb = () => {
    const navigation = document.querySelector("#navigation");
    navigation.classList.toggle("hidden")
  }

  return(
    <>
      <div className="bg-white">
        <header className="py-3 px-4 bg-gradient-to-r from-blueH1 to-blueH2 font-poppins flex justify-between items-center fixed left-0 right-0 shadow-lg z-10">
          <div className="flex items-stretch lg:space-x-8 flex-col lg:flex-row w-full">
            <div className="flex justify-between">
              <figure>
                <img src="/tech-logo.png" />
              </figure>
                {/* Boton mobile para el menu */}
              <button className="bg-black bg-opacity-20 rounded-md px-2 lg:hidden" id="btnMobileMenu" onClick={showMenuMb}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-9" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>

            <nav className="hidden lg:block w-[95%] mx-auto lg:w-auto mt-3 lg:mt-0" id="navigation">
              <ul className="flex lg:space-x-6 lg:items-center h-full relative flex-col lg:flex-row space-y-3 lg:space-y-0">
                <li> <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80">Home</a> </li>
                <li id="newsLinkMegaMenu" className="items-center h-full hidden lg:flex">
                  <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80 flex items-center space-x-1 leading-none" >
                    <span>News</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 23" strokeWidth="3" stroke="currentColor" className="size-3 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </a>
                  <div id="megamenu" className="bg-gradient-to-r from-[#edeff2] to-[#FFF]">
                    <div className="flex container mx-auto">
                      <div className="w-3/12 pl-5 py-8 border-r-[1px] border-r-gray-200">
                        <ul className="flex flex-col items-end">
                          <li className="w-full text-right">
                            <a href="#" className="py-[4px] pr-3 font-poppins text-[15px] hover:bg-white transition block w-full">Science</a>
                          </li>
                          <li className="w-full text-right">
                            <a href="#" className="py-[4px] pr-3 font-poppins text-[15px] hover:bg-white transition block w-full">Technology</a>
                          </li>
                          <li className="w-full text-right">
                            <a href="#" className="py-[4px] pr-3 font-poppins text-[15px] hover:bg-white transition block w-full">Social Media</a>
                          </li>
                          <li className="w-full text-right">
                            <a href="#" className="py-[4px] pr-3 font-poppins text-[15px] hover:bg-white transition block w-full">Car News</a>
                          </li>
                          <li className="w-full text-right">
                            <a href="#" className="py-[4px] pr-3 font-poppins text-[15px] hover:bg-white transition block w-full">Worldwide</a>
                          </li>
                        </ul>
                      </div>
                      <div className="w-9/12 bg-white">
                        <div className="py-5 px-4 flex gap-x-8">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="flex flex-col space-y-4">
                              <a href="#" className="w-full overflow-hidden h-full block relative card-video-aside">
                                <div className="relative hover:scale-110 transition-all">
                                  <img src="/800x460.jpg" className="h-full" />
                                  <div className="absolute bottom-0 top-10 w-full transition-all bg-gradient-to-t from-[#646464] hover:from-[#212121] from-0% to-[transparent] to-80%"></div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-11 absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-0 text-[rgba(255,255,255,0.5)]">
                                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                              </a>
                              <a href="#" className="text-sm font-poppins font-semibold leading-snug hover:underline">2017 summer stamp will have design models here</a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li> <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80">Gadgets</a> </li>
                <li> <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80">Videos</a> </li>
                <li> <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80">Reviews</a> </li>
                <li> <a href="#" className="text-white uppercase text-sm font-poppins font-medium hover:text-opacity-80">Contact Us</a> </li>
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex space-x-3">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6" stroke="white">
                <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75a8.25 8.25 0 0 1 8.25 8.25v.75a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.75a6 6 0 0 0-6-6H4.5a.75.75 0 0 1-.75-.75v-.75Zm0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="size-6" fill="white" stroke="white">
                <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"/>
              </svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="size-6" fill="white" stroke="white">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
            </a>
          </div>

        </header>
        <section className="flex flex-col lg:flex-row pt-20 px-2 lg:items-stretch lg:space-x-3 space-y-4 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex overflow-hidden relative">
            <img src="/788x443.jpg" className="object-cover hover:scale-110 transition-all flex-1" />
            <div className="absolute bottom-0 bg-gradient-to-t from-[#212121] from-0% to-[transparent] to-80% px-6 space-y-4 pb-4">
              <a href="#" className="inline-block bg-orange1 text-[14px] px-3 text-white">Technology</a>
              <a href="#" className="text-3xl font-bold text-white hover:underline block">Say hello to real handmade office furniture! Clean & beautiful design</a>
              <p className="flex space-x-4">
                <span className="text-white text-xs font-semibold uppercase">24 JULY, 2017</span>
                <span className="text-white text-xs font-semibold uppercase">/</span>
                <span className="text-white text-xs font-semibold uppercase">By Amanda</span>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-stretch lg:space-x-3 space-y-4 lg:space-y-0">
            <div className="w-full lg:w-auto overflow-hidden relative">
              <img src="/394x449.jpg" className="object-cover hover:scale-110 transition-all h-full lg:flex-1 w-full" />
              <div className="absolute bottom-0 bg-gradient-to-t from-[#212121] from-0% to-[transparent] to-80% px-6 space-y-4 pb-4 w-full">
                <a href="#" className="inline-block bg-orange1 text-[14px] px-3 text-white">Technology</a>
                <a href="#" className="text-xl font-bold text-white hover:underline block">Say hello to real handmade office furniture! Clean & beautiful design</a>
                <p className="flex space-x-4">
                  <span className="text-white text-xs font-semibold uppercase">24 JULY, 2017</span>
                  <span className="text-white text-xs font-semibold uppercase">/</span>
                  <span className="text-white text-xs font-semibold uppercase">By Amanda</span>
                </p>
              </div>
            </div>
            <div className="w-full lg:w-auto overflow-hidden relative">
              <img src="/394x449.jpg" className="object-cover hover:scale-110 transition-all h-full lg:flex-1 w-full" />
              <div className="absolute bottom-0 bg-gradient-to-t from-[#212121] from-0% to-[transparent] to-80% px-6 space-y-4 pb-4 w-full">
                <a href="#" className="inline-block bg-orange1 text-[14px] px-3 text-white">Technology</a>
                <a href="#" className="text-xl font-bold text-white hover:underline block">Say hello to real handmade office furniture! Clean & beautiful design</a>
                <p className="flex space-x-4">
                  <span className="text-white text-xs font-semibold uppercase">24 JULY, 2017</span>
                  <span className="text-white text-xs font-semibold uppercase">/</span>
                  <span className="text-white text-xs font-semibold uppercase">By Amanda</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-11/12 lg:max-w-6xl mx-auto mt-20 flex space-x-5 justify-between flex-wrap lg:flex-nowrap">
          <div className="w-11/12 lg:w-9/12 mx-auto">
            <p className="text-xl font-poppins font-semibold mb-8 flex items-center space-x-2">
              <span>Recent News</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff6347" className="size-5" stroke="#ff6347">
                <path fillRule="evenodd" d="M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75a8.25 8.25 0 0 1 8.25 8.25v.75a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.75a6 6 0 0 0-6-6H4.5a.75.75 0 0 1-.75-.75v-.75Zm0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
              </svg>
            </p>
            {
              [1,2,3].map(i => (
                <div key={i} className="w-full flex flex-col md:flex-row items-stretch md:space-x-7 mb-10">
                  <div className="w-full md:w-4/12 overflow-hidden h-full">
                    <div className="relative hover:scale-110 transition-all">
                      <img src="/600x500.jpg" className="h-full" />
                      <div className="absolute bottom-0 top-10 w-full transition-all bg-gradient-to-t from-[#646464] hover:from-[#212121] from-0% to-[transparent] to-80%" />
                    </div>
                  </div>
                  <div className="w-full md:w-8/12">
                    <a href="#" className="text-2xl font-semibold font-poppins bg-white py-3 md:px-5 md:-translate-x-24 mt-4 block hover:underline">Top 10 phone applications and 2017 mobile design awards</a>
                    <p className="text-grayText font-poppins">Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                    <p className="flex space-x-4 mt-4">
                      <a href="#" className="inline-block bg-orange1 text-[11px] px-3 text-white uppercase font-semibold font-poppins rounded-sm">Technology</a>
                      <span className="text-grayText text-[11px] font-semibold uppercase">24 JULY, 2017</span>
                      <span className="text-grayText text-[11px] font-bold uppercase">/</span>
                      <span className="text-grayText text-[11px] font-semibold uppercase">By Amanda</span>
                      <span className="text-grayText text-[11px] font-bold">/</span>
                      <span className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5e5e5e" className="size-3">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-grayText text-[11px] font-semibold uppercase">1158</p>
                      </span>
                    </p>
                  </div>
                </div>
              ))
            }

            <div className="bg-gray-200 p-4 mx-auto max-w-2xl mb-10">
              <figure>
                <img src="/728x90.jpg" />
              </figure>
            </div>

            {
              [1,2,3,4,5,6,7].map(i => (
                <div key={i} className="w-full flex flex-col md:flex-row items-stretch md:space-x-7 mb-10">
                  <div className="w-full md:w-4/12 overflow-hidden h-full">
                    <div className="relative hover:scale-110 transition-all">
                      <img src="/600x500.jpg" className="h-full" />
                      <div className="absolute bottom-0 top-10 w-full transition-all bg-gradient-to-t from-[#646464] hover:from-[#212121] from-0% to-[transparent] to-80%"></div>
                    </div>
                  </div>
                  <div className="w-full md:w-8/12">
                    <a href="#" className="text-2xl font-semibold font-poppins bg-white py-3 md:px-5 md:-translate-x-24 mt-4 block hover:underline">Top 10 phone applications and 2017 mobile design awards</a>
                    <p className="text-grayText font-poppins">Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.</p>
                    <p className="flex space-x-4 mt-4">
                      <a href="#" className="inline-block bg-orange1 text-[11px] px-3 text-white uppercase font-semibold font-poppins rounded-sm">Technology</a>
                      <span className="text-grayText text-[11px] font-semibold uppercase">24 JULY, 2017</span>
                      <span className="text-grayText text-[11px] font-bold uppercase">/</span>
                      <span className="text-grayText text-[11px] font-semibold uppercase">By Amanda</span>
                      <span className="text-grayText text-[11px] font-bold">/</span>
                      <span className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5e5e5e" className="size-3">
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-grayText text-[11px] font-semibold uppercase">1158</p>
                      </span>
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          <aside className="w-11/12 lg:w-3/12">
            <figure className="mb-14">
              <img src="/300x600.jpg" className="w-4/5 mx-auto" />
            </figure>
            <div className="mb-10">
              <p className="text-xl font-poppins font-semibold mb-8">Trend Videos</p>
              {[1,2,3].map(i => (
                <div key={i} className="flex flex-col space-y-4 mb-8">
                  <a href="#" className="w-full overflow-hidden h-full block relative card-video-aside">
                    <div className="relative hover:scale-110 transition-all">
                      <img src="/800x460.jpg" className="h-full" />
                      <div className="absolute bottom-0 top-10 w-full transition-all bg-gradient-to-t from-[#646464] hover:from-[#212121] from-0% to-[transparent] to-80%"></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-11 absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-0 text-[rgba(255,255,255,0.5)]">
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="text-md font-poppins font-semibold leading-snug hover:underline">We prepared the best 10 laptop presentations for you</a>
                </div>
              ))}
            </div>
            <div className="mb-10">
              <p className="text-xl font-poppins font-semibold mb-8">Popular Posts</p>
              {[1,2,3].map(i => (
                <a key={i} className="flex gap-x-3 items-start w-10/12 mb-6">
                  <img src="600x500.jpg" className="w-3/12" />
                  <div className="w-9/12 flex flex-col space-y-2">
                    <p className="font-poppins text-md font-medium">5 Beautiful buildings you need..</p>
                    <span className="text-[11px] text-gray-500 font-poppins">07 Jan, 2016</span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mb-10">
              <p className="text-xl font-poppins font-semibold mb-8">Recent Views</p>
              {[1,2,3].map(i => (
                <a key={i} className="flex gap-x-3 items-start w-10/12 mb-6">
                  <img src="600x500.jpg" className="w-3/12" />
                  <div className="w-9/12 flex flex-col space-y-2">
                    <p className="font-poppins text-md font-medium">5 Beautiful buildings you need..</p>
                    <div className="flex space-x-1">
                      {
                        [1,2,3,4,5].map(i => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbb034" className="size-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                          </svg>
                        ))
                      }
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mb-10">
              <p className="text-xl font-poppins font-semibold mb-8">Follow Us</p>
              <div className="flex gap-x-4">
                <p className="flex flex-col items-center justify-center gap-y-4 bg-blueFacebook py-2 px-2 flex-1 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="white" className="size-4">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                  </svg>
                  <span className="text-white text-md font-poppins leading-none">27K</span>
                </p>
                <p className="flex flex-col items-center justify-center gap-y-4 bg-blueTwitter py-2 px-2 flex-1 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className="size-4">
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                  </svg>
                  <span className="text-white text-md font-poppins leading-none">98K</span>
                </p>
                <p className="flex flex-col items-center justify-center gap-y-4 bg-orangeGoogle py-2 px-2 flex-1 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="white" className="size-6">
                    <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/>
                  </svg>
                  <span className="text-white text-md font-poppins leading-none">17K</span>
                </p>
                
                <p className="flex flex-col items-center justify-center gap-y-4 bg-redYoutube py-2 px-2 flex-1 flex-grow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="white" className="size-5">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                  </svg>
                  <span className="text-white text-md font-poppins leading-none">22K</span>
                </p>
              </div>
            </div>
            <figure className="w-full md:w-10/12">
              <img src="/1200x1200.jpg" className="w-4/5 mx-auto aspect-square" />
            </figure>
          </aside>
        </section>

        <footer className="bg-black py-14 mt-20">
          <div className="w-10/12 md:max-w-6xl mx-auto flex flex-col lg:flex-row justify-center gap-x-5 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-7/12 flex flex-col space-y-6">
              <figure>
                <img src="/tech-logo.png" />
              </figure>
              <p className="font-poppins text-md text-white text-opacity-70">Tech Blog is a technology blog, we sharing marketing, news and gadget articles.</p>
              <div className="flex gap-x-3 items-center">
                <a href="#" className="linkFotterS">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="size-5 text-[#ffffffb3]">
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                  </svg>
                </a>
                <a href="#" className="linkFotterS">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="size-5 text-[#ffffffb3]">
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/>
                </svg>
                </a>
                <a href="#" className="linkFotterS">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" className="size-6 text-[#ffffffb3]">
                  <path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/>
                </svg>
                </a>
                <a href="#" className="linkFotterS">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="size-5 text-[#ffffffb3]">
                  <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
                </a>
                <a href="#" className="linkFotterS">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"  className="size-5 text-[#ffffffb3]">
                  <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/>
                </svg>
                </a>
              </div>
              <form method="POST" action="#" className="w-full md:w-9/12 pt-5">
                <div className="flex items-stretch flex-col md:flex-row space-y-3 lg:space-y-0">
                  <input type="text" placeholder="Enter your email address" className="outline-none text-md px-6 py-4 w-full font-poppins" />
                  <input type="submit" value="submit" className="bg-gradient-to-r from-blueH1 to-blueH2 uppercase font-semibold text-white px-6 py-3 text-sm font-poppins" />
                </div>
              </form>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-5 lg:space-y-0">
                <div className="w-full lg:w-3/5">
                  <p className="font-poppins text-white text-lg font-semibold mb-5 lg:mb-10">Popular Categories</p>
                  <ul className="flex flex-col space-y-2">
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="flex justify-between text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        <span>Marketing</span>
                        <span>(21)</span>
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="flex justify-between text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        <span>SEO Service</span>
                        <span>(15)</span>
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="flex justify-between text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        <span>Digital Agency</span>
                        <span>(31)</span>
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="flex justify-between text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        <span>Make Money</span>
                        <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex justify-between text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        <span>Blogging</span>
                        <span>(66)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-2/5">
                  <p className="font-poppins text-white text-lg font-semibold mb-5 lg:mb-10">Copyrights</p>
                  <ul className="flex flex-col space-y-2">
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        About Us
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        Advertising
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        Write for us
                      </a>
                    </li>
                    <li className="border-b-[1px] border-gray-600 border-dashed pb-1">
                      <a href="#" className="text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        Trademark
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-opacity-70 hover:text-blueH1 font-poppins text-md">
                        License & Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href="#" id="btnToTupSite" className="text-white text-xl uppercase bg-blueH1 hover:bg-blueH2 transition fixed bottom-5 right-5 px-1" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </a>
        </footer>
      </div>
    </>
  )
}

export default SiteNews