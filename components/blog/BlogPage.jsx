'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FadeUpAnimation, FadeUpOneByOneAnimation } from '@/components/animations'
import { blogPosts, blogCategories } from '@/data/blog'

const BlogCard = ({ post, featured = false }) => (
  <Link href="#" className="group block h-full">
    <div className={`h-full overflow-hidden rounded-medium border border-borderColour bg-white transition-all hover:border-primary/20 hover:shadow-nav dark:border-borderColour-dark dark:bg-dark-200 dark:hover:border-primary/20 ${featured ? '' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'h-[300px]' : 'h-[200px]'}`}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-paragraph backdrop-blur-sm dark:bg-dark/90 dark:text-white">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-paragraph/50 dark:text-white/50">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className={`mb-3 font-semibold transition-colors group-hover:text-primary ${featured ? 'text-2xl' : 'text-lg'}`}>
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-paragraph/70 dark:text-white/70">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
          Read more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </Link>
)

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory)

  const featuredPost = blogPosts.find((p) => p.featured)
  const regularPosts = filteredPosts.filter((p) => !p.featured || activeCategory !== 'All')

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray pb-[80px] pt-[200px] dark:bg-dark max-lg:pb-16 max-lg:pt-[160px]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(to right, #d1d5db 1px, transparent 1px), linear-gradient(to bottom, #d1d5db 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="pointer-events-none absolute inset-0 dark:hidden" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #f5f8fa 70%)' }} />
        <div className="container relative z-10">
          <FadeUpAnimation>
            <div className="mx-auto max-w-[600px] text-center">
              <p className="section-tagline">Blog</p>
              <h1 className="mb-6">Affiliate Marketing Insights</h1>
              <p className="text-lg text-paragraph-light dark:text-paragraph-muted">
                Strategies, tips, and best practices to grow your Shopify store with affiliate marketing.
              </p>
            </div>
          </FadeUpAnimation>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && featuredPost && (
        <section className="bg-white pt-150 dark:bg-dark-300 max-md:pt-20">
          <div className="container">
            <FadeUpAnimation>
              <BlogCard post={featuredPost} featured />
            </FadeUpAnimation>
          </div>
        </section>
      )}

      {/* Category Filter + Posts */}
      <section className="bg-white pb-150 pt-16 dark:bg-dark-300 max-md:pb-20 max-md:pt-10">
        <div className="container">
          {/* Category Tabs */}
          <FadeUpAnimation>
            <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
              {blogCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-dark text-white dark:bg-white dark:text-dark'
                      : 'bg-gray text-paragraph/70 hover:bg-gray-100 dark:bg-dark-200 dark:text-white/70 dark:hover:bg-dark'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeUpAnimation>

          {/* Posts Grid */}
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {(activeCategory === 'All' ? regularPosts.filter((p) => !p.featured) : regularPosts).map((post, index) => (
              <FadeUpOneByOneAnimation key={post.id} i={index}>
                <BlogCard post={post} />
              </FadeUpOneByOneAnimation>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-paragraph/50 dark:text-white/50">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default BlogPage
