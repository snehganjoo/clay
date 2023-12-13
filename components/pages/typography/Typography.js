import H2 from '../../ds/typography/headings/h2/h2';
import H3 from 'components/ds/typography/headings/h3/h3';
import SubHeading from '../../ds/typography/headings/sub-heading/sub-heading';
import Tab from '../../ds/tab/Tab';

const tabs = [
  { name: 'Overview', href: '#overview', current: true },
  { name: 'Accessibility', href: '#accessibility', current: false },
];

const typographyOverviewHeaderContent = [
  {
    contnet: 'Title',
    family: 'Poppins(700)',
    size: '48px',
    lineHeight: '56px',
    sampleText: 'The quick brown fox jumps over the lazy dog',
    style: { textSize: 'text-6xl', weight: 'font-bold' },
  },
  {
    contnet: 'Subheader L',
    family: 'Poppins(700)',
    size: '40px',
    lineHeight: '48px',
    sampleText: 'Pack my red box with five dozen quality jugs',
    style: { textSize: 'text-5xl', weight: 'font-bold' },
  },
  {
    contnet: 'Subheader M',
    family: 'Poppins(700)',
    size: '24px',
    lineHeight: '40px',
    sampleText: 'Fix problem quickly with galvanized jets',
    style: { textSize: 'text-4xl', weight: 'font-bold' },
  },
  {
    contnet: 'Subheader S',
    family: 'Poppins(700)',
    size: '20px',
    lineHeight: '32px',
    sampleText: 'The five boxing wizards jump quickly',
    style: { textSize: 'text-3xl', weight: 'font-bold' },
  },
];

const typographyOverviewBodyContent = [
  {
    contnet: 'Body XL',
    family: 'Poppins(400)',
    size: '20px',
    lineHeight: '32px',
    sampleText: 'Grumpy wizards make a toxic brew for the jovial queen',
    style: { textSize: 'text-2xl', weight: 'font-normal' },
  },
  {
    contnet: 'Body L',
    family: 'Poppins(400)',
    size: '18px',
    lineHeight: '28px',
    sampleText: 'Grumpy wizards make a toxic brew for the jovial queen',
    style: { textSize: 'text-xl', weight: 'font-normal' },
  },
  {
    contnet: 'Body',
    family: 'Poppins(400)',
    size: '16px',
    lineHeight: '24px',
    sampleText: 'The five boxing wizards jump quickly',
    style: { textSize: 'text-lg', weight: 'font-normal' },
  },
  {
    contnet: 'Label',
    family: 'Poppins(400)',
    size: '14px',
    lineHeight: '24px',
    sampleText: 'The quick brown fox jumps over the lazy dog',
    style: { textSize: 'text-base', weight: 'font-normal' },
  },
];

function TypographyOverviewContentCard({
  children,
  className,
  content,
  ...props
}) {
  return (
    <div className="border-b border-gray-200">
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
      </div>
    </div>
  );
}

function TypographyOverviewSection({ children, className, ...props }) {
  return (
    <>
      <H3 className="flex w-full pb-8 pt-8">Header</H3>
      {typographyOverviewHeaderContent.map((content, index) => (
        <TypographyOverviewContentCard key={index} content={content} />
      ))}
      <H3 className="flex w-full pb-8 pt-8">Body</H3>
      {typographyOverviewBodyContent.map((content, index) => (
        <TypographyOverviewContentCard key={index} content={content} />
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
      <div className="flex flex-column ">
        <div className="w-1/2 ">
          <img className="w-full" src="" alt="" />
        </div>
        <div className="w-1/2 ">
          <img className="w-full" src="/images/" alt="" />
        </div>
      </div>
    </>
  );
}

export function Typography({ children, className, ...props }) {
  return (
    <div className="">
      <p className="text-sm text-slate-600">FOUNDATTIONS</p>
      <H2>Typography</H2>
      <SubHeading>
        Introduce hierarchy and communicate clearly with our single font,
        Poppins.
      </SubHeading>
      <div className="py-5" />
      <Tab tabs={tabs} />
      <TypographyOverviewSection content={props.content} />
      <TypographyAccessibilitySection />
    </div>
  );
}
export default Typography;
