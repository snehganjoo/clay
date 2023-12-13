'use client';
import Header from 'components/ds/header/Header';
import HueBottomRight from 'components/ds/background/hue-bottom-right/HueBottomRight';
import HueTopLeft from 'components/ds/background/hue-top-left/HueTopLeft';

export function Callout(props) {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <HueTopLeft />
        <HueBottomRight />
      </div>
    </div>
  );
}
export default Callout;
