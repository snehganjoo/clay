import Link from 'next/link';

export function Colors(props) {
  return (
    <Link
      href={'/docs/foundations/colors'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Colors</div>
        <p className="text-gray-700 text-base">
          {`Bring designs to life with Formbricks' brand colors.`}
        </p>
      </div>
    </Link>
  );
}
export default Colors;
