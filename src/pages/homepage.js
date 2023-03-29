import React from 'react';
import './styles/home_page.css';
import './styles/general.css';

function HomePage() {
  return (
    <div>
      <nav>
        <a href="home_page.html" className="">MenT</a>
        <a href="#aboutus">About Us</a>
        <a href="match.html">Match</a>
        <a href="messages.html">Messages</a>
        <a href="https://www.fdmgroup.com/">FDM Official</a>
        <a href="contact_us.html">Contact Us</a>
        <a href="admin.html">Admin</a>
      </nav>
      <header>
        <i>MenT: Home Page</i>
      </header>

      <hgroup>
        <section>
          <h1 id="aboutus" className="">
            About Us
          </h1>
        </section>
      </hgroup>

      <hr />

      <footer>
        Copyright © Group 30
        <br />
        Last Updated: March 2023
      </footer>
    </div>
  );
}

export default HomePage;
