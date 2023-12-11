export function Dropdown(props) {
  return (
    <div class="max-w-sm rounded flex-wrap py- 8 px- 6 overflow-hidden shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        class="aspect-auto flex justify-center px-6 py-6"
        src="images/dropdown.png"
        alt="Primary Dropdown"
      />
      <div class="px-4 py-6">
        <div class="font-bold text-xl mb-2">Dropdown Menus</div>
        <p class="text-gray-700 text-base">
          Dropdown menus are used as selectors and come in 2 variants
        </p>
      </div>
      <div class="px-5 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Simple
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Large
        </span>
      </div>
    </div>
  );
}
export default Dropdown;
