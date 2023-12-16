import Link from 'next/link';

export function Spacing(props) {
  return (
    <Link
      href={'/docs/foundations/spacing'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Spacing</div>
        <p className="text-gray-700 text-base">
          Clay is built around an 8px grid applied to Desktop, Mobile, and
          Tablet screens.
        </p>
      </div>
    </Link>
  );
}
export default Spacing;
