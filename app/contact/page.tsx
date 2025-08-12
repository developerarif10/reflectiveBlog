import ContactForm from '@/components/ContactForm'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Contact Me',
  description: 'Get in touch for freelancing offers, collaborations, and inquiries about my work.',
})

export default function ContactPage() {
  return <ContactForm />
}
