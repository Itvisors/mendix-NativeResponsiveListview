import { ReactElement, ReactNode, createElement } from "react";
import { View } from "react-native";
import { ListWidgetValue, ObjectItem } from "mendix";
import { CustomStyle, defaultStyle, defaultVerticalStyle } from "../ui/styles";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

export interface ResponsiveListviewProps {
    dsItems: ObjectItem[];
    content: ListWidgetValue;
    style: CustomStyle[];
    showVertically: boolean;
    widgetName: string;
}

export function ResponsiveListview(props: ResponsiveListviewProps): ReactElement {
    const { dsItems, content, showVertically, widgetName } = props;
    let styles: CustomStyle;
    if (showVertically) {
        styles = mergeNativeStyles(defaultVerticalStyle, props.style);
    } else {
        styles = mergeNativeStyles(defaultStyle, props.style);
    }
    return (
        <View style={styles.container} testID={widgetName}>
            {dsItems.map((item, index) => (
                <View key={item.id} testID={`${widgetName}$listviewItem${index}`}>
                    {content.get(item) as ReactNode}
                </View>
            ))}
        </View>
    );
}
