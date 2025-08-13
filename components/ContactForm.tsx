'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
  }

  return (
    <section className="flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        {/* Heading */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Contact
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I'm open to freelancing offers. Reach out to me to inquire more about my work.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Walter White"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-700 dark:bg-[#181818] dark:text-white dark:focus:ring-white"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="walter@projectmayhem.com"
              value={formData.email}
              onChange={handleChange}
              className="dark:bg-transperant mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-700 dark:bg-[#181818] dark:text-white dark:focus:ring-white"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="You're crazy good, never change."
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-700 dark:bg-[#181818] dark:text-white dark:focus:ring-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-black py-2 font-medium text-white shadow transition hover:opacity-90 dark:bg-gray-200 dark:text-gray-900"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
