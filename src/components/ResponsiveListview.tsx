import { Component, ReactNode, createElement } from "react";
import { View } from "react-native";
import { ListValue, ObjectItem } from "mendix";

import { CustomStyle } from "../NativeResponsiveListview";
import { flattenStyles } from "../utils/common";

export interface ResponsiveListviewProps {
    ds: ListValue;
    content: (item: ObjectItem) => ReactNode;
    style: CustomStyle[];
    showVertically: boolean;
}

const defaultStyle: CustomStyle = {
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
};

const defaultVerticalStyle: CustomStyle = {
    container: {
        flexDirection: "column"
    }
};

export class ResponsiveListview extends Component<ResponsiveListviewProps> {

    render(): ReactNode {
        const { ds, content, showVertically } = this.props;
        let styles: CustomStyle;
        if (showVertically) {
            styles = flattenStyles(defaultVerticalStyle, this.props.style);
        } else {
            styles = flattenStyles(defaultStyle, this.props.style);
        }
        if (!ds || !ds.items) {
            return null;
        }
        return (
            <View style={styles.container}>
                {ds.items.map((item) => <View key={item.id}>{content(item)}</View>)}
            </View>
        );
    }
}
