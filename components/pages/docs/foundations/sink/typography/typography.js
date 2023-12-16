import Link from 'next/link';

export function Typography(props) {
  return (
    <Link
      href={'/docs/foundations/typography'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Typography</div>
        <p className="text-gray-700 text-base">
          Introduce hierarchy and communicate clearly with our single font,
          Poppins.
        </p>
      </div>
    </Link>
  );
}
export default Typography;
