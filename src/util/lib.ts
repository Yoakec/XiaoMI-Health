/*
 * @Author: Yoakec 1602491057@qq.com
 * @Date: 2022-06-09 21:23:23
 * @LastEditors: Yoakec 1602491057@qq.com
 * @LastEditTime: 2022-06-09 21:23:27
 * @FilePath: \Destop-wlw\packages\renderer\src\util\lib.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// lib.ts
import * as echarts from 'echarts/core';

import {
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    PictorialBarChart,
    RadarChart,
    ScatterChart
} from 'echarts/charts';

import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    LegendComponent,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent
} from 'echarts/components';


echarts.use([
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    RadarChart,
    PictorialBarChart,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent,
    ScatterChart
]);

export default echarts;

