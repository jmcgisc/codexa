'use client'

import { DisclosureButton, DisclosurePanel, Disclosure } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
import useScrollSpy from '../../hooks/useScrollSpy'
import ContactModal from '../ContactModal'
import Link from 'next/link';

const sections = ['hero', 'servicios', 'portfolio', 'contacto']

export default function Navbar() {
  const activeId = useScrollSpy(sections, 80)

  return (
    <Disclosure as="nav" className="fixed w-full z-50 bg-white dark:bg-neutral-900 shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-black dark:text-white">CODEXA</h1>
              </div>

              {/* Desktop links */}
              <div className="hidden md:flex items-center space-x-6">
                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`text-sm transition-colors hover:underline ${
                      activeId === id
                        ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}
                <Link href="/configurador" className="text-sm transition-colors hover:underline text-gray-700 dark:text-gray-300">Configurador</Link>
                <ThemeToggle />
                <ContactModal />
              </div>

              {/* Mobile button */}
              <div className="md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800">
                  {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-white dark:bg-neutral-900 px-4 pt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 ${
                    activeId === id
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
              <Link href="/configurador" className="block py-2 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">Configurador</Link>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
