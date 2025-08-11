import Link from '@/components/Link'
import RotateTextPreview from '@/components/ui/text-rotate-demo'
import siteMetadata from '@/data/siteMetadata'
import { CalendarDays, Timer } from 'lucide-react'
import Image from 'next/image'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
const MAX_DISPLAY = 4

const categories = [
  { name: 'Business', count: '04' },
  { name: 'Technology', count: '04' },
  { name: 'Travel & Culture', count: '02' },
  { name: 'Entertainment', count: '04' },
  { name: 'Lifestyle', count: '02' },
  { name: 'Social Issues', count: '02' },
]

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex flex-wrap items-center sm:space-x-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 text-shadow-sm sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
              Arifur Rahman
            </h1>
            <div className="mt-2">
              <RotateTextPreview />
            </div>
          </div>
          <p className="text-sm leading-6 text-gray-500 lg:text-lg dark:text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum <br /> veritatis impedit
            alias odio facilis? Eius tempore voluptatibus
          </p>
        </div>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-12 text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Explore Categories
            </h2>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group flex cursor-pointer items-center justify-between border border-gray-200 px-4 py-6 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <h3 className="text-xl font-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100">
                    {category.name}
                  </h3>
                  <span className="text-lg font-medium text-gray-500 transition-colors group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Sharing my learning journey
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, readingTime, structuredData } = post
            return (
              <li className="py-4">
                <article>
                  <div className="border-gray grid grid-cols-1 items-start gap-8 border bg-[#f5f5f8] px-4 py-4 lg:grid-cols-12 dark:border-[#2e2e32] dark:bg-[#202127]">
                    {/* Left sidebar with metadata */}
                    <div className="mt-2 space-y-4 lg:col-span-2">
                      {/* Category tag */}
                      <div>
                        <div className="flex w-max items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                          {tags[0]}
                        </div>
                      </div>
                      {/* Date */}
                      <div className="flex items-center space-x-2">
                        <CalendarDays className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <time dateTime={date} className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(date)}
                        </time>
                      </div>

                      {/* Reading time */}
                      <div className="flex items-center space-x-2">
                        <Timer className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {readingTime.text}
                        </span>
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="space-y-4 lg:col-span-6">
                      <div>
                        <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                          <Link
                            href={`/blog/${slug}`}
                            className="transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            {title}
                          </Link>
                        </h2>

                        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                          {summary}
                        </p>

                        <Link
                          href={`/blog/${slug}`}
                          className="inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more
                        </Link>
                      </div>
                    </div>

                    {/* Right image */}
                    <div className="lg:col-span-4">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={structuredData.image || '/placeholder.svg'}
                          alt={title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <div className="py-6">
        {siteMetadata.newsletter?.provider && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}
      </div>
    </>
  )
}
