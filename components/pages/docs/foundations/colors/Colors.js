'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import H3 from 'components/ds/typography/headings/h3/h3';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';
import { Flowbite, Tabs } from 'flowbite-react';
import Link from 'next/link';

const tabs = [
  { title: 'Overview', href: '#overview', current: true },
  { title: 'Accessibility', href: '#accessibility', current: false },
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

const colorsOverviewContent = {
  primary: {
    heading: 'Primary colors',
    text: 'Aqua Blue, black and white are the main brand colors and are used for majority of the functions within the website.',
    colorPallete: [
      { name: 'Aqua Blue', hexCode: '#02CDBC', rgbValue: 'rgb(2, 205, 188)' },
      { name: 'Black', hexCode: '#111A2C', rgbValue: 'rgb(17, 26, 44)' },
      { name: 'White', hexCode: '#FFFFFF', rgbValue: 'rgb(255, 255, 255)' },
    ],
  },
  secondary: {
    heading: 'Secondary colors',
    text: 'Blue, Green, Orange, Pink and Red along with their lighter versions are the secondary colors and can be used within cards/ callouts for background color or text color. These colors can also be used within secondary functions like tags.',
    colorPallete: [
      { name: 'Blue', hexCode: '#3069C6', rgbValue: 'rgb(48, 105, 198)' },
      {
        name: 'Light Blue',
        hexCode: '#EDF6FF',
        rgbValue: 'rgb(237, 246, 255)',
      },
      {
        name: 'Light Green',
        hexCode: '#DCFCE6',
        rgbValue: 'rgb(220, 252, 230)',
      },
      {
        name: 'Light Orange',
        hexCode: '#FFF6ED',
        rgbValue: 'rgb(255, 246, 237)',
      },
      {
        name: 'Light Pink',
        hexCode: '#FDF1F8',
        rgbValue: 'rgb(253, 241, 248)',
      },
    ],
  },
  neutrals: {
    heading: 'Neutral colors',
    text: 'Grey tones are used in combination with the primary/secondary colors to depict various functionalities.',
    colorPallete: [
      { name: 'Grey 1', hexCode: '#455965', rgbValue: 'rgb(69, 89, 101)' },
      { name: 'Grey 2', hexCode: '#94A3B8', rgbValue: 'rgb(148, 163, 184)' },
      { name: 'Grey 3', hexCode: '#F1F5F9', rgbValue: 'rgb(241, 245, 249)' },
    ],
  },
};

function ColorsOverviewSectionContentCard({
  children,
  className,
  content,
  ...props
}) {
  return (
    <div className="flex-1 flex-row w-full text-lg text-slate-600 font-semibold pb-8">
      <H3 className="flex w-full pb-8 pt-8">{content.heading}</H3>
      <div className="text-base font-normal">{content.text}</div>
      <div className="flex flex-column h-auto text-sm text-slate-600 font-normal my-8">
        {content.colorPallete.map((pallette, index) => (
          <div
            key={index}
            className="w-1/6 text-xs font-medium text-black mx-2"
          >
            <div className="bg-gray-200 p-px w-32 h-32 rounded-lg border-b-2 border-gray-400">
              <div
                className="w-full h-full"
                style={{ backgroundColor: `${pallette.hexCode}` }}
              />
            </div>
            <div className="p-px">
              <div className="my-2 text-base font-bold">{pallette.name}</div>
              <div>{pallette.hexCode}</div>
              <div>{pallette.rgbValue}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-400 w-100 h-px m-8"></div>
    </div>
  );
}

function ColorsOverviewSection({ children, className, ...props }) {
  return (
    <>
      <div className="">
        {`Clay’s color palette has 3 primary colors, 10 secondary colors and 4
        grey tones. All colors and the combinations of usage are WCAG compliant
        and accessible. Colors are also part of the design tokens and are named
        so that they can be used as per functionality.`}
      </div>
      <ColorsOverviewSectionContentCard
        content={colorsOverviewContent.primary}
      />
      <ColorsOverviewSectionContentCard
        content={colorsOverviewContent.secondary}
      />
      <ColorsOverviewSectionContentCard
        content={colorsOverviewContent.neutrals}
      />
    </>
  );
}

function ColorsAccessibilitySection({ children, className, ...props }) {
  return (
    <>
      <H3 className="flex w-full pb-8 pt-8">Accessibility</H3>
      <div className="text-base">
        When designing elements related to text and colors, ensure the use of
        appropriate colors that meet a color contrast ratio of 4.5:1, as
        recommended by the{' '}
        <Link
          className="underline text-cyan-800"
          href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum"
        >
          WCAG 2.1
        </Link>
        .
      </div>
      <div className="flex flex-column w-auto py-8">
        <div className="w-screen">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <div className="text-sm my-4">Use 16px for body text</div>
        </div>
        <div className="mx-4"></div>
        <div className="w-screen">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-max h-max border-12 rounded-lg border-b-2 border-rose-200"
            src="/images/colors-accessibility.jpg"
            alt="Incorrect thing to do"
          />
          <div className="text-sm my-4">
            {`Don't use the font text smaller than 14px`}
          </div>
        </div>
      </div>
    </>
  );
}

export function Colors({ children, className, ...props }) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">FOUNDATIONS</p>
      <H2>Colors</H2>
      <SubHeading>
        {` Bring designs to life with Formbricks' brand colors.`}
      </SubHeading>
      <div className="py-5" />
      <Flowbite style={tabItemTheme}>
        <Tabs aria-label="Tabs with underline">
          <Tabs.Item active={tabs[0].current} title={tabs[0].title}>
            <ColorsOverviewSection />
          </Tabs.Item>
          {/* <Tabs.Item active={tabs[1].current} title={tabs[1].title}>
            <ColorsAccessibilitySection />
          </Tabs.Item> */}
        </Tabs>
      </Flowbite>
    </div>
  );
}
export default Colors;
