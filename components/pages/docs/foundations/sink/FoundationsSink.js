import HueBottomRight from 'components/ds/background/hue-bottom-right/HueBottomRight';
import HueTopLeft from 'components/ds/background/hue-top-left/HueTopLeft';

import Typography from './typography/typography';
import Spacing from './spacing/spacing';
import Colors from './colors/colors';
import Images from './images/images';

export function FoundationsSink(props) {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <HueTopLeft />
      <div className="grid gap-3 grid-cols-2 grid-rows-2 py-20 px-16">
        <Typography />
        <Colors />
        <Images />
        <Spacing />
      </div>
      <HueBottomRight />
    </div>
  );
}
export default FoundationsSink;
