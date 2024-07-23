import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${theme === 'dark' ? 'bg-slate-900 text-white border-white' : 'bg-gray-100'}`}>
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
      <header className="text-center mb-8">
        <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Welcome to Book Haven</h1>
        <p className={`mt-2 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Discover your next great read at Book Haven</p>
      </header>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Our Story</h2>
        <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          At Book Haven, we believe that a great book can transform your life. Founded with a passion for literature
          and a commitment to providing exceptional service, we offer a diverse collection of books for every reader.
          From timeless classics to the latest bestsellers, our carefully curated selection is designed to inspire and
          entertain.
        </p>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>What We Offer</h2>
        <ul className={`mt-4 list-disc list-inside ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <li><strong>Diverse Book Selection:</strong> Explore our extensive range of books across various genres,
            including fiction, non-fiction, fantasy, mystery, and more.</li>
          <li><strong>Personalized Recommendations:</strong> Our knowledgeable staff is here to help you find the perfect
            book based on your interests and preferences.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Our Mission</h2>
        <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Our mission is to foster a love for reading by offering a welcoming environment and an exceptional selection
          of books. We aim to provide each customer with a personalized experience that reflects our dedication to
          literature and community.
        </p>
      </section>

      <section>
        <h2 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>Why Choose Us?</h2>
        <ul className={`mt-4 list-disc list-inside ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          <li><strong>Expertly Curated Collection:</strong> We handpick every book to ensure you have access to quality and
            engaging reads.</li>
          <li><strong>Customer-Centric Service:</strong> Our friendly team is committed to helping you find exactly what
            you’re looking for and making your visit enjoyable.</li>
          <li><strong>Community Focus:</strong> We support local authors and host events that connect readers and writers.</li>
        </ul>
      </section>

      <footer className="mt-8 text-center">
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Stay connected with us on [Social Media Links] or contact us at [Contact Information] for any inquiries or feedback.</p>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Thank you for visiting Book Haven. We’re excited to be part of your reading journey!</p>
        {/* <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mt-4"
        >
          Toggle Theme
        </button> */}
      </footer>
    </div>
  );
};

export default About;
