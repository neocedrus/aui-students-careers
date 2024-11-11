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
    <div>
      <div style={{ color: "black", textAlign: "center" }}>My Applications</div>
      <div>
        <table border="1">
          <tr>
            <th>Role</th>
            <th>Department</th>
            <th>Date of Application</th>
            <th>Status</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyApplications;
