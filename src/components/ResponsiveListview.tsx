import { ReactElement, createElement } from "react";
import { View } from "react-native";
import { ListWidgetValue, ObjectItem } from "mendix";
import { CustomStyle, defaultStyle, defaultVerticalStyle } from "../ui/styles";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

export interface ResponsiveListviewProps {
    dsItems: ObjectItem[];
    content: ListWidgetValue;
    style: CustomStyle[];
    showVertically: boolean;
}

export function ResponsiveListview(props: ResponsiveListviewProps): ReactElement {
    const { dsItems, content, showVertically } = props;
    let styles: CustomStyle;
    if (showVertically) {
        styles = mergeNativeStyles(defaultVerticalStyle, props.style);
    } else {
        styles = mergeNativeStyles(defaultStyle, props.style);
    }
    return (
        <View style={styles.container}>
            {dsItems.map(item => (
                <View key={item.id}>{content.get(item)}</View>
            ))}
        </View>
    );
}
