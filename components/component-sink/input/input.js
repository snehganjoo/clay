import Link from 'next/link';

export function Input(props) {
  return (
    <Link
      href={'/docs/components/input'}
      className="max-w-sm rounded flex-wrap py- 8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/input.png"
        alt="Primary Input"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Input</div>
        <p className="text-gray-700 text-base">
          Inputs are a set of elements that allow users to enter their own
          information or pick from options.
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
export default Input;
