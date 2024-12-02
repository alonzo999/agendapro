/*!
FullCalendar Time Grid Plugin v7.0.0-beta.1
Docs & License: https://fullcalendar.io/docs/timegrid-view
(c) 2024 Adam Shaw
*/
FullCalendar.TimeGrid = (function (exports, core, internal$1, preact, internal$2) {
    'use strict';

    function buildTimeColsModel(dateProfile, dateProfileGenerator) {
        let daySeries = new internal$1.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
        return new internal$1.DayTableModel(daySeries, false);
    }
    function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
        let ranges = [];
        for (let date of dayTableModel.headerDates) {
            ranges.push({
                start: dateEnv.add(date, dateProfile.slotMinTime),
                end: dateEnv.add(date, dateProfile.slotMaxTime),
            });
        }
        return ranges;
    }
    function computeSlatHeight(expandRows, slatCnt, slatInnerHeight, scrollerHeight) {
        if (!slatInnerHeight || !scrollerHeight) {
            return [undefined, false];
        }
        const slatMinHeight = slatInnerHeight + 1;
        const slatLiquidHeight = scrollerHeight / slatCnt;
        let slatLiquid;
        let slatHeight;
        if (expandRows && slatLiquidHeight >= slatMinHeight) {
            slatLiquid = true;
            slatHeight = slatLiquidHeight;
        }
        else {
            slatLiquid = false;
            slatHeight = slatMinHeight;
        }
        return [slatHeight, slatLiquid];
    }
    /*
    A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    */
    function computeDateTopFrac(date, dateProfile, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = internal$1.startOfDay(date);
        }
        return computeTimeTopFrac(internal$1.createDuration(date.valueOf() - startOfDayDate.valueOf()), dateProfile);
    }
    function computeTimeTopFrac(time, dateProfile) {
        const startMs = internal$1.asRoughMs(dateProfile.slotMinTime);
        const endMs = internal$1.asRoughMs(dateProfile.slotMaxTime);
        let frac = (time.milliseconds - startMs) / (endMs - startMs);
        frac = Math.max(0, frac);
        frac = Math.min(1, frac);
        return frac;
    }
    function getSlatRowClassName(slatMeta) {
        return [
            'fc-row',
            'fc-timegrid-slot',
            slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
        ].join(' ');
    }

    class AllDaySplitter extends internal$1.Splitter {
        getKeyInfo() {
            return {
                allDay: {},
                timed: {},
            };
        }
        getKeysForDateSpan(dateSpan) {
            if (dateSpan.allDay) {
                return ['allDay'];
            }
            return ['timed'];
        }
        getKeysForEventDef(eventDef) {
            if (!eventDef.allDay) {
                return ['timed'];
            }
            if (internal$1.hasBgRendering(eventDef)) {
                return ['timed', 'allDay'];
            }
            return ['allDay'];
        }
    }

    class DayTimeColsSlicer extends internal$1.Slicer {
        sliceRange(range, dayRanges) {
            let segs = [];
            for (let col = 0; col < dayRanges.length; col += 1) {
                let segRange = internal$1.intersectRanges(range, dayRanges[col]);
                if (segRange) {
                    segs.push({
                        start: segRange.start,
                        end: segRange.end,
                        isStart: segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: segRange.end.valueOf() === range.end.valueOf(),
                        col,
                    });
                }
            }
            return segs;
        }
    }

    /*
    TODO: more DRY with daygrid?
    can be given null/undefined!
    */
    function splitSegsByCol(segs, colCnt) {
        let segsByCol = [];
        let i;
        for (i = 0; i < colCnt; i += 1) {
            segsByCol.push([]);
        }
        if (segs) {
            for (i = 0; i < segs.length; i += 1) {
                segsByCol[segs[i].col].push(segs[i]);
            }
        }
        return segsByCol;
    }
    /*
    TODO: more DRY with daygrid?
    can be given null/undefined!
    */
    function splitInteractionByCol(ui, colCnt) {
        let byRow = [];
        if (!ui) {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = null;
            }
        }
        else {
            for (let i = 0; i < colCnt; i += 1) {
                byRow[i] = {
                    affectedInstances: ui.affectedInstances,
                    isEvent: ui.isEvent,
                    segs: [],
                };
            }
            for (let seg of ui.segs) {
                byRow[seg.col].segs.push(seg);
            }
        }
        return byRow;
    }

    const DEFAULT_WEEK_NUM_FORMAT = internal$1.createFormatter({ week: 'short' });
    class TimeGridWeekNumber extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let range = props.dateProfile.renderRange;
            let dayCnt = internal$1.diffDays(range.start, range.end);
            // only do in day views (to avoid doing in week views that dont need it)
            let navLinkAttrs = (dayCnt === 1)
                ? internal$1.buildNavLinkAttrs(context, range.start, 'week')
                : {};
            return (preact.createElement(internal$1.WeekNumberContainer, { elTag: 'div', elClasses: [
                    'fc-timegrid-weeknumber',
                    'fc-timegrid-axis',
                    'fc-cell',
                    'fc-content-box',
                ], elStyle: {
                    width: props.width
                }, date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, (InnerContent) => (preact.createElement("div", { ref: this.innerElRef, className: 'fc-flex-column' },
                preact.createElement(InnerContent, { elTag: "a", elClasses: [
                        'fc-timegrid-axis-inner',
                        'fc-cell-inner',
                        'fc-padding-sm',
                    ], elAttrs: navLinkAttrs })))));
        }
        componentDidMount() {
            const { props } = this;
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            // TODO: only attach this if refs props present
            // TODO: handle width/height independently?
            this.detachInnerSize = internal$1.watchSize(innerEl, (width, height) => {
                internal$1.setRef(props.innerWidthRef, width);
                internal$1.setRef(props.innerHeightRef, height);
            });
        }
        componentWillUnmount() {
            const { props } = this;
            this.detachInnerSize();
            internal$1.setRef(props.innerWidthRef, null);
            internal$1.setRef(props.innerHeightRef, null);
        }
    }

    // potential nice values for the slot-duration and interval-duration
    // from largest to smallest
    const STOCK_SUB_DURATIONS = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 },
    ];
    function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
        let dayStart = new Date(0);
        let slatTime = slotMinTime;
        let slatIterator = internal$1.createDuration(0);
        let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
        let metas = [];
        while (internal$1.asRoughMs(slatTime) < internal$1.asRoughMs(slotMaxTime)) {
            let date = dateEnv.add(dayStart, slatTime);
            let isLabeled = internal$1.wholeDivideDurations(slatIterator, labelInterval) !== null;
            metas.push({
                date,
                time: slatTime,
                key: date.toISOString(),
                isoTimeStr: internal$1.formatIsoTimeString(date),
                isLabeled,
            });
            slatTime = internal$1.addDurations(slatTime, slotDuration);
            slatIterator = internal$1.addDurations(slatIterator, slotDuration);
        }
        return metas;
    }
    // Computes an automatic value for slotLabelInterval
    function computeLabelInterval(slotDuration) {
        let i;
        let labelInterval;
        let slotsPerLabel;
        // find the smallest stock label interval that results in more than one slots-per-label
        for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
            labelInterval = internal$1.createDuration(STOCK_SUB_DURATIONS[i]);
            slotsPerLabel = internal$1.wholeDivideDurations(labelInterval, slotDuration);
            if (slotsPerLabel !== null && slotsPerLabel > 1) {
                return labelInterval;
            }
        }
        return slotDuration; // fall back
    }

    class TimeGridAllDayLabel extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props } = this;
            let { options, viewApi } = this.context;
            let renderProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (preact.createElement(internal$1.ContentContainer, { elTag: "div", elClasses: [
                    'fc-timegrid-allday-label',
                    'fc-timegrid-axis',
                    'fc-cell',
                    'fc-content-box',
                ], elStyle: {
                    width: props.width,
                }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, (InnerContent) => (preact.createElement("div", { ref: this.innerElRef, className: 'fc-flex-column' },
                preact.createElement(InnerContent, { elTag: "span", elClasses: [
                        'fc-timegrid-axis-inner',
                        'fc-cell-inner',
                        'fc-padding-sm',
                    ] })))));
        }
        componentDidMount() {
            const { props } = this;
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            // TODO: only attach this if refs props present
            this.disconnectInnerSize = internal$1.watchSize(innerEl, (width, height) => {
                internal$1.setRef(props.innerWidthRef, width);
                internal$1.setRef(props.innerHeightRef, height);
            });
        }
        componentWillUnmount() {
            const { props } = this;
            this.disconnectInnerSize();
            internal$1.setRef(props.innerWidthRef, null);
            internal$1.setRef(props.innerHeightRef, null);
        }
    }
    function renderAllDayInner(renderProps) {
        return renderProps.text;
    }

    class TimeGridAllDayLane extends internal$1.DateComponent {
        constructor() {
            super(...arguments);
            this.heightRef = preact.createRef();
            this.handleRootEl = (rootEl) => {
                this.rootEl = rootEl;
                if (rootEl) {
                    this.context.registerInteractiveComponent(this, {
                        el: rootEl,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            return (preact.createElement(internal$2.DayGridRow, Object.assign({}, this.props, { cellGroup: true, className: this.props.className, forceVSpacing: true, rootElRef: this.handleRootEl, heightRef: this.heightRef })));
        }
        queryHit(positionLeft, positionTop, elWidth) {
            const { props, context, heightRef } = this;
            const colCnt = props.cells.length;
            const { col, left, right } = internal$2.computeColFromPosition(positionLeft, elWidth, props.colWidth, colCnt, context.isRtl);
            const cell = props.cells[col];
            const cellStartDate = cell.date;
            const cellEndDate = internal$1.addDays(cellStartDate, 1);
            return {
                dateProfile: props.dateProfile,
                dateSpan: Object.assign({ range: {
                        start: cellStartDate,
                        end: cellEndDate,
                    }, allDay: true }, cell.extraDateSpan),
                // HACK. TODO: This is expensive to do every hit-query
                dayEl: internal$2.getCellEl(this.rootEl, col),
                rect: {
                    left,
                    right,
                    top: 0,
                    bottom: heightRef.current,
                },
                layer: 0,
            };
        }
    }

    function TimeGridNowIndicatorArrow(props) {
        return (preact.createElement(internal$1.NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: {
                top: internal$1.fracToCssDim(computeDateTopFrac(props.nowDate, props.dateProfile))
            }, isAxis: true, date: props.nowDate }));
    }

    const DEFAULT_SLAT_LABEL_FORMAT = internal$1.createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        omitZeroMinute: true,
        meridiem: 'short',
    });
    class TimeGridSlatLabel extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let { dateEnv, options, viewApi } = context;
            let classNames = [
                'fc-timegrid-slot-label',
                'fc-timegrid-axis',
                'fc-header-cell',
                'fc-cell',
                'fc-content-box',
            ];
            if (!props.isLabeled) {
                return (preact.createElement("div", { "data-time": props.isoTimeStr, className: classNames.join(' '), style: {
                        width: props.width,
                    } }));
            }
            let labelFormat = // TODO: fully pre-parse
             options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
                Array.isArray(options.slotLabelFormat) ? internal$1.createFormatter(options.slotLabelFormat[0]) :
                    internal$1.createFormatter(options.slotLabelFormat);
            let renderProps = {
                level: 0,
                time: props.time,
                date: dateEnv.toDate(props.date),
                view: viewApi,
                text: dateEnv.format(props.date, labelFormat),
            };
            return (preact.createElement(internal$1.ContentContainer, { elTag: "div", elClasses: classNames, elAttrs: {
                    'data-time': props.isoTimeStr,
                }, elStyle: {
                    width: props.width,
                }, renderProps: renderProps, generatorName: "slotLabelContent", customGenerator: options.slotLabelContent, defaultGenerator: renderInnerContent, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => (preact.createElement("div", { ref: this.innerElRef, className: 'fc-flex-column' },
                preact.createElement(InnerContent, { elTag: "div", elClasses: [
                        'fc-timegrid-axis-inner',
                        'fc-cell-inner',
                        'fc-padding-sm',
                    ] })))));
        }
        componentDidMount() {
            const { props } = this;
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            if (innerEl) { // could be null if !isLabeled
                // TODO: only attach this if refs props present
                // TODO: fire width/height independently?
                this.detachInnerSize = internal$1.watchSize(innerEl, (width, height) => {
                    internal$1.setRef(props.innerWidthRef, width);
                    internal$1.setRef(props.innerHeightRef, height);
                });
            }
        }
        componentWillUnmount() {
            const { props } = this;
            if (this.detachInnerSize) {
                this.detachInnerSize();
                internal$1.setRef(props.innerWidthRef, null);
                internal$1.setRef(props.innerHeightRef, null);
            }
        }
    }
    function renderInnerContent(props) {
        return props.text;
    }

    class TimeGridSlatLane extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // ref
            this.innerElRef = preact.createRef();
        }
        render() {
            let { props, context } = this;
            let { options } = context;
            let renderProps = {
                time: props.time,
                date: context.dateEnv.toDate(props.date),
                view: context.viewApi,
            };
            return (preact.createElement(internal$1.ContentContainer, { elTag: "div", elClasses: [
                    // TODO: have lane classNames like 'fc-timegrid-lane'/'fc-timegrid-slot-lane'/'fc-timegrid-slat-lane'
                    'fc-cell',
                    'fc-liquid',
                ], elAttrs: {
                    'data-time': props.isoTimeStr,
                }, renderProps: renderProps, generatorName: "slotLaneContent", customGenerator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, (InnerContent) => (preact.createElement("div", { ref: this.innerElRef, className: 'fc-flex-column' },
                preact.createElement(InnerContent, { elTag: "div", elClasses: ['fc-cell-inner'] })))));
        }
        componentDidMount() {
            const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
            // TODO: only attach this if refs props present
            this.detachInnerHeight = internal$1.watchHeight(innerEl, (height) => {
                internal$1.setRef(this.props.innerHeightRef, height);
            });
        }
        componentWillUnmount() {
            this.detachInnerHeight();
            internal$1.setRef(this.props.innerHeightRef, null);
        }
    }

    // segEntries assumed sorted
    function buildWebPositioning(segEntries, strictOrder, maxStackCnt) {
        let hierarchy = new internal$1.SegHierarchy();
        if (strictOrder != null) {
            hierarchy.strictOrder = strictOrder;
        }
        if (maxStackCnt != null) {
            hierarchy.maxStackCnt = maxStackCnt;
        }
        let hiddenEntries = hierarchy.addSegs(segEntries);
        let hiddenGroups = internal$1.groupIntersectingEntries(hiddenEntries);
        let web = buildWeb(hierarchy);
        web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
        let segRects = webToRects(web);
        return [segRects, hiddenGroups];
    }
    function buildWeb(hierarchy) {
        const { entriesByLevel } = hierarchy;
        const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
            let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
            let nextLevelRes = buildNodes(siblingRange, buildNode);
            let entry = entriesByLevel[level][lateral];
            return [
                Object.assign(Object.assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
                entry.thickness + nextLevelRes[1], // the pressure builds
            ];
        });
        return buildNodes(entriesByLevel.length
            ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
            : null, buildNode)[0];
    }
    function buildNodes(siblingRange, buildNode) {
        if (!siblingRange) {
            return [[], 0];
        }
        let { level, lateralStart, lateralEnd } = siblingRange;
        let lateral = lateralStart;
        let pairs = [];
        while (lateral < lateralEnd) {
            pairs.push(buildNode(level, lateral));
            lateral += 1;
        }
        pairs.sort(cmpDescPressures);
        return [
            pairs.map(extractNode),
            pairs[0][1], // first item's pressure
        ];
    }
    function cmpDescPressures(a, b) {
        return b[1] - a[1];
    }
    function extractNode(a) {
        return a[0];
    }
    function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
        let { levelCoords, entriesByLevel } = hierarchy;
        let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
        let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
        let levelCnt = levelCoords.length;
        let level = subjectLevel;
        // skip past levels that are too high up
        for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
            ; // do nothing
        for (; level < levelCnt; level += 1) {
            let entries = entriesByLevel[level];
            let entry;
            let searchIndex = internal$1.binarySearch(entries, subjectEntry.span.start, internal$1.getEntrySpanEnd);
            let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
            let lateralEnd = lateralStart;
            while ( // loop through entries that horizontally intersect
            (entry = entries[lateralEnd]) && // but not past the whole seg list
                entry.span.start < subjectEntry.span.end) {
                lateralEnd += 1;
            }
            if (lateralStart < lateralEnd) {
                return { level, lateralStart, lateralEnd };
            }
        }
        return null;
    }
    function stretchWeb(topLevelNodes, totalThickness) {
        const stretchNode = cacheable((node, startCoord, prevThickness) => internal$1.buildEntryKey(node), (node, startCoord, prevThickness) => {
            let { nextLevelNodes, thickness } = node;
            let allThickness = thickness + prevThickness;
            let thicknessFraction = thickness / allThickness;
            let endCoord;
            let newChildren = [];
            if (!nextLevelNodes.length) {
                endCoord = totalThickness;
            }
            else {
                for (let childNode of nextLevelNodes) {
                    if (endCoord === undefined) {
                        let res = stretchNode(childNode, startCoord, allThickness);
                        endCoord = res[0];
                        newChildren.push(res[1]);
                    }
                    else {
                        let res = stretchNode(childNode, endCoord, 0);
                        newChildren.push(res[1]);
                    }
                }
            }
            let newThickness = (endCoord - startCoord) * thicknessFraction;
            return [endCoord - newThickness, Object.assign(Object.assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
        });
        return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
    }
    // not sorted in any particular order
    function webToRects(topLevelNodes) {
        let rects = [];
        const processNode = cacheable((node, levelCoord, stackDepth) => internal$1.buildEntryKey(node), (node, levelCoord, stackDepth) => {
            let rect = Object.assign(Object.assign({}, node), { levelCoord,
                stackDepth, stackForward: 0 });
            rects.push(rect);
            return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
        });
        function processNodes(nodes, levelCoord, stackDepth) {
            let stackForward = 0;
            for (let node of nodes) {
                stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
            }
            return stackForward;
        }
        processNodes(topLevelNodes, 0, 0);
        return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
    }
    // TODO: move to general util
    function cacheable(keyFunc, workFunc) {
        const cache = {};
        return (...args) => {
            let key = keyFunc(...args);
            return (key in cache)
                ? cache[key]
                : (cache[key] = workFunc(...args));
        };
    }

    function computeFgSegVerticals(segs, dateProfile, colDate, slatCnt, slatHeight, // in pixels
    eventMinHeight, // in pixels
    eventShortHeight) {
        const res = [];
        for (const seg of segs) {
            const startFrac = computeDateTopFrac(seg.start, dateProfile, colDate);
            const endFrac = computeDateTopFrac(seg.end, dateProfile, colDate);
            let heightFrac = endFrac - startFrac;
            let isShort = false;
            if (slatHeight !== undefined) {
                const totalHeight = slatHeight * slatCnt;
                let heightPixels = heightFrac * totalHeight;
                if (eventMinHeight != null && heightPixels < eventMinHeight) {
                    heightPixels = eventMinHeight;
                    heightFrac = heightPixels / totalHeight;
                }
                isShort = eventShortHeight != null && heightPixels < eventShortHeight;
            }
            res.push({
                start: startFrac,
                end: startFrac + heightFrac,
                size: heightFrac,
                isShort,
            });
        }
        return res;
    }
    // HORIZONTAL
    // -------------------------------------------------------------------------------------------------
    function computeFgSegHorizontals(segs, segVerticals, eventOrderStrict, eventMaxStack) {
        const segEntries = segs.map((seg, index) => ({
            index,
            seg,
            thickness: 1,
            span: segVerticals[index],
        }));
        const [segRectsUnordered, hiddenGroups] = buildWebPositioning(segEntries, eventOrderStrict, eventMaxStack);
        const segRects = [];
        for (const segRect of segRectsUnordered) {
            segRects[segRect.index] = segRect;
        }
        return [segRects, hiddenGroups];
    }

    const DEFAULT_TIME_FORMAT = internal$1.createFormatter({
        hour: 'numeric',
        minute: '2-digit',
        meridiem: false,
    });
    class TimeGridEvent extends internal$1.BaseComponent {
        render() {
            const { props } = this;
            return (preact.createElement(internal$1.StandardEvent, Object.assign({}, props, { elClasses: [
                    'fc-timegrid-event',
                    'fc-v-event',
                    props.isShort ? 'fc-timegrid-event-short' : '',
                    props.isInset ? 'fc-timegrid-event-inset' : '',
                ], defaultTimeFormat: DEFAULT_TIME_FORMAT, startOverride: props.segStart, endOverride: props.segEnd })));
        }
    }

    class TimeGridMoreLink extends internal$1.BaseComponent {
        render() {
            let { props } = this;
            return (preact.createElement(internal$1.MoreLinkContainer, { elClasses: ['fc-timegrid-more-link', 'fc-abs'], elStyle: {
                    top: props.top,
                    height: props.height,
                }, allDayDate: null, segs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props), defaultGenerator: renderMoreLinkInner, forceTimed: true }, (InnerContent) => (preact.createElement(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky-y'] }))));
        }
    }
    function renderMoreLinkInner(props) {
        return props.shortText;
    }

    function TimeGridNowIndicatorLine(props) {
        return (preact.createElement("div", { className: "fc-timegrid-now-indicator-container" },
            preact.createElement(internal$1.NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-line'], elStyle: {
                    top: internal$1.fracToCssDim(computeDateTopFrac(props.nowDate, props.dateProfile, props.dayDate))
                }, isAxis: false, date: props.nowDate })));
    }

    class TimeGridCol extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            this.sortEventSegs = internal$1.memoize(internal$1.sortEventSegs);
        }
        render() {
            let { props, context } = this;
            let { options } = context;
            let isSelectMirror = options.selectMirror;
            let mirrorSegs = // yuck
             (props.eventDrag && props.eventDrag.segs) ||
                (props.eventResize && props.eventResize.segs) ||
                (isSelectMirror && props.dateSelectionSegs) ||
                [];
            let interactionAffectedInstances = // TODO: messy way to compute this
             (props.eventDrag && props.eventDrag.affectedInstances) ||
                (props.eventResize && props.eventResize.affectedInstances) ||
                {};
            let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
            // HACK: equired for when column is taller than slats. because all positioning of events is
            // done via percentages. needs to be a percentage of the total slat height
            let slatsTotalHeight = props.slatHeight != null ? props.slatHeight * props.slatCnt : undefined;
            return (preact.createElement(internal$1.DayCellContainer, { elTag: "div", elClasses: [
                    'fc-flex-column',
                    'fc-cell',
                    props.width != null ? '' : 'fc-liquid',
                    'fc-timegrid-col',
                    ...(props.extraClassNames || []),
                ], elAttrs: Object.assign({ role: 'gridcell' }, props.extraDataAttrs), elStyle: {
                    width: props.width
                }, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraRenderProps: props.extraRenderProps }, (InnerContent) => (preact.createElement("div", { className: 'fc-rel fc-flex-column', style: { height: slatsTotalHeight } },
                this.renderFillSegs(props.businessHourSegs, 'non-business'),
                this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                this.renderFillSegs(props.dateSelectionSegs, 'highlight'),
                preact.createElement("div", { className: 'fc-liquid fc-rel fc-timegrid-col-fg' },
                    this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false),
                    this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')),
                this.renderNowIndicator(props.nowIndicatorSegs),
                internal$1.hasCustomDayCellContent(options) && (preact.createElement(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-col-misc'] }))))));
        }
        renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
            let { props } = this;
            if (props.forPrint) {
                return renderPlainFgSegs(sortedFgSegs, props); // TODO: test
            }
            return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
        }
        renderPositionedFgSegs(segs, // if not mirror, needs to be sorted
        segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
            let { props, context } = this;
            let { date, dateProfile, eventSelection, todayRange, nowDate } = props;
            let { eventMaxStack, eventShortHeight, eventOrderStrict, eventMinHeight } = context.options;
            // TODO: memoize this?
            let segVerticals = computeFgSegVerticals(segs, dateProfile, date, props.slatCnt, props.slatHeight, eventMinHeight, eventShortHeight);
            let [segRects, hiddenGroups] = computeFgSegHorizontals(segs, segVerticals, eventOrderStrict, eventMaxStack);
            let isMirror = isDragging || isResizing || isDateSelecting;
            return (preact.createElement(preact.Fragment, null,
                this.renderHiddenGroups(hiddenGroups, segs),
                segs.map((seg, index) => {
                    let { eventRange } = seg;
                    let instanceId = eventRange.instance.instanceId; // guaranteed because it's an fg event
                    let segVertical = segVerticals[index];
                    let setRect = segRects[index]; // for horizontals. could be undefined!? HACK
                    let hStyle = (!isMirror && setRect)
                        ? this.computeSegHStyle(setRect)
                        : { left: 0, right: 0 };
                    let isVisible = isMirror || (setRect && !segIsInvisible[instanceId]);
                    let isInset = setRect && setRect.stackForward > 0;
                    return (preact.createElement("div", { className: 'fc-abs', key: forcedKey || instanceId, style: Object.assign({ visibility: isVisible ? '' : 'hidden', top: internal$1.fracToCssDim(segVertical.start), height: internal$1.fracToCssDim(segVertical.size) }, hStyle) },
                        preact.createElement(TimeGridEvent, Object.assign({ eventRange: eventRange, segStart: seg.start, segEnd: seg.end, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: segVertical.isShort, isInset: isInset }, internal$1.getEventRangeMeta(eventRange, todayRange, nowDate)))));
                })));
        }
        /*
        NOTE: will already have eventMinHeight applied because segEntries already had it
        */
        renderHiddenGroups(hiddenGroups, segs) {
            let { extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize } = this.props;
            return (preact.createElement(preact.Fragment, null, hiddenGroups.map((hiddenGroup) => {
                let startFrac = hiddenGroup.span.start;
                let endFrac = hiddenGroup.span.end;
                let heightFrac = endFrac - startFrac;
                return (preact.createElement(TimeGridMoreLink, { key: hiddenGroup.key, hiddenSegs: hiddenGroup.segs /* TODO: make SegGroup generic */, top: internal$1.fracToCssDim(startFrac), height: internal$1.fracToCssDim(heightFrac), extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
            })));
        }
        renderFillSegs(segs, fillType) {
            let { props, context } = this;
            let segVerticals = computeFgSegVerticals(segs, props.dateProfile, props.date, props.slatCnt, props.slatHeight, context.options.eventMinHeight);
            return (preact.createElement(preact.Fragment, null, segs.map((seg, index) => {
                const { eventRange } = seg;
                const segVertical = segVerticals[index];
                return (preact.createElement("div", { key: internal$1.buildEventRangeKey(eventRange), className: "fc-timegrid-bg-harness fc-fill-x", style: {
                        top: internal$1.fracToCssDim(segVertical.start),
                        height: internal$1.fracToCssDim(segVertical.size),
                    } }, fillType === 'bg-event' ?
                    preact.createElement(internal$1.BgEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd }, internal$1.getEventRangeMeta(eventRange, props.todayRange, props.nowDate))) :
                    internal$1.renderFill(fillType)));
            })));
        }
        renderNowIndicator(segs) {
            let { date, dateProfile } = this.props;
            // TODO: what if nowIndicator turned OFF??
            return segs.map((seg) => (preact.createElement(TimeGridNowIndicatorLine, { nowDate: seg.start, dayDate: date, dateProfile: dateProfile })));
        }
        /*
        TODO: eventually move to width, not left+right
        */
        computeSegHStyle(segRect) {
            let { isRtl, options } = this.context;
            let shouldOverlap = options.slotEventOverlap;
            let nearCoord = segRect.levelCoord; // the left side if LTR. the right side if RTL. floating-point
            let farCoord = segRect.levelCoord + segRect.thickness; // the right side if LTR. the left side if RTL. floating-point
            let left; // amount of space from left edge, a fraction of the total width
            let right; // amount of space from right edge, a fraction of the total width
            if (shouldOverlap) {
                // double the width, but don't go beyond the maximum forward coordinate (1.0)
                farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
            }
            if (isRtl) {
                left = 1 - farCoord;
                right = nearCoord;
            }
            else {
                left = nearCoord;
                right = 1 - farCoord;
            }
            let props = {
                zIndex: segRect.stackDepth + 1,
                left: internal$1.fracToCssDim(left),
                right: internal$1.fracToCssDim(right),
            };
            if (shouldOverlap && !segRect.stackForward) {
                // add padding to the edge so that forward stacked events don't cover the resizer's icon
                props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
            }
            return props;
        }
    }
    function renderPlainFgSegs(sortedFgSegs, { todayRange, nowDate, eventSelection, eventDrag, eventResize }) {
        let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
            (eventResize ? eventResize.affectedInstances : null) ||
            {};
        return (preact.createElement(preact.Fragment, null, sortedFgSegs.map((seg) => {
            let { eventRange } = seg;
            let instanceId = eventRange.instance.instanceId;
            return (preact.createElement("div", { key: instanceId, className: 'fc-timegrid-harness-plain', style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
                preact.createElement(TimeGridEvent, Object.assign({ eventRange: eventRange, segStart: seg.start, segEnd: seg.end, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false, isInset: false }, internal$1.getEventRangeMeta(eventRange, todayRange, nowDate)))));
        })));
    }

    class TimeGridCols extends internal$1.DateComponent {
        constructor() {
            super(...arguments);
            // memo
            this.processSlotOptions = internal$1.memoize(processSlotOptions);
            this.handleRootEl = (el) => {
                this.rootEl = el;
                if (el) {
                    this.context.registerInteractiveComponent(this, {
                        el,
                        isHitComboAllowed: this.props.isHitComboAllowed,
                    });
                }
                else {
                    this.context.unregisterInteractiveComponent(this);
                }
            };
        }
        render() {
            const { props } = this;
            return (preact.createElement("div", { className: [
                    'fc-flex-row',
                    props.className || '',
                ].join(' '), ref: this.handleRootEl }, props.cells.map((cell, col) => (preact.createElement(TimeGridCol, { key: cell.key, dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, date: cell.date, slatCnt: props.slatCnt, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraDateSpan: cell.extraDateSpan, forPrint: props.forPrint, 
                // content
                fgEventSegs: props.fgEventSegsByCol[col], bgEventSegs: props.bgEventSegsByCol[col], businessHourSegs: props.businessHourSegsByCol[col], nowIndicatorSegs: props.nowIndicatorSegsByCol[col], dateSelectionSegs: props.dateSelectionSegsByCol[col], eventDrag: props.eventDragByCol[col], eventResize: props.eventResizeByCol[col], eventSelection: props.eventSelection, 
                // dimensions
                width: props.colWidth, slatHeight: props.slatHeight })))));
        }
        queryHit(positionLeft, positionTop, elWidth) {
            const { dateProfile, cells, colWidth, slatHeight } = this.props;
            const { dateEnv, options, isRtl } = this.context;
            const { snapDuration, snapsPerSlot } = this.processSlotOptions(options.slotDuration, options.snapDuration);
            const colCnt = cells.length;
            const { col, left, right } = internal$2.computeColFromPosition(positionLeft, elWidth, colWidth, colCnt, isRtl);
            const cell = cells[col];
            const slatIndex = Math.floor(positionTop / slatHeight);
            const slatTop = slatIndex * slatHeight;
            const partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            const localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            const snapIndex = slatIndex + localSnapIndex * snapsPerSlot;
            const time = internal$1.addDurations(dateProfile.slotMinTime, internal$1.multiplyDuration(snapDuration, snapIndex));
            const start = dateEnv.add(cell.date, time);
            const end = dateEnv.add(start, snapDuration);
            return {
                dateProfile,
                dateSpan: Object.assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
                // HACK. TODO: This is expensive to do every hit-query
                dayEl: internal$2.getCellEl(this.rootEl, col),
                rect: {
                    left,
                    right,
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
    }
    // Utils
    // -------------------------------------------------------------------------------------------------
    function processSlotOptions(slotDuration, snapDurationOverride) {
        let snapDuration = snapDurationOverride || slotDuration;
        let snapsPerSlot = internal$1.wholeDivideDurations(slotDuration, snapDuration);
        if (snapsPerSlot === null) {
            snapDuration = slotDuration;
            snapsPerSlot = 1;
            // TODO: say warning?
        }
        return { snapDuration, snapsPerSlot };
    }

    class TimeGridLayoutPannable extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            this.state = {
                headerTierHeights: [],
            };
            // refs
            this.headerLabelInnerWidthRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleAxisWidths);
            });
            this.headerLabelInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleHeaderHeights);
            });
            this.headerMainInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleHeaderHeights);
            });
            this.handleAllDayLabelInnerWidth = (width) => {
                this.allDayLabelInnerWidth = width;
                internal$1.afterSize(this.handleAxisWidths);
            };
            this.handleAllDayLabelInnerHeight = (height) => {
                this.allDayLabelInnerHeight = height;
                internal$1.afterSize(this.handleAllDayHeights);
            };
            this.handleAllDayMainInnerHeight = (height) => {
                this.allDayMainInnerHeight = height;
                internal$1.afterSize(this.handleAllDayHeights);
            };
            this.slatLabelInnerWidthRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleAxisWidths);
            });
            this.slatLabelInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleSlatInnerHeights);
            });
            this.slatMainInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleSlatInnerHeights);
            });
            this.headerScrollerRef = preact.createRef();
            this.allDayScrollerRef = preact.createRef();
            this.mainScrollerRef = preact.createRef();
            this.footScrollerRef = preact.createRef();
            this.axisScrollerRef = preact.createRef();
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleScrollerWidth = (scrollerWidth) => {
                this.setState({ scrollerWidth });
            };
            this.handleScrollerHeight = (scrollerHeight) => {
                this.setState({ scrollerHeight });
            };
            this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
                this.setState({ leftScrollbarWidth });
            };
            this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
                this.setState({ rightScrollbarWidth });
            };
            this.handleBottomScrollbarWidth = (bottomScrollbarWidth) => {
                this.setState({ bottomScrollbarWidth });
            };
            this.handleHeaderHeights = () => {
                const headerLabelInnerHeightMap = this.headerLabelInnerHeightRefMap.current;
                const headerMainInnerHeightMap = this.headerMainInnerHeightRefMap.current;
                const heights = [];
                // important to loop using 'main' because 'label' might not be tracking height if empty
                for (const [tierNum, mainHeight] of headerMainInnerHeightMap.entries()) {
                    heights[tierNum] = Math.max(headerLabelInnerHeightMap.get(tierNum) || 0, mainHeight);
                }
                const { headerTierHeights } = this.state;
                if (!internal$1.isArraysEqual(headerTierHeights, heights)) {
                    this.setState({ headerTierHeights: heights });
                }
            };
            this.handleAllDayHeights = () => {
                let max = Math.max(this.allDayLabelInnerHeight, this.allDayMainInnerHeight);
                if (this.state.allDayHeight !== max) {
                    this.setState({ allDayHeight: max });
                }
            };
            this.handleSlatInnerHeights = () => {
                const slatLabelInnerHeightMap = this.slatLabelInnerHeightRefMap.current;
                const slatMainInnerHeightMap = this.slatMainInnerHeightRefMap.current;
                let max = 0;
                for (const slatLabelInnerHeight of slatLabelInnerHeightMap.values()) {
                    max = Math.max(max, slatLabelInnerHeight);
                }
                for (const slatMainInnerHeight of slatMainInnerHeightMap.values()) {
                    max = Math.max(max, slatMainInnerHeight);
                }
                if (this.state.slatInnerHeight !== max) {
                    this.setState({ slatInnerHeight: max });
                }
            };
            this.handleAxisWidths = () => {
                const headerLabelInnerWidthMap = this.headerLabelInnerWidthRefMap.current;
                const slatLabelInnerWidthMap = this.slatLabelInnerWidthRefMap.current;
                let max = this.allDayLabelInnerWidth || 0; // guard against all-day slot hidden
                for (const headerLabelInnerWidth of headerLabelInnerWidthMap.values()) {
                    max = Math.max(max, headerLabelInnerWidth);
                }
                for (const slatLableInnerWidth of slatLabelInnerWidthMap.values()) {
                    max = Math.max(max, slatLableInnerWidth);
                }
                if (this.state.axisWidth !== max) {
                    this.setState({ axisWidth: max });
                }
            };
        }
        render() {
            const { props, state, context, headerLabelInnerWidthRefMap, headerLabelInnerHeightRefMap, headerMainInnerHeightRefMap, slatLabelInnerWidthRefMap, slatLabelInnerHeightRefMap, slatMainInnerHeightRefMap, } = this;
            const { nowDate, headerTiers } = props;
            const { axisWidth } = state;
            const { options } = context;
            const verticalScrolling = !props.forPrint && !internal$1.getIsHeightAuto(options);
            const stickyHeaderDates = !props.forPrint && internal$1.getStickyHeaderDates(options);
            const stickyFooterScrollbar = !props.forPrint && internal$1.getStickyFooterScrollbar(options);
            const colCnt = props.cells.length;
            // TODO: memo?
            const [canvasWidth, colWidth] = internal$2.computeColWidth(colCnt, props.dayMinWidth, state.scrollerWidth);
            const slatCnt = props.slatMetas.length;
            const [slatHeight, slatLiquid] = computeSlatHeight(// TODO: memo?
            verticalScrolling && options.expandRows, slatCnt, state.slatInnerHeight, state.scrollerHeight);
            this.slatHeight = slatHeight;
            return (preact.createElement(preact.Fragment, null,
                options.dayHeaders && (preact.createElement("div", { className: [
                        'fc-timegrid-header',
                        'fc-row',
                        stickyHeaderDates ? 'fc-sticky-header' : '',
                    ].join(' ') },
                    preact.createElement("div", { className: 'fc-cell fc-content-box' // a "super" cell
                        , style: { width: axisWidth } }, headerTiers.map((models, tierNum) => (preact.createElement("div", { key: tierNum, className: 'fc-row', style: { height: state.headerTierHeights[tierNum] } }, props.renderHeaderLabel(// .fc-cell
                    tierNum, headerLabelInnerWidthRefMap.createRef(tierNum), // innerWidthRef
                    headerLabelInnerHeightRefMap.createRef(tierNum), // innerHeightRef
                    undefined))))),
                    preact.createElement(internal$1.Scroller, { horizontal: true, hideScrollbars: true, elClassNames: ['fc-cell fc-liquid'], 
                        // ^NOTE: not a good idea if ever gets left/right border
                        ref: this.headerScrollerRef },
                        preact.createElement("div", { className: 'fc-content-box', style: {
                                width: canvasWidth,
                                paddingLeft: state.leftScrollbarWidth,
                                paddingRight: state.rightScrollbarWidth,
                            } }, props.headerTiers.map((cells, tierNum) => (preact.createElement(internal$2.HeaderRowAdvanced // .fc-row
                        , { key: tierNum, tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, innerHeightRef: headerMainInnerHeightRefMap.createRef(tierNum), height: state.headerTierHeights[tierNum], colWidth: colWidth }))))))),
                options.allDaySlot && (preact.createElement(preact.Fragment, null,
                    preact.createElement("div", { className: 'fc-timegrid-allday fc-row' // a "super" row
                        , style: { height: state.allDayHeight } },
                        preact.createElement(TimeGridAllDayLabel // .fc-cell
                        , { innerWidthRef: this.handleAllDayLabelInnerWidth, innerHeightRef: this.handleAllDayLabelInnerHeight, width: axisWidth }),
                        preact.createElement(internal$1.Scroller, { horizontal: true, hideScrollbars: true, elClassNames: ['fc-cell', 'fc-liquid'], 
                            // ^NOTE: not a good idea if ever gets left/right border
                            ref: this.allDayScrollerRef },
                            preact.createElement("div", { className: 'fc-content-box', style: {
                                    width: canvasWidth,
                                    paddingLeft: state.leftScrollbarWidth,
                                    paddingRight: state.rightScrollbarWidth,
                                } },
                                preact.createElement(TimeGridAllDayLane, { dateProfile: props.dateProfile, todayRange: props.todayRange, cells: props.cells, showDayNumbers: false, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, compact: state.scrollerWidth != null
                                        && state.scrollerWidth / props.cells.length < internal$2.COMPACT_CELL_WIDTH, 
                                    // content
                                    fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, 
                                    // refs
                                    innerHeightRef: this.handleAllDayMainInnerHeight, 
                                    // dimensions
                                    colWidth: colWidth })))),
                    preact.createElement("div", { className: 'fc-rowdivider' }))),
                preact.createElement("div", { className: [
                        'fc-timegrid-body fc-row',
                        verticalScrolling ? 'fc-liquid' : '',
                    ].join(' ') },
                    preact.createElement(internal$1.Scroller, { vertical: verticalScrolling, hideScrollbars: true, elClassNames: [
                            'fc-cell',
                            'fc-flex-column',
                            'fc-content-box',
                        ], elStyle: {
                            width: axisWidth,
                        }, ref: this.axisScrollerRef },
                        preact.createElement("div", { 
                            // NOTE: fc-timegrid-slots is purely for tests/old-print-view. remove somehow?
                            className: 'fc-timegrid-slots fc-grow fc-flex-column fc-rel', style: {
                                paddingBottom: state.bottomScrollbarWidth,
                            } },
                            props.slatMetas.map((slatMeta) => (preact.createElement("div", { key: slatMeta.key, className: [
                                    getSlatRowClassName(slatMeta),
                                    slatLiquid ? 'fc-liquid' : ''
                                ].join(' '), style: {
                                    height: slatLiquid ? '' : slatHeight
                                } },
                                preact.createElement(TimeGridSlatLabel // .fc-cell
                                , Object.assign({}, slatMeta, { width: undefined, innerWidthRef: slatLabelInnerWidthRefMap.createRef(slatMeta.key), innerHeightRef: slatLabelInnerHeightRefMap.createRef(slatMeta.key) }))))),
                            options.nowIndicator && internal$1.rangeContainsMarker(props.dateProfile.currentRange, nowDate) && (preact.createElement(TimeGridNowIndicatorArrow, { nowDate: nowDate, dateProfile: props.dateProfile })))),
                    preact.createElement("div", { className: 'fc-cell fc-liquid fc-flex-column' // a "super" cell
                     },
                        preact.createElement(internal$1.Scroller, { vertical: verticalScrolling, horizontal: true, hideScrollbars: stickyFooterScrollbar /* also means height:auto, so won't need vertical scrollbars anyway */, elClassNames: [
                                verticalScrolling ? 'fc-liquid' : '',
                                'fc-flex-column',
                            ], ref: this.mainScrollerRef, widthRef: this.handleScrollerWidth, heightRef: this.handleScrollerHeight, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, bottomScrollbarWidthRef: this.handleBottomScrollbarWidth },
                            preact.createElement("div", { className: 'fc-grow fc-flex-column fc-rel', style: { width: canvasWidth } },
                                preact.createElement("div", { className: 'fc-grow fc-flex-column' }, props.slatMetas.map((slatMeta) => (preact.createElement("div", { key: slatMeta.key, className: [
                                        getSlatRowClassName(slatMeta),
                                        slatLiquid ? 'fc-liquid' : ''
                                    ].join(' '), style: {
                                        height: slatLiquid ? '' : slatHeight
                                    } },
                                    preact.createElement(TimeGridSlatLane // .fc-cell
                                    , Object.assign({}, slatMeta, { innerHeightRef: slatMainInnerHeightRefMap.createRef(slatMeta.key) })))))),
                                preact.createElement(TimeGridCols, { dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatCnt: slatCnt, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-fill fc-liquid', 
                                    // content
                                    fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, eventSelection: props.eventSelection, 
                                    // dimensions
                                    colWidth: colWidth, slatHeight: slatHeight }))),
                        Boolean(stickyFooterScrollbar) && (preact.createElement(internal$1.Scroller, { horizontal: true, elClassNames: ['fc-sticky-footer'], elStyle: {
                                marginTop: '-1px', // HACK
                            }, 
                            // ^NOTE: not a good idea if ever gets left/right border
                            ref: this.footScrollerRef },
                            preact.createElement("div", { style: {
                                    width: canvasWidth,
                                    height: '1px', // HACK
                                } })))))));
        }
        // Lifecycle
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            this.initScrollers();
            this.updateSlatHeight();
        }
        componentDidUpdate() {
            this.updateScrollers();
            this.updateSlatHeight();
        }
        componentWillUnmount() {
            this.destroyScrollers();
        }
        updateSlatHeight() {
            if (this.prevSlatHeight !== this.slatHeight) {
                internal$1.setRef(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
            }
        }
        // Scrolling
        // -----------------------------------------------------------------------------------------------
        initScrollers() {
            const ScrollerSyncer = internal$1.getScrollerSyncerClass(this.context.pluginHooks);
            this.dayScroller = new ScrollerSyncer(true); // horizontal=true
            this.timeScroller = new ScrollerSyncer(); // horizontal=false
            internal$1.setRef(this.props.dayScrollerRef, this.dayScroller);
            internal$1.setRef(this.props.timeScrollerRef, this.timeScroller);
            this.updateScrollers();
        }
        updateScrollers() {
            this.dayScroller.handleChildren([
                this.headerScrollerRef.current,
                this.allDayScrollerRef.current,
                this.mainScrollerRef.current,
                this.footScrollerRef.current,
            ]);
            this.timeScroller.handleChildren([
                this.axisScrollerRef.current,
                this.mainScrollerRef.current,
            ]);
        }
        destroyScrollers() {
            internal$1.setRef(this.props.dayScrollerRef, null);
            internal$1.setRef(this.props.timeScrollerRef, null);
        }
    }

    class TimeGridLayoutNormal extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // refs
            this.headerLabelInnerWidthRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleAxisInnerWidths);
            });
            this.handleAllDayLabelInnerWidth = (width) => {
                this.allDayLabelInnerWidth = width;
                internal$1.afterSize(this.handleAxisInnerWidths);
            };
            this.slatLabelInnerWidthRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleAxisInnerWidths);
            });
            this.slatLabelInnerHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleSlatInnerHeights);
            });
            this.slatInnerMainHeightRefMap = new internal$1.RefMap(() => {
                internal$1.afterSize(this.handleSlatInnerHeights);
            });
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleScrollerWidth = (scrollerWidth) => {
                this.setState({ scrollerWidth });
            };
            this.handleScrollerHeight = (scrollerHeight) => {
                this.setState({ scrollerHeight });
            };
            this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
                this.setState({ leftScrollbarWidth });
            };
            this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
                this.setState({ rightScrollbarWidth });
            };
            this.handleAxisInnerWidths = () => {
                const headerLabelInnerWidthMap = this.headerLabelInnerWidthRefMap.current;
                const slatLabelInnerWidthMap = this.slatLabelInnerWidthRefMap.current;
                let max = this.allDayLabelInnerWidth || 0; // guard against all-day slot hidden
                for (const headerLabelInnerWidth of headerLabelInnerWidthMap.values()) {
                    max = Math.max(max, headerLabelInnerWidth);
                }
                for (const slatLabelInnerWidth of slatLabelInnerWidthMap.values()) {
                    max = Math.max(max, slatLabelInnerWidth);
                }
                if (this.state.axisWidth !== max) {
                    this.setState({ axisWidth: max });
                }
            };
            this.handleSlatInnerHeights = () => {
                const slatLabelInnerHeightMap = this.slatLabelInnerHeightRefMap.current;
                const slatMainInnerHeightMap = this.slatInnerMainHeightRefMap.current;
                let max = 0;
                for (const slatLabelInnerHeight of slatLabelInnerHeightMap.values()) {
                    max = Math.max(max, slatLabelInnerHeight);
                }
                for (const slatInnerHeight of slatMainInnerHeightMap.values()) {
                    max = Math.max(max, slatInnerHeight);
                }
                if (this.state.slatInnerHeight !== max) {
                    this.setState({ slatInnerHeight: max });
                }
            };
        }
        render() {
            const { props, state, context, slatLabelInnerWidthRefMap, slatLabelInnerHeightRefMap, slatInnerMainHeightRefMap, headerLabelInnerWidthRefMap } = this;
            const { nowDate } = props;
            const { axisWidth } = state;
            const { options } = context;
            const verticalScrolling = !props.forPrint && !internal$1.getIsHeightAuto(options);
            const stickyHeaderDates = !props.forPrint && internal$1.getStickyHeaderDates(options);
            const slatCnt = props.slatMetas.length;
            const [slatHeight, slatLiquid] = computeSlatHeight(verticalScrolling && options.expandRows, slatCnt, state.slatInnerHeight, state.scrollerHeight);
            this.slatHeight = slatHeight;
            return (preact.createElement(preact.Fragment, null,
                options.dayHeaders && (preact.createElement("div", { className: [
                        'fc-timegrid-header',
                        'fc-rowgroup',
                        stickyHeaderDates ? 'fc-sticky-header' : '',
                    ].join(' '), style: {
                        paddingLeft: state.leftScrollbarWidth,
                        paddingRight: state.rightScrollbarWidth,
                    } }, props.headerTiers.map((cells, tierNum) => (preact.createElement("div", { key: tierNum, className: 'fc-row' },
                    props.renderHeaderLabel(// .fc-cell
                    tierNum, headerLabelInnerWidthRefMap.createRef(tierNum), // innerWidthRef
                    undefined, // innerHeightRef
                    axisWidth),
                    preact.createElement(internal$2.HeaderRow, { tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, cellGroup: true, className: 'fc-cell fc-liquid' })))))),
                options.allDaySlot && (preact.createElement(preact.Fragment, null,
                    preact.createElement("div", { className: 'fc-timegrid-allday fc-row', style: {
                            paddingLeft: state.leftScrollbarWidth,
                            paddingRight: state.rightScrollbarWidth,
                        } },
                        preact.createElement(TimeGridAllDayLabel // .fc-cell
                        , { width: axisWidth, innerWidthRef: this.handleAllDayLabelInnerWidth }),
                        preact.createElement(TimeGridAllDayLane, { dateProfile: props.dateProfile, todayRange: props.todayRange, cells: props.cells, showDayNumbers: false, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-liquid fc-cell', compact: (state.scrollerWidth != null && state.axisWidth != null)
                                && (state.scrollerWidth - state.axisWidth) / props.cells.length < internal$2.COMPACT_CELL_WIDTH, 
                            // content
                            fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows })),
                    preact.createElement("div", { className: 'fc-rowdivider' }))),
                preact.createElement(internal$1.Scroller, { vertical: verticalScrolling, elClassNames: [
                        'fc-timegrid-body',
                        'fc-rowgroup',
                        verticalScrolling ? 'fc-liquid' : '',
                    ], ref: props.timeScrollerRef, widthRef: this.handleScrollerWidth, heightRef: this.handleScrollerHeight, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth },
                    preact.createElement("div", { className: 'fc-flex-column fc-grow fc-rel' },
                        preact.createElement("div", { className: 'fc-timegrid-slots fc-flex-column fc-grow' }, props.slatMetas.map((slatMeta) => (preact.createElement("div", { key: slatMeta.key, className: [
                                getSlatRowClassName(slatMeta),
                                slatLiquid ? 'fc-liquid' : ''
                            ].join(' '), style: {
                                height: slatLiquid ? '' : slatHeight
                            } },
                            preact.createElement(TimeGridSlatLabel // .fc-cell
                            , Object.assign({}, slatMeta, { innerWidthRef: slatLabelInnerWidthRefMap.createRef(slatMeta.key), innerHeightRef: slatLabelInnerHeightRefMap.createRef(slatMeta.key), width: axisWidth })),
                            preact.createElement(TimeGridSlatLane // .fc-cell
                            , Object.assign({}, slatMeta, { innerHeightRef: slatInnerMainHeightRefMap.createRef(slatMeta.key) })))))),
                        preact.createElement("div", { className: 'fc-fill fc-flex-row' },
                            preact.createElement("div", { className: 'fc-cell fc-content-box', style: { width: axisWidth } }, options.nowIndicator && internal$1.rangeContainsMarker(props.dateProfile.currentRange, nowDate) && (preact.createElement(TimeGridNowIndicatorArrow, { nowDate: nowDate, dateProfile: props.dateProfile }))),
                            preact.createElement(TimeGridCols, { dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatCnt: slatCnt, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-liquid fc-cell', 
                                // content
                                fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, eventSelection: props.eventSelection, 
                                // dimensions
                                slatHeight: slatHeight }))))));
        }
        // Lifecycle
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            this.updateSlatHeight();
        }
        componentDidUpdate() {
            this.updateSlatHeight();
        }
        updateSlatHeight() {
            if (this.prevSlatHeight !== this.slatHeight) {
                internal$1.setRef(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
            }
        }
    }

    class TimeGridLayout extends internal$1.BaseComponent {
        constructor() {
            super(...arguments);
            // memo
            this.buildSlatMetas = internal$1.memoize(buildSlatMetas);
            // refs
            this.dayScrollerRef = preact.createRef();
            this.timeScrollerRef = preact.createRef();
            this.scrollTime = null;
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleSlatHeight = (slatHeight) => {
                this.slatHeight = slatHeight;
                internal$1.afterSize(this.updateScroll);
            };
            this.handleTimeScroll = (scrollTime) => {
                this.scrollTime = scrollTime;
                this.updateScroll();
            };
            this.updateScroll = () => {
                const timeScroller = this.timeScrollerRef.current;
                const { scrollTime, slatHeight } = this;
                // Since updateScroll is called by handleSlatHeight, could be called with null during cleanup,
                // and the timeScroller might not exist
                if (timeScroller && scrollTime && slatHeight != null) {
                    let top = computeTimeTopFrac(scrollTime, this.props.dateProfile)
                        * (slatHeight * this.currentSlatCnt)
                        + (this.context.isRtl ? -1 : 1); // overcome border
                    if (top) {
                        top++; // overcome top border
                    }
                    timeScroller.scrollTo({ y: top });
                }
            };
            this.clearScroll = () => {
                this.scrollTime = null;
            };
        }
        render() {
            const { props, context } = this;
            const { dateProfile } = props;
            const { options, dateEnv } = context;
            const { dayMinWidth } = options;
            const slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
            this.currentSlatCnt = slatMetas.length;
            const commonLayoutProps = Object.assign(Object.assign({ dateProfile: dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatMetas, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
                // header content
                headerTiers: props.headerTiers, renderHeaderLabel: props.renderHeaderLabel, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
                // all-day content
                fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize }, getAllDayMaxEventProps(options)), { 
                // timed content
                fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, 
                // universal content
                eventSelection: props.eventSelection, 
                // refs
                timeScrollerRef: this.timeScrollerRef, slatHeightRef: this.handleSlatHeight });
            return (preact.createElement(internal$1.ViewContainer, { elClasses: [
                    props.className,
                    'fc-flex-column',
                    'fc-border'
                ], viewSpec: context.viewSpec }, dayMinWidth ? (preact.createElement(TimeGridLayoutPannable, Object.assign({}, commonLayoutProps, { dayMinWidth: dayMinWidth, dayScrollerRef: this.dayScrollerRef }))) : (preact.createElement(TimeGridLayoutNormal, Object.assign({}, commonLayoutProps)))));
        }
        // Lifecycle
        // -----------------------------------------------------------------------------------------------
        componentDidMount() {
            this.resetScroll();
            this.context.emitter.on('_timeScrollRequest', this.handleTimeScroll);
            this.timeScrollerRef.current.addScrollEndListener(this.clearScroll);
        }
        componentDidUpdate(prevProps) {
            if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
                this.resetScroll();
            }
        }
        componentWillUnmount() {
            this.context.emitter.off('_timeScrollRequest', this.handleTimeScroll);
            this.timeScrollerRef.current.removeScrollEndListener(this.clearScroll);
        }
        // Scrolling
        // -----------------------------------------------------------------------------------------------
        resetScroll() {
            this.handleTimeScroll(this.context.options.scrollTime);
            const dayScroller = this.dayScrollerRef.current;
            if (dayScroller) {
                dayScroller.scrollTo({ x: 0 });
            }
        }
    }
    // Utils
    // -----------------------------------------------------------------------------------------------
    const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
    function getAllDayMaxEventProps(options) {
        let { dayMaxEvents, dayMaxEventRows } = options;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents, dayMaxEventRows };
    }

    class TimeGridView extends internal$1.DateComponent {
        constructor() {
            super(...arguments);
            // memo
            this.createDayHeaderFormatter = internal$1.memoize(internal$2.createDayHeaderFormatter);
            this.buildTimeColsModel = internal$1.memoize(buildTimeColsModel);
            this.buildDayRanges = internal$1.memoize(buildDayRanges);
            this.splitFgEventSegs = internal$1.memoize(splitSegsByCol);
            this.splitBgEventSegs = internal$1.memoize(splitSegsByCol);
            this.splitBusinessHourSegs = internal$1.memoize(splitSegsByCol);
            this.splitNowIndicatorSegs = internal$1.memoize(splitSegsByCol);
            this.splitDateSelectionSegs = internal$1.memoize(splitSegsByCol);
            this.splitEventDrag = internal$1.memoize(splitInteractionByCol);
            this.splitEventResize = internal$1.memoize(splitInteractionByCol);
            // internal
            this.allDaySplitter = new AllDaySplitter();
            this.dayTableSlicer = new internal$2.DayTableSlicer();
            this.dayTimeColsSlicer = new DayTimeColsSlicer();
        }
        render() {
            const { props, context } = this;
            const { dateProfile } = props;
            const { options, dateProfileGenerator } = context;
            const dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
            const dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
            const splitProps = this.allDaySplitter.splitProps(props);
            const allDayProps = this.dayTableSlicer.sliceProps(splitProps.allDay, dateProfile, options.nextDayThreshold, context, dayTableModel);
            const timedProps = this.dayTimeColsSlicer.sliceProps(splitProps.timed, dateProfile, null, context, dayRanges);
            const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, true, // datesRepDistinctDays
            dayTableModel.colCnt);
            return (preact.createElement(internal$1.NowTimer, { unit: options.nowIndicator ? 'minute' : 'day' /* hacky */ }, (nowDate, todayRange) => {
                const colCnt = dayTableModel.cellRows[0].length;
                const nowIndicatorSeg = options.nowIndicator &&
                    this.dayTimeColsSlicer.sliceNowDate(nowDate, dateProfile, options.nextDayThreshold, context, dayRanges);
                const fgEventSegsByCol = this.splitFgEventSegs(timedProps.fgEventSegs, colCnt);
                const bgEventSegsByCol = this.splitBgEventSegs(timedProps.bgEventSegs, colCnt);
                const businessHourSegsByCol = this.splitBusinessHourSegs(timedProps.businessHourSegs, colCnt);
                const nowIndicatorSegsByCol = this.splitNowIndicatorSegs(nowIndicatorSeg, colCnt);
                const dateSelectionSegsByCol = this.splitDateSelectionSegs(timedProps.dateSelectionSegs, colCnt);
                const eventDragByCol = this.splitEventDrag(timedProps.eventDrag, colCnt);
                const eventResizeByCol = this.splitEventResize(timedProps.eventResize, colCnt);
                return (preact.createElement(TimeGridLayout, { dateProfile: dateProfile, nowDate: nowDate, todayRange: todayRange, cells: dayTableModel.cellRows[0], forPrint: props.forPrint, className: 'fc-timegrid-view', 
                    // header content
                    headerTiers: dayTableModel.cellRows /* guaranteed to be one row */, renderHeaderLabel: (tierNum, innerWidthRef, innerHeightRef, width) => (options.weekNumbers ? (preact.createElement(TimeGridWeekNumber // .fc-cell
                    , { dateProfile: dateProfile, innerWidthRef: innerWidthRef, innerHeightRef: innerHeightRef, width: width })) : (preact.createElement("div", { className: 'fc-timegrid-axis fc-cell fc-content-box', style: { width } }))), renderHeaderContent: (cell, tierNum, innerHeightRef, colWidth) => (preact.createElement(internal$2.DateHeaderCell, Object.assign({}, cell /* for date & extraRenderProps/etc */, { dateProfile: dateProfile, todayRange: todayRange, navLink: dayTableModel.colCnt > 1, dayHeaderFormat: dayHeaderFormat, innerHeightRef: innerHeightRef, colWidth: colWidth }))), getHeaderModelKey: (cell) => cell.key, 
                    // all-day content
                    fgEventSegs: allDayProps.fgEventSegs, bgEventSegs: allDayProps.bgEventSegs, businessHourSegs: allDayProps.businessHourSegs, dateSelectionSegs: allDayProps.dateSelectionSegs, eventDrag: allDayProps.eventDrag, eventResize: allDayProps.eventResize, 
                    // timed content
                    fgEventSegsByCol: fgEventSegsByCol, bgEventSegsByCol: bgEventSegsByCol, businessHourSegsByCol: businessHourSegsByCol, nowIndicatorSegsByCol: nowIndicatorSegsByCol, dateSelectionSegsByCol: dateSelectionSegsByCol, eventDragByCol: eventDragByCol, eventResizeByCol: eventResizeByCol, 
                    // universal content
                    eventSelection: props.eventSelection }));
            }));
        }
    }

    const OPTION_REFINERS = {
        allDaySlot: Boolean,
    };

    var css_248z = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:flex;flex-direction:column;position:relative}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-inner{color:var(--fc-event-text-color);display:flex;flex-direction:column;flex-grow:1;min-width:0}.fc-v-event .fc-event-time{white-space:nowrap}.fc-v-event .fc-event-time,.fc-v-event .fc-event-title{overflow:hidden}.fc-v-event .fc-event-title-outer{display:flex;flex-direction:column;flex-grow:1;min-width:0}.fc-v-event .fc-event-title{bottom:0;position:sticky;top:0}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-timegrid-axis{align-items:flex-end}.fc-timegrid-axis,.fc-timegrid-axis-inner{display:flex;flex-direction:column;justify-content:center}.fc-timegrid-axis-inner{min-height:1.5em}.fc-timegrid-slot-minor{border-style:dotted}.fc-timegrid-col{position:relative}.fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc-timegrid-bg-harness .fc-non-business{z-index:1}.fc-timegrid-bg-harness .fc-bg-event{z-index:2}.fc-timegrid-bg-harness .fc-highlight,.fc-timegrid-col-fg{z-index:3}.fc-direction-ltr .fc-timegrid-col-fg{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-fg{margin:0 2px 0 2.5%}.fc-timegrid-event{border-radius:3px;bottom:0;font-size:var(--fc-small-font-size);left:0;margin-bottom:1px;position:absolute;right:0;top:0;z-index:3}.fc-timegrid-event-inset,.fc-timegrid-event.fc-event-mirror{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-harness-plain>.fc-timegrid-event{position:static}.fc-timegrid-event .fc-event-inner{padding:1px 1px 0}.fc-timegrid-event-short .fc-event-inner{flex-direction:row;overflow:hidden}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title,.fc-timegrid-more-link{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);border-radius:3px;box-shadow:0 0 0 1px var(--fc-page-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;z-index:9999}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc-timegrid-more-link-inner{padding:3px 2px}.fc-timegrid-now-indicator-container{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.fc-timegrid-now-indicator-arrow,.fc-timegrid-now-indicator-line{pointer-events:none}.fc-timegrid-now-indicator-line{border-width:1px 0 0;left:0;right:0}.fc-timegrid-now-indicator-arrow,.fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;position:absolute;z-index:4}.fc-timegrid-now-indicator-arrow{margin-top:-5px}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
    internal$1.injectStyles(css_248z);

    var plugin = core.createPlugin({
        name: '@fullcalendar/timegrid',
        initialView: 'timeGridWeek',
        optionRefiners: OPTION_REFINERS,
        views: {
            timeGrid: {
                component: TimeGridView,
                usesMinMaxTime: true,
                allDaySlot: true,
                slotDuration: '00:30:00',
                slotEventOverlap: true, // a bad name. confused with overlap/constraint system
            },
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 },
            },
            timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 },
            },
        },
    });

    var internal = {
        __proto__: null,
        splitSegsByCol: splitSegsByCol,
        splitInteractionByCol: splitInteractionByCol,
        DayTimeColsSlicer: DayTimeColsSlicer,
        buildSlatMetas: buildSlatMetas,
        AllDaySplitter: AllDaySplitter,
        TimeGridView: TimeGridView,
        TimeGridLayout: TimeGridLayout,
        TimeGridWeekNumber: TimeGridWeekNumber,
        buildTimeColsModel: buildTimeColsModel,
        buildDayRanges: buildDayRanges
    };

    core.globalPlugins.push(plugin);

    exports.Internal = internal;
    exports["default"] = plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, FullCalendar, FullCalendar.Internal, FullCalendar.Preact, FullCalendar.DayGrid.Internal);
