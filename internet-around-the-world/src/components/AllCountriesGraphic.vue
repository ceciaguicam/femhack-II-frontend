<template>
    <div>
        <h1>Internet around the World</h1>
        <div>
            <h3>Amount of users year by year</h3>
            <apexchart width="800" type="line" :options="graphic_options" :series="graphic_series"></apexchart>
        </div>
        <div>
            <h3>Amount of users in each country</h3>
        </div>
        
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



