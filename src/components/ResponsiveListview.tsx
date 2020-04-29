import { Component, ReactNode, createElement } from "react";
import { View } from "react-native";
import { ListValue, ObjectItem } from "mendix";

import { CustomStyle } from "../NativeResponsiveListview";
import { flattenStyles } from "../utils/common";

export interface ResponsiveListviewProps {
    ds: ListValue;
    content: (item: ObjectItem) => ReactNode;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    container: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
};

export class ResponsiveListview extends Component<ResponsiveListviewProps> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        const { ds, content } = this.props;
        if (!ds || !ds.items) {
            return null;
        }
        return (
            <View style={this.styles.container}>
                {ds.items.map((item) => <View key={item.id}>{content(item)}</View>)}
            </View>
        );
    }
}
