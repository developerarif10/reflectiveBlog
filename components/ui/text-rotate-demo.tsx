'use client'

import { LayoutGroup, motion } from 'motion/react'
import TextRotate from './text-rotate'

export default function RotateTextPreview() {
  return (
    <div>
      <LayoutGroup>
        <motion.p className="flex whitespace-pre" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2"
            layout
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          ></motion.span>
          <TextRotate
            texts={['Full Stack Engineer', 'Design Engineer', 'Web Developer', 'Code Lover']}
            mainClassName="text-secondary relative order-first mx-4 mb-2 flex w-fit justify-center overflow-hidden bg-green-400 rounded-md px-2 py-0.5 pt-0 text-sm inset-shadow-sm  sm:order-last sm:mx-0 sm:mb-0"
            staggerFrom={'last'}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.p>
      </LayoutGroup>
    </div>
  )
}
