import { createElement, ReactElement } from "react";
import { NativeResponsiveListviewProps } from "../typings/NativeResponsiveListviewProps";
import { ResponsiveListview } from "./components/ResponsiveListview";
import { CustomStyle } from "./ui/styles";

export function NativeResponsiveListview(props: NativeResponsiveListviewProps<CustomStyle>): ReactElement | null {
    const { ds, showVertically } = props;
    if (!ds || !ds.items) {
        return null;
    }
    return (
        <ResponsiveListview
            dsItems={ds.items}
            content={props.content}
            style={props.style}
            showVertically={!!showVertically?.value}
        />
    );
}
