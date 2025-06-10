import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Terms & Conditions for Hei Service Bot
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Effective Date: June 9, 2025
          </p>
        </div>

        {/* Introduction */}
        <p className="mb-6 text-gray-700 leading-relaxed">
          Welcome to Hei, your smart WhatsApp companion for printing,
          deliveries, and student support. These Terms & Conditions (“Terms”)
          govern your use of Hei on WhatsApp and related services. By
          interacting with Hei via WhatsApp, you agree to these Terms.
        </p>

        {/* Section 1: Who We Are */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          1. Who We Are
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Hei is a chatbot service operated by Hei Service Bot. We provide
          support tools like:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">Smart document printing & delivery</li>
          <li className="mb-2">Student helpdesk and info lookup</li>
          <li>AI-powered interactions for campus life</li>
        </ul>

        {/* Section 2: How You Use Hei */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          2. How You Use Hei
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">To use Hei:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">You must be at least 13 years old.</li>
          <li className="mb-2">You must use a valid WhatsApp account.</li>
          <li className="mb-2">
            All messages and files you send must comply with WhatsApp’s own
            terms of service and our acceptable use policy.
          </li>
          <li>
            Hei is not a human — but it's designed to assist you in real time.
          </li>
        </ul>

        {/* Section 3: Service Scope */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          3. Service Scope
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">Hei helps users:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">Upload documents for printing</li>
          <li className="mb-2">
            Order services like delivery (when available)
          </li>
          <li>Get information using AI prompts</li>
        </ul>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We may add/remove services from time to time. Certain features may be
          limited to specific schools, locations, or operational hours.
        </p>

        {/* Section 4: User Responsibilities */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          4. User Responsibilities
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          By using Hei, you agree:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700 ml-4">
          <li className="mb-2">
            Not to send illegal, abusive, or inappropriate content.
          </li>
          <li className="mb-2">
            Not to misuse the platform for spam or fraud.
          </li>
          <li>
            To provide correct and timely details when placing orders or making
            requests.
          </li>
        </ul>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We reserve the right to block access to users who violate these rules.
        </p>

        {/* Section 5: Payments */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          5. Payments
        </h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Some services may require payment (e.g., printing or deliveries).
          You’ll receive a breakdown of fees before confirming your order. All
          payments are final unless otherwise stated. We use secure payment
          gateways and will never ask for your bank PIN or password.
        </p>

        {/* Section 6: Refund & Cancellation */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          6. Refund & Cancellation
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          If your order is delayed, incorrect, or undelivered, please message
          “Support” for resolution. Refunds are issued only in verified cases of
          service failure.
        </p>

        {/* Section 7: Data & Privacy */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          7. Data & Privacy
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          We collect basic information like your WhatsApp number, messages, and
          documents for the purpose of delivering services. See our{" "}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>{" "}
          for more info.
        </p>

        {/* Section 8: Intellectual Property */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          8. Intellectual Property
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          All content, branding, and chatbot logic are the property of Hei
          Service Bot and may not be copied, repurposed, or distributed without
          permission.
        </p>

        {/* Section 9: Limitation of Liability */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          9. Limitation of Liability
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Hei is provided “as is.” While we aim to be accurate and fast, we
          cannot guarantee 100% uptime or response accuracy. We are not liable
          for losses arising from service delays, missed orders, or misuse.
        </p>

        {/* Section 10: Updates to Terms */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          10. Updates to Terms
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          These Terms may change as we improve our services. We’ll notify users
          via WhatsApp or on our website.
        </p>

        {/* Section 11: Contact */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          11. Contact
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
          <li className="mb-2">
            📱 WhatsApp:{" "}
            <a
              href="https://wa.me/2349021490260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +2349021490260
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

export default page;
