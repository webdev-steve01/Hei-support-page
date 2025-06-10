import React from "react";

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Privacy Policy for Hei Service Bot
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Effective Date: May 9, 2025
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Hei Service Bot (“we,” “our,” or “us”) is committed to protecting your
          privacy. This Privacy Policy outlines how we collect, use, and protect
          your information when you interact with us via WhatsApp. By using our
          WhatsApp-based services (the “Services”), you agree to the terms of
          this policy.
        </p>

        {/* Section 1: Information We Collect */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed font-semibold">
          a. Information You Provide via WhatsApp Chat
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">
            <strong>Messages:</strong> We collect the messages, commands, or
            requests you send while chatting with our bot.
          </li>
          <li className="mb-2">
            <strong>Contact Details:</strong> Your WhatsApp phone number and
            profile name as provided by WhatsApp.
          </li>
          <li>
            <strong>File Uploads:</strong> If you send documents or media files
            through the bot (e.g., for printing or inquiries), we store them
            temporarily to fulfill your request.
          </li>
        </ul>
        <p className="mb-4 text-gray-700 leading-relaxed font-semibold">
          b. Automatically Collected Data
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">
            <strong>Timestamps & Session Logs:</strong> For service improvement
            and usage tracking.
          </li>
          <li className="mb-2">
            <strong>Technical Identifiers:</strong> Such as device type or
            platform info where available (e.g., iOS, Android).
          </li>
          <li>
            <strong>Interaction History:</strong> For personalized service and
            faster responses in future sessions.
          </li>
        </ul>

        {/* Section 2: How We Use Your Information */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We use your information to:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">Respond to your queries, orders, or requests</li>
          <li className="mb-2">
            Process and deliver services (like printing or order confirmations)
          </li>
          <li className="mb-2">Improve bot experience and efficiency</li>
          <li className="mb-2">Monitor misuse or unauthorized access</li>
          <li>Fulfill legal obligations (if applicable)</li>
        </ul>

        {/* Section 3: Data Sharing */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          3. Data Sharing
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We do not sell your information. We only share limited data with:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">
            <strong>Service providers:</strong> For file handling, hosting, or
            delivery coordination.
          </li>
          <li className="mb-2">
            <strong>Law enforcement or regulatory bodies:</strong> If legally
            required.
          </li>
          <li>
            <strong>Internal partners:</strong> For customer support or service
            improvements.
          </li>
        </ul>

        {/* Section 4: Data Retention */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          4. Data Retention
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Message logs are retained only as long as needed to provide you with
          service. Uploaded files are deleted automatically after the task is
          completed or after a short holding period. You can request your data
          be deleted anytime by messaging us directly.
        </p>

        {/* Section 5: Security Measures */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          5. Security Measures
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We use secure storage systems and access controls to keep your data
          safe. However, WhatsApp is a third-party platform — while we protect
          what we collect, you’re also subject to WhatsApp’s own privacy
          practices.
        </p>

        {/* Section 6: Children’s Privacy */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          6. Children’s Privacy
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Our services are not intended for users under 13 years of age. We do
          not knowingly collect data from children.
        </p>

        {/* Section 7: Your Rights */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          7. Your Rights
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">You may request:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">A copy of your interaction history</li>
          <li className="mb-2">Deletion of your chat data or files</li>
          <li>Clarification on how your data is used</li>
        </ul>
        <p className="mb-6 text-gray-700 leading-relaxed">
          To make such a request, simply message: "Delete my data" or email us
          directly.
        </p>

        {/* Section 8: Contact Us */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          8. Contact Us
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">
            📧 Email:{" "}
            <a
              href="mailto:ask@heiservicebot.com.ng"
              className="text-blue-600 hover:underline"
            >
              ask@heiservicebot.com.ng
            </a>
          </li>
          <li>
            🌐 Website:{" "}
            <a
              href="https://heiservicebot.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              heiservicebot.com.ng
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
