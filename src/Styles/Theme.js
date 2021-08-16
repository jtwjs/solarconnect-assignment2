const breakpoint = {
  tablet: 1200,
  mobile: 768,
};

const device = {
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  mobile: `(max-width: ${breakpoint.mobile}px)`,
};

const color = {
  primary: "#87bf44",
  primaryAlpha: "rgba(165, 210, 95, 0.1)",
  secondary: "#0085fd",
  secondaryAlpha: "rgba(0, 133, 253, 0.1)",
  white: "#fff",
  black: "#0b0b0b",
  blueGrey: "#65737e",
  blueGreyAlpha: "rgba(101, 115, 126, 0.1)",
  grey: "#aeb0b4",
  deepGrey: "#4a4a4a",
  lightGreyA: "#ccc",
  lightGreyB: "#e5e5e5",
  lightGreyC: "#f1f1f3",
  pink: "#dd346c",
  lightGreen: "#aac14f",
  // solar
  border: '#E0E2E7',
  background: "#F7F8FA",
};

const layout = {
  lg_max_container: "1140px",
  md_max_container: "960px",
  md_margin: "30px",
  sm_margin: "10px",
}

export const theme = {
  device,
  color,
  layout
};
