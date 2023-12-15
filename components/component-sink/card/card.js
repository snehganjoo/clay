import Link from 'next/link';

export function Card(props) {
  return (
    <Link
      href={'/docs/components/card'}
      className="max-w-sm rounded flex-wrap py- 8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/card.png"
        alt="Primary Card"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Card</div>
        <p className="text-gray-700 text-base">
          Card is used for grouped actions with a similar purpose. A card has 5
          variants
        </p>
      </div>
      <div className="px-5 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Single CTA
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Twin CTA
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Tagged
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Simple
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Custom
        </span>
      </div>
    </Link>
  );
}
export default Card;
