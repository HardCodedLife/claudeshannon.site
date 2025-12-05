const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Profile" 
            className="rounded-full w-48 h-48 mx-auto mb-6 object-cover"
          />
        </div>
        
        <div className="prose lg:prose-lg mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Hi! I'm a passionate full-stack developer with expertise in building 
            modern web applications using React, TypeScript, and Node.js.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>React & TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js</li>
                <li>MySQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Experience</h2>
          <p className="text-gray-700 mb-4">
            I have years of experience building web applications. I love solving complex problems and creating intuitive 
            user experiences.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Education</h2>
          <p className="text-gray-700">
            Bachelor's Degree in Computer Science<br />
            University Name, Year
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;