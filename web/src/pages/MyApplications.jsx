import React from 'react'

function MyApplications() {
    const applications = [
        {
          role: 'Peer Mentor',
          department: 'CLE',
          dateOfApplication: '2024-10-12',
          status: 'Pending',
        },
        {
          role: 'Peer Tutor',
          department: 'CLE',
          dateOfApplication: '2024-10-15',
          status: 'Accepted',
        },
        {
          role: 'CLE Admin',
          department: 'CLE',
          dateOfApplication: '2024-10-18',
          status: 'Rejected',
        },
        {
          role: 'SAO Leader',
          department: 'SAO',
          dateOfApplication: '2024-10-20',
          status: 'Pending',
        },
        {
          role: 'SAO Admin',
          department: 'SAO',
          dateOfApplication: '2024-10-22',
          status: 'Accepted',
        },
        {
          role: 'Software Developer',
          department: 'neoCedrus',
          dateOfApplication: '2024-11-01',
          status: 'Pending',
        },
        {
          role: 'DevOps Engineer',
          department: 'neoCedrus',
          dateOfApplication: '2024-11-01',
          status: 'Pending',
        },
      ];
  
  // Helper function for emoji based on status
  const getStatusEmoji = (status) => {
    switch (status) {
      case 'Accepted':
        return '✅'; // Green Check Mark
      case 'Rejected':
        return '❌'; // Red Cross Mark
      default:
        return '⏳'; // Hourglass for Pending
    }
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((application, index) => (
        <div
          key={index}
          className={`border rounded-lg p-4 shadow-lg transform transition duration-300 hover:scale-105 ${
            application.status === 'Accepted'
              ? 'bg-green-50 border-green-200'
              : application.status === 'Rejected'
              ? 'bg-red-50 border-red-200'
              : 'bg-yellow-50 border-yellow-200'
          }`}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{application.role}</h3>
            <span className="text-lg">{getStatusEmoji(application.status)}</span>
          </div>
          <p className="text-sm text-gray-700">Department: {application.department}</p>
          <p className="text-sm text-gray-600">Applied on: {application.dateOfApplication}</p>
          <span
            className={`inline-block px-3 py-1 mt-3 rounded-full text-xs font-bold ${
              application.status === 'Accepted'
                ? 'bg-green-200 text-green-800'
                : application.status === 'Rejected'
                ? 'bg-red-200 text-red-800'
                : 'bg-yellow-200 text-yellow-800'
            }`}
          >
            {application.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;