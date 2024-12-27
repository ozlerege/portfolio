"use client";
import blogContent from "../../../data/blog.json";
export default function BlogSection() {
  return (
    <section
      id="blog"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-red-50 to-red-100"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12 mt-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {blogContent.title}
            </h1>
            <div className="relative inline-block">
              <span className="text-2xl font-bold text-red-600 animate-pulse">
                {blogContent.comingSoon}
              </span>
              <div className="absolute -inset-1 bg-red-100 rounded-lg -z-10"></div>
            </div>
            <p className="text-lg text-gray-600 mt-4">
              {blogContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
