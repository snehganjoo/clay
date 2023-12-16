'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';

const principlesContent = [
  {
    value: '4px',
    variable: 'base-05x',
  },
  {
    value: '8px',
    variable: 'base-5x',
  },
  {
    value: '16px',
    variable: 'base-2x',
  },
  {
    value: '24px',
    variable: 'base-3x',
  },
  {
    value: '32px',
    variable: 'base-4x',
  },
  {
    value: '40px',
    variable: 'base-5x',
  },
  {
    value: '48px',
    variable: 'base-6x',
  },
  {
    value: '56px',
    variable: 'base-7x',
  },
  {
    value: '64px',
    variable: 'base-8x',
  },
  {
    value: '72px',
    variable: 'base-9x',
  },
  {
    value: '80px',
    variable: 'base-10x',
  },
  {
    value: '96px',
    variable: 'base-11x',
  },
  {
    value: '128px',
    variable: 'base-12x',
  },
];

function SpacingBaseUnitSection({ children, className, ...props }) {
  return (
    <>
      <div>
        Spacing is part of the design tokens created for Clay. Design tokens are
        pre-defined sub-atomic units in the design that can be reused on
        multiple occasions.
      </div>
      <div className="my-2">
        The spacing in Clay between different elements follows a multiple of 8
        rule. All spacing is in pixels with the base unit being 8px.
      </div>
      <div>
        Both vertical and horizontal spacing follow the same multiple rule of
        8px. The image shows an example of recommended spacing between icon and
        text.
      </div>
      <div className="flex flex-row w-fill bg-gray-200 py-px mt-8 mr-16">
        <div className="w-32 flex flex-col flex-wrap overflow-hidden text-left bg-white">
          <div className="h-fit my-auto font-bold">{`Spacing Value`}</div>
        </div>
        <div className="w-8 bg-white" />
        <div className=" h-auto flex grow flex-col flex-wrap p-2 bg-white font-bold">
          {`Saas Variable`}
        </div>
      </div>
      {principlesContent.map((content, index) => (
        <div key={index} className="">
          <div className="flex flex-row w-fill bg-gray-200 pb-px mr-16">
            <div className="w-32 flex flex-col flex-wrap overflow-hidden text-left bg-white">
              <div className="h-fit my-auto">{content.value}</div>
            </div>
            <div className="w-8 bg-white" />
            <div className="h-auto flex grow flex-col flex-wrap p-2 bg-white font-mono">
              <div>{content.variable}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function Spacing(props) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">FOUNDATIONS</p>
      <H2>Spacing</H2>
      <SubHeading>
        {`Clay is built around an 8px grid applied to Desktop, Mobile, and Tablet screens.`}
      </SubHeading>
      <div className="py-5" />
      <SpacingBaseUnitSection />
    </div>
  );
}
export default Spacing;
