export default function Component() {
  const teams = [
    {
      title: "Engineering & Tech",
      description: "Develop the products and tools of the future for billions of users.",
      href: "#",
    },
    {
      title: "Sales, Service & Support",
      description: "Equip businesses with the right tools to help them grow.",
      href: "#",
    },
    {
      title: "People",
      description: "Find, grow, and support the people who make Google great.",
      href: "#",
    },
    {
      title: "Consumer Hardware",
      description: "Make people's lives better through technology.",
      href: "#",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Two team members smiling and leaning on a railing"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-medium tracking-wider text-muted-foreground">TEAMS</h2>
            <h3 className="text-4xl font-bold tracking-tight lg:text-5xl">Find your team</h3>
            <p className="text-lg text-muted-foreground">
              Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            {teams.map((team) => (
              <div
                key={team.title}
                className="group space-y-2 hover:text-blue-600"
              >
                <h4 className="text-lg font-semibold text-blue-600">{team.title}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                  {team.description}
                </p>
              </div>
            ))}
          </div>
          
          <div
            className="inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            View all teams
          </div>
        </div>
      </div>
    </section>
  )
}