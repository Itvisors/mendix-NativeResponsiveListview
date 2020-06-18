/**
 * This file was generated from NativeResponsiveListview.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, ReactNode } from "react";
import { DynamicValue, ListValue, ObjectItem } from "mendix";

export interface NativeResponsiveListviewProps<Style> {
    name: string;
    style: Style[];
    ds: ListValue;
    content: (item: ObjectItem) => ReactNode;
    showVertically?: DynamicValue<boolean>;
}

export interface NativeResponsiveListviewPreviewProps {
    class: string;
    style: string;
    ds: {} | null;
    content: { widgetCount: number; renderer: ComponentType };
    showVertically: string;
}
