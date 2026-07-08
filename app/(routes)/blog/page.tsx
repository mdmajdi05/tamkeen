import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import content from '@/data/content.json';
import type { BlogPost } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read the latest insights, case studies, and engineering updates from TAMKEEN — power generation, marine automation, EV infrastructure, and industrial solutions.',
  alternates: { canonical: 'https://tamkeen-es.com/blog/' },
  openGraph: {
    title: 'Blog | TAMKEEN',
    description: 'Engineering insights, case studies, and industry updates from TAMKEEN.',
    url: 'https://tamkeen-es.com/blog/',
    images: [{ url: '/tamkeen-logo.jpeg', width: 1200, height: 630, alt: 'TAMKEEN Blog' }],
  },
  twitter: {
    title: 'Blog | TAMKEEN',
    description: 'Engineering insights, case studies, and industry updates from TAMKEEN.',
    images: ['/tamkeen-logo.jpeg'],
  },
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span
            className="inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-gray-400 dark:text-gray-500">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </p>
        <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-green transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
            By {post.author}
          </span>
          <span
            className="text-xs font-bold transition-colors"
            style={{ color: '#1565C0' }}
          >
            Read More &rarr;
          </span>
        </div>
      </div>
      <span
        className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: 'linear-gradient(to right,#1565C0,#22C55E)' }}
      />
    </Link>
  );
}

function BlogContent({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="bg-white dark:bg-gray-950 min-h-screen">
      <Navbar />
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(21,101,192,0.06) 0%, rgba(34,197,94,0.06) 100%)' }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D1D5DB 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
            style={{ background: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
          >
            Insights
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            TAMKEEN{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg,#1565C0,#22C55E)' }}
            >
              Blog
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
            Engineering insights, industry analysis, and project case studies from the TAMKEEN team.
          </p>
        </div>
      </section>
      <section className="pb-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function UnderDevelopmentFallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-950 text-slate-100 font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 backdrop-blur-xl bg-slate-900/40 border border-slate-800 p-12 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col items-center border-t-blue-500/30">
        <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 border border-blue-500/20 rounded-full p-2 animate-pulse">
            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent absolute top-1/2 left-0 animate-[bounce_3s_ease-in-out_infinite]" />
          </div>
          <div className="absolute w-8 h-8 bg-blue-500 rounded-full blur-md animate-pulse" />
          <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_15px_#3b82f6]" />
          <svg className="w-32 h-32 text-slate-400 drop-shadow-[0_0_8px_rgba(148,163,184,0.2)] animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /><circle cx="12" cy="12" r="7" strokeDasharray="3 3" />
          </svg>
          <svg className="w-20 h-20 text-blue-500 absolute top-2 right-2 drop-shadow-[0_0_12px_rgba(59,130,246,0.4)] animate-[spin_6s_linear_infinite_reverse]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
          <svg className="w-24 h-24 text-cyan-600/60 absolute bottom-4 left-2 drop-shadow-[0_0_10px_rgba(8,145,178,0.2)] animate-[spin_20s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="5" /><path strokeDasharray="2 2" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        </div>
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium tracking-wider uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            Coming Soon
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Blog Not Available
          </h1>
          <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
            We are crafting in-depth articles. Check back shortly.
          </p>
          <div className="mt-4 border border-blue-500/10 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-500/10">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
              Go to homepage
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xs bg-slate-950 border border-slate-800/80 h-2 rounded-full mt-8 overflow-hidden p-[2px]">
          <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full w-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  try {
    const posts = (content as any).blogPosts;
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error('No posts');
    }
    return <BlogContent posts={posts} />;
  } catch {
    return <UnderDevelopmentFallback />;
  }
}
