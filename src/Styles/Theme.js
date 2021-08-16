const breakpoint = {
  tablet: 1200,
  mobile: 768,
};

const device = {
  tablet: `(max-width: ${breakpoint.tablet}px)`,
  mobile: `(max-width: ${breakpoint.mobile}px)`,
};

const color = {
  white: "#fff",
  black: "#0b0b0b",
  blueGrey: "#65737e",
  blueGreyDark: "#3d464d",
  grey: "#aeb0b4",
  deepGrey: "#4a4a4a",
  lightGrey: "#ccc",
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
