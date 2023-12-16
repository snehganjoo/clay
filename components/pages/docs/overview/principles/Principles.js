'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';

const principlesContent = [
  {
    title: 'Clarity',
    description:
      'Communicate the usability of a product with a clear visual and interactive narrative that focuses on showing over telling.',
    imageIcon: 'Boom boom',
    imageTitle: 'clarity',
  },
  {
    title: 'Inclusivity',
    description:
      'Consider the perspectives and challenges of current and potential users to include all audiences and expand the platforms reach.',
    imageIcon: 'Boom boom',
    imageTitle: 'inclusivity',
  },
  {
    title: 'Simplicity',
    description:
      'Provide a set of tools that packages complex ideas into simple components that users from all experience levels can leverage.',
    imageIcon: 'Boom boom',
    imageTitle: 'simplicity',
  },
];

function PrinciplesSection({ children, className, ...props }) {
  return (
    <>
      {principlesContent.map((content, index) => (
        <div key={index} className="my-16">
          <div className="flex flex-row w-3/5">
            <div className="w-1/4 flex flex-col flex-wrap overflow-hidden">
              <div className="w-32 h-32 bg-teal-400 rounded-lg border-b-2 border-gray-400 mb-1"></div>
              <div className="text-xs font-medium">{content.imageTitle}</div>
            </div>
            <div className="w-1/8"></div>
            <div className="w-3/5 h-auto flex grow flex-col flex-wrap p-4">
              <div className="mb-4 font-bold text-black">{content.title}</div>
              <div className="h-auto grow">{content.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function Principles(props) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">OVERVIEW</p>
      <H2>Principles</H2>
      <SubHeading>
        {`Clay is based on the following set of principles to guide usage as well as future growth of the design system.`}
      </SubHeading>
      <PrinciplesSection />
      <div className="py-5" />
    </div>
  );
}
export default Principles;
