import { ReactElement, ReactNode, createElement } from "react";
import { View } from "react-native";
import { ListWidgetValue, ObjectItem } from "mendix";
import { CustomStyle, defaultStyle, defaultVerticalStyle } from "../ui/styles";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { AdditionalContentListType } from "typings/NativeResponsiveListviewProps";

export interface ResponsiveListviewProps {
    dsItems: ObjectItem[];
    content: ListWidgetValue;
    additionalContentList: AdditionalContentListType[];
    style: CustomStyle[];
    showVertically: boolean;
    widgetName: string;
}

export function ResponsiveListview(props: ResponsiveListviewProps): ReactElement {
    const { dsItems, content, additionalContentList, showVertically, widgetName } = props;
    let styles: CustomStyle;
    if (showVertically) {
        styles = mergeNativeStyles(defaultVerticalStyle, props.style);
    } else {
        styles = mergeNativeStyles(defaultStyle, props.style);
    }
    // Additional content is only used when shown horizontally
    if (showVertically || additionalContentList.length === 0) {
        return (
            <View style={styles.container} testID={widgetName}>
                {dsItems.map((item, index) => (
                    <View key={item.id} style={styles.itemContainer} testID={`${widgetName}$listviewItem${index}`}>
                        {content.get(item) as ReactNode}
                    </View>
                ))}
            </View>
        );
    }
    return (
        <View style={styles.multipleContentContainer} testID={widgetName}>
            <View style={styles.container} testID={`${widgetName}$content`}>
                {dsItems.map((item, index) => (
                    <View
                        key={item.id}
                        style={styles.itemContainer}
                        testID={`${widgetName}$content$listviewItem${index}`}
                    >
                        {content.get(item) as ReactNode}
                    </View>
                ))}
            </View>
            {additionalContentList.map((additionalContentItem, additionalContentIndex) => (
                <View
                    key={`additionalContent${additionalContentIndex}`}
                    style={styles.container}
                    testID={`${widgetName}$additionalContent${additionalContentIndex}`}
                >
                    {dsItems.map((item, index) => (
                        <View
                            key={item.id}
                            style={styles.itemContainer}
                            testID={`${widgetName}$additionalContent${additionalContentIndex}$listviewItem${index}`}
                        >
                            {additionalContentItem.additionalContent.get(item) as ReactNode}
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}
