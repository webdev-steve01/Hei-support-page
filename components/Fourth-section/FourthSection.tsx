"use client";
import React, { useState, useEffect } from "react";
// Import necessary Firestore functions
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
// Assuming 'db' is correctly initialized and exported from "@/Firebase"
import { db } from "@/Firebase";

function FourthSection() {
  // State to hold the email input value
  const [email, setEmail] = useState("");
  // State to hold submission messages (success, error, already exists)
  const [message, setMessage] = useState("");
  const [error, isError] = useState(false);
  // State to manage the loading/submitting state of the button
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handles the form submission event.
   * Prevents default form behavior, checks if email exists,
   * and submits it to Firestore if it's new.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form refresh
    setMessage(""); // Clear any previous messages

    // Basic validation for empty email
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    setIsSubmitting(true); // Disable button and show loading state

    try {
      // 1. Create a reference to the 'newsletter_emails' collection
      const emailsCollectionRef = collection(db, "newsletter_emails");

      // 2. Create a query to check if the email already exists
      const q = query(emailsCollectionRef, where("email", "==", email.trim()));
      const querySnapshot = await getDocs(q);

      // 3. Check if any documents match the email
      if (!querySnapshot.empty) {
        setMessage("This email is already on our list!");
        isError(true); // Set error state to true
      } else {
        // 4. If email doesn't exist, add it to the collection
        await addDoc(emailsCollectionRef, {
          email: email.trim(), // Trim whitespace from email
          timestamp: new Date(), // Add a timestamp for when it was submitted
        });
        setMessage("Thanks for subscribing! We'll notify you on launch.");
        isError(false); // Reset error state
        setEmail(""); // Clear the input field on successful submission
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      setMessage("There was an error submitting your email. Please try again.");
      isError(true); // Set error state to true
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  return (
    <section className="fourth" id="Contact">
      <section className=" p-4 flex flex-col gap-[7em] pb-[10em] bg-white/50 main">
        <article className="text-center max-w-[300px] mx-auto article">
          <h1 className="font-bold text-[1.5em]">
            Ready to simplify campus life?{" "}
          </h1>
          <p className="font-bold">
            Drop your email and be the first to know when Hei launches.{" "}
          </p>
        </article>
        {/* Attach handleSubmit to the form's onSubmit event */}
        {message && error ? (
          <p className="text-red-500 text-center">{message}</p>
        ) : (
          <p className="text-green-500 text-center">{message}</p>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white text-black text-[0.8em] font-semibold max-w-[350px] md:max-w-[500px] rounded-sm p-2" /* Added p-2 for better input styling */
            value={email} // Bind input value to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
            disabled={isSubmitting} // Disable input while submitting
            required // Make email input required
          />
          <button
            type="submit" // Set type to submit for form handling
            className="text-white bg-black rounded-sm max-w-[100px] py-2 px-4 transition-colors duration-200 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed" /* Added padding and hover effects */
            disabled={isSubmitting} // Disable button when submitting
          >
            {isSubmitting ? "Sending..." : "Send"}{" "}
            {/* Change text based on state */}
          </button>
          {/* Display feedback message to the user */}
        </form>
      </section>
    </section>
  );
}

export default FourthSection;
