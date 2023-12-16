'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import H3 from 'components/ds/typography/headings/h3/h3';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';
import { Flowbite, Tabs } from 'flowbite-react';

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

const typographyOverviewContent = {
  header: [
    {
      heading: 'Title',
      family: 'Poppins(700)',
      size: '48px',
      lineHeight: '56px',
      sampleText: 'The quick brown fox jumps over the lazy dog',
      style: { textSize: 'text-6xl', weight: 'font-bold' },
    },
    {
      heading: 'Subheader L',
      family: 'Poppins(700)',
      size: '40px',
      lineHeight: '48px',
      sampleText: 'Pack my red box with five dozen quality jugs',
      style: { textSize: 'text-5xl', weight: 'font-bold' },
    },
    {
      heading: 'Subheader M',
      family: 'Poppins(700)',
      size: '24px',
      lineHeight: '40px',
      sampleText: 'Fix problem quickly with galvanized jets',
      style: { textSize: 'text-4xl', weight: 'font-bold' },
    },
    {
      heading: 'Subheader S',
      family: 'Poppins(700)',
      size: '20px',
      lineHeight: '32px',
      sampleText: 'The five boxing wizards jump quickly',
      style: { textSize: 'text-3xl', weight: 'font-bold' },
    },
  ],
  body: [
    {
      heading: 'Body XL',
      family: 'Poppins(400)',
      size: '20px',
      lineHeight: '32px',
      sampleText: 'Grumpy wizards make a toxic brew for the jovial queen',
      style: { textSize: 'text-2xl', weight: 'font-normal' },
    },
    {
      heading: 'Body L',
      family: 'Poppins(400)',
      size: '18px',
      lineHeight: '28px',
      sampleText: 'Grumpy wizards make a toxic brew for the jovial queen',
      style: { textSize: 'text-xl', weight: 'font-normal' },
    },
    {
      heading: 'Body',
      family: 'Poppins(400)',
      size: '16px',
      lineHeight: '24px',
      sampleText: 'The five boxing wizards jump quickly',
      style: { textSize: 'text-lg', weight: 'font-normal' },
    },
    {
      heading: 'Label',
      family: 'Poppins(400)',
      size: '14px',
      lineHeight: '24px',
      sampleText: 'The quick brown fox jumps over the lazy dog',
      style: { textSize: 'text-base', weight: 'font-normal' },
    },
  ],
};

function TypographyOverviewSectionContentCard({
  children,
  className,
  content,
  ...props
}) {
  return (
    <div className="flex-1 flex-row w-full text-lg text-slate-600 font-semibold pb-8">
      <div className="py-2 text-sm font-semibold">{content.heading}</div>
      <div className="flex flex-column h-auto text-sm text-slate-600 font-normal">
        <div className="w-1/6 text-xs font-medium">
          <div>Family</div>
          <div>{content.family}</div>
        </div>
        <div className="w-1/6 text-xs font-medium">
          <div>Size</div>
          <div>{content.size}</div>
        </div>
        <div className="w-1/6 text-xs font-medium">
          <div>Line height</div>
          <div>{content.lineHeight}</div>
        </div>

        <div
          className={`w-1/2 text-black ${content.style.textSize} ${content.style.weight}`}
        >
          {content.sampleText}
        </div>
      </div>
      <div className="bg-gray-400 w-100 h-px m-8"></div>
    </div>
  );
}

function TypographyOverviewSection({ children, className, ...props }) {
  return (
    <>
      <H3 className="flex w-full pb-8 pt-8">Header</H3>
      {typographyOverviewContent.header.map((content, index) => (
        <TypographyOverviewSectionContentCard key={index} content={content} />
      ))}
      <H3 className="flex w-full pb-8 pt-8">Body</H3>
      {typographyOverviewContent.body.map((content, index) => (
        <TypographyOverviewSectionContentCard key={index} content={content} />
      ))}
    </>
  );
}

function TypographyAccessibilitySection({ children, className, ...props }) {
  return (
    <>
      <H3 className="flex w-full pb-8 pt-8">Accessibility</H3>
      <div className="text-base">
        Our standard font sizes ensure readability by using 16px for body text,
        promoting optimal legibility for a diverse audience. Additionally, we
        maintain a minimum font size of 14px to ensure that even the smallest
        text remains comfortably readable.
      </div>
      <div className="flex flex-column w-auto py-8">
        <div className="w-screen">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-max h-max border-12 rounded-s-sm border-teal-200"
            src="/images/typography-accessibility.jpg"
            alt="Correct thing to do"
          />
          <div className="text-sm my-4">Use 16px for body text</div>
        </div>
        <div className="mx-4"></div>
        <div className="w-screen">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="w-max h-max border-12 rounded-s-sm border-rose-200"
            src="/images/typography-accessibility.jpg"
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

export function Typography({ children, className, ...props }) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">FOUNDATIONS</p>
      <H2>Typography</H2>
      <SubHeading>
        Introduce hierarchy and communicate clearly with our single font,
        Poppins.
      </SubHeading>
      <div className="py-5" />
      <Flowbite style={tabItemTheme}>
        <Tabs aria-label="Tabs with underline">
          <Tabs.Item active={tabs[0].current} title={tabs[0].title}>
            <TypographyOverviewSection />
          </Tabs.Item>
          <Tabs.Item active={tabs[1].current} title={tabs[1].title}>
            <TypographyAccessibilitySection />
          </Tabs.Item>
        </Tabs>
      </Flowbite>
    </div>
  );
}
export default Typography;
