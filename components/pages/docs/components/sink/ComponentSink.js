import HueBottomRight from 'components/ds/background/hue-bottom-right/HueBottomRight';
import HueTopLeft from 'components/ds/background/hue-top-left/HueTopLeft';

import Button from './button/button';
import Callout from './callout/callout';
import Card from './card/card';
import DropdownMenu from './dropdown-menu/dropdown-menu';
import Input from './input/input';
import Footer from './footer/footer';

export function ComponentSink(props) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <HueTopLeft />
      <div className="grid gap-3 grid-cols-3 grid-rows-2 py-20 px-16">
        <Button />
        <Callout />
        <Card />
        <DropdownMenu />
        <Input />
        <Footer />
      </div>
      <HueBottomRight />
    </div>
  );
}
export default ComponentSink;
