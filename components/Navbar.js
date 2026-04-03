// components/Navbar.js
export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <h1 className="font-bold text-xl">Satyasai</h1>

      <div className="hidden md:flex gap-6">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>
  );
}
