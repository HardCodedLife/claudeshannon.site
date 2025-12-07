const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Claude Shannon</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about creating amazing web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/HardCodedLife" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/in/not-register-yet" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
              <a href="https://twitter.com/not-register-yet" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Claude Shannon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;