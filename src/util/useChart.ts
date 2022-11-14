/*
 * @Author: Yoakec 1602491057@qq.com
 * @Date: 2022-06-09 21:23:39
 * @LastEditors: Yoakec 1602491057@qq.com
 * @LastEditTime: 2022-06-09 22:51:26
 * @FilePath: \Destop-wlw\packages\renderer\src\util\useChart.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nextTick, onMounted, onUnmounted, Ref, unref } from "vue";
import type { EChartsOption } from 'echarts';
import { GaugeChart } from 'echarts/charts';
echarts.use([GaugeChart]);
import echarts from "./lib";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import { RenderType, ThemeType } from "./types";

export default function useChart(elRef: Ref<HTMLDivElement>, autoChartSize = false, animation: boolean = false, render: RenderType = RenderType.SVGRenderer, theme: ThemeType = ThemeType.Default) {
    // 渲染模式
    echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer)
    // echart实例
    let chartInstance: echarts.ECharts | null = null;

    // 初始化echart
    const initCharts = () => {
        const el = unref(elRef)
        if (!el || !unref(el)) {
            return
        }
        chartInstance = echarts.init(el, theme);
    }

    // 更新/设置配置
    const setOption = (option: EChartsOption) => {
        nextTick(() => {
            if (!chartInstance) {
                initCharts();
                if (!chartInstance) return;
            }

            chartInstance.setOption(option)
            hideLoading()
        })

    }

    // 获取echart实例
    function getInstance(): echarts.ECharts | null {
        if (!chartInstance) {
            initCharts();
        }
        return chartInstance;
    }

    // 更新大小
    function resize() {
        chartInstance?.resize();
    }

    // 监听元素大小
    function watchEl() {
        // 给元素添加过渡
        if (animation) { elRef.value.style.transition = 'width 1s, height 1s' }
        const resizeObserver = new ResizeObserver((entries => resize()))
        resizeObserver.observe(elRef.value);
    }

    // 显示加载状
    function showLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.showLoading()
    }
    // 显示加载状
    function hideLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.hideLoading()
    }

    onMounted(() => {
        window.addEventListener('resize', resize)
        if (autoChartSize) watchEl();
    })

    onUnmounted(() => {
        window.removeEventListener('resize', resize)
    })

    return {
        setOption,
        getInstance,
        showLoading,
        hideLoading
    }
}
