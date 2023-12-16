'use client';

import H2 from 'components/ds/typography/headings/h2/h2';
import SubHeading from 'components/ds/typography/headings/sub-heading/sub-heading';

const principlesContent = [
  {
    description: 'Large 16:9',
    width: 'w-[455px]',
  },
  {
    description: 'Medium 4:3',
    width: 'w-[341px]',
  },
  {
    description: 'Small 1:1',
    width: 'w-64',
  },
];

function ImagesSection({ children, className, ...props }) {
  return (
    <>
      {principlesContent.map((content, index) => (
        <div key={index} className="my-16 ">
          <div className="flex flex-row w-fill bg-gray-400 px-px py-px">
            <div className="w-1/4 flex flex-col flex-wrap overflow-hidden text-center bg-white">
              <div className="h-fit m-auto">{content.description}</div>
            </div>
            <div className="w-1/8 ml-px bg-white"></div>
            <div className="w-full h-auto flex grow flex-col flex-wrap p-4 bg-white">
              <div
                className={`${content.width} h-64 bg-teal-400 rounded-lg mb-1`}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export function Images(props) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">FOUNDATIONS</p>
      <H2>Images</H2>
      <SubHeading>
        {`Contextualize buttons, navigation and more with icons.`}
      </SubHeading>
      <div className="py-5" />
      <ImagesSection />
    </div>
  );
}
export default Images;
