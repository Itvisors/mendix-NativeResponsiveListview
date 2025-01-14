import { ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

export interface CustomStyle extends Style {
    multipleContentContainer: ViewStyle;
    container: ViewStyle;
    itemContainer: ViewStyle;
}

export const defaultStyle: CustomStyle = {
    multipleContentContainer: {
        flexDirection: "column"
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    itemContainer: {}
};

export const defaultVerticalStyle: CustomStyle = {
    multipleContentContainer: {},
    container: {
        flexDirection: "column"
    },
    itemContainer: {}
};
