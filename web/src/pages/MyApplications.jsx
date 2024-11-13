import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Search, Filter } from 'lucide-react';

export default function Component() {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const applications = [
    {
      role: "Peer Mentor",
      department: "CLE",
      dateOfApplication: "2024-10-12",
      status: "Pending",
    },
    {
      role: "Peer Tutor",
      department: "CLE",
      dateOfApplication: "2024-10-15",
      status: "Accepted",
    },
    {
      role: "CLE Admin",
      department: "CLE",
      dateOfApplication: "2024-10-18",
      status: "Rejected",
    },
    {
      role: "SAO Leader",
      department: "SAO",
      dateOfApplication: "2024-10-20",
      status: "Pending",
    },
    {
      role: "SAO Admin",
      department: "SAO",
      dateOfApplication: "2024-10-22",
      status: "Accepted",
    },
    {
      role: "Software Developer",
      department: "neoCedrus",
      dateOfApplication: "2024-11-01",
      status: "Pending",
    },
    {
      role: "DevOps Engineer",
      department: "neoCedrus",
      dateOfApplication: "2024-11-01",
      status: "Pending",
    },
  ];

  const departments = ["All", ...new Set(applications.map(app => app.department))];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
      case "Accepted":
        return "bg-green-100 text-green-800 border border-green-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

const filteredAndSortedApplications = useMemo(() => {
  return applications
    .filter(
      app =>
        (selectedDepartment === 'All' ||
          app.department === selectedDepartment) &&
        Object.values(app).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => {
      if (!sortColumn) return 0;
      const aValue = a[sortColumn] ?? ''; 
      const bValue = b[sortColumn] ?? '';
      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
}, [applications, selectedDepartment, searchTerm, sortColumn, sortDirection]);


  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 flex items-center justify-center">
      <div className="w-full max-w-6xl space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#34A853] drop-shadow-md">
          My Applications
        </h1>
        <div className="backdrop-blur-xl bg-white/60 rounded-3xl shadow-2xl overflow-hidden border border-white transition-all duration-300 hover:shadow-3xl hover:bg-white/70">
          <div className="p-4 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="appearance-none w-full pl-10 pr-8 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#f5f5f5] backdrop-blur-sm sticky top-0">
                  {["Role", "Department", "Date of Application", "Status"].map((header) => (
                    <th
                      key={header}
                      className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer hover:bg-gray-100/50 transition-colors duration-150"
                      onClick={() => handleSort(header.toLowerCase().replace(/ /g, ""))}
                    >
                      <div className="flex items-center justify-between">
                        <span>{header}</span>
                        <span className="text-gray-400">
                          {sortColumn === header.toLowerCase().replace(/ /g, "") && (
                            sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white/30 divide-y divide-gray-200">
                {filteredAndSortedApplications.map((application, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/50 transition-colors duration-150"
                  >
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {application.role}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {application.department}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {application.dateOfApplication}
                    </td>
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full shadow-sm ${getStatusColor(
                          application.status
                        )}`}
                      >
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}