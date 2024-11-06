export default function JobCategoriesSpotlight() {
    const categories = [
      {
        title: 'Peer Mentoring',
        image: '/src/assets/photo_5972197728291241188_y-1024x768.jpg',
        description:
          'Support freshmen students by providing guidance, sharing resources, and offering advice to help them succeed academically and personally.',
      },
      {
        title: 'neoCedrus Software Developer',
        image: '/src/assets/86.webp',
        description:
          'Contribute to innovative projects by developing software solutions, collaborating with team members, and enhancing user experiences.',
      },
      {
        title: 'SAO Leader',
        image: '/src/assets/DSCF0551-1.webp',
        description:
          'Lead and engage in various student activities, fostering a vibrant campus culture and encouraging student involvement.',
      },
      {
        title: 'Teacher Assistant',
        image: '/src/assets/liberal-arts-img03.webp',
        description:
          'Assist faculty members with course-related tasks, help students understand course material, and provide additional academic support.',
      },
    ];
  
    return (
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-10">SPOTLIGHT</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }