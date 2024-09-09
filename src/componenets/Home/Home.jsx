import React, { useContext } from "react";
import { Productcontext } from "../../Context/Productcontext";
import "./Home.css";
function Home() {
  const { info } = useContext(Productcontext);
  return (
    <div id="home">
      <header>
        <h1>Welcome to HealthDirect</h1>
      </header>

      <div class="hero-section">
        <h2>Your Trusted Online Pharmacy</h2>
        <p>
          At HealthDirect, we prioritize your health and wellness. Explore a
          wide range of medicines, health products, and supplements delivered
          right to your door.
        </p>
        <a href="#" class="cta-button">
          Shop Now
        </a>
      </div>

      <section class="services">
        <div class="service-item">
          <h3>Prescription Medicines</h3>
          <p>
            Order your prescription medications online with ease and have them
            delivered directly to you.
          </p>
        </div>
        <div class="service-item">
          <h3>Health Supplements</h3>
          <p>
            Find a variety of vitamins, supplements, and herbal products to
            support your wellbeing.
          </p>
        </div>
        <div class="service-item">
          <h3>Consultation Services</h3>
          <p>
            Speak with a licensed pharmacist to get personalized advice on your
            health needs.
          </p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 HealthDirect. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
