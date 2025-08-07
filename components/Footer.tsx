import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Link from './Link'

export default function Footer() {
  return (
    // <footer>
    //   <div className="mt-16 flex flex-col items-center">
    //     <div className="mb-3 flex space-x-4">
    //       <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
    //       <SocialIcon kind="github" href={siteMetadata.github} size={6} />
    //       <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
    //       <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
    //       <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
    //       <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
    //       <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
    //       <SocialIcon kind="x" href={siteMetadata.x} size={6} />
    //       <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
    //       <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
    //       <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
    //     </div>
    //     <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
    //       <div>{siteMetadata.author}</div>
    //       <div>{` • `}</div>
    //       <div>{`© ${new Date().getFullYear()}`}</div>
    //       <div>{` • `}</div>
    //       <Link href="/">{siteMetadata.title}</Link>
    //     </div>
    //     <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
    //       <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
    //         Tailwind Nextjs Theme
    //       </Link>
    //     </div>
    //   </div>
    // </footer>

    <footer className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600">
                <span className="text-sm font-bold text-white">TB</span>
              </div>
              <span className="text-xl font-bold">ReflectiveBlog</span>
            </div>
            <p className="mb-6 max-w-md text-slate-300">
              A modern blog focused on web development, design patterns, and the latest technology
              insights.
            </p>
            <div className="flex space-x-4">
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />

              <SocialIcon kind="x" href={siteMetadata.x} size={6} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/blog" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tags" className="transition-colors hover:text-white">
                  Tags
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/category/nextjs" className="transition-colors hover:text-white">
                  Next.js
                </Link>
              </li>
              <li>
                <Link href="/category/tailwind" className="transition-colors hover:text-white">
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link href="/category/react" className="transition-colors hover:text-white">
                  React
                </Link>
              </li>
              <li>
                <Link href="/category/typescript" className="transition-colors hover:text-white">
                  TypeScript
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            <div>
              {`© ${new Date().getFullYear()}`} Arifur Rahman • ReflectiveBlog All Right Reserved
            </div>
          </p>
        </div>
      </div>
    </footer>
  )
}
