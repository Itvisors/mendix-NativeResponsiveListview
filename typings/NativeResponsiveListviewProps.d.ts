/**
 * This file was generated from NativeResponsiveListview.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType } from "react";
import { DynamicValue, ListValue, ListWidgetValue } from "mendix";

export interface NativeResponsiveListviewProps<Style> {
    name: string;
    style: Style[];
    ds: ListValue;
    content: ListWidgetValue;
    showVertically?: DynamicValue<boolean>;
}

export interface NativeResponsiveListviewPreviewProps {
    class: string;
    style: string;
    ds: {} | null;
    content: { widgetCount: number; renderer: ComponentType };
    showVertically: string;
}
