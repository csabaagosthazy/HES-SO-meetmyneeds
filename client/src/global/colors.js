const grey_color = { background: "rgb(217, 217, 217)", foreground: "#000" };

export const COLORS = {
  red: {
    essential: { background: "rgb(163, 31, 57)", foreground: "#fff" },
    important: { background: "rgb(217, 55, 86)", foreground: "#fff" },
    less_important: { background: "rgb(243, 221, 224)", foreground: "#000" },
    not_important: { background: "rgb(255, 255, 255)", foreground: "#000" },
    already_filled: grey_color,
    not_concerned: grey_color,
  },
  yellow: {
    essential: { background: "rgb(205, 156, 17)", foreground: "#fff" },
    important: { background: "rgb(237, 185, 37)", foreground: "#fff" },
    less_important: { background: "rgb(247, 224, 159)", foreground: "#000" },
    not_important: { background: "rgb(255, 255, 255)", foreground: "#000" },
    already_filled: grey_color,
    not_concerned: grey_color,
  },
  green: {
    essential: { background: "rgb(72, 162, 141)", foreground: "#fff" },
    important: { background: "rgb(77, 173, 150)", foreground: "#fff" },
    less_important: { background: "rgb(205, 233, 226)", foreground: "#000" },
    not_important: { background: "rgb(255, 255, 255)", foreground: "#000" },
    already_filled: grey_color,
    not_concerned: grey_color,
  },
  blue: {
    essential: { background: "rgb(14, 163, 216)", foreground: "#fff" },
    important: { background: "rgb(83, 203, 244)", foreground: "#fff" },
    less_important: { background: "rgb(204, 239, 252)", foreground: "#000" },
    not_important: { background: "rgb(255, 255, 255)", foreground: "#000" },
    already_filled: grey_color,
    not_concerned: grey_color,
  },
  grey: grey_color,
};
