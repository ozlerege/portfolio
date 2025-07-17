"use client";
import Link from 'next/link';
import { FaBook, FaCalendarAlt, FaArrowRight, FaExternalLinkAlt, FaEdit } from 'react-icons/fa';

export default function BlogSection() {
  // Mock data for now since the posts.js file has server-side dependencies
  const recentPosts = [
    {
      id: 'building-ai-agents-with-rag',
      title: 'Building AI Agents with RAG',
      date: '2024-01-15',
      excerpt: 'Exploring the powerful combination of Retrieval-Augmented Generation and AI agents for building intelligent applications.'
    }
  ];

  return (
    <section
      id="blog"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-28 left-28 w-88 h-88 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-28 right-28 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              <FaBook className="w-4 h-4 mr-2" />
              Knowledge Sharing
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-gradient">Latest From The Blog</span>
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Insights on AI, web development, software engineering, and the latest in technology.
            </p>
          </div>

          {/* Blog Posts */}
          {recentPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map(({ id, date, title, excerpt }, index) => (
                <article
                  key={id}
                  className="group bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl p-8 space-y-6 hover:scale-105 transition-all duration-300 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Post Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCalendarAlt className="w-4 h-4" />
                      <span>{date}</span>
                    </div>
                    <div className="p-2 bg-gradient-to-br from-blog-primary to-blog-secondary rounded-professional group-hover:scale-110 transition-transform">
                      <FaEdit className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-colors leading-tight">
                      <Link href={`/blog/${id}`} className="hover:underline">
                        {title}
                      </Link>
                    </h3>
                    <p className="text-gray-800 leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <Link 
                      href={`/blog/${id}`}
                      className="inline-flex items-center gap-2 text-blog-primary hover:text-blog-secondary font-medium transition-colors group/link"
                    >
                      <span>Read article</span>
                      <FaArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center space-y-4 animate-fade-in-up">
              <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBook className="w-8 h-8 text-blog-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Blog Coming Soon
                </h3>
                <p className="text-gray-800">
                  I'm working on some great content. Check back soon for insights on AI, web development, and more!
                </p>
              </div>
            </div>
          )}

          {/* View All Posts CTA */}
          {recentPosts.length > 0 && (
            <div className="text-center animate-fade-in-up">
              <Link
                href="/blog"
                className="btn-professional group"
              >
                <FaBook className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View All Posts
                <FaExternalLinkAlt className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
