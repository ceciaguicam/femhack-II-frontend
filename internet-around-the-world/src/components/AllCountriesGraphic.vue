<template>
    
        <div>
            <apexchart width="800" type="line" :options="graphic_options" :series="graphic_series"></apexchart>
        </div>
        
</template>
    
<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';

interface Options {
    chart: {
        id: String
    },
    xaxis: {
        categories: String[]
    }
}

export default defineComponent({
    name: 'AllCountriesGraphic',
    components: {


    },
    props: {
        graphic_options: Object,
        graphic_series: Array

    }, 
    setup() {

        return {}
    }
});
</script>



