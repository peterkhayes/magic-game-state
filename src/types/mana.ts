import colorlessMana from "../images/colorless.svg";
import whiteMana from "../images/white.svg";
import blueMana from "../images/blue.svg";
import blackMana from "../images/black.svg";
import redMana from "../images/red.svg";
import greenMana from "../images/green.svg";

export enum Color {
  Colorless = "Colorless",
  White = "White",
  Blue = "Blue",
  Black = "Black",
  Red = "Red",
  Green = "Green",
}

export const COLORS = Object.keys(Color) as Array<Color>;

export const MANA_BACKGROUND_COLORS: Record<Color, string> = {
  [Color.Colorless]: "rgb(155,122,103)",
  [Color.White]: "rgb(248,231,185)",
  [Color.Blue]: "rgb(179,206,234)",
  [Color.Black]: "rgb(166,159,157)",
  [Color.Red]: "rgb(235,159,130)",
  [Color.Green]: "rgb(166,211,182)",
};

export const MANA_ICONS = {
  [Color.Colorless]: colorlessMana,
  [Color.White]: whiteMana,
  [Color.Blue]: blueMana,
  [Color.Black]: blackMana,
  [Color.Red]: redMana,
  [Color.Green]: greenMana,
};
