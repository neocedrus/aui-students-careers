const jobs = [
    {
        id: 1,
        title: 'Learning Fellow',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Center for Teaching and Learning',
        description:
            `The Learning Fellows Program is a prestigious work opportunity that allows you to develop both professional and technical skills. 
      As a Learning Fellow, you will have the opportunity to support faculty in ensuring better student learning, satisfaction, and retention in challenging courses.
      The Learning Fellows Program offers several benefits, including:
        - Professional development in areas such as communication, management, and leadership.
        - Technical skill development, specifically in syllabus and course design, classroom management, and student engagement strategies.
        - The opportunity to deepen your knowledge in a specific discipline.
        - The chance to contribute to the improvement of teaching and learning at Al Akhawayn University.`,
    },
    {
        id: 2,
        title: 'Software Developer',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Center of Learning and Excellence',
        description:
            `NeoCedrus is currently looking for students who are interested in joining our team as part-time student developers to support our growth
         and our different products for FALL 2024. So, if you like coding, solving (a lot) bugs, and contributing to the development of impactful products
         that are used daily by AUI students and other partners, make sure to apply!`,
        requirements:
            `We are currently looking for agile developers who are comfortable with the following technologies: 
        - JavaScript/TypeScript Frontend Frameworks (React, Angular, Gatsby, Next.js, …)
        - UI Libraries (Material UI / Tailwind CSS / Nebular, ...)
        - Backend Frameworks (Express.js, ...)
        - MongoDB and SQL
        - Git
        - Docker
        Optional valuable skills or interests include:
        - UI/UX design`
    },
    {
        id: 3,
        title: 'SAO Admin',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Student Activities Office',
        requirements:
            `1- Needs to be a graduate student. 
        2- Be registered at AUI during the upcoming Spring 2024. 
        3- Minimum CGPA of 3.0 at the time of application. 
        4- Demonstrated involvement and dedication to student organizations with very good knowledge about Student Activities, AUI facilities, procedures, and policies.`
    },
    {
        id: 4,
        title: 'SAO Leader',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Student Activities Office',
        requirements:
            `1- Have 30 credits by the end of Fall 2023. 
        2- Be registered at AUI during the upcoming Spring 2024.
        3- Minimum CGPA of 2.8 at the time of application.
        4- Demonstrated involvement and dedication to student organizations with very good knowledge about Student Activities, AUI facilities, procedures, and policies.`
    },
    {
        id: 5,
        title: 'Content Creator & Social Media Coordinator',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: ' Development & Communication Department',
        description:
            `- Develop and produce engaging digital content (videos, photos, and graphics) for various platforms, including social media, the university website, and promotional materials.
Edit and enhance visual content to align with the university's branding and quality standards.
        - Photography and videography.
        - Interact with followers, respond to comments and messages, and foster a vibrant online community.
        - Provide comprehensive media coverage for university events, including capturing photos and videos, and post-event editing.
        - Work closely with event organizers to ensure all aspects of the event are documented and promoted effectively.
        - Create highlight reels and recap videos for major events.
        - Assist in planning and executing digital marketing campaigns and initiatives.
        - Participate in brainstorming sessions to generate creative ideas for content and campaigns.
        - Perform additional tasks assigned by the digital marketing & content project manager.`,
        requirements:
            `- Currently enrolled student.
        - Proven experience in content creation, social media management, and/or media coverage (upload a portfolio).
        - Proficient in graphic design and video editing software (e.g., Adobe Creative Suite, Canva, Cupcut, etc.).
        - Strong understanding of social media platforms and trends.
        - Excellent communication skills, both written and verbal.
        - Ability to work independently and as part of a team.
        - Strong organizational skills and attention to detail.
        - Creativity and a keen eye for visual storytelling.`
    },
    {
        id: 6,
        title: 'RA',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Residency Department',
        requirements:
            `- Resided on campus for at least 2 semesters, 
        - Must be a full-time student (enrolled in 12-18 credits), 
        - Must have 2.5 GPA Minimum and 30 credit hours, 
        - Must have strong Knowledge of Housing Regulations and Procedures, 
        - Desire to build community on campus, 
        - Be flexible with rooms/building assignment`
    },
    {
        id: 7,
        title: 'M6L Archives & Special Collections Assistant',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Student Employment Office',
        description:
            `As part of this position, s/he will engage in some of the following tasks (training will be provided, when needed):
        - Assist in the processing of archival collections.
        - Organize and process administrative documents, new postcards, photographs, and  ephemera.
        - Engage in both physical processing and the extraction of descriptive metadata.
        - Perform data entry in ArchivesSpace database.
        - Handle the scanning of archival materials to support digital preservation.
        - Help with digitalizing VHSs.
        - Maintain attention to detail and strong organizational skills.`
    },
    {
        id: 8,
        title: 'Student Assistant to the Counseling Services',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'Counseling Services Office',
        requirements:
            `The Counseling Service is currently hiring 2 Students for the position of "Student Assistant to the Counseling Services". The Minimum Qualification for the position are:
        - Experience in graphic design and web design & management
        - Familiarity with the AUI protocols in scheduling rooms
        - Experience in project management
        - Experience in strategic communication (content creation and event planning/ management)`
    },
    {
        id: 9,
        title: 'DSA Administrator',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'DSA Office',
        description:
            `The DSA Office is seeking a highly motivated and skilled individual to fill the position of DSA Administrator. 
        As a DSA Administrator, your primary responsibility will be to manage the social media accounts, oversee film making and content 
        creation, handle graphic design tasks, coordinate and plan events including townhall meetings and monthly meetings with the president, 
        and provide support with administrative tasks.`,
        requirements:
            `Students who posses the following skills:
        - Experience in managing social media accounts and creating engaging content.
        - Proficient in film making, including knowledge of filming techniques, video editing software, and post-production processes.
        - Strong graphic design skills, with proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).
        - Excellent organizational and time management abilities to handle multiple projects simultaneously.
        - Strong written and verbal communication skills.
        - Detail-oriented and able to maintain a high level of accuracy.
        - Ability to work collaboratively as part of a team and independently with minimal supervision.
        - Flexibility to adapt to changing priorities and deadlines.`
    },
    {
        id: 10,
        title: 'Peer Tutoring',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'CLE',
        requirements:
            `Undergraduate Students
        - Completed online Application Form.
        - Must be able to offer 5 courses or more.
        - A currently enrolled student (student must be enrolled at AUI during the semester they are applying fCompleted 30 or more credits.
        - Minimum CGPA of 3.3.
        - No history of academic misconduct.
        - A grade of A- or higher earned in each course listed to tutor. For the Writing Center Tutor position, you need A- or higher earned in writing component & research methodology classes. )
        - 3 Writing Excerpts (ONLY FOR WRITING CENTER APPLICATIONS).

        Graduate Students:
        - Completed the Application Form.
        - Must be able to offer 5 courses or more.
        - A currently enrolled student (student must be enrolled at AUI during the semester they are applying for).
        - Completed 15 or more credits for the CLE Tutor Position, or 13 or more credits for the Writing Center Tutor position.
        - Minimum CGPA of 3.3.
        - No history of academic misconduct.
        - A grade of A- or higher earned in each course listed to tutor. For the Writing Center tutoring position, you need A- or higher earned in writing component & research methodology classes. )
        - 3 Writing Excerpts (ONLY FOR WRITING CENTER APPLICATIONS).`
    },
    {
        id: 11,
        title: 'CLE Admin',
        salary: '50dhs/hr',
        applicationDeadline: 'Semptember 15, 2024',
        department: 'CLE',
        requirements:
            `Undergraduate Students
        - A currently enrolled student (student must be enrolled at AUI during the semester they're applying for).
        - Completed 60 or more credits.
        - Minimum CGPA of 3.0
        - No history of academic misconduct.
        - Completed online Application Form.

        Graduate Students:
        - A currently enrolled student (student must be enrolled at AUI during the semester they're applying for).
        - Minimum CGPA of 3.0
        - No history of academic misconduct.
        - Completed the Application Form.`
    },
];

export default jobs;
