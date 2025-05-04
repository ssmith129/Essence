// STYLED COMPONENTS
import { Dot, DotList } from '../styles';

// ==============================================================

// ==============================================================

export default function CarouselDots({
  dotColor,
  sx
}) {
  return {
    customPaging: () => <Dot dotColor={dotColor} />,
    appendDots: dots => <DotList sx={sx}>{dots}</DotList>
  };
}