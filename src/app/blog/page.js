import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import Navbar from '../components/Navbar'; // Assuming Navbar should be on this page

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      {/* <Navbar /> We might remove this if the main layout already includes it */}
      <section className="py-16 pt-24 bg-gray-50 min-h-screen"> {/* Added pt-24 for navbar spacing */}
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
            Blog
          </h1>
          {allPostsData.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allPostsData.map(({ id, date, title, excerpt }) => (
                <article
                  key={id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    <Link href={`/blog/${id}`} className="hover:text-blue-600 transition-colors">
                      {title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">{date}</p>
                  <p className="text-gray-600 mb-4">{excerpt}</p>
                  <Link href={`/blog/${id}`} className="text-blue-500 hover:text-blue-700 font-medium transition-colors">
                    Read more &rarr;
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No posts yet. Check back soon!</p>
          )}
        </div>
      </section>
    </>
  );
}
