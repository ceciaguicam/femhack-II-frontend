<template>
    <div>
        <button>Prueba</button>
        <AllCountriesGraphic :graphic_options=all_countries_chart_info.options
            :graphic_series=all_countries_chart_info.series></AllCountriesGraphic>
    </div>
</template>
    
<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import FemHackAPI from "@/api/femHackApi";
import AllCountriesGraphic from "@/components/AllCountriesGraphic.vue"

type TotalUsersResponse = {
    Message: string
    Data: {
        Total: number
    }
}

type AllCountriesChartInfo = {
    options: {
        chart: {
            id: String
        },
        xaxis: {
            categories: Number[] | []
        }
    },
    series: [
        {
            name: String,
            data: Number[] | []
        }
    ]

}

/* data: function () {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        }*/

export default defineComponent({
    name: 'ChartsView',
    components: {
        AllCountriesGraphic

    },
    props: {

    },
    setup(props) {

        const all_countries_chart_info: Ref<AllCountriesChartInfo> = ref({
            options: {
                chart: {
                    id: "all_countries_chart"
                },
                xaxis: {
                    categories: []
                }
            },
            series: [
                {
                    name: "",
                    data: []
                }
            ]
        })


        /* data: function () {
        return {
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        }*/
        const users_by_year: Ref<Number | undefined> = ref()

        /*  async function getAllCountriesGraphicData() {
             for (let year = 1980; year <= 2020; year++) {
                 const response = await FemHackAPI.getUsersByYear(year)
                 users_by_year.value = response.Data.Total
                 console.log("Usuarios", year, users_by_year.value)
 
             }
 
         } */

        async function getAllCountriesGraphicData() {
            let year = 1980;

            const interval = setInterval(async () => {
                const response = await FemHackAPI.getUsersByYear(year);
                users_by_year.value = response.Data.Total;
                console.log("Usuarios en", year, ":", users_by_year.value);

                year++;

                if (year > 2020) {
                    clearInterval(interval);
                }
            }, 500);
        }

        // Llamar a la función getAllCountriesGraphicData() cada medio segundo
        getAllCountriesGraphicData()

        /* Data
        :
        { Total: 390573195 }
        Message
        :
        "Total Internet users in Year 2000" */


        return {
            all_countries_chart_info
        }
    }
});
</script>