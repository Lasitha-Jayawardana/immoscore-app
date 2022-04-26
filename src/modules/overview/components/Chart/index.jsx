import React from "react";
import _ from "underscore";

import { format } from "d3-format";

// Pond
import { TimeSeries } from "pondjs";

// Imports from the charts library

import {
    Charts,
    ChartContainer,
    ChartRow,
    YAxis,
    LineChart,
    Baseline,
    Legend
    ,Resizable
    ,styler

} from "react-timeseries-charts";
import currency_docs from "./currency_docs.md";

// Data
// const aud = require("./usd_vs_aud.json");
const aud = require("./usd_new.json");

function buildPoints() {
    const audPoints = aud.widget[0].data.reverse();

    let points = [];
    for (let i = 0; i < audPoints.length; i++) {
        points.push([audPoints[i][0], audPoints[i][1]*20000]);
    }
    return points;
}

const currencySeries = new TimeSeries({
    name: "Currency",
    columns: ["time", "aud"],
    points: buildPoints()
});

const style = styler([
    { key: "aud", color: "steelblue", width: 3 },
    { key: "euro", color: "#F68B24", width: 2 }
]);

class CrossHairs extends React.Component {
    render() {
        const { x, y } = this.props;
        const style = { pointerEvents: "none", stroke: "#ccc" };
        if (!_.isNull(x) && !_.isNull(y)) {
            return (
                <g>
                    <line style={style} x1={0} y1={y} x2={this.props.width} y2={y} />
                    <line style={style} x1={x} y1={0} x2={x} y2={this.props.height} />
                </g>
            );
        } else {
            return <g />;
        }
    }
}

export class Currency extends React.Component {
    state = {
        tracker: null,
        timerange: currencySeries.range(),
        x: null,
        y: null
    };

    handleTrackerChanged = tracker => {
        if (!tracker) {
            this.setState({ tracker, x: null, y: null });
        } else {
            this.setState({ tracker });
        }
    };

    handleTimeRangeChange = timerange => {
        this.setState({ timerange });
    };

    handleMouseMove = (x, y) => {
        this.setState({ x, y });
    };

    render() {
        const f = format("$,.2f");
        const range = this.state.timerange;

        let euroValue, audValue;
        if (this.state.tracker) {
            const index = currencySeries.bisect(this.state.tracker);
            const trackerEvent = currencySeries.at(index);
            audValue = `${f(trackerEvent.get("aud"))}`;

        }

        return (
            <div>
                <div className="row">
                    <div style={{height: "45px"}} className="col-md-12">
                        <span>
                            <Legend
                                type="line"
                                align="right"
                                style={style}
                                highlight={this.state.highlight}
                                onHighlightChange={highlight => this.setState({ highlight })}
                                selection={this.state.selection}
                                onSelectionChange={selection => this.setState({ selection })}
                                categories={[
                                    { key: "aud", label: "Total VL", value: audValue }
                                ]}
                            />
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Resizable>
                            <ChartContainer
                                timeRange={range}
                                timeAxisStyle={{
                                    ticks: {
                                        stroke: "#AAA",
                                        opacity: 0.25,
                                        "stroke-dasharray": "1,1"
                                        // Note: this isn't in camel case because this is
                                        // passed into d3's style
                                    },
                                    values: {
                                        fill: "#AAA",
                                        "font-size": 12
                                    }
                                }}
                                showGrid={true}
                                paddingRight={30}
                                paddingLeft={30}
                                maxTime={currencySeries.range().end()}
                                minTime={currencySeries.range().begin()}
                                timeAxisAngledLabels={true}
                                timeAxisHeight={65}
                                onTrackerChanged={this.handleTrackerChanged}
                                onBackgroundClick={() => this.setState({ selection: null })}
                                enablePanZoom={true}
                                onTimeRangeChanged={this.handleTimeRangeChange}
                                onMouseMove={(x, y) => this.handleMouseMove(x, y)}
                                minDuration={1000 * 60 * 60 * 24 * 30}
                            >
                                <ChartRow height="400">
                                    <YAxis
                                        id="y"
                                        label="($)"
                                        min={10000}
                                        max={100000}
                                        style={{
                                            ticks: {
                                                stroke: "#AAA",
                                                opacity: 0.25,
                                                "stroke-dasharray": "1,1"
                                                // Note: this isn't in camel case because this is
                                                // passed into d3's style
                                            }
                                        }}
                                        showGrid
                                        hideAxisLine
                                        width="60"
                                        type="log"
                                        format="$,.2f"
                                    />
                                    <Charts>
                                        <LineChart
                                            axis="y"
                                            breakLine={false}
                                            series={currencySeries}
                                            columns={["aud"]}
                                            style={style}
                                            interpolation="curveBasis"
                                            highlight={this.state.highlight}
                                            onHighlightChange={highlight =>
                                                this.setState({ highlight })
                                            }
                                            selection={this.state.selection}
                                            onSelectionChange={selection =>
                                                this.setState({ selection })
                                            }
                                        />
                                        <CrossHairs x={this.state.x} y={this.state.y} />
                                        <Baseline
                                            axis="y"
                                            value={1.0}
                                            label="USD Baseline"
                                            position="right"
                                        />
                                    </Charts>
                                </ChartRow>
                            </ChartContainer>
                        </Resizable>
                    </div>
                </div>
            </div>
        );
    }
}


