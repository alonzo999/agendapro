/*!
FullCalendar Multi-Month Plugin v7.0.0-beta.1
Docs & License: https://fullcalendar.io/docs/multimonth-grid
(c) 2024 Adam Shaw
*/
FullCalendar.MultiMonth = (function (exports, core, internal$1, internal, preact) {
    'use strict';

    class SingleMonth extends internal.DateComponent {
        constructor() {
            super(...arguments);
            this.slicer = new internal$1.DayTableSlicer();
            // memo
            this.buildDayTableModel = internal.memoize(internal$1.buildDayTableModel);
            this.createDayHeaderFormatter = internal.memoize(internal$1.createDayHeaderFormatter);
        }
        render() {
            const { props, context } = this;
            const { dateProfile, forPrint } = props;
            const { options } = context;
            const dayTableModel = this.buildDayTableModel(dateProfile, context.dateProfileGenerator);
            const slicedProps = this.slicer.sliceProps(props, dateProfile, options.nextDayThreshold, context, dayTableModel);
            // ensure single-month has aspect ratio
            const tableHeight = typeof props.width === 'number'
                ? props.width / options.aspectRatio
                : null;
            const rowCnt = dayTableModel.cellRows.length;
            const rowHeight = tableHeight != null ? tableHeight / rowCnt : null;
            const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, false, // datesRepDistinctDays
            dayTableModel.colCnt);
            // TODO: tell children if we know dimensions are unstable?
            return (preact.createElement("div", { "data-date": props.isoDateStr, role: "grid", className: "fc-multimonth-month fc-grow", style: { width: props.width } },
                preact.createElement("div", { className: "fc-multimonth-header", style: { marginBottom: rowHeight }, role: "presentation" },
                    preact.createElement("div", { className: "fc-multimonth-title" }, context.dateEnv.format(props.dateProfile.currentRange.start, props.titleFormat)),
                    preact.createElement("div", { className: 'fc-multimonth-header-row fc-flex-row' }, dayTableModel.headerDates.map((headerDate) => (preact.createElement(internal$1.DayOfWeekHeaderCell, { key: headerDate.getUTCDay(), dow: headerDate.getUTCDay(), dayHeaderFormat: dayHeaderFormat, colWidth: undefined }))))),
                preact.createElement("div", { className: 'fc-multimonth-body fc-flex-column', style: {
                        marginTop: -rowHeight,
                        height: forPrint ? '' : tableHeight,
                    } },
                    preact.createElement(internal$1.DayGridRows // .fc-grow
                    , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: dayTableModel.cellRows, forPrint: props.forPrint, 
                        // content
                        fgEventSegs: slicedProps.fgEventSegs, bgEventSegs: slicedProps.bgEventSegs, businessHourSegs: slicedProps.businessHourSegs, dateSelectionSegs: slicedProps.dateSelectionSegs, eventDrag: slicedProps.eventDrag, eventResize: slicedProps.eventResize, eventSelection: slicedProps.eventSelection }))));
        }
    }

    class MultiMonthView extends internal.DateComponent {
        constructor() {
            super(...arguments);
            // memo
            this.splitDateProfileByMonth = internal.memoize(splitDateProfileByMonth);
            this.buildMonthFormat = internal.memoize(buildMonthFormat);
            // ref
            this.scrollerRef = preact.createRef();
            this.innerElRef = preact.createRef();
            // internal
            this.scrollDate = null;
            // Sizing
            // -----------------------------------------------------------------------------------------------
            this.handleWidth = (width) => {
                let { xGap, xPadding } = this.state;
                // for first time, assume 2 columns and query gap/padding
                if (xGap == null) {
                    const innerEl = this.innerElRef.current;
                    const children = innerEl.childNodes;
                    if (children.length > 1) {
                        const box0 = children[0].getBoundingClientRect();
                        const box1 = children[1].getBoundingClientRect();
                        let xSpan;
                        [xGap, xSpan] = [
                            Math.abs(box0.left - box1.right),
                            Math.abs(box0.right - box1.left),
                        ].sort(internal.compareNumbers);
                        xPadding = width - xSpan;
                    }
                }
                this.setState({ width, xGap, xPadding });
            };
            this.updateScroll = () => {
                if (this.scrollDate != null && this.state.width != null) {
                    const scroller = this.scrollerRef.current;
                    const innerEl = this.innerElRef.current;
                    const monthEl = innerEl.querySelector(`[data-date="${internal.formatIsoMonthStr(this.scrollDate)}"]`);
                    const scrollTop = Math.ceil(// for fractions, err on the side of scrolling further
                    monthEl.getBoundingClientRect().top -
                        innerEl.getBoundingClientRect().top);
                    scroller.scrollTo({ y: scrollTop });
                }
            };
            this.clearScroll = () => {
                this.scrollDate = null;
            };
        }
        render() {
            const { context, props, state } = this;
            const { options } = context;
            const verticalScrolling = !props.forPrint && !internal.getIsHeightAuto(options);
            const colCount = state.width == null
                ? 2
                : Math.min(options.multiMonthMaxColumns, Math.floor((state.width - state.xPadding + state.xGap) /
                    (options.multiMonthMinWidth + state.xGap)));
            const monthWidth = state.width == null
                ? '34%' // will expand. now small enough to be 1/3. for allowing gap
                : Math.floor(// exact values can cause expansion to other rows
                (state.width - state.xPadding - (state.xGap * (colCount - 1))) /
                    colCount);
            const monthDateProfiles = this.splitDateProfileByMonth(context.dateProfileGenerator, props.dateProfile, context.dateEnv, options.fixedWeekCount, options.showNonCurrentDates);
            const monthTitleFormat = this.buildMonthFormat(options.multiMonthTitleFormat, monthDateProfiles);
            const rootClassNames = [
                'fc-multimonth-view',
                (colCount === 1) ?
                    'fc-multimonth-singlecol' :
                    'fc-multimonth-multicol',
                'fc-flex-column',
                'fc-border', // BAD to mix this with size-listening?
            ];
            return (preact.createElement(internal.NowTimer, { unit: "day" }, (nowDate, todayRange) => (preact.createElement(internal.ViewContainer, { elClasses: rootClassNames, viewSpec: context.viewSpec },
                preact.createElement(internal.Scroller, { vertical: verticalScrolling, elClassNames: [
                        verticalScrolling ? 'fc-liquid' : '',
                    ], ref: this.scrollerRef, widthRef: this.handleWidth },
                    preact.createElement("div", { ref: this.innerElRef, className: 'fc-multimonth-inner' }, monthDateProfiles.map((monthDateProfile, i) => {
                        const monthStr = internal.formatIsoMonthStr(monthDateProfile.currentRange.start);
                        return (preact.createElement(SingleMonth, Object.assign({}, props, { key: monthStr, todayRange: todayRange, isoDateStr: monthStr, titleFormat: monthTitleFormat, dateProfile: monthDateProfile, width: monthWidth })));
                    })))))));
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
            else {
                // NOT optimal to update so often
                // TODO: isolate dependencies of scroll coordinate
                this.updateScroll();
            }
        }
        componentWillUnmount() {
            this.scrollerRef.current.removeScrollEndListener(this.clearScroll);
        }
        // Scrolling
        // -----------------------------------------------------------------------------------------------
        resetScroll() {
            this.scrollDate = this.props.dateProfile.currentDate;
            this.updateScroll();
        }
    }
    // date profile
    // -------------------------------------------------------------------------------------------------
    const oneMonthDuration = internal.createDuration(1, 'month');
    function splitDateProfileByMonth(dateProfileGenerator, dateProfile, dateEnv, fixedWeekCount, showNonCurrentDates) {
        const { start, end } = dateProfile.currentRange;
        let monthStart = start;
        const monthDateProfiles = [];
        while (monthStart.valueOf() < end.valueOf()) {
            const monthEnd = dateEnv.add(monthStart, oneMonthDuration);
            const currentRange = {
                // yuck
                start: dateProfileGenerator.skipHiddenDays(monthStart),
                end: dateProfileGenerator.skipHiddenDays(monthEnd, -1, true),
            };
            let renderRange = internal$1.buildDayTableRenderRange({
                currentRange,
                snapToWeek: true,
                fixedWeekCount,
                dateEnv,
            });
            renderRange = {
                // yuck
                start: dateProfileGenerator.skipHiddenDays(renderRange.start),
                end: dateProfileGenerator.skipHiddenDays(renderRange.end, -1, true),
            };
            const activeRange = dateProfile.activeRange ?
                internal.intersectRanges(dateProfile.activeRange, showNonCurrentDates ? renderRange : currentRange) :
                null;
            monthDateProfiles.push({
                currentDate: dateProfile.currentDate,
                isValid: dateProfile.isValid,
                validRange: dateProfile.validRange,
                renderRange,
                activeRange,
                currentRange,
                currentRangeUnit: 'month',
                isRangeAllDay: true,
                dateIncrement: dateProfile.dateIncrement,
                slotMinTime: dateProfile.slotMaxTime,
                slotMaxTime: dateProfile.slotMinTime,
            });
            monthStart = monthEnd;
        }
        return monthDateProfiles;
    }
    // date formatting
    // -------------------------------------------------------------------------------------------------
    const YEAR_MONTH_FORMATTER = internal.createFormatter({ year: 'numeric', month: 'long' });
    const YEAR_FORMATTER = internal.createFormatter({ month: 'long' });
    function buildMonthFormat(formatOverride, monthDateProfiles) {
        return formatOverride ||
            ((monthDateProfiles[0].currentRange.start.getUTCFullYear() !==
                monthDateProfiles[monthDateProfiles.length - 1].currentRange.start.getUTCFullYear())
                ? YEAR_MONTH_FORMATTER
                : YEAR_FORMATTER);
    }

    const OPTION_REFINERS = {
        multiMonthTitleFormat: internal.createFormatter,
        multiMonthMaxColumns: Number,
        multiMonthMinWidth: Number,
    };

    var css_248z = ".fc-multimonth-inner{display:flex;flex-wrap:wrap}.fc-multimonth-multicol .fc-multimonth-month{margin:0 1.2em 1.2em}.fc-multimonth-multicol .fc-multimonth-title{padding:1em 0}.fc-multimonth-singlecol .fc-multimonth-title{padding:.5em 0}.fc-multimonth-title{font-size:1.2em;font-weight:700;text-align:center}.fc-multimonth-header-row{border-top:1px solid var(--fc-border-color)}.fc-multimonth-header-row,.fc-multimonth-month{border-bottom:1px solid var(--fc-border-color)}.fc-multimonth-singlecol .fc-multimonth-month:last-child{border-bottom:0}.fc-multimonth-multicol .fc-multimonth-body,.fc-multimonth-multicol .fc-multimonth-header-row{border-left:1px solid var(--fc-border-color);border-right:1px solid var(--fc-border-color);font-size:.9em;line-height:1}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:sticky;top:0;z-index:2}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-body{position:relative;z-index:1}";
    internal.injectStyles(css_248z);

    var plugin = core.createPlugin({
        name: '@fullcalendar/multimonth',
        initialView: 'multiMonthYear',
        optionRefiners: OPTION_REFINERS,
        views: {
            multiMonth: {
                component: MultiMonthView,
                dateProfileGeneratorClass: internal$1.TableDateProfileGenerator,
                multiMonthMinWidth: 350,
                multiMonthMaxColumns: 3,
            },
            multiMonthYear: {
                type: 'multiMonth',
                duration: { years: 1 },
                fixedWeekCount: true,
                showNonCurrentDates: false,
            },
        },
    });

    core.globalPlugins.push(plugin);

    exports["default"] = plugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, FullCalendar, FullCalendar.DayGrid.Internal, FullCalendar.Internal, FullCalendar.Preact);
