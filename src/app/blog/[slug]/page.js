import { getPostData, getAllPostIds } from '../../../lib/posts'; // Adjusted path
import Navbar from '../../components/Navbar'; // Assuming Navbar should be on this page
import Head from 'next/head';

// This function generates the paths for all blog posts
// So Next.js knows which dynamic routes to pre-render
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({
    slug: path.params.slug,
  }));
}

export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);

  return (
    <>
      {/* <Navbar /> We might remove this if the main layout already includes it */}
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt || 'Blog post'} />
      </Head>
      <article className="py-16 pt-24 bg-white min-h-screen"> {/* Added pt-24 for navbar spacing */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {postData.title}
              </h1>
              <p className="text-gray-500 text-lg">
                Published on {postData.date}
              </p>
            </header>
            <div
              className="prose prose-lg max-w-none prose-indigo" // Using Tailwind Typography for styling
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
            {/* 
              Consider adding more elements here, like:
              - Author bio
              - Social share buttons
              - Related posts
              - Comments section (if applicable)
            */}
          </div>
        </div>
      </article>
    </>
  );
}
