import React from 'react';

export default function About() {
  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center h-screen'
        style={{ backgroundImage: "url('/hero-background.jpg')" }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white'>
          <h1 className='text-5xl font-bold'>Welcome to [Your Company]</h1>
          <p className='mt-4 text-xl'>Crafting Excellence, Building Trust</p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-3xl font-semibold mb-4'>Our Mission</h2>
              <p className='text-gray-600'>
                To deliver top-notch solutions that empower businesses and
                individuals to achieve their goals through innovation and
                integrity.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-semibold mb-4'>Our Vision</h2>
              <p className='text-gray-600'>
                To be a global leader in our industry, setting standards for
                quality, service, and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Our Story</h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Founded in [Year], [Your Company] began with a simple idea: to make
            the world a better place through [Industry/Service]. What started as
            a small team with a big dream has grown into a leading provider of
            [Products/Services], impacting lives and businesses across the
            globe.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-semibold text-center mb-12'>
            Meet Our Team
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Team Member Example */}
            {teamMembers.map((member, index) => (
              <div key={index} className='text-center'>
                <img
                  className='w-32 h-32 rounded-full mx-auto mb-4'
                  src={member.image}
                  alt={member.name}
                />
                <h3 className='text-xl font-semibold'>{member.name}</h3>
                <p className='text-gray-600'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-6'>
          <h2 className='text-3xl font-semibold text-center mb-12'>
            Our Core Values
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {values.map((value, index) => (
              <div
                key={index}
                className='text-center p-6 bg-white shadow rounded-lg'>
                <div className='text-4xl mb-4'>{value.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='py-16 bg-green-200 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-3xl font-semibold mb-4'>Get in Touch</h2>
          <p className='mb-8'>
            We’re here to help you navigate your journey. Contact us today to
            learn more about how we can work together.
          </p>
          <button className='bg-white text-green-200 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition'>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

// Sample data for team members and values
const teamMembers = [
  { name: 'John Doe', role: 'CEO', image: '/john.jpg' },
  { name: 'Jane Smith', role: 'CTO', image: '/jane.jpg' },
  // Add more team members here
];

const values = [
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We embrace change and pursue growth.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description:
      'We uphold the highest standards of integrity in all our actions.',
  },
  {
    icon: '🌍',
    title: 'Global Impact',
    description: 'We strive to make a positive impact on a global scale.',
  },
  // Add more values here
];
