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
      default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
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

const cardVariantContent = [
  {
    heading: 'Default',
    rows: [
      {
        cells: [
          {
            description: 'Card Default / Large',
            'img-source': '/images/card/card-default-large.png',
          },
          {
            description: 'Card Default / Large / Hover',
            'img-source': '/images/card/card-default-large.png',
          },
          {
            description: 'Card Default / Medium',
            'img-source': '/images/card/card-default-large.png',
          },
          {
            description: 'Card Default / Small',
            'img-source': '/images/card/card-default-large.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Card Default / Small / Hover',
            'img-source': '/images/card/card-default-large.png',
          },
          {},
          {},
          {},
        ],
      },
    ],
  },
  {
    heading: 'Button',
    rows: [
      {
        cells: [
          {
            description: 'Card Button / Large',
            'img-source': '/images/card/card-button-large.png',
          },

          {
            description: 'Card Button / Medium',
            'img-source': '/images/card/card-button-medium.png',
          },
          {
            description: 'Card Button / Small',
            'img-source': '/images/card/card-button-small.png',
          },
          {
            description: 'Card Button Two / Large',
            'img-source': '/images/card/card-button-two-large.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Card Button Two / Medium',
            'img-source': '/images/card/card-button-two-medium.png',
          },
          {
            description: 'Card Button Two / Small',
            'img-source': '/images/card/card-button-two-small.png',
          },
          {},
          {},
        ],
      },
    ],
  },
  {
    heading: 'Custom',
    rows: [
      {
        cells: [
          {
            description: 'Card Custom / Large',
            'img-source': '/images/card/card-custom-large.png',
          },

          {
            description: 'Card Custom / Medium',
            'img-source': '/images/card/card-custom-large.png',
          },
          {
            description: 'Card Custom / Small',
            'img-source': '/images/card/card-custom-large.png',
          },
          {},
        ],
      },
    ],
  },
  {
    heading: 'Tag',
    rows: [
      {
        cells: [
          {
            description: 'Card Tag / Large',
            'img-source': '/images/card/card-tag-large.png',
          },
          {
            description: 'Card Tag / Large / Hover',
            'img-source': '/images/card/card-tag-large.png',
          },
          {
            description: 'Card Tag / Medium',
            'img-source': '/images/card/card-tag-large.png',
          },
          {
            description: 'Card Tag / Small',
            'img-source': '/images/card/card-tag-large.png',
          },
        ],
      },
      {
        cells: [
          {
            description: 'Card Tag / Small / Hover',
            'img-source': '/images/card/card-tag-large.png',
          },
          {},
          {},
          {},
        ],
      },
    ],
  },
];

function CardVariantSectionContentCard({
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

function CardVariantSection({ children, className, ...props }) {
  return (
    <>
      {cardVariantContent.map((content) => (
        <CardVariantSectionContentCard
          key={content.heading}
          content={content}
        />
      ))}
    </>
  );
}
function CardUsageSection({ children, className, ...props }) {}
function CardExampleSection({ children, className, ...props }) {}

export default async function Page() {
  return (
    <div className="">
      <p className="text-sm text-slate-600">COMPONENTS</p>
      <H2>Card</H2>
      <SubHeading>
        Card are used to create miniature stories that introduce users to ideas
        or actions.
      </SubHeading>
      <div className="py-5" />
      <Flowbite style={tabItemTheme}>
        <Tabs aria-label="Tabs with underline">
          <Tabs.Item active={tabs[0].current} title={tabs[0].title}>
            <CardVariantSection /*content={props.content}*/ />
          </Tabs.Item>
          <Tabs.Item active={tabs[1].current} title={tabs[1].title}>
            <CardUsageSection />
          </Tabs.Item>
          <Tabs.Item active={tabs[2].current} title={tabs[2].title}>
            <CardExampleSection />
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </div>
  );
}
