import Link from 'next/link';

export function Button(props) {
  return (
    <Link
      href={'/docs/components/button'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/button-primary.png"
        alt="Primary Button"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Button</div>
        <p className="text-gray-700 text-base">
          Button is used for call to actions and come in 3 variants
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Primary
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Secondary
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Destructive
        </span>
      </div>
    </Link>
  );
}
export default Button;
