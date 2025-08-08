import { slug } from 'github-slugger'
import Link from 'next/link'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="m-1 ml-0 flex items-start justify-start rounded-full border border-neutral-200 bg-neutral-100 px-2 py-1 text-xs hover:z-10 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
