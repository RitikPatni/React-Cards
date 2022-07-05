import { ColourOptions } from "./Card";
import "../styles/components/color-palette.scss";

type ColorPaletteProps = {
  onClick: (color: ColourOptions) => void;
};
const ColorPalette = ({ onClick }: ColorPaletteProps) => {
  const colorOptions: ColourOptions[] = [
    "#12192D",
    "#E32F4C",
    "#F45631",
    "#F69D1B",
    "#F1C849",
    "#1FCD8E",
    "#9A50DF",
  ];
  return (
    <article className="color-palette">
      {colorOptions.map((color) => (
        // NOTE: Naming can be enhanced for accessibility
        <button
          className="color-palette__button"
          key={color}
          style={{ backgroundColor: color }}
          title="Choose a Color"
          aria-label="Choose a Color"
          onClick={() => onClick(color)}
        ></button>
      ))}
    </article>
  );
};

export default ColorPalette;
