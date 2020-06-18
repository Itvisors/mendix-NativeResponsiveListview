## NativeResponsiveListview

## Features
- Renders the items horizontally or vertically, without scrolling
- Items will flow into multiple lines where necessary.
- Widget does not add any padding or margin.
- No events, if you need onClick, just use a container as widget content
- No scroll container, place widget in scroll container where necessary
- Not suitable for really large number of items as all items are rendered directly. No lazy loading!

Originally, this widget was intended to show items horizontally only. The vertical option was added because React Native does not approve of nested scrollable items. A listview is scrollable by design. Nesting listviews or nesting a listview in a scrollable view leads to scrolling issues. These are signalled as warnings when running the Make It Native app in developer mode. Quite often, these nested lists have small number of items, so there is no need to make these nested lists scrollable themselves. This widget can be used in these situations as well because it has no scroll container.
