import teamsData from "@/data/teams-data";

export default function Component() {
  return (
    <section className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
      <div className='grid gap-8 lg:grid-cols-2 lg:gap-12 items-start'>
        <div className='relative aspect-[4/3] overflow-hidden rounded-lg'>
          <img
            src='src/assets/10.webp'
            alt='Two team members smiling and leaning on a railing'
            className='object-cover'
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>
        <div className='space-y-8'>
          <div className='space-y-4'>
            <h2 className='text-sm font-medium tracking-wider text-muted-foreground'>
              DEPARTMENTS
            </h2>
            <h3 className='text-4xl font-bold tracking-tight lg:text-5xl'>
              Find your department
            </h3>
            <p className='text-lg text-muted-foreground'>
              Discover opportunities to make an impact within our university.
              Explore and find your department!
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2'>
            {teamsData.map(team => (
              <div
                key={team.title}
                className='group space-y-2 hover:text-blue-600'
              >
                <h4 className='text-lg font-semibold text-green-700'>
                  {team.title}
                </h4>
                <p className='text-sm text-muted-foreground group-hover:text-muted-foreground/80'>
                  {team.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}