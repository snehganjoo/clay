'use client';

import Header from 'components/header/Header';
import BottomRightHue from 'components/background/bottom-right-hue/BottomRightHue';
import TopLeftHue from 'components/background/top-left-hue/TopLeftHue';

import Link from 'next/link';

const centerTextContent = [
  {
    heading: 'What is Clay',
    body: 'Clay is a design system consisting of guidelines and building blocks for designing user-friendly and consistent interfaces. We made Clay as an extension of the Formbricks ethos of open source, pre-configured solutions built upon best practices.This design system is a living document for designers to create, maintain, and update Formbricks pages and design system components. Each part of Clay can be combined seamlessly, giving designers the confidence and freedom to drag and drop for rapid UI prototyping.',
  },
  {
    heading: 'Why use Clay',
    body: 'Clay speeds up your design process by providing a set of modular, reusable elements that adhere to brand identity and accessibility guidelines. The time saved from building new elements and checking for compliance allows you to focus on solving complex user experience problems. At this time, our components do not have code but engineers can reference our design tokens for colors, typography, spacing, and other foundations. Please see our contribution guidelines for steps on how to participate in Clay’s evolution.',
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopLeftHue />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Explore the Figma.{' '}
              <a
                href="https://www.figma.com/file/Zylm1rlt2gcebteycfSkDf/UI-Kit?type=design&node-id=0%3A1&mode=design&t=8iGfKuJbMvK4a8JI-1"
                className="font-semibold text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                UI-Kit <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Sneak-a-peak into Clay
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Clay is an unofficial design system for the open source
              surveysuite Formbricks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/principles"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
            </div>
          </div>
          {centerTextContent.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <div className="text-center">
              <h1 className="text-3xl font-bold py-8 tracking-tight text-gray-900 sm:text-5xl">
                {item.heading}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <BottomRightHue />
      </div>
    </div>
  );
}
