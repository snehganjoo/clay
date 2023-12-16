'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import H3 from 'components/ds/typography/headings/h3/h3';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';
import Link from 'next/link';

function GettingStartedSection({ children, className, ...props }) {
  return (
    <>
      <H3 className="flex w-full py-2 mt-16">A Layered Approach</H3>
      <div>
        <p className="my-4">{`Clay is built on two primary layers: Foundations and Components.`}</p>
        <p className="my-4">
          {`Foundation represent the core UI styles that ensures consistent
          branding by covering typography, colors, grids, and more. If you are
          familiar with Atomic design, Clay's foundations can be viewed as
          atoms.`}
        </p>
        <p className="my-8">
          {`Components are reusable UI elements that establish interaction
              patterns for a design. If you are familiar with Atomic design,
              Clay's components can be viewed as molecules and organisms.`}
        </p>
      </div>
      <div className="grid gap-3 grid-cols-3 grid-rows-1">
        <Link
          href={'/docs/foundations/'}
          className="max-w-sm rounded-lg flex-wra overflow-hidden shadow-lg border-b-2 border-gray-400"
        >
          <div className="bg-teal-400 w-full h-32"></div>
          <div className="bg-white px-4 py-6">
            <div className="font-semibold text-base mb-2 text-gray-600">
              Foundation
            </div>
            <p className="text-gray-700 text-sm">
              Core UI elements like typography, colors, and grid.
            </p>
          </div>
        </Link>
        <Link
          href={'/docs/components/'}
          className="max-w-sm rounded-lg flex-wra overflow-hidden shadow-lg border-b-2 border-gray-400"
        >
          <div className="bg-teal-400 w-full h-32"></div>
          <div className="bg-white px-4 py-6">
            <div className="font-semibold text-base mb-2 text-gray-600">
              Components
            </div>
            <p className="text-gray-700 text-sm">
              Reusable UI elements that establish interaction patterns for a
              design.
            </p>
          </div>
        </Link>
        <Link
          href={
            'https://www.figma.com/file/Zylm1rlt2gcebteycfSkDf/UI-Kit?type=design&node-id=0%3A1&mode=design&t=8iGfKuJbMvK4a8JI-1'
          }
          className="max-w-sm rounded-lg flex-wra overflow-hidden shadow-lg border-b-2 border-gray-700"
        >
          <div className="bg-teal-400 w-full h-32"></div>
          <div className="bg-white px-4 py-6">
            <div className="font-semibold text-base mb-2 text-gray-600">
              UI Kit
            </div>
            <p className="text-gray-700 text-sm">
              Figma UI Kit to incorporate Clay into your porject.
            </p>
          </div>
        </Link>
      </div>
      <H3 className="flex w-full py-2 mt-16">Cementing Best Practices</H3>
      <div>
        <p className="my-4">
          {`Clay was developed according to a set of principles to provide
          usage guidance and ensure that Clay grows in a consistent direction
          over time.`}
        </p>
      </div>
      <div className="grid gap-3 grid-cols-3 grid-rows-1">
        <Link
          href={'/docs/overview/'}
          className="max-w-sm rounded-lg flex-wra overflow-hidden shadow-lg border-b-2 border-gray-400"
        >
          <div className="bg-teal-400 w-full h-32"></div>
          <div className="bg-white px-4 py-6">
            <div className="font-semibold text-base mb-2 text-gray-600">
              Principles
            </div>
            <p className="text-gray-700 text-sm">Pillars that define Clay</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export function GettingStarted(props) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">OVERVIEW</p>
      <H2>Get Started</H2>
      <SubHeading>
        {`Learn more about what Clay represents and how you can use it.`}
      </SubHeading>
      <GettingStartedSection />
      <div className="py-5" />
    </div>
  );
}
export default GettingStarted;
