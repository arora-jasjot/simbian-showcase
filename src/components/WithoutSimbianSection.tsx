import React from 'react'
import linkImage from '@/assets/cta-link.svg'
import Image from 'next/image'

import alertIcon1 from '@/assets/alerts/alert-1.svg'
import alertIcon2 from '@/assets/alerts/alert-2.svg'
import alertIcon3 from '@/assets/alerts/alert-3.svg'
import { ClipLoader } from 'react-spinners'

const WithoutSimbianSection = () => {
  return (
    <div className='w-full min-h-screen bg-[#1a294e]'>
      <div className='m-auto relative p-10'>
        <div className='absolute top-10 right-10'>
          <h1 className='text-end text-[#4F80FF] font-semibold text-4xl'>Without Simbian</h1>
          <p className='text-end text-[#616cd2] font-medium text-lg my-6'>If this sounds all too familiar, you might want to...</p>
          <button className='bg-white px-4 py-3 rounded-full flex justify-center items-center gap-2 ml-auto font-semibold cursor-pointer'>Book a Demo <Image src={linkImage} alt='link' className='w-6' /></button>
        </div>
        <div className='grid grid-cols-5 mt-[100px] gap-10 items-stretch'>
          <div className='col-span-3'>
            <div className='flex flex-col justify-start items-end gap-6 w-full'>
              <div className='w-10 h-10 bg-white rounded-md flex justify-center items-center'><Image src={alertIcon1} width={24} height={24} alt='Alert-1' /></div>
              <div className='w-10 h-10 bg-white rounded-md flex justify-center items-center'><Image src={alertIcon2} width={24} height={24} alt='Alert-2' /></div>
              <div className='w-10 h-10 bg-white rounded-md flex justify-center items-center'><Image src={alertIcon3} width={24} height={24} alt='Alert-3' /></div>
              <div className='flex justify-center items-center w-full'>
                <div className='w-full shrink relative'>
                  <div className="absolute top-0 left-0 w-full translate-y-[-50%]">
                    <div className='relative p-4'>
                      <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                      <div className='relative z-10 flex justify-start items-center gap-4'>
                        <div className='w-14 h-14 bg-gray-700 flex justify-center items-center text-white rounded-md'>{">_"}</div>
                        <div className='text-white'>
                          <h3 className='font-medium text-sm'>Writing Query</h3>
                          <p className='text-xs font-light mt-1'>Querying across so many tools gets complex...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-[15%] max-w-[200px] h-[1px] overflow-visible bg-[#616cd2] relative'>
                  <div className='absolute left-0 top-[50%] translate-x-[-50%] translate-y-[-50%] w-3 h-3 rounded-full bg-[#616cd2]'></div>
                </div>
                <div className='w-10 h-10 shrink-0 bg-white rounded-md flex justify-center items-center'>
                  <ClipLoader size={20} color='#4F80FF' />
                </div>
              </div>
            </div>
            <div className='flex justify-between items-center mt-20'>
              <div className='flex justify-start items-start flex-col gap-8'>
                <div className='w-full max-w-[400px]'>
                  <div className='relative p-4'>
                    <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                    <div className='relative z-10 flex justify-start items-center gap-4'>
                      <div className='w-14 h-14 bg-[#731b1b3c] flex justify-center items-center text-white rounded-md'>{">_"}</div>
                      <div className='text-white'>
                        <h3 className='font-medium text-sm'>Wasting valuable analyst time on false positives</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full max-w-[400px]'>
                  <div className='relative p-4'>
                    <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                    <div className='relative z-10 flex justify-start items-center gap-4'>
                      <div className='w-14 h-14 bg-[#731b1b3c] flex justify-center items-center text-white rounded-md'>{">_"}</div>
                      <div className='text-white'>
                        <h3 className='font-medium text-sm'>Wasting valuable analyst time on false positives</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full max-w-[400px]'>
                  <div className='relative p-4'>
                    <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                    <div className='relative z-10 flex justify-start items-center gap-4'>
                      <div className='w-14 h-14 bg-[#731b1b3c] flex justify-center items-center text-white rounded-md'>{">_"}</div>
                      <div className='text-white'>
                        <h3 className='font-medium text-sm'>Wasting valuable analyst time on false positives</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 w-1 flex justify-center items-start mr-5">
                <div className="w-px h-full bg-gradient-to-b from-white/10 to-white/100"></div>
                <div className="absolute bottom-0">
                  <div className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-2 flex flex-col justify-end gap-8'>
            <div className='w-full max-w-[300px]'>
              <div className='relative px-4 py-6'>
                <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                <div className='relative z-10 text-white'>
                    <div className='flex justify-between items-center'>
                      <div className="flex justify-start items-center gap-4">
                        <Image src={alertIcon3} width={20} height={20} alt='Alert-3' />
                        <h3 className='text-lg'>Ignored Alerts</h3>
                      </div>
                      <h1 className='text-2xl font-semibold text-[#49adff] mr-4'>128</h1>
                    </div>
                    <div className='relative px-2 mt-1 w-full'>
                    <div className='absolute inset-0 bg-[#d5d5d50f] backdrop-blur-sm rounded-md z-0'></div>
                      <div className="flex z-10">
                        {Array.from({ length: 8 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-10 w-10 bg-white text-black rounded-md flex items-center justify-center shadow-lg border border-gray-200 ${index !== 0 ? '-ml-4' : ''
                              }`}
                            style={{ zIndex: 100 - index }}
                          >
                            <Image src={alertIcon3} width={24} height={24} alt='Alert-3' />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[300px]'>
              <div className='relative px-4 py-6'>
                <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                <div className='relative z-10 text-white'>
                    <div className='flex justify-between items-center'>
                      <div className="flex justify-start items-center gap-4">
                        <Image src={alertIcon3} width={20} height={20} alt='Alert-3' />
                        <h3 className='text-lg'>Ignored Alerts</h3>
                      </div>
                      <h1 className='text-2xl font-semibold text-[#49adff] mr-4'>128</h1>
                    </div>
                    <div className='relative px-2 mt-1 w-full'>
                    <div className='absolute inset-0 bg-[#d5d5d50f] backdrop-blur-sm rounded-md z-0'></div>
                      <div className="flex z-10">
                        {Array.from({ length: 8 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-10 w-10 bg-white text-black rounded-md flex items-center justify-center shadow-lg border border-gray-200 ${index !== 0 ? '-ml-4' : ''
                              }`}
                            style={{ zIndex: 100 - index }}
                          >
                            <Image src={alertIcon3} width={24} height={24} alt='Alert-3' />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-[300px]'>
              <div className='relative px-4 py-6'>
                <div className='absolute inset-0 bg-[#b9b9b90f] backdrop-blur-sm rounded-md z-0'></div>
                <div className='relative z-10 text-white'>
                    <div className='flex justify-between items-center'>
                      <div className="flex justify-start items-center gap-4">
                        <Image src={alertIcon3} width={20} height={20} alt='Alert-3' />
                        <h3 className='text-lg'>Ignored Alerts</h3>
                      </div>
                      <h1 className='text-2xl font-semibold text-[#49adff] mr-4'>128</h1>
                    </div>
                    <div className='relative px-2 mt-1 w-full'>
                    <div className='absolute inset-0 bg-[#d5d5d50f] backdrop-blur-sm rounded-md z-0'></div>
                      <div className="flex z-10">
                        {Array.from({ length: 8 }).map((_, index) => (
                          <div
                            key={index}
                            className={`h-10 w-10 bg-white text-black rounded-md flex items-center justify-center shadow-lg border border-gray-200 ${index !== 0 ? '-ml-4' : ''
                              }`}
                            style={{ zIndex: 100 - index }}
                          >
                            <Image src={alertIcon3} width={24} height={24} alt='Alert-3' />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithoutSimbianSection