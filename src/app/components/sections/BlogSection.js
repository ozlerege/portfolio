"use client";
import Link from 'next/link';
import { getSortedPostsData } from '../../../lib/posts'; // Adjusted path

export default function BlogSection() {
  // Get all posts and take the latest 3 for the preview
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <section
      id="blog" // Keep the id for navbar scrolling if still needed for homepage context
      className="py-16 bg-gradient-to-b from-red-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Latest From The Blog
          </h1>
          <p className="text-lg text-gray-600">
            Insights on AI, web development, and more.
          </p>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map(({ id, date, title, excerpt }) => (
              <article
                key={id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  <Link href={`/blog/${id}`} className="hover:text-red-600 transition-colors">
                    {title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-sm mb-3">{date}</p>
                <p className="text-gray-600 mb-4 flex-grow">{excerpt}</p>
                <Link href={`/blog/${id}`} className="text-red-500 hover:text-red-700 font-medium transition-colors self-start">
                  Read more &rarr;
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts yet. Check back soon!</p>
        )}

        <div className="text-center mt-12">
          <Link href="/blog" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-lg shadow-md hover:shadow-lg">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
