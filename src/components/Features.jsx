import React from "react";

const featuresData = [
  { icon: "🛡️", title: "Secure Transactions", text: "Bank-grade encryption protecting your payments with state-of-the-art security measures." },
  { icon: "🌎", title: "Global Reach", text: "Send and receive payments anywhere in the world with competitive exchange rates." },
  { icon: "🎧", title: "24/7 Support", text: "Our dedicated team is here to assist you anytime, anywhere with expert guidance." }
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
