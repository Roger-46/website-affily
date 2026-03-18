import { FooterData } from '@/data/footer'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white pt-20 dark:bg-dark-300">
      <div className="container">
        <div className="mb-20 grid grid-cols-12 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Link href="/" className="mb-10 inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <span className="text-xl font-bold text-paragraph dark:text-white">Affily</span>
            </Link>
            <p className="max-w-[350px] max-lg:mx-auto">{FooterData.footerText}</p>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.explore.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              {FooterData.resources.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 max-lg:text-center lg:col-span-2">
            <h3 className="mb-8 text-lg font-medium">Get In Touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <Link
                href={`mailto:${FooterData.email}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.email}
              </Link>
            </p>
            <p className="mb-3">
              <Link
                href={`tel:${FooterData.phone.split(' ').join('')}`}
                className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                {FooterData.phone}
              </Link>
            </p>
            <ul className="social-link flex items-center gap-4 max-lg:justify-center">
              {FooterData.socialLinks.map((item) => (
                <li key={item.id}>
                  <Link href={item.link} className="transition-all" aria-label={item.label}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-borderColour dark:bg-borderColour-dark"></div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">{FooterData.copyright}</p>
            <ul className="flex items-center gap-15 max-lg:justify-center lg:ml-auto">
              <li>
                <Link
                  href="/privacy"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="relative inline-block overflow-hidden text-base capitalize text-paragraph before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100 dark:text-white dark:before:bg-white">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
