import React, { useState } from 'react';
import jobs from '../data/jobsData';

function JobPostings() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-row gap-4 bg-[#f4f4f5] nunito-font'>
        {/* Job Cards Section */}
        <div className='bg-white my-4 ml-4 px-4 rounded shadow-xl h-screen text-[#1A5632] font-bold text-lg  basis-1/4 max-w-1/4'>

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
        <div className='bg-white flex-1 my-4 mr-4 rounded shadow-md h-screen'>
          {selectedJob ? (
            <div>
              <div>
                <h1 className='text-2xl font-bold'>{selectedJob.title}</h1>
                <button type="button">Apply</button>
              </div>
              <div>
                {selectedJob.salary && <p><span>Salary: </span>{selectedJob.salary}</p>}
                {selectedJob.department && <p><span>Department: </span>{selectedJob.department}</p>}
                {selectedJob.applicationDeadline && <p><span>Application Deadline: </span>{selectedJob.applicationDeadline}</p>}
                {selectedJob.description && (
                  <>
                    <h3>Description</h3>
                    <p className='mt-2' style={{ whiteSpace: 'pre-line' }}>{selectedJob.description}</p>
                  </>
                )}
                {selectedJob.requirements && (
                  <>
                    <h3>Requirements</h3>
                    <p className='mt-2' style={{ whiteSpace: 'pre-line' }}>{selectedJob.requirements}</p>
                  </>
                )}
              </div>
            </div>
          ) : (
            <p>Select a job to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobPostings;