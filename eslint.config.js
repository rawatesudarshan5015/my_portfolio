import next from "eslint-config-next";

const config = [
  ...next,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "react-hooks/set-state-in-effect": "off", // turn it off completely
    },
  },
];

export default config;
