'use client'

import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import Link from './Link'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'

// Import navbar components from resizable-navbar
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ui/resizable-navbar'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Convert your headerNavLinks to resizable-navbar format
  const navItems = headerNavLinks
    .filter((link) => link.href !== '/')
    .map((link) => ({
      name: link.title,
      link: link.href,
    }))

  return (
    <header>
      <Navbar className={siteMetadata.stickyNav ? 'sticky top-0 z-50' : ''}>
        {/* Desktop Navigation */}
        <NavBody>
          {/* Replace NavbarLogo with your actual logo + title */}
          <Link
            href="/"
            aria-label={siteMetadata.headerTitle}
            className="flex items-center space-x-2"
          >
            <Logo className="h-8 w-8" />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <span className="text-lg font-semibold">{siteMetadata.headerTitle}</span>
            ) : (
              siteMetadata.headerTitle
            )}
          </Link>

          {/* Navigation Links */}
          <NavItems
            items={navItems}
            onItemClick={() => setIsMobileMenuOpen(false)}
            className="hidden lg:flex"
          />

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <SearchButton />
            <ThemeSwitch />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative block text-lg font-medium text-neutral-600 dark:text-neutral-300"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4 flex w-full items-center gap-4">
              <SearchButton />
              <ThemeSwitch />
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  )
}
