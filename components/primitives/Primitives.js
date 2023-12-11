import Header from 'components/header/Header';
import BottomRightHue from 'components/background/bottom-right-hue/BottomRightHue';
import TopLeftHue from 'components/background/top-left-hue/TopLeftHue';
import Button from './button/button';
import Callout from './callout/callout';
import Card from './card/card';
import Dropdown from './dropdown/dropdown';
import Input from './input/input';
import Footer from './footer/footer';

export function Primitives(props) {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <TopLeftHue />
        <div class="grid gap-3 grid-cols-3 grid-rows-2 py-20 px-16">
          <Button />
          <Callout />
          <Card />
          <Dropdown />
          <Input />
          <Footer />
        </div>
        <BottomRightHue />
      </div>
    </div>
  );
}
export default Primitives;
