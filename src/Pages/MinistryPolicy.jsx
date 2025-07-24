import { useEffect } from "react"
import Banner from "../Components/Helpers/Banner"
import Menu from "../Components/Helpers/Menu"
import QuickNav from "../Components/Helpers/QuickNav"
import HeroBg from '../assests/hero-bg.jpg'
import { useFetchMisnistryPolicy, useFetchOrders } from "../Helpers/fetch.hooks"
import Footer from "../Components/Helpers/Footer"
import Spinner from "../Components/Helpers/Spinner"

function MinistryPolicy({ setSelectedCard }) {
  const { data: ministryPolicyData, isFetching } = useFetchMisnistryPolicy()
    console.log('ministryPolicyData', ministryPolicyData)
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });

}, []);


  return (
    <div className="page">
              <Menu setSelectedCard={setSelectedCard} />
        <div className="mt-[70px]">
            <QuickNav setSelectedCard={setSelectedCard} />
        </div>

        <div className="mt-[30px]">
            <Banner 
              text={'Ministry Policy'}
              img={HeroBg}
            />
        </div>

        <div className="w-full mt-[2rem] mb-[2rem] pad1 flex items-center justify-center gap-[2px] flex-wrap tablet:text-[14px]">
            {
                isFetching ? (
                    <div className="flex ">
                        <Spinner bgStyle={`bg-transparent h-auto`} />
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl phone:text-3xl font-bold text-gray-900 mb-4">Ministry Policy</h2>
                            <div className="w-56 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="flex flex-col gap-[1rem]">
                            {
                                ministryPolicyData.map((i, idx) => (
                                    <div key={i.id || idx} className="flex flex-col gap-[12px]">
                                    <h3 className="text-lg font-semibold">{i.title}</h3>

                                    <div className="text-gray-700 leading-relaxed">
                                        {(i.body || '')
                                        .split(/\r\n|\n/)
                                        .map((line, lineIdx) => {
                                            const trimmed = line.trim();

                                            if (/^\d+\./.test(trimmed)) {
                                            // Bold numbered headings like "1. Introduction"
                                            return (
                                                <p key={lineIdx} className="font-semibold mb-1">
                                                {trimmed}
                                                </p>
                                            );
                                            } else if (/^[-*•]\s+/.test(trimmed)) {
                                            // Bulleted list item
                                            return (
                                                <li key={lineIdx} className="ml-6 list-disc">{trimmed.replace(/^[-*•]\s+/, '')}</li>
                                            );
                                            } else {
                                            // Regular paragraph
                                            return (
                                                <p key={lineIdx} className="mb-2">
                                                {trimmed}
                                                </p>
                                            );
                                            }
                                        })}
                                    </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div> 

        <div className="mt-auto">
            <Footer />
        </div>
    </div>
  )
}

export default MinistryPolicy