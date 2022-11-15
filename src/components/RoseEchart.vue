<template>
    <div class="pie-echart">
        <BaseCharts :options="options" />
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps<{
    roseData: any[]
}>()

const options = computed(() => {
    return {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: '类别数据',
                type: 'pie',
                radius: [10, 100],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
                data: props.roseData
            }
        ]
    }
})
</script>