import Link from 'next/link';

export function Footer(props) {
  return (
    <Link
      href={'/docs/components/footer'}
      className="max-w-sm rounded flex-wrap py- 8 px- 6 overflow-hidden shadow-l bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/footer.png"
        alt="Primary Footer"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Footer</div>
        <p className="text-gray-700 text-base">
          Footer is an area that provides information related to the brand and
          its website.
        </p>
      </div>
      <div className="px-5 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </Link>
  );
}
export default Footer;
