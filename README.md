## NativeResponsiveListview

## Features
- Renders the items horizontally or vertically, without scrolling
- Items will flow into multiple lines where necessary
- Configure additional content items (for horizontal lists only)
- Widget does not add any padding or margin
- No events, if you need onClick, just use a container as widget content
- No scroll container, place widget in scroll container where necessary
- Not suitable for really large number of items as all items are rendered directly. No lazy loading!

Originally, this widget was intended to show items horizontally only. The vertical option was added because React Native does not approve of nested scrollable items. A listview is scrollable by design. Nesting listviews or nesting a listview in a scrollable view leads to scrolling issues. These are signalled as warnings when running the Make It Native app in developer mode. Quite often, these nested lists have small number of items, so there is no need to make these nested lists scrollable themselves. This widget can be used in these situations as well because it has no scroll container.

When items are shown horizontally, additional content items can be defined. Use it to create several rows, making sure the content in each row aligns across all items. **Note that this only works properly when all items fit on one line!** If items are wrapped to the next line, each content will be wrapped separately.

## Styling

These styling objects can be used to style the widget:
- `container`: Placed on the container around the entire list. Default depends on the value for the `Show vertically` property
- `itemContainer`: Placed on each list item, the default has no styling
- `multipleContentContainer`: used when shown horizontally and multiple content items are configured
