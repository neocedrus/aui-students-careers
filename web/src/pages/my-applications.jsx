import React from 'react';
import { Building, Calendar, Clock } from 'lucide-react';
import applicationsData from '@/data/applications-data';

function MyApplications() {

  const StatusBadge = ({ status }) => {
    const statusStyles = {
      Pending: 'bg-yellow-50 text-yellow-700 border border-yellow-200',
      Accepted: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      Rejected: 'bg-red-50 text-red-700 border border-red-200'
    };

    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-50">
      {applicationsData.map((application) => (
        <div 
          key={`${application.role}-${application.dateOfApplication}`}
          className="bg-white rounded-2xl p-6 
                     transform hover:-translate-y-1 transition-all duration-300
                     shadow-[0_3px_10px_rgb(0,0,0,0.05)]
                     hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-neutral-800">
              {application.role}
            </h3>
            <StatusBadge status={application.status} />
          </div>

          <div className="space-y-4 text-neutral-600">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-500" />
              <span className="text-sm">{application.department}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-500" />
              <span className="text-sm">{formatDate(application.dateOfApplication)}</span>
            </div>

            {application.status === 'Pending' && (
              <div className="pt-4 mt-2 border-t border-gray-100">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm">Awaiting review</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyApplications;