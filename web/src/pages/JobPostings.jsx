import React, { useState } from 'react';
import jobs from '../data/jobsData';

function JobPostings() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className='w-full h-screen'>
      <div className='flex flex-row gap-4 bg-[#f4f4f5] nunito-font max-w-full'>
        {/* Job Cards Section */}
        <div className='bg-white my-4 ml-4 px-4 rounded shadow-xl text-[#1A5632] font-bold text-lg basis-1/4 max-w-1/4  h-screen overflow-y-auto'>

          <div className='border-b-2 m-3 mt-6 pb-2 pl-0 border-[#1A5632]'>Jobs</div>

          {jobs.map((job) => (
            <div 
              key={job.id} 
              className='m-3 my-5 pr-3 cursor-pointer text-wrap hover:text-[#2E7A47] max-w-full hover:bg-gray-100 hover:pl-7 hover:rounded hover:shadow-sm hover:duration-300 hover:underline hover:py-3'
              onClick={() => handleCardClick(job)}
            >
              {job.title} 
            </div>
          ))}
        </div>

        {/* Job Details Section */}
        <div className='bg-white flex-1 my-4 mr-4 rounded shadow-md h-screen overflow-hidden'>
          {selectedJob ? (
            <div>
              <div className='flex flex-row justify-between items-center m-4 border-b border-gray-300'>
                <h1 className='text-2xl font-bold text-[#1A5632] py-3'>{selectedJob.title}</h1>
                <button type="button" className='rounded-full py-2 px-3 font-bold text-lg tracking-wider text-[#1A5632] border-2 border-[#1A5632] bg-gray-300 hover:bg-[#1A5632] hover:text-white hover:shadow-md mb-2'>Apply</button>
              </div>

              <div className='text-lg overflow-y-auto p-4 h-[calc(100vh-80px)]'>

                {selectedJob.salary && (
                  <>
                    <div className='flex flex-row justify-start mb-2'>
                    <svg className='inline-block w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    <p className='font-semibold ml-1'>{selectedJob.salary}</p>
                  </div>
                  </>
                )}
                {selectedJob.department && (
                  <>
                    <div className='flex flex-row justify-start mb-2'>
                      <svg className='inline-block w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                      <p className='font-semibold ml-1'>{selectedJob.department}</p>
                    </div>
                  </>
                )} 
                
                {selectedJob.applicationDeadline && (
                  <>
                    <div className='flex flex-row justify-start mb-2'>
                      <svg className='inline-block w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                      <p className='font-semibold ml-1'>{selectedJob.applicationDeadline}</p>
                    </div>  
                  </>
                )}
              
                {selectedJob.description && (
                  <>
                    <h3 className='text-[#1A5632] text-xl font-bold mt-5'>Description</h3>
                    <p className='mt-2' style={{ whiteSpace: 'pre-line' }}>{selectedJob.description}</p>
                  </>
                )}
                {selectedJob.requirements && (
                  <>
                    <h3 className='text-[#1A5632] text-xl font-bold mt-5'>Requirements</h3>
                    <p className='mt-2' style={{ whiteSpace: 'pre-line' }}>{selectedJob.requirements}</p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center  h-full'>
              <img src='../../public/empty-page.png' alt="Empty state illustration" className="w-1/3 h-auto"/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobPostings;