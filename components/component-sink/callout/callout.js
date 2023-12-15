import Link from 'next/link';

export function Callout(props) {
  return (
    <Link
      href={'/docs/components/callout'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/callout.png"
        alt="Primary Callout"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Callout</div>
        <p className="text-gray-700 text-base">
          Callout is used to convey important messages to the user. They come in
          4 variants
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Neutral
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Warning
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Error
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Success
        </span>
      </div>
    </Link>
  );
}
export default Callout;
