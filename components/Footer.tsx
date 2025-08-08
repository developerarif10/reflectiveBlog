import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-between">
            <div>
              Arifur Rahman • © ReflectiveBlog All Right Reserved {` ${new Date().getFullYear()}`}
            </div>
            <div className="flex space-x-4">
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />

              <SocialIcon kind="x" href={siteMetadata.x} size={6} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
