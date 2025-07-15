import React from "react";
import "../styles/pages/_privacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 2025</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as:
            <ul>
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Physical Address</li>
              <li>Property Preferences</li>
              <li>Other information you provide</li>
            </ul>
          </p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the data to:</p>
          <ul>
            <li>Respond to inquiries or requests</li>
            <li>Connect you with property sellers or brokers</li>
            <li>Improve our services and website</li>
            <li>Send updates and promotional messages (if opted in)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell your personal data. However, we may share your
            information with:
          </p>
          <ul>
            <li>Verified property sellers, brokers, or agents</li>
            <li>Service providers (e.g., hosting, analytics)</li>
            <li>Government authorities if legally required</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Storage & Security</h2>
          <p>
            We take reasonable steps to protect your information, but no
            internet transmission is fully secure.
          </p>
        </section>

        <section>
          <h2>5. Your Choices</h2>
          <p>You may:</p>
          <ul>
            <li>Request access, correction, or deletion of your data</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p>To request, contact us at:</p>
          <p>Email: <a href="mailto:support@mybrokers.in">mybrokersinfo@gmail.com</a></p>
          {/* <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p> */}
        </section>

        <section>
          <h2>6. Cookies and Tracking</h2>
          <p>
            We use cookies to improve functionality and analyze traffic. You can
            manage cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            We are not responsible for the privacy practices of websites linked
            from our platform.
          </p>
        </section>

        <section>
          <h2>8. Children’s Privacy</h2>
          <p>
            Our website is not intended for users under the age of 18. We do not
            knowingly collect data from children.
          </p>
        </section>

        <section>
          <h2>9. Updates to This Policy</h2>
          <p>
            We may revise this Privacy Policy at any time. Please review this
            page periodically.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>If you have questions, reach out to:</p>
          <p><strong>MyBrokers.in</strong></p>
          <p>Email: <a href="mailto:support@mybrokers.in">mybrokersinfo@gmail.com</a></p>
          {/* <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p> */}
          {/* <p>Address: [Insert Your Company Address]</p> */}
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
