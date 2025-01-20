export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-10 py-20 bg-white text-gray-800">
      <div className="flex flex-wrap items-center max-w-5xl w-full">
        {/* Text Section */}
        <div className="w-full md:w-1/2 pr-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-600 mb-6">
            Welcome to Retro Gaming Lair!
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Step into the golden age of gaming! <span className="font-bold">Retro Gaming Lair</span> is your ultimate hub for all things retro gaming. 
            Discover nostalgic stories, insightful reviews of classic games, and a store filled with vintage treasures—from timeless consoles to legendary titles.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're a seasoned gamer looking to relive the magic or a newcomer exploring gaming history, Retro Gaming Lair has something for everyone. 
            Ready to start your journey? Explore our <span className="underline decoration-dotted decoration-blue-500">blog</span> or visit the store today!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/landing_page_gaming_setup.jpg"
            alt="Retro gaming setup with CRT monitor, old consoles, and game cartridges"
            className="w-80 mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
