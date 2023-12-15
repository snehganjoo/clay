import Link from 'next/link';

export function DropdownMenu(props) {
  return (
    <Link
      href={'/docs/components/dropdown-menu'}
      className="max-w-sm rounded flex-wrap py- 8 px- 6 overflow-hidden shadow-lg bg-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/dropdown.png"
        alt="Primary Dropdown"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Dropdown Menu</div>
        <p className="text-gray-700 text-base">
          Dropdown menu is used as selectors and come in 2 variants
        </p>
      </div>
      <div className="px-5 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Simple
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Large
        </span>
      </div>
    </Link>
  );
}
export default DropdownMenu;
