import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex items-center justify-center py-16 bg-black">
      <div className="max-w-screen-lg mx-4 flex items-center space-x-8">
        <div className="w-1/2">
          <img
            src="https://cdn.wallpapersafari.com/40/71/2ApcCQ.jpg"
            alt="me"
            className="h-auto w-full rounded-full"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-4 text-red-600">About Me</h2>
          <p className="text-white">
            Hello, I'm Hafidz. I'm a web developer with a passion for creating clean and user-friendly websites.
          </p>
          <p className="text-white">
            I specialize in front-end and back-end web development and have experience working with various technologies.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2 text-red-600">Background</h3>
            <p className="text-white mb-4">I come from a small town in Dsn. Semanding Desa Purisemanding Kec. Plandaan Kab. Jombang</p>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Education</h3>
            <div className="text-white">
              <div className="mb-1">
                <span className="font-semibold">SDIT Ar Ruhul Jadid</span>
              </div>
              <div className="mb-1">
                <span className="font-semibold">SMPIT Ar Ruhul Jadid</span>
              </div>
              <div className="mb-1">
                <span className="font-semibold">MAN 1 Jombang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
