'use client';
import Header from 'components/header/Header';
import BottomRightHue from 'components/background/bottom-right-hue/BottomRightHue';
import TopLeftHue from 'components/background/top-left-hue/TopLeftHue';

export function Footer(props) {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopLeftHue />
        <BottomRightHue />
      </div>
    </div>
  );
}
export default Footer;
