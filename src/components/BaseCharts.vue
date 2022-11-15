<template>
    <div class="base-echart">
        <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
    </div>
</template>
  
<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import useEchart from '../util/useEchart';

export interface Props {
    options: EChartsOption
    width?: string
    height?: string
}

const props = withDefaults(defineProps<Props>(), {
    width: '100%',
    height: '260px'
})


const echartDivRef = ref<HTMLElement>()

onMounted(() => {
    const { setOptions } = useEchart(echartDivRef.value!)

    watchEffect(() => {
        setOptions(props.options)
    })
})
</script>
  
<style scoped>

</style>
  