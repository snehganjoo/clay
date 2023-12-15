/* eslint-disable @next/next/no-img-element */
'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import H3 from 'components/ds/typography/headings/h3/h3';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';
import { Flowbite, Tabs } from 'flowbite-react';

const tabs = [
  { title: 'Variant', href: '#variant', current: true },
  { title: 'Usage', href: '#usage', current: false },
  { title: 'Example', href: '#example', current: false },
];

const tabItemTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
    },
    tabitem: {
      base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-0 focus:ring-black-300 focus:outline-none',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-gray-100 text-black-600 dark:bg-gray-800 dark:text-black-500',
            off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
          },
        },
      },
    },
  },
  tabitemcontainer: {
    base: '',
    styles: {
      default: '',
      underline: '',
      pills: '',
      fullWidth: '',
    },
  },
  tabpanel: 'py-3',
};

const buttonVariantContent = [
  {
    heading: 'Primary',
    rows: [
      {
        cells: [
          {
            description: 'Primary 1 / Default',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 2 / Default',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 3 / Default',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 4 / Default',
            'img-source': '/images/button/button-primary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Primary 1 / Hover',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 2 / Hover',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 3 / Hover',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 4 / Hover',
            'img-source': '/images/button/button-primary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Primary 1 / Focus',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 2 / Focus',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 3 / Focus',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Primary 4 / Focus',
            'img-source': '/images/button/button-primary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Disabled 1',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Disabled 2',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Disabled 3',
            'img-source': '/images/button/button-primary-one-default.png',
          },
          {
            description: 'Disabled 4',
            'img-source': '/images/button/button-primary-one-default.png',
          },
        ],
      },
    ],
  },
  {
    heading: 'Secondary',
    rows: [
      {
        cells: [
          {
            description: 'Secondary 1 / Default',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 2 / Default',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 3 / Default',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 4 / Default',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Secondary 1 / Hover',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 2 / Hover',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 3 / Hover',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 4 / Hover',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Secondary 1 / Focus',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 2 / Focus',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 3 / Focus',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Secondary 4 / Focus',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Disabled 1',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Disabled 2',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Disabled 3',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
          {
            description: 'Disabled 4',
            'img-source': '/images/button/button-secondary-one-default.png',
          },
        ],
      },
    ],
  },
  {
    heading: 'Destructive',
    rows: [
      {
        cells: [
          {
            description: 'Destructive 1 / Default',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 2 / Default',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 3 / Default',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 4 / Default',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Destructive 1 / Hover',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 2 / Hover',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 3 / Hover',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 4 / Hover',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Destructive 1 / Focus',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 2 / Focus',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 3 / Focus',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Destructive 4 / Focus',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Disabled 1',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Disabled 2',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Disabled 3',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
          {
            description: 'Disabled 4',
            'img-source': '/images/button/button-destructive-one-default.png',
          },
        ],
      },
    ],
  },
  {
    heading: 'Toggle Button',
    rows: [
      {
        cells: [
          {
            description: 'Toggle Off',
            'img-source': '/images/button/toggle-button-off.png',
          },
          {
            description: 'Toggle Off / Focus',
            'img-source': '/images/button/toggle-button-off.png',
          },
          {
            description: 'Toggle Off',
            'img-source': '/images/button/toggle-button-off.png',
          },
          {
            description: 'Toggle On / Focus',
            'img-source': '/images/button/toggle-button-off.png',
          },
        ],
      },
    ],
  },
  {
    heading: 'Radio Button',
    rows: [
      {
        cells: [
          {
            description: 'Radio Button',
            'img-source': '/images/button/radio-button.png',
          },
          {
            description: 'Radio Button Checked',
            'img-source': '/images/button/radio-button.png',
          },
          {
            description: 'Radio Button / Hover',
            'img-source': '/images/button/radio-button.png',
          },
          {
            description: 'Radio Button Checked / Hover',
            'img-source': '/images/button/radio-button.png',
          },
        ],
      },
    ],
  },
];
function ButtonVariantSectionContentCard({
  children,
  className,
  content,
  ...props
}) {
  return (
    <>
      <H3 className="flex w-full pb-8 pt-8">{content.heading}</H3>
      <div className="flex flex-col w-full text-lg text-slate-600 font-semibold">
        {content.rows?.map((row, x) => {
          return (
            <div
              key={x}
              className="flex flex-row h-auto text-sm text-slate-600 font-normal content-evenly gap-8 grid-cols-4"
            >
              {row.cells.map((cell, y) => {
                return (
                  <div
                    key={y}
                    className="flex flex-col w-1/4 text-xs font-medium m-2 content-center"
                  >
                    <div
                      className={`flex items-center h-40 ${
                        cell.description ? `bg-slate-100` : `bg-white`
                      }`}
                    >
                      <img
                        className="w-auto h-8 m-auto"
                        src={cell['img-source']}
                        alt=""
                      ></img>
                    </div>
                    <div className="my-2">{cell.description}</div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="bg-gray-400 w-100 h-px m-8"></div>
      </div>
    </>
  );
}

function ButtonVariantSection({ children, className, ...props }) {
  return (
    <>
      {buttonVariantContent.map((content) => (
        <ButtonVariantSectionContentCard
          key={content.heading}
          content={content}
        />
      ))}
    </>
  );
}
function ButtonUsageSection({ children, className, ...props }) {}
function ButtonExampleSection({ children, className, ...props }) {}

export default async function Page() {
  return (
    <div className="">
      <p className="text-sm text-slate-600">COMPONENTS</p>
      <H2>Button</H2>
      <SubHeading>
        Button provide a call to action for any function you want the user to
        perform.
      </SubHeading>
      <div className="py-5" />
      <Flowbite style={tabItemTheme}>
        <Tabs aria-label="Tabs with underline">
          <Tabs.Item active={tabs[0].current} title={tabs[0].title}>
            <ButtonVariantSection /*content={props.content}*/ />
          </Tabs.Item>
          <Tabs.Item active={tabs[1].current} title={tabs[1].title}>
            <ButtonUsageSection />
          </Tabs.Item>
          <Tabs.Item active={tabs[2].current} title={tabs[2].title}>
            <ButtonExampleSection />
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </div>
  );
}
