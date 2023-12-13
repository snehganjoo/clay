'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const navigation = [
  {
    name: 'Overview',
    // icon: HomeIcon,
    children: [
      { name: 'Get Started', href: '/docs' },
      { name: 'Principles', href: '/docs/principles' },
      { name: 'Release Notes', href: '/docs/release-notes' },
    ],
    href: '/docs',
  },
  {
    name: 'Foundations',
    // icon: HomeIcon,
    children: [
      { name: 'Typography', href: '/docs/foundations/typography' },
      { name: 'Colors', href: '/docs/foundations/colors' },
      { name: 'Icons and Images', href: '/docs/foundations/icons-and-images' },
      { name: 'Spacing', href: '/docs/foundations/spacing' },
    ],
    href: '/docs/foundations',
  },
  {
    name: 'Components',
    // icon: HomeIcon,
    children: [
      { name: 'Buttons', href: '/docs/components/buttons' },
      { name: 'Callouts', href: '/docs/components/callouts' },
    ],
    href: '/docs/components',
  },
  {
    name: 'Resources',
    // icon: HomeIcon,
    // children: [
    //   { name: 'Download', href: '/' },
    //   { name: 'Reference', href: '/' },
    //   { name: 'Help & Support', href: '/' },
    //   { name: 'Contribution', href: '/' },
    // ],
    href: '/docs/principles',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function SideNavigation() {
  const [currentSidebarItemIndex, setCurrentSidebarItemIndex] = useState(0);
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <a href="/" className="-m-1.5 p-1.5">
          {/* <span className="sr-only">Clay</span> */}
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="h-8 w-auto" src="/images/logo.png" alt="Clay" />
        </a>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item, index) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        currentSidebarItemIndex == index
                          ? 'bg-gray-50'
                          : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700'
                      )}
                      onClick={() => setCurrentSidebarItemIndex(index % 4)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              currentSidebarItemIndex == index
                                ? 'bg-gray-50'
                                : 'hover:bg-gray-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                            )}
                            href={item.href}
                            onClick={() =>
                              setCurrentSidebarItemIndex(index % 4)
                            }
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? 'rotate-90 text-gray-500'
                                  : 'text-gray-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                              href={item.href}
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? 'bg-gray-50'
                                      : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
