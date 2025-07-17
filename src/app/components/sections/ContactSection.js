"use client";
import { useState } from "react";
import { FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaEdit, FaComments } from "react-icons/fa";

const contactContent = {
  title: "Get in Touch",
  description: "Ready to collaborate? Let's create something amazing together.",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 2) return "Name must be at least 2 characters";
        if (value.length > 50) return "Name must be less than 50 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.length < 3) return "Subject must be at least 3 characters";
        if (value.length > 100)
          return "Subject must be less than 100 characters";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.length < 10) return "Message must be at least 10 characters";
        if (value.length > 1000)
          return "Message must be less than 1000 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <FaEnvelope className="w-4 h-4 mr-2" />
              Let's Connect
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-gradient">{contactContent.title}</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              {contactContent.description}
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 lg:p-12 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name and Email Row */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <FaUser className="w-4 h-4" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border-2 rounded-lg ${
                      errors.name 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:border-blue-500"
                    } focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-white`}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <FaExclamationCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                    <FaEnvelope className="w-4 h-4" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border-2 rounded-lg ${
                      errors.email 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-300 focus:border-blue-500"
                    } focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-white`}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                      <FaExclamationCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                  <FaEdit className="w-4 h-4" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="What would you like to discuss?"
                  className={`w-full px-4 py-3 border-2 rounded-lg ${
                    errors.subject 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-300 focus:border-blue-500"
                  } focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-white`}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                  <FaComments className="w-4 h-4" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  rows="6"
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className={`w-full px-4 py-3 border-2 rounded-lg ${
                    errors.message 
                      ? "border-red-500 focus:border-red-500" 
                      : "border-gray-300 focus:border-blue-500"
                  } focus:outline-none transition-colors duration-300 text-gray-900 placeholder-gray-500 bg-white resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full btn-professional group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-center flex items-center justify-center gap-2">
                    <FaCheckCircle className="w-5 h-5" />
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-center flex items-center justify-center gap-2">
                    <FaExclamationCircle className="w-5 h-5" />
                    Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
