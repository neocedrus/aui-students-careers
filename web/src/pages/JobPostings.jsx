import React, { useState } from 'react';
import jobs from '../data/jobsData';

function JobPostings() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCardClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className='w-screen h-screen'>
      <div className='grid grid-cols-4'>
        {/* Job Cards Section */}
        <div className='col-span-1 p-4'>
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className='p-4 mb-2 cursor-pointer rounded shadow border'
              onClick={() => handleCardClick(job)}
            >
              {job.title}
            </div>
          ))}
        </div>

        {/* Job Details Section */}
        <div className='col-span-3 p-4'>
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