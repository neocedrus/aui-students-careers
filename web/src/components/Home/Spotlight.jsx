export default function JobCategoriesSpotlight() {
    const categories = [
      {
        title: "Google Cloud Roles",
        image: "/placeholder.svg?height=200&width=400",
        description: "Help millions build what's next for their business — explore engineering jobs with Google Cloud.",
      },
      {
        title: "Google AI and ML Roles",
        image: "/placeholder.svg?height=200&width=400",
        description: "Search some of our newest, priority roles in artificial intelligence and machine learning.",
      },
      {
        title: "Consumer Hardware",
        image: "/placeholder.svg?height=200&width=400",
        description: "Design and build the systems that are the heart of the world's largest and most powerful computing infrastructure and products.",
      },
      {
        title: "Google Workspace",
        image: "/placeholder.svg?height=200&width=400",
        description: "Build collaborative tools that empower people and organizations to do their best work together.",
      },
    ];
  
    return (
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">SPOTLIGHT</h2>
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