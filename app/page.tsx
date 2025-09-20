export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        👋 Hi, I’m <span className="text-blue-600">Sudarshan Rawate</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        A passionate <strong>Full Stack Developer</strong> and <strong>Blockchain Enthusiast</strong> building useful and efficient web3 + web apps.
      </p>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
