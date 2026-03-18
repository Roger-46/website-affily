'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaAngleDown, FaTimes } from 'react-icons/fa'

const menuItems = [
  { id: 1, title: 'Features', path: '/features' },
  { id: 2, title: 'Pricing', path: '/pricing' },
  {
    id: 3,
    title: 'Resources',
    submenu: [
      { id: 1, title: 'Help Center', path: '#', external: false },
      { id: 2, title: 'Blog', path: '/blog' },
      { id: 3, title: 'About Us', path: '/about' },
    ],
  },
]

const AffilyNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [useWhiteLogo, setUseWhiteLogo] = useState(false)

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 20)
  }

  const handleLogoSwitch = () => {
    const header = document.querySelector('header')
    const darkSections = document.querySelectorAll('[data-dark-section="true"], #final-cta-section')
    if (!header) return

    const headerRect = header.getBoundingClientRect()
    let shouldUseWhiteLogo = false

    darkSections.forEach((section) => {
      const sectionRect = section.getBoundingClientRect()
      const overlaps = headerRect.bottom > sectionRect.top && headerRect.top < sectionRect.bottom
      if (overlaps) shouldUseWhiteLogo = true
    })

    setUseWhiteLogo(shouldUseWhiteLogo)
  }

  useEffect(() => {
    const handleScroll = () => {
      handleStickyNavbar()
      handleLogoSwitch()
    }
    window.addEventListener('scroll', handleScroll)
    handleLogoSwitch()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 z-50 w-full bg-transparent pt-8 transition-all duration-500 max-md:z-[500]',
        sticky ? 'nav-sticky' : '',
      )}>
      <nav className="container relative flex items-center justify-center">
        {/* Logo */}
        <div className="nav-logo absolute left-4 lg:left-0">
          <Link href="/" className="flex items-center gap-2">
            <div className={cn(
              'flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-300',
              useWhiteLogo ? 'bg-white' : 'bg-primary'
            )}>
              <svg className={cn(
                'h-5 w-5 transition-colors duration-300',
                useWhiteLogo ? 'text-primary' : 'text-white'
              )} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <span className={cn(
              'text-xl font-bold transition-colors duration-300',
              useWhiteLogo ? 'text-white' : 'text-paragraph'
            )}>Affily</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-list hidden rounded-large bg-white p-2.5 shadow-nav dark:bg-dark-200 lg:flex [&>*:not(:last-child)]:me-1">
          {menuItems.map((menuItem) => (
            <li className={cn(menuItem.submenu ? 'group relative' : '')} key={menuItem.id}>
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className="flex items-center gap-1.5 rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColour hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColour/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button className="group flex items-center rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColour hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColour/10 dark:hover:bg-dark-200 lg:px-4 xl:px-5">
                    {menuItem.title}
                    <FaAngleDown className="ml-1 mt-0.5 text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                  </button>
                  <ul className="absolute left-0 top-12 z-10 min-w-[200px] origin-top scale-y-0 rounded-md bg-white p-4 opacity-0 shadow-lg duration-300 group-hover:scale-y-100 group-hover:opacity-100 dark:bg-dark-200 [&>*:not(:last-child)]:mb-2">
                    {menuItem.submenu.map((submenuItem) => (
                      <li key={submenuItem.id}>
                        <Link
                          href={submenuItem.path}
                          {...(submenuItem.external && { target: '_blank', rel: 'noopener noreferrer' })}
                          className="block rounded-md px-3 py-2 text-sm text-paragraph transition-colors hover:bg-gray dark:text-white dark:hover:bg-dark-300">
                          {submenuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="absolute right-4 hidden items-center gap-3 lg:right-0 lg:flex">
          <Link href="/demo" className="btn-outline !py-[15px] !px-5 max-lg:!py-3 max-lg:!px-4">
            Book a Demo
          </Link>
          <Link href="#" className="btn !py-[15px] !px-5 max-lg:!py-3 max-lg:!px-4">
            Install Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="mobile-menu-button relative ml-auto flex size-10 items-center justify-center rounded-full bg-white outline-none dark:bg-dark-200 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" className="size-5">
            <path d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z" className="fill-paragraph dark:fill-white" />
            <path d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z" className="fill-paragraph dark:fill-white" />
            <path d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z" className="fill-paragraph dark:fill-white" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={cn('mobile-menu max-lg:overflow-y-auto', showMobileMenu ? 'open' : 'close')}>
          <button
            aria-label="Close menu"
            className="navbar-toggle-close absolute right-6 top-5 flex size-10 items-center justify-center rounded-full bg-white outline-none dark:bg-dark-200"
            onClick={() => setShowMobileMenu(false)}>
            <FaTimes />
          </button>

          <div className="mb-8 mt-6 px-5">
            <Link href="/" className="flex items-center gap-2" onClick={() => setShowMobileMenu(false)}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-xl font-bold text-paragraph dark:text-white">Affily</span>
            </Link>
          </div>

          <ul className="nav-list flex w-full max-w-full flex-col gap-3 landscape:h-full">
            {menuItems.map((menuItem) => (
              <li className={cn(menuItem.submenu ? 'group' : '')} key={menuItem.id}>
                {menuItem.path ? (
                  <Link
                    href={menuItem.path}
                    className="flex items-center gap-2 rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColour hover:bg-white hover:duration-500 dark:text-white dark:hover:border-borderColour/10 dark:hover:bg-dark-200"
                    onClick={() => setShowMobileMenu(false)}>
                    {menuItem.title}
                  </Link>
                ) : (
                  <div>
                    <button className="flex w-full items-center justify-between rounded-large border border-transparent px-5 py-[5px] font-Inter text-base font-medium leading-8 text-paragraph transition-colors duration-500 hover:border-borderColour hover:bg-white dark:text-white dark:hover:border-borderColour/10 dark:hover:bg-dark-200">
                      {menuItem.title}
                      <FaAngleDown className="text-paragraph duration-500 group-hover:rotate-180 dark:text-white" />
                    </button>
                    <ul className="mt-2 origin-top scale-y-0 overflow-hidden pl-5 opacity-0 duration-300 group-hover:scale-y-100 group-hover:opacity-100 [&>*:not(:last-child)]:mb-1">
                      {menuItem.submenu.map((submenuItem) => (
                        <li key={submenuItem.id}>
                          <Link
                            href={submenuItem.path}
                            {...(submenuItem.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            className="block rounded-md px-4 py-2 text-sm text-paragraph transition-colors hover:bg-gray dark:text-white dark:hover:bg-dark-300"
                            onClick={() => setShowMobileMenu(false)}>
                            {submenuItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

            <li className="mt-4 flex flex-col gap-3 px-5">
              <Link href="/demo" className="btn-outline btn-sm w-full text-center" onClick={() => setShowMobileMenu(false)}>
                Book a Demo
              </Link>
              <Link href="#" className="btn btn-sm w-full text-center" onClick={() => setShowMobileMenu(false)}>
                Install Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default AffilyNavbar
