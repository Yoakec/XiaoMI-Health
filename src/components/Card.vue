<template>
    <div text-sm text-gray-500>
        <div text-center text-base>
            <slot name="header"></slot>
        </div>
        <div>
            <slot name="main"></slot>
        </div>
        <div text-center p="x-4 y-2">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>

</style>
