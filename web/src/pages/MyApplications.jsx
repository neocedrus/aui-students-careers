import React from "react";

function MyApplications() {
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

  return (
    <div className="m-0">
      <div className="poppins-bold text-4xl text-center text-[#34A853] my-10">
        My Applications
      </div>
      <div className="m-0">
        <table className="mx-auto table-fixed border-separate border-spacing-0 w-[80%]">
          <thead>
            <tr className="text-black width-96">
              <th className="border border-gray-300 px-4 py-2 rounded-tl-full">
                Role
              </th>
              <th className="border border-gray-300 px-4 py-2">Department</th>
              <th className="border border-gray-300 px-4 py-2">
                Date of Application
              </th>
              <th className="border border-gray-300 px-4 py-2 rounded-tr-full">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-center p-6">
            {applications.map((application) => {
              return (
                <tr>
                  <td className="border border-gray-300">{application.role}</td>
                  <td className="border border-gray-300">
                    {application.department}
                  </td>
                  <td className="border border-gray-300">
                    {application.dateOfApplication}
                  </td>
                  <td className="border border-gray-300">
                    {application.status}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyApplications;
