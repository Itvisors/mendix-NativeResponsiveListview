import { ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

export interface CustomStyle extends Style {
    container: ViewStyle;
    itemContainer: ViewStyle;
}

export const defaultStyle: CustomStyle = {
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    itemContainer: {}
};

export const defaultVerticalStyle: CustomStyle = {
    container: {
        flexDirection: "column"
    },
    itemContainer: {}
};
