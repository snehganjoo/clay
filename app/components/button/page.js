'use client';

import Header from 'components/header/Header';
const tabs = [
  { name: 'Usage', href: '#', current: true },
  { name: 'Example', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Tabs() {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default async function Index() {
  return (
    <div class="bg-white">
      <Header />;
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <h1 className="py-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Button
        </h1>

        <Tabs />
        <div className="flex-col px-12 py-16 max-w-xl">
          <p className="mt-6 text-sm leading-8 text-gray-600">
            Buttons can be used as an endpoint to an action or as way to
            navigate to the next action they want to take. There are three
            different button types, and each can be represented in four
            different states.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/images/button-variations.jpeg" />
        </div>
      </div>
    </div>
  );
}
