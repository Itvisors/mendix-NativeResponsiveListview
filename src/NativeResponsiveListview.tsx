import { Component, ReactNode, createElement } from "react";
import { ViewStyle } from "react-native";
import { NativeResponsiveListviewProps } from "../typings/NativeResponsiveListviewProps";
import { Style } from "./utils/common";
import { ResponsiveListview } from "./components/ResponsiveListview";

export interface CustomStyle extends Style {
    container: ViewStyle;
}

export class NativeResponsiveListview extends Component<NativeResponsiveListviewProps<CustomStyle>> {
    render(): ReactNode {
        const { ds, content, style } = this.props;
        if (!ds || !ds.items) {
            return null;
        }
        let showVertically = false;
        if (this.props.showVertically && this.props.showVertically.value) {
            showVertically = true;
        }
        return <ResponsiveListview ds={ds} content={content} style={style} showVertically={showVertically} />;
    }
}
