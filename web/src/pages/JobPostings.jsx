import React, { useState } from 'react';

const jobs = [
  { id: 1, title: 'Software Engineer', description: 'Develop and maintain software applications.' },
  { id: 2, title: 'Data Scientist', description: 'Analyze data to gain insights and build predictive models.' },
  { id: 3, title: 'Product Manager', description: 'Oversee product development and manage product lifecycle.' },
];

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
              <h2 className='text-2xl font-bold'>{selectedJob.title}</h2>
              <p className='mt-2'>{selectedJob.description}</p>
            </div>
          ) : (
            <p>Select job to see the details.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobPostings;