/**
 * This file was generated from NativeResponsiveListview.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue, ListValue, ListWidgetValue } from "mendix";

export interface NativeResponsiveListviewProps<Style> {
    name: string;
    style: Style[];
    ds: ListValue;
    content: ListWidgetValue;
    showVertically?: DynamicValue<boolean>;
}

export interface NativeResponsiveListviewPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    ds: {} | { caption: string } | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    showVertically: string;
}
