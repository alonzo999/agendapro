/*!
FullCalendar Day Grid Plugin v7.0.0-beta.1
Docs & License: https://fullcalendar.io/docs/month-view
(c) 2024 Adam Shaw
*/
FullCalendar.DayGrid = (function (exports, core, internal$1, preact) {
    'use strict';

    class DayTableSlicer extends internal$1.Slicer {
        constructor() {
            super(...arguments);
            this.forceDayIfListItem = true;
        }
        sliceRange(dateRange, dayTableModel) {
            return dayTableModel.sliceRange(dateRange);
        }
    }

    function renderInner(renderProps) {
        return renderProps.text;
    }
    function buildDayTableModel(dateProfile, dateProfileGenerator) {
        let daySeries = new internal$1.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new internal$1.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
    }
    function computeColWidth(colCnt, colMinWidth, viewportWidth) {
        if (viewportWidth == null) {
            return [undefined, undefined];
        }
        const colTempWidth = viewportWidth / colCnt;
        if (colTempWidth < colMinWidth) {
            return [colMinWidth * colCnt, colMinWidth];
        }
        return [viewportWidth, undefined];
    }
    function buildHeaderTiers(dates, datesRepDistinctDays) {
        return [
            datesRepDistinctDays
                ? dates.map((date) => ({ colSpan: 1, date }))
                : dates.map((date) => ({ colSpan: 1, dow: date.getUTCDay() }))
        ];
    }
    // Positioning
    // -------------------------------------------------------------------------------------------------
    function computeTopFromDate(date, cellRows, rowHeightMap, adjust = 0) {
        let top = 0;
        for (const cells of cellRows) {
            const start = cells[0].date;
            const end = cells[cells.length - 1].date;
            const key = start.toISOString();
            if (date >= start && date <= end) {
                return top;
            }
            const rowHeight = rowHeightMap.get(key);
            if (rowHeight == null) {
                return; // denote unknown
            }
            top += rowHeight + adjust;
        }
        return top;
    }
    function computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl) {
        let left;
        let right;
        let width;
        if (colWidth != null) {
            width = (seg.lastCol - seg.firstCol + 1) * colWidth;
            if (isRtl) {
                right = seg.firstCol * colWidth;
            }
            else {
                left = seg.firstCol * colWidth;
            }
        }
        else {
            const colWidthFrac = 1 / colCnt;
            width = internal$1.fracToCssDim((seg.lastCol - seg.firstCol + 1) * colWidthFrac);
            if (isRtl) {
                right = internal$1.fracToCssDim(seg.firstCol * colWidthFrac);
            }
            else {
                left = internal$1.fracToCssDim(seg.firstCol * colWidthFrac);
            }
        }
        return { left, right, width };
    }
    function computeColFromPosition(positionLeft, elWidth, colWidth, colCnt, isRtl) {
        const realColWidth = colWidth != null ? colWidth : elWidth / colCnt;
        const colFromLeft = Math.floor(positionLeft / realColWidth);
        const col = isRtl ? (colCnt - colFromLeft - 1) : colFromLeft;
        const left = colFromLeft * realColWidth;
        const right = left + realColWidth;
        return { col, left, right };
    }
    function computeRowFromPosition(positionTop, cellRows, rowHeightMap) {
        let row = 0;
        let top = 0;
        let bottom = 0;
        for (const cells of cellRows) {
            const key = cells[0].key;
            top = bottom;
            bottom = top + rowHeightMap.get(key);
            if (positionTop < bottom) {
                break;
            }
            row++;
        }
        return { row, top, bottom };
    }
    // Hit Element
    // -------------------------------------------------------------------------------------------------
    function getRowEl(rootEl, row) {
        return rootEl.querySelectorAll(':scope > [role=row]')[row];
    }
    function getCellEl(rowEl, col) {
        return rowEl.querySelectorAll(':scope > [role=gridcell]')[col];
    }

    class DateHeaderCell extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let { dateProfile, date, extraRenderProps, extraDataAttrs } = props;
            let { dateEnv, options, theme, viewApi } = context;
            let dayMeta = internal$1.getDateMeta(date, props.todayRange, null, dateProfile);
            let text = dateEnv.format(date, props.dayHeaderFormat);
            let navLinkAttrs = (!dayMeta.isDisabled && props.navLink)
                ? internal$1.buildNavLinkAttrs(context, date)
                : {};
            let renderProps = Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: viewApi }, extraRenderProps), { text }), dayMeta);
            return (preact.createElement(internal$1.ContentContainer, { elTag: 'div', elClasses: [
                    ...internal$1.getDayClassNames(dayMeta, theme),
                    ...(props.extraClassNames || []),
                    'fc-header-cell',
                    'fc-cell',
                    props.colWidth != null ? '' : 'fc-liquid',
                    'fc-flex-column',
                    'fc-align-center',
                ], elAttrs: Object.assign({ 'data-date': !dayMeta.isDisabled ? internal$1.formatDayString(date) : undefined }, extraDataAttrs), elStyle: {
                    width: props.colWidth != null // TODO: DRY
                        ? props.colWidth * (props.colSpan || 1)
                        : undefined,
                }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContainer) => (preact.createElement("div", { ref: this.innerElRef, className: [
                    'fc-flex-column',
                    props.isSticky ? 'fc-sticky-x' : '',
                ].join(' ') }, !dayMeta.isDisabled && (preact.createElement(InnerContainer, { elTag: "a", elAttrs: navLinkAttrs, elClasses: [
                    'fc-cell-inner',
                    'fc-padding-sm',
                ] }))))));
        }
        componentDidMount() {
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            // TODO: only attach this if refs props present
            this.disconectInnerHeight = internal$1.watchHeight(innerEl, (height) => {
                internal$1.setRef(this.props.innerHeightRef, height);
            });
        }
        componentWillUnmount() {
            this.disconectInnerHeight();
            internal$1.setRef(this.props.innerHeightRef, null);
        }
    }

    function splitSegsByRow(segs, rowCnt) {
        const byRow = [];
        for (let row = 0; row < rowCnt; row++) {
            byRow[row] = [];
        }
        for (const seg of segs) {
            byRow[seg.row].push(seg);
        }
        return byRow;
    }
    function splitInteractionByRow(ui, rowCnt) {
        const byRow = [];
        if (!ui) {
            for (let row = 0; row < rowCnt; row++) {
                byRow[row] = null;
            }
        }
        else {
            for (let row = 0; row < rowCnt; row++) {
                byRow[row] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (const seg of ui.segs) {
                byRow[seg.row].segs.push(seg);
            }
        }
        return byRow;
    }
    function splitSegsByCol(segs, colCnt) {
        let byCol = [];
        for (let col = 0; col < colCnt; col++) {
            byCol.push([]);
        }
        for (let seg of segs) {
            for (let col = seg.firstCol; col <= seg.lastCol; col++) {
                if (seg.firstCol !== col) {
                    seg = Object.assign(Object.assign({}, seg), { firstCol: col, lastCol: col, isStart: false, isEnd: seg.isEnd && seg.lastCol === col, isStandin: true });
                }
                byCol[col].push(seg);
            }
        }
        return byCol;
    }

    const DEFAULT_TABLE_EVENT_TIME_FORMAT = internal$1.createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'narrow',
    });
    function hasListItemDisplay(seg) {
        let { display } = seg.eventRange.ui;
        return display === 'list-item' || (display === 'auto' &&
            !seg.eventRange.def.allDay &&
            seg.firstCol === seg.lastCol && // can't be multi-day
            seg.isStart && // "
            seg.isEnd // "
        );
    }

    class DayGridBlockEvent extends internal$1.BaseComponent {
        render() {
            let { props } = this;
            return (preact.createElement(internal$1.StandardEvent, Object.assign({}, props, { elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.eventRange.def.allDay })));
        }
    }

    class DayGridListEvent extends internal$1.BaseComponent {
        render() {
            let { props, context } = this;
            let { options } = context;
            let { eventRange } = props;
            let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
            let timeText = internal$1.buildEventRangeTimeText(eventRange, timeFormat, context, true, props.defaultDisplayEventEnd);
            return (preact.createElement(internal$1.EventContainer, Object.assign({}, props, { elTag: "a", elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'], elAttrs: internal$1.getEventRangeAnchorAttrs(eventRange, context), defaultGenerator: renderInnerContent, timeText: timeText, isResizing: false, isDateSelecting: false })));
        }
    }
    function renderInnerContent(renderProps) {
        return (preact.createElement(preact.Fragment, null,
            preact.createElement("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
            renderProps.timeText && (preact.createElement("div", { className: "fc-event-time" }, renderProps.timeText)),
            preact.createElement("div", { className: "fc-event-title" }, renderProps.event.title || preact.createElement(preact.Fragment, null, "\u00A0"))));
    }

    class DayGridMoreLink extends internal$1.BaseComponent {
        render() {
            let { props } = this;
            return (preact.createElement(internal$1.MoreLinkContainer, { elClasses: ['fc-daygrid-more-link'], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, segs: props.segs, hiddenSegs: props.hiddenSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
                    let forcedInvisibleMap = // TODO: more convenient/DRY
                     (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                        (props.eventResize ? props.eventResize.affectedInstances : null) ||
                        {};
                    return (preact.createElement(preact.Fragment, null, props.segs.map((seg) => {
                        let { eventRange } = seg;
                        let instanceId = eventRange.instance.instanceId;
                        return (preact.createElement("div", { key: instanceId, style: {
                                visibility: forcedInvisibleMap[instanceId] ? 'hidden' : '',
                            } }, hasListItemDisplay(seg) ? (preact.createElement(DayGridListEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, internal$1.getEventRangeMeta(eventRange, props.todayRange)))) : (preact.createElement(DayGridBlockEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, internal$1.getEventRangeMeta(eventRange, props.todayRange))))));
                    })));
                } }));
        }
    }

    class DayGridCell extends internal$1.DateComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
            this.headerWrapElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let { options, dateEnv } = context;
            // TODO: memoize this
            const isMonthStart = props.showDayNumber &&
                shouldDisplayMonthStart(props.date, props.dateProfile.currentRange, dateEnv);
            return (preact.createElement(internal$1.DayCellContainer, { elTag: "div", elClasses: [
                    'fc-daygrid-cell',
                    'fc-cell',
                    props.width != null ? '' : 'fc-liquid',
                    'fc-flex-column',
                    ...(props.extraClassNames || []),
                ], elAttrs: Object.assign(Object.assign({}, props.extraDataAttrs), { role: 'gridcell' }), elStyle: {
                    width: props.width
                }, extraRenderProps: props.extraRenderProps, defaultGenerator: renderTopInner, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, isMonthStart: isMonthStart }, (InnerContent, renderProps) => (preact.createElement("div", { ref: this.innerElRef, className: [
                    'fc-daygrid-cell-inner',
                    props.fgLiquidHeight ? 'fc-liquid' : ''
                ].join(' ') },
                preact.createElement("div", { ref: this.headerWrapElRef, className: "fc-flex-column" }, !renderProps.isDisabled && (props.showDayNumber || internal$1.hasCustomDayCellContent(options)) && (preact.createElement("div", { className: "fc-daygrid-cell-header" },
                    preact.createElement(InnerContent, { elTag: "a", elClasses: [
                            'fc-daygrid-cell-number',
                            isMonthStart && 'fc-daygrid-month-start',
                        ], elAttrs: internal$1.buildNavLinkAttrs(context, props.date) })))),
                preact.createElement("div", { className: "fc-daygrid-cell-main", style: {
                        height: props.fgLiquidHeight ? '' : props.fgHeight
                    } }, props.fg),
                preact.createElement("div", { className: "fc-daygrid-cell-footer", style: props.fgLiquidHeight
                        ? { position: 'relative', top: props.fgHeight }
                        : {} },
                    preact.createElement(DayGridMoreLink, { allDayDate: props.date, segs: props.segs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.innerElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange })),
                props.bg))));
        }
        componentDidMount() {
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            const headerWrapEl = this.headerWrapElRef.current; // "
            // TODO: only attach this if refs props present
            this.detachInnerHeight = internal$1.watchHeight(innerEl, (height) => {
                internal$1.setRef(this.props.innerHeightRef, height);
            });
            this.detachHeaderHeight = internal$1.watchHeight(headerWrapEl, (height) => {
                internal$1.setRef(this.props.headerHeightRef, height);
            });
        }
        componentWillUnmount() {
            this.detachInnerHeight();
            this.detachHeaderHeight();
            internal$1.setRef(this.props.innerHeightRef, null);
            internal$1.setRef(this.props.headerHeightRef, null);
        }
    }
    // Utils
    // -------------------------------------------------------------------------------------------------
    function renderTopInner(props) {
        return props.dayNumberText || preact.createElement(preact.Fragment, null, "\u00A0");
    }
    function shouldDisplayMonthStart(date, currentRange, dateEnv) {
        const { start: currentStart, end: currentEnd } = currentRange;
        const currentEndIncl = internal$1.addMs(currentEnd, -1);
        const currentFirstYear = dateEnv.getYear(currentStart);
        const currentFirstMonth = dateEnv.getMonth(currentStart);
        const currentLastYear = dateEnv.getYear(currentEndIncl);
        const currentLastMonth = dateEnv.getMonth(currentEndIncl);
        // spans more than one month?
        return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) &&
            Boolean(
            // first date in current view?
            date.valueOf() === currentStart.valueOf() ||
                // a month-start that's within the current range?
                (dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()));
    }

    /*
    Unique per-START-column, good for cataloging by top
    */
    function getSegStartId(seg) {
        return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
    }
    /*
    Unique per-START-and-END-column, good for cataloging by width/height
    */
    function getSegSpanId(seg) {
        return getSegStartId(seg) + ':' + seg.lastCol;
    }
    function computeFgSegVerticals(segs, segHeightMap, // keyed by segSpanId
    cells, topOrigin, maxHeight, strictOrder, dayMaxEvents, dayMaxEventRows) {
        // initialize column-based arrays
        const colCnt = cells.length;
        const hiddenSegsByCol = [];
        const heightsByCol = [];
        for (let col = 0; col < colCnt; col++) {
            hiddenSegsByCol.push([]);
            heightsByCol.push(0);
        }
        // create entries to be given to DayGridSegHierarchy
        const segEntries = segs.map((seg, index) => ({
            index: index,
            seg,
            span: {
                start: seg.firstCol,
                end: seg.lastCol + 1,
            },
        }));
        // configure hierarchy position-generator
        let hierarchy = new DayGridSegHierarchy((segEntry) => (segHeightMap.get(getSegSpanId(segs[segEntry.index]))));
        hierarchy.allowReslicing = false;
        hierarchy.strictOrder = strictOrder;
        if (dayMaxEvents === true || dayMaxEventRows === true) {
            hierarchy.maxCoord = maxHeight;
            hierarchy.hiddenConsumes = true;
        }
        else if (typeof dayMaxEvents === 'number') {
            hierarchy.maxStackCnt = dayMaxEvents;
        }
        else if (typeof dayMaxEventRows === 'number') {
            hierarchy.maxStackCnt = dayMaxEventRows;
            hierarchy.hiddenConsumes = true;
        }
        // compile segTops & heightsByCol
        const hiddenSegEntries = hierarchy.addSegs(segEntries);
        const segRects = hierarchy.toRects();
        const segTops = {};
        for (const segRect of segRects) {
            const seg = segs[segRect.index];
            segTops[getSegStartId(seg)] = topOrigin + segRect.levelCoord;
            let { start: col, end: endCol } = segRect.span;
            for (; col < endCol; col++) {
                heightsByCol[col] = Math.max(heightsByCol[col], segRect.levelCoord + segRect.thickness);
            }
        }
        // compile # of invisible segs per-column
        for (const hiddenSegEntry of hiddenSegEntries) {
            const { span } = hiddenSegEntry;
            const hiddenSeg = segs[hiddenSegEntry.index];
            for (let col = span.start; col < span.end; col++) {
                hiddenSegsByCol[col].push(hiddenSeg);
            }
        }
        return [segTops, heightsByCol, hiddenSegsByCol];
    }
    // DayGridSegHierarchy
    // -------------------------------------------------------------------------------------------------
    class DayGridSegHierarchy extends internal$1.SegHierarchy {
        constructor() {
            super(...arguments);
            // config
            this.hiddenConsumes = false;
            // allows us to keep hidden entries in the hierarchy so they take up space
            this.forceHidden = {};
        }
        addSegs(segInputs) {
            const hiddenSegs = super.addSegs(segInputs);
            const { entriesByLevel } = this;
            const excludeHidden = (entry) => !this.forceHidden[internal$1.buildEntryKey(entry)];
            // remove the forced-hidden segs
            for (let level = 0; level < entriesByLevel.length; level += 1) {
                entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
            }
            return hiddenSegs;
        }
        handleInvalidInsertion(insertion, entry, hiddenEntries) {
            const { entriesByLevel, forceHidden } = this;
            const { touchingEntry, touchingLevel, touchingLateral } = insertion;
            // the entry that the new insertion is touching must be hidden
            if (this.hiddenConsumes && touchingEntry) {
                const touchingEntryId = internal$1.buildEntryKey(touchingEntry);
                if (!forceHidden[touchingEntryId]) {
                    if (this.allowReslicing) {
                        // split up the touchingEntry, reinsert it
                        const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), { span: internal$1.intersectSpans(touchingEntry.span, entry.span) });
                        // reinsert the area that turned into a "more" link (so no other entries try to
                        // occupy the space) but mark it forced-hidden
                        const hiddenEntryId = internal$1.buildEntryKey(hiddenEntry);
                        forceHidden[hiddenEntryId] = true;
                        entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
                        hiddenEntries.push(hiddenEntry);
                        this.splitEntry(touchingEntry, entry, hiddenEntries);
                    }
                    else {
                        forceHidden[touchingEntryId] = true;
                        hiddenEntries.push(touchingEntry);
                    }
                }
            }
            // will try to reslice...
            super.handleInvalidInsertion(insertion, entry, hiddenEntries);
        }
    }

    class DayGridEventHarness extends preact.Component {
        constructor() {
            super(...arguments);
            // ref
            this.rootElRef = preact.createRef();
        }
        render() {
            const { props } = this;
            return (preact.createElement("div", { className: "fc-abs", style: props.style, ref: this.rootElRef }, props.children));
        }
        componentDidMount() {
            const rootEl = this.rootElRef.current; // TODO: make dynamic with useEffect
            this.detachHeight = internal$1.watchHeight(rootEl, (height) => {
                internal$1.setRef(this.props.heightRef, height);
            });
        }
        componentWillUnmount() {
            this.detachHeight();
            internal$1.setRef(this.props.heightRef, null);
        }
    }

    const DEFAULT_WEEK_NUM_FORMAT = internal$1.createFormatter({ week: 'narrow' });
    const COMPACT_CELL_WIDTH = 80;
    class DayGridRow extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            this.cellInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleInnerHeights);
            });
            this.cellHeaderHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleHeaderHeights);
            });
            this.segHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleSegHeights);
            });
            this.handleRootEl = (rootEl) => {
                this.rootEl = rootEl;
                internal$1.setRef(this.props.rootElRef, rootEl);
            };
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleHeaderHeights = () => {
                const cellHeaderHeightMap = this.cellHeaderHeightRefMap.current;
                let max = 0;
                for (const height of cellHeaderHeightMap.values()) {
                    max = Math.max(max, height);
                }
                if (this.state.headerHeight !== max) {
                    this.setState({ headerHeight: max });
                }
            };
            this.handleInnerHeights = () => {
                const { props } = this;
                const fgLiquidHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
                const cellInnerHeightMap = this.cellInnerHeightRefMap.current;
                let max = 0;
                for (const height of cellInnerHeightMap.values()) {
                    max = Math.max(max, height);
                }
                if (fgLiquidHeight) {
                    if (this.state.innerHeight !== max) {
                        this.setState({ innerHeight: max }); // will trigger event rerender
                    }
                }
                else {
                    internal$1.setRef(props.innerHeightRef, max);
                }
            };
            this.handleSegHeights = () => {
                this.setState({ segHeightRev: this.segHeightRefMap.rev }); // will trigger event rerender
            };
        }
        render() {
            const { props, state, context, cellInnerHeightRefMap, cellHeaderHeightRefMap } = this;
            const { cells } = props;
            const { options } = context;
            const weekDate = props.cells[0].date;
            const colCnt = props.cells.length;
            const fgLiquidHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            // TODO: memoize? sort all types of segs?
            const fgEventSegs = internal$1.sortEventSegs(props.fgEventSegs, options.eventOrder);
            // TODO: memoize?
            const fgEventSegsByCol = splitSegsByCol(fgEventSegs, colCnt);
            const bgEventSegsByCol = splitSegsByCol(props.bgEventSegs, colCnt);
            const businessHoursByCol = splitSegsByCol(props.businessHourSegs, colCnt);
            const highlightSegsByCol = splitSegsByCol(this.getHighlightSegs(), colCnt); // TODO: doesn't need standins
            const mirrorSegsByCol = splitSegsByCol(this.getMirrorSegs(), colCnt); // TODO: doesn't need standins
            // TODO: memoize?
            const [segTops, heightsByCol, hiddenSegsByCol] = computeFgSegVerticals(fgEventSegs, this.segHeightRefMap.current, cells, state.headerHeight, (fgLiquidHeight && state.innerHeight != null && state.headerHeight != null)
                ? state.innerHeight - state.headerHeight
                : undefined, options.eventOrderStrict, props.dayMaxEvents, props.dayMaxEventRows);
            const forcedInvisibleMap = // TODO: more convenient/DRY
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            return (preact.createElement("div", { role: props.cellGroup ? undefined : 'row', className: [
                    'fc-daygrid-row',
                    props.forceVSpacing
                        ? 'fc-daygrid-row-spacious'
                        : props.compact
                            ? 'fc-daygrid-row-compact'
                            : '',
                    props.cellGroup ? 'fc-flex-row' : 'fc-row',
                    'fc-rel',
                    props.className || '',
                ].join(' '), style: {
                    minHeight: props.minHeight,
                }, ref: this.handleRootEl },
                props.cells.map((cell, col) => {
                    const normalFgNodes = this.renderFgSegs(fgEventSegsByCol[col], segTops, props.todayRange, forcedInvisibleMap);
                    const mirrorFgNodes = this.renderFgSegs(mirrorSegsByCol[col], segTops, props.todayRange, {}, // forcedInvisibleMap
                    Boolean(props.eventDrag), Boolean(props.eventResize), false);
                    return (preact.createElement(DayGridCell, { key: cell.key, dateProfile: props.dateProfile, todayRange: props.todayRange, date: cell.date, showDayNumber: props.showDayNumbers, 
                        // content
                        segs: fgEventSegsByCol[col], hiddenSegs: hiddenSegsByCol[col], fgLiquidHeight: fgLiquidHeight, fg: (preact.createElement(preact.Fragment, null,
                            preact.createElement(preact.Fragment, null, normalFgNodes),
                            preact.createElement(preact.Fragment, null, mirrorFgNodes))), bg: (preact.createElement(preact.Fragment, null,
                            this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                            this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                            this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))), eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                        // render hooks
                        extraRenderProps: cell.extraRenderProps, extraDateSpan: cell.extraDateSpan, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, 
                        // dimensions
                        fgHeight: heightsByCol[col], width: props.colWidth, 
                        // refs
                        innerHeightRef: cellInnerHeightRefMap.createRef(cell.key), headerHeightRef: cellHeaderHeightRefMap.createRef(cell.key) }));
                }),
                props.showWeekNumbers && (preact.createElement(internal$1.WeekNumberContainer, { elTag: "a", elClasses: ['fc-daygrid-week-number'], elAttrs: internal$1.buildNavLinkAttrs(context, weekDate, 'week'), date: weekDate, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }))));
        }
        renderFgSegs(segs, segTops, todayRange, forcedInvisibleMap, isDragging, isResizing, isDateSelecting) {
            const { props, context, segHeightRefMap } = this;
            const { isRtl } = context;
            const { colWidth, eventSelection } = props;
            const colCnt = props.cells.length;
            const defaultDisplayEventEnd = props.cells.length === 1;
            const isMirror = isDragging || isResizing || isDateSelecting;
            const nodes = [];
            for (const seg of segs) {
                const { left, right, width } = computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl);
                // TODO: optimize ID creation? all related
                const { eventRange } = seg;
                const { instanceId } = eventRange.instance;
                const segSpanId = getSegSpanId(seg);
                const segStartId = getSegStartId(seg);
                const top = segTops[segStartId];
                const isVisible = !seg.isStandin &&
                    top != null &&
                    !forcedInvisibleMap[instanceId];
                /*
                TODO: is this comment still relevant? vvvvvvvv
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push(preact.createElement(DayGridEventHarness, { key: segSpanId, style: {
                        visibility: isVisible ? '' : 'hidden',
                        top,
                        left,
                        right,
                        width,
                    }, heightRef: (isMirror || seg.isStandin)
                        ? null
                        : segHeightRefMap.createRef(segSpanId) }, hasListItemDisplay(seg) ? (preact.createElement(DayGridListEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, internal$1.getEventRangeMeta(eventRange, todayRange)))) : (preact.createElement(DayGridBlockEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, internal$1.getEventRangeMeta(eventRange, todayRange))))));
            }
            return nodes;
        }
        renderFillSegs(segs, fillType) {
            const { props, context } = this;
            const { isRtl } = context;
            const { todayRange, colWidth } = props;
            const colCnt = props.cells.length;
            const nodes = [];
            for (const seg of segs) {
                const { left, right, width } = computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl);
                const isVisible = !seg.isStandin;
                nodes.push(preact.createElement("div", { key: internal$1.buildEventRangeKey(seg.eventRange), className: "fc-fill-y", style: {
                        visibility: isVisible ? '' : 'hidden',
                        left,
                        right,
                        width,
                    } }, fillType === 'bg-event' ?
                    preact.createElement(internal$1.BgEvent, Object.assign({ eventRange: seg.eventRange, isStart: seg.isStart, isEnd: seg.isEnd }, internal$1.getEventRangeMeta(seg.eventRange, todayRange))) : (internal$1.renderFill(fillType))));
            }
            return preact.createElement(preact.Fragment, {}, ...nodes);
        }
        // Sizing
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            const { rootEl } = this; // TODO: make dynamic with useEffect
            this.disconnectHeight = internal$1.watchHeight(rootEl, (contentHeight) => {
                internal$1.setRef(this.props.heightRef, contentHeight);
            });
        }
        componentWillUnmount() {
            this.disconnectHeight();
            internal$1.setRef(this.props.heightRef, null);
            internal$1.setRef(this.props.innerHeightRef, null);
        }
        // Utils
        // -----------------------------------------------------------------------------------------------
        getMirrorSegs() {
            let { props } = this;
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return [];
        }
        getHighlightSegs() {
            let { props } = this;
            if (props.eventDrag && props.eventDrag.segs.length) { // messy check
                return props.eventDrag.segs;
            }
            if (props.eventResize && props.eventResize.segs.length) { // messy check
                return props.eventResize.segs;
            }
            return props.dateSelectionSegs;
        }
    }

    class DayGridRows extends internal$1.DateComponent {
        constructor() {
            super(...arguments);
            // memo
            this.splitBusinessHourSegs = internal$1.memoize(splitSegsByRow);
            this.splitBgEventSegs = internal$1.memoize(splitSegsByRow);
            this.splitFgEventSegs = internal$1.memoize(splitSegsByRow);
            this.splitDateSelectionSegs = internal$1.memoize(splitSegsByRow);
            this.splitEventDrag = internal$1.memoize(splitInteractionByRow);
            this.splitEventResize = internal$1.memoize(splitInteractionByRow);
            // internal
            this.rowHeightRefMap = new internal$1.RefMap((height, key) => {
                // HACKy way of syncing RefMap results with prop
                const { rowHeightRefMap } = this.props;
                if (rowHeightRefMap) {
                    rowHeightRefMap.handleValue(height, key);
                }
            });
            this.handleRootEl = (rootEl) => {
                this.rootEl = rootEl;
                if (rootEl) {
                    this.context.registerInteractiveComponent(this, {
                        el: rootEl,
                        isHitComboAllowed: this.props.isHitComboAllowed,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            let { props, state, context, rowHeightRefMap } = this;
            let { options } = context;
            let rowCnt = props.cellRows.length;
            let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
            let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
            let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
            let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
            let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
            let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
            // whether the ROW should expand in height
            // (not to be confused with whether the fg events within the row should be molded by height of row)
            let isHeightAuto = internal$1.getIsHeightAuto(options);
            // maintain at least aspectRatio for cells?
            let rowMinHeight = (state.width != null && (rowCnt >= 7 || // TODO: better way to infer if across single-month boundary
                isHeightAuto)) ? state.width / context.options.aspectRatio / 6 // okay to hardcode 6 (weeks) ?
                : null;
            return (preact.createElement("div", { className: 'fc-grow fc-flex-column', style: { width: props.width }, ref: this.handleRootEl }, props.cellRows.map((cells, row) => (preact.createElement(DayGridRow, { key: cells[0].key, dateProfile: props.dateProfile, todayRange: props.todayRange, cells: cells, showDayNumbers: rowCnt > 1, showWeekNumbers: options.weekNumbers, forPrint: props.forPrint, compact: state.width != null && (state.width / cells.length) < COMPACT_CELL_WIDTH, 
                // if not auto-height, distribute height of container somewhat evently to rows
                // (treat all as zero, distribute height, then ensure min-heights -- the inner content height)
                className: isHeightAuto ? '' : 'fc-grow fc-basis0', 
                // content
                fgEventSegs: fgEventSegsByRow[row], bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* HACK */, businessHourSegs: businessHourSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventSelection: props.eventSelection, eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, 
                // dimensions
                colWidth: props.colWidth, minHeight: rowMinHeight, 
                // refs
                heightRef: rowHeightRefMap.createRef(cells[0].key) })))));
        }
        componentDidMount() {
            this.detachWidth = internal$1.watchWidth(this.rootEl, (width) => {
                this.setState({ width });
            });
        }
        componentWillUnmount() {
            this.detachWidth();
        }
        // Hit System
        // -----------------------------------------------------------------------------------------------
        queryHit(positionLeft, positionTop, elWidth) {
            const { props, context } = this;
            const colCnt = props.cellRows[0].length;
            const { col, left, right } = computeColFromPosition(positionLeft, elWidth, props.colWidth, colCnt, context.isRtl);
            const { row, top, bottom } = computeRowFromPosition(positionTop, props.cellRows, this.rowHeightRefMap.current);
            const cell = props.cellRows[row][col];
            const cellStartDate = cell.date;
            const cellEndDate = internal$1.addDays(cellStartDate, 1);
            return {
                dateProfile: props.dateProfile,
                dateSpan: Object.assign({ range: {
                        start: cellStartDate,
                        end: cellEndDate,
                    }, allDay: true }, cell.extraDateSpan),
                // HACK. TODO: This is expensive to do every hit-query
                dayEl: getCellEl(getRowEl(this.rootEl, row), col),
                rect: {
                    left,
                    right,
                    top,
                    bottom,
                },
                layer: 0,
            };
        }
    }
    // Utils
    // -------------------------------------------------------------------------------------------------
    function isSegAllDay(seg) {
        return seg.eventRange.def.allDay;
    }

    class HeaderRow extends internal$1.BaseComponent {
        render() {
            const { props } = this;
            return (preact.createElement("div", { role: props.cellGroup ? undefined : 'row', className: [
                    props.cellGroup ? 'fc-flex-row' : 'fc-row',
                    props.className || '',
                ].join(' ') }, props.cells.map((cell) => (preact.createElement(preact.Fragment, { key: props.getHeaderModelKey(cell) }, props.renderHeaderContent(cell, props.tierNum, undefined, // innerHeightRef
            props.colWidth))))));
        }
    }

    function DayGridHeader(props) {
        return (preact.createElement("div", { className: [
                'fc-rowgroup',
                'fc-content-box',
                ...(props.extraClassNames || []),
            ].join(' '), style: {
                width: props.width,
                paddingLeft: props.paddingLeft,
                paddingRight: props.paddingRight,
            } }, props.headerTiers.map((cells, tierNum) => (preact.createElement(HeaderRow, { key: tierNum, tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, colWidth: props.colWidth })))));
    }

    class DayGridLayoutNormal extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            this.handleScroller = (scroller) => {
                internal$1.setRef(this.props.scrollerRef, scroller);
            };
            this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
                this.setState({ leftScrollbarWidth });
            };
            this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
                this.setState({ rightScrollbarWidth });
            };
        }
        render() {
            const { props, state, context } = this;
            const { options } = context;
            const verticalScrollbars = !props.forPrint && !internal$1.getIsHeightAuto(options);
            const stickyHeaderDates = !props.forPrint && internal$1.getStickyHeaderDates(options);
            return (preact.createElement(preact.Fragment, null,
                options.dayHeaders && (preact.createElement(DayGridHeader, { headerTiers: props.headerTiers, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
                    // render hooks
                    extraClassNames: [
                        'fc-daygrid-header',
                        stickyHeaderDates ? 'fc-sticky-header' : '',
                    ], 
                    // dimensions
                    paddingLeft: state.leftScrollbarWidth, paddingRight: state.rightScrollbarWidth })),
                preact.createElement(internal$1.Scroller, { vertical: verticalScrollbars, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, elClassNames: [
                        'fc-daygrid-body',
                        'fc-rowgroup',
                        'fc-flex-column',
                        verticalScrollbars ? 'fc-liquid' : '',
                    ], ref: this.handleScroller },
                    preact.createElement(DayGridRows // .fc-grow
                    , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
                        // content
                        fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                        // refs
                        rowHeightRefMap: props.rowHeightRefMap }))));
        }
    }

    class DayGridLayoutPannable extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            this.headerScrollerRef = preact.createRef();
            this.bodyScrollerRef = preact.createRef();
            this.footerScrollerRef = preact.createRef();
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleWidth = (width) => {
                this.setState({ width });
            };
            this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
                this.setState({ leftScrollbarWidth });
            };
            this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
                this.setState({ rightScrollbarWidth });
            };
        }
        render() {
            const { props, state, context } = this;
            const { options } = context;
            const verticalScrollbars = !props.forPrint && !internal$1.getIsHeightAuto(options);
            const stickyHeaderDates = !props.forPrint && internal$1.getStickyHeaderDates(options);
            const stickyFooterScrollbar = !props.forPrint && internal$1.getStickyFooterScrollbar(options);
            const colCnt = props.cellRows[0].length;
            const [canvasWidth, colWidth] = computeColWidth(colCnt, props.dayMinWidth, state.width);
            return (preact.createElement(preact.Fragment, null,
                options.dayHeaders && (preact.createElement(internal$1.Scroller, { horizontal: true, hideScrollbars: true, elClassNames: [
                        'fc-daygrid-header',
                        'fc-rowgroup',
                        stickyHeaderDates ? 'fc-sticky-header' : ''
                    ], ref: this.headerScrollerRef },
                    preact.createElement(DayGridHeader, { headerTiers: props.headerTiers, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
                        // dimensions
                        colWidth: colWidth, width: canvasWidth, paddingLeft: state.leftScrollbarWidth, paddingRight: state.rightScrollbarWidth }))),
                preact.createElement(internal$1.Scroller, { vertical: verticalScrollbars, horizontal: true, hideScrollbars: stickyFooterScrollbar, widthRef: this.handleWidth, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, elClassNames: [
                        'fc-daygrid-body',
                        'fc-rowgroup',
                        'fc-flex-column',
                        verticalScrollbars ? 'fc-liquid' : '',
                    ], ref: this.bodyScrollerRef },
                    preact.createElement(DayGridRows // .fc-grow
                    , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
                        // content
                        fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                        // dimensions
                        colWidth: colWidth, width: canvasWidth, 
                        // refs
                        rowHeightRefMap: props.rowHeightRefMap })),
                Boolean(stickyFooterScrollbar) && (preact.createElement(internal$1.Scroller, { ref: this.footerScrollerRef, horizontal: true, elClassNames: ['fc-sticky-footer'], elStyle: {
                        marginTop: '-1px', // HACK
                    } },
                    preact.createElement("div", { style: {
                            width: canvasWidth,
                            height: '1px', // HACK
                        } })))));
        }
        // Lifecycle
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            // scroller
            const ScrollerSyncer = internal$1.getScrollerSyncerClass(this.context.pluginHooks);
            this.syncedScroller = new ScrollerSyncer(true); // horizontal=true
            internal$1.setRef(this.props.scrollerRef, this.syncedScroller);
            this.updateSyncedScroller();
        }
        componentDidUpdate() {
            // scroller
            this.updateSyncedScroller();
        }
        componentWillUnmount() {
            // scroller
            this.syncedScroller.destroy();
        }
        // Scrolling
        // -----------------------------------------------------------------------------------------------
        updateSyncedScroller() {
            this.syncedScroller.handleChildren([
                this.headerScrollerRef.current,
                this.bodyScrollerRef.current,
                this.footerScrollerRef.current,
            ]);
        }
    }

    class DayGridLayout extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.scrollerRef = preact.createRef();
            this.rowHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.updateScrollY);
            });
            // internal
            this.scrollDate = null;
            this.updateScrollY = () => {
                const rowHeightMap = this.rowHeightRefMap.current;
                const scroller = this.scrollerRef.current;
                // Since updateScrollY is called by rowHeightRefMap, could be called with null during cleanup,
                // and the scroller might not exist
                if (scroller && this.scrollDate) {
                    let scrollTop = computeTopFromDate(this.scrollDate, this.props.cellRows, rowHeightMap, 1);
                    if (scrollTop != null) {
                        if (scrollTop) {
                            scrollTop++; // clear top border
                        }
                        scroller.scrollTo({ y: scrollTop });
                    }
                }
            };
            this.clearScroll = () => {
                this.scrollDate = null;
            };
        }
        render() {
            const { props, context } = this;
            const { options } = context;
            const commonLayoutProps = Object.assign(Object.assign({}, props), { scrollerRef: this.scrollerRef, rowHeightRefMap: this.rowHeightRefMap });
            return (preact.createElement(internal$1.ViewContainer, { viewSpec: context.viewSpec, elClasses: [props.className, 'fc-flex-column', 'fc-border'] }, options.dayMinWidth ? (preact.createElement(DayGridLayoutPannable, Object.assign({}, commonLayoutProps, { dayMinWidth: options.dayMinWidth }))) : (preact.createElement(DayGridLayoutNormal, Object.assign({}, commonLayoutProps)))));
        }
        // Lifecycle
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            this.resetScroll();
            this.scrollerRef.current.addScrollEndListener(this.clearScroll);
        }
        componentDidUpdate(prevProps) {
            if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
                this.resetScroll();
            }
        }
        componentWillUnmount() {
            this.scrollerRef.current.removeScrollEndListener(this.clearScroll);
        }
        // Scrolling
        // -----------------------------------------------------------------------------------------------
        resetScroll() {
            this.scrollDate = this.props.dateProfile.currentDate;
            this.updateScrollY();
            // updateScrollX
            const scroller = this.scrollerRef.current;
            scroller.scrollTo({ x: 0 });
        }
    }

    const WEEKDAY_FORMAT = internal$1.createFormatter({ weekday: 'long' });
    class DayOfWeekHeaderCell extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let { dateEnv, theme, viewApi, options } = context;
            let date = internal$1.addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
            let dateMeta = {
                dow: props.dow,
                isDisabled: false,
                isFuture: false,
                isPast: false,
                isToday: false,
                isOther: false,
            };
            let text = dateEnv.format(date, props.dayHeaderFormat);
            let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({ date }, dateMeta), { view: viewApi }), props.extraRenderProps), { text });
            return (preact.createElement(internal$1.ContentContainer, { elTag: 'div', elClasses: [
                    ...internal$1.getDayClassNames(dateMeta, theme),
                    ...(props.extraClassNames || []),
                    'fc-header-cell',
                    'fc-cell',
                    props.colWidth != null ? '' : 'fc-liquid',
                    'fc-flex-column',
                    'fc-align-center',
                ], elAttrs: props.extraDataAttrs, elStyle: {
                    width: props.colWidth != null // TODO: DRY
                        ? props.colWidth * (props.colSpan || 1)
                        : undefined,
                }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (preact.createElement("div", { ref: this.innerElRef, className: [
                    'fc-flex-column',
                    props.isSticky ? 'fc-sticky-x' : '',
                ].join(' ') },
                preact.createElement(InnerContent, { elTag: "a", elClasses: [
                        'fc-cell-inner',
                        'fc-padding-sm',
                    ], elAttrs: {
                        'aria-label': dateEnv.format(date, WEEKDAY_FORMAT),
                    } })))));
        }
        componentDidMount() {
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            // TODO: only attach this if refs props present
            this.disconectInnerHeight = internal$1.watchHeight(innerEl, (height) => {
                internal$1.setRef(this.props.innerHeightRef, height);
            });
        }
        componentWillUnmount() {
            this.disconectInnerHeight();
            internal$1.setRef(this.props.innerHeightRef, null);
        }
    }

    function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
        return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
    }
    // Computes a default column header formatting string if `colFormat` is not explicitly defined
    function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
        // if more than one week row, or if there are a lot of columns with not much space,
        // put just the day numbers will be in each cell
        if (!datesRepDistinctDays || dayCnt > 10) {
            return internal$1.createFormatter({ weekday: 'short' }); // "Sat"
        }
        if (dayCnt > 1) {
            return internal$1.createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
        }
        return internal$1.createFormatter({ weekday: 'long' }); // "Saturday"
    }

    class DayGridView extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // memo
            this.buildDayTableModel = internal$1.memoize(buildDayTableModel);
            this.buildHeaderTiers = internal$1.memoize(buildHeaderTiers);
            this.createDayHeaderFormatter = internal$1.memoize(createDayHeaderFormatter);
            // internal
            this.slicer = new DayTableSlicer();
        }
        render() {
            const { props, context } = this;
            const { options } = context;
            const dayTableModel = this.buildDayTableModel(props.dateProfile, context.dateProfileGenerator);
            const datesRepDistinctDays = dayTableModel.rowCnt === 1;
            const headerTiers = this.buildHeaderTiers(dayTableModel.headerDates, datesRepDistinctDays);
            const slicedProps = this.slicer.sliceProps(props, props.dateProfile, options.nextDayThreshold, context, dayTableModel);
            const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dayTableModel.colCnt);
            return (preact.createElement(internal$1.NowTimer, { unit: "day" }, (nowDate, todayRange) => (preact.createElement(DayGridLayout, { dateProfile: props.dateProfile, todayRange: todayRange, cellRows: dayTableModel.cellRows, forPrint: props.forPrint, className: 'fc-daygrid-view', 
                // header content
                headerTiers: headerTiers, renderHeaderContent: (model, tier, innerHeightRef, colWidth) => {
                    if (model.date) {
                        return (preact.createElement(DateHeaderCell, Object.assign({}, model, { dateProfile: props.dateProfile, todayRange: todayRange, navLink: dayTableModel.colCnt > 1, dayHeaderFormat: dayHeaderFormat, colSpan: model.colSpan, colWidth: colWidth })));
                    }
                    else {
                        return (preact.createElement(DayOfWeekHeaderCell, Object.assign({}, model, { dayHeaderFormat: dayHeaderFormat, colSpan: model.colSpan, colWidth: colWidth })));
                    }
                }, getHeaderModelKey: (model) => {
                    // can use model.key???
                    if (model.date) {
                        return model.date.toUTCString();
                    }
                    return model.dow;
                }, 
                // body content
                fgEventSegs: slicedProps.fgEventSegs, bgEventSegs: slicedProps.bgEventSegs, businessHourSegs: slicedProps.businessHourSegs, dateSelectionSegs: slicedProps.dateSelectionSegs, eventDrag: slicedProps.eventDrag, eventResize: slicedProps.eventResize, eventSelection: slicedProps.eventSelection }))));
        }
    }

    class TableDateProfileGenerator extends internal$1.DateProfileGenerator {
        // Computes the date range that will be rendered
        buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
            let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
            let { props } = this;
            return buildDayTableRenderRange({
                currentRange: renderRange,
                snapToWeek: /^(year|month)$/.test(currentRangeUnit),
                fixedWeekCount: props.fixedWeekCount,
                dateEnv: props.dateEnv,
            });
        }
    }
    function buildDayTableRenderRange(props) {
        let { dateEnv, currentRange } = props;
        let { start, end } = currentRange;
        let endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (props.snapToWeek) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = internal$1.addWeeks(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (props.fixedWeekCount) {
            // TODO: instead of these date-math gymnastics (for multimonth view),
            // compute dateprofiles of all months, then use start of first and end of last.
            let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(internal$1.addDays(currentRange.end, -1)));
            let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            internal$1.diffWeeks(lastMonthRenderStart, end));
            end = internal$1.addWeeks(end, 6 - rowCnt);
        }
        return { start, end };
    }

    var css_248z = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc-daygrid-cell.fc-day-today{background-color:var(--fc-today-bg-color)}.fc-daygrid-row-spacious .fc-daygrid-cell-inner{min-height:3em}.fc-daygrid-cell-header{display:flex;flex-direction:row-reverse}.fc-day-other .fc-daygrid-cell-header{opacity:.3}.fc-daygrid-cell-number{padding:4px;position:relative;z-index:4}.fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc-daygrid-cell-footer{align-items:flex-start;display:flex;flex-direction:column;font-size:.85em;margin:0 2px}.fc-daygrid-row-spacious .fc-daygrid-cell-footer{margin-bottom:1em!important}.fc-daygrid-row-compact .fc-daygrid-cell-footer{align-items:stretch}.fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc-daygrid-row-compact .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);padding:1px}.fc-daygrid-cell .fc-non-business{z-index:1}.fc-daygrid-cell .fc-bg-event{z-index:2}.fc-daygrid-cell .fc-highlight{z-index:3}.fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);margin-top:1px;z-index:6}.fc-daygrid-event.fc-event-mirror{z-index:7}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;direction:row;display:flex;padding:2px 0;position:relative}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-daygrid-dot-event .fc-event-time,.fc-daygrid-dot-event .fc-event-title{overflow:hidden;white-space:nowrap}.fc-daygrid-dot-event .fc-event-title{flex-basis:0;flex-grow:1;font-weight:700;min-width:0}";
    internal$1.injectStyles(css_248z);

    var plugin = core.createPlugin({
        name: '@fullcalendar/daygrid',
        initialView: 'dayGridMonth',
        views: {
            dayGrid: {
                component: DayGridView,
                dateProfileGeneratorClass: TableDateProfileGenerator,
            },
            dayGridDay: {
                type: 'dayGrid',
                duration: { days: 1 },
            },
            dayGridWeek: {
                type: 'dayGrid',
                duration: { weeks: 1 },
            },
            dayGridMonth: {
                type: 'dayGrid',
                duration: { months: 1 },
                fixedWeekCount: true,
            },
            dayGridYear: {
                type: 'dayGrid',
                duration: { years: 1 },
            },
        },
    });

    /*
    TODO: is it even worth doing this "advanced" version?
    */
    class HeaderRowAdvanced extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleInnerHeights);
            });
            this.handleInnerHeights = () => {
                const innerHeightMap = this.innerHeightRefMap.current;
                let max = 0;
                for (const innerHeight of innerHeightMap.values()) {
                    max = Math.max(max, innerHeight);
                }
                if (this.currentInnerHeight !== max) {
                    this.currentInnerHeight = max;
                    internal$1.setRef(this.props.innerHeightRef, max);
                }
            };
        }
        render() {
            const { props } = this;
            return (preact.createElement("div", { role: 'row', className: 'fc-row', style: { height: props.height } }, props.cells.map((cell) => {
                const key = props.getHeaderModelKey(cell);
                return (preact.createElement(preact.Fragment, { key: props.getHeaderModelKey(cell) }, props.renderHeaderContent(cell, props.tierNum, this.innerHeightRefMap.createRef(key), // innerHeightRef
                props.colWidth)));
            })));
        }
    }

    var internal = {
        __proto__: null,
        DayTableSlicer: DayTableSlicer,
        TableDateProfileGenerator: TableDateProfileGenerator,
        buildDayTableRenderRange: buildDayTableRenderRange,
        DayGridView: DayGridView,
        DateHeaderCell: DateHeaderCell,
        DayOfWeekHeaderCell: DayOfWeekHeaderCell,
        HeaderRow: HeaderRow,
        HeaderRowAdvanced: HeaderRowAdvanced,
        createDayHeaderFormatter: createDayHeaderFormatter,
        DayGridLayout: DayGridLayout,
        DayGridRow: DayGridRow,
        COMPACT_CELL_WIDTH: COMPACT_CELL_WIDTH,
        DayGridRows: DayGridRows,
        buildDayTableModel: buildDayTableModel,
        computeColWidth: computeColWidth,
        computeColFromPosition: computeColFromPosition,
        getRowEl: getRowEl,
        getCellEl: getCellEl
    };

    core.globalPlugins.push(plugin);

    exports.Internal = internal;
    exports["default"] = plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, FullCalendar, FullCalendar.Internal, FullCalendar.Preact);
