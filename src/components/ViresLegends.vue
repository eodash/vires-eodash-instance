<template>
    <div class="fill-height overflow-auto bg-">
        <color-legend v-for="lgnd in legends" :range='lgnd.range' :domain="lgnd.domain" :ticks="0"
            :titletext="lgnd.titletext ?? 'hello world'" scaletype="continuous">
            <div v-for="billboard in lgnd.billboards" slot="footer">
                <br>
                <span>
                    <v-img class="d-inline-block" style="width: 20px;height: 20px;" :src="billboard.image" />
                    <p class="d-inline-block"> = {{ billboard.text }}</p>
                </span>
            </div>
        </color-legend>
    </div>
</template>
<script setup>
import "color-legend-element";
import { legends } from '../store/states';

</script>
<style scoped>
color-legend {
    --cle-background:rgba(255,255,255,0.2)
}
</style>