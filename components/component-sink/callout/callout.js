export function Callout(props) {
  return (
    <div
      href="Button.html"
      className="max-w-sm rounded flex-wrap py-8 px- 6 overflow-hidden shadow-lg"
    >
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="aspect-auto flex justify-center px-6 py-6"
        src="/images/callout.png"
        alt="Primary Callout"
      />
      <div className="px-4 py-6">
        <div className="font-bold text-xl mb-2">Callouts</div>
        <p className="text-gray-700 text-base">
          Callouts are used to convey important messages to the user. They come
          in 4 variants
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
    </div>
  );
}
export default Callout;
