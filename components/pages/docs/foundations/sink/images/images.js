import Link from 'next/link';

export function Images(props) {
  return (
    <Link
      href={'/docs/foundations/images'}
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Images</div>
        <p className="text-gray-700 text-base">
          Contextualize buttons, navigation and more with icons.
        </p>
      </div>
    </Link>
  );
}
export default Images;
