import { theme } from "@chakra-ui/core";

export default {
    ...theme,
    colors: {
        ...theme.colors,
        transparent: "transparent",
        primary: {
            500: "#F32222"
        },
        secondary: {
            500: "#EFB617"
        },
        dark:{
            500: "#051133",
            400: "#2B3244"
        },
        light:{
            500: "#FAFAFC",
            400: "#F3F3F8"
        }
        
    },
  };