<template>
    <div ref="sleepHot" style="width:95%; height: 100vh;"></div>
</template>

<script lang="ts" setup>
import type { EChartsOption } from 'echarts'
import useChart from '../util/useChart'
import { ref, Ref, computed, onMounted, nextTick } from 'vue';
import { RenderType, ThemeType } from '../util/types';
import * as echarts from 'echarts';

function getVirtulData(year: string) {
    year = year || '2017';
    let date = +echarts.number.parseDate(year + '-01-01');
    let end = +echarts.number.parseDate(+year + 1 + '-01-01');
    let dayTime = 3600 * 24 * 1000;
    let data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
}

const option = computed<EChartsOption>(() => (
    {
        tooltip: {
            position: 'top'
        },
        visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            top: 'top'
        },

        calendar: [
            {
                range: '2017',
                cellSize: ['auto', 20]
            },
            {
                top: 260,
                range: '2016',
                cellSize: ['auto', 20]
            },
            {
                top: 450,
                range: '2015',
                cellSize: ['auto', 20],
                right: 5
            }
        ],

        series: [
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: getVirtulData('2017')
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 1,
                data: getVirtulData('2016')
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 2,
                data: getVirtulData('2015')
            }
        ]
    }
))
const sleepHot = ref<HTMLDivElement | null>(null)
const {
    setOption,
    showLoading,
} = useChart(sleepHot as Ref<HTMLDivElement>, true, true, RenderType.SVGRenderer, ThemeType.Light)

const getData = async () => {
    try {
        setOption(option.value);
    } catch {
        setOption({
            title: {
                show: true,
                text: '获取数据失败',
                left: 'center',
                top: 'center',
                textStyle: {
                    fontSize: 20
                }
            }
        });
    }
}

onMounted(() => {
    nextTick(() => {
        showLoading()
        getData()
    })
})


</script>

<style lang="scss" scoped>

</style>
