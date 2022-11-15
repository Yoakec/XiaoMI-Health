<template>
  <div id="app">
    <div class="flex justify-between" m-5>
      <div flex items-center>
        <el-upload mr-2 ref="upload" :limit="1" :on-change="handleExceed" :auto-upload="false" :show-file-list="false">
          <template #trigger>
            <el-button type="primary" plain>
              <i i-carbon:ibm-cloud-security-compliance-center mr-1> </i>
              更新数据
            </el-button>
          </template>
        </el-upload>
        <el-button type="success" plain>
          <i i-carbon:document-pdf mr-1> </i>
          导出为PDF
        </el-button>
        <span ml-2 text-gray-400 text-xs>上次数据更新时间为：2022/11/4下午8:25:16</span>
      </div>
      <div>
        <div>
          <el-button type="info" plain>
            <i i-carbon:settings mr-1> </i>
            选项
          </el-button>
        </div>
      </div>
    </div>

    <div class="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
      <div class="mb-4">
        <div>
          <Card>
            <template #header>睡眠</template>
            <template #main>
              <RoseEchart :roseData="roseData" />
            </template>
            <template #footer>睡眠</template>
          </Card>
        </div>
      </div>
    </div>
    <div>
      <Card>
        <template #header>睡眠</template>
        <template #main>
          <CalendarHeatmap :timeData="timeData('2016')" />
        </template>
        <template #footer>睡眠</template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { getData } from './util/getData';

const upload = ref()

const handleExceed: any = (files: any) => {
  upload.value!.clearFiles()
  const { path } = files.raw;
  getData(path).then((data: any) => {
    console.log(data);
  })
}

const roseData = [
  { value: 40, name: 'rose 1' },
  { value: 38, name: 'rose 2' },
  { value: 32, name: 'rose 3' },
  { value: 30, name: 'rose 4' },
  { value: 28, name: 'rose 5' },
  { value: 26, name: 'rose 6' },
  { value: 22, name: 'rose 7' },
  { value: 18, name: 'rose 8' }
]

const timeData = function getVirtualData(year: string) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 10000)
    ]);
  }
  return data;
}


</script>

<style>

</style>
