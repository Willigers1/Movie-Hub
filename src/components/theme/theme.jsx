import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const style = {};

const theme = extendTheme({ config, style });

export default theme;
