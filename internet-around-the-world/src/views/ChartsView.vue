<template>
    <div>
        <h1>Internet around the world</h1>
        <div>
            <h3>Internet users year by year</h3>
            <AllCountriesGraphic :graphic_options=all_countries_chart_info.options
                :graphic_series=all_countries_chart_info.series></AllCountriesGraphic>
        </div>
        <div>
            <h3>Users by year and country</h3>
            <el-form label-width="auto" label-position="right">
            <MultiselectFilter :select_info="years_select_info" filter_name="Select a year" filter_text="Year">
            </MultiselectFilter>
        </el-form>
            <!-- <el-form label-width="auto" label-position="right">
                    <MultiselectFilter :select_info="countries" filter_name="Select a country"
                        filter_text="Country">
                    </MultiselectFilter>

                    
                </el-form> -->
        </div>

    </div>
</template>
    
<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import FemHackAPI from "@/api/femHackApi";
import AllCountriesGraphic from "@/components/AllCountriesGraphic.vue"
import MultiselectFilter from '@/components/MultiselectFilter.vue';
import years_select_info from '@/data/years_select_info.json'



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

type SelectInfo = {
    values: Array<any>,
    options: Array<{
        label: string,
        value: any,
    }>,
}

export default defineComponent({
    name: 'ChartsView',
    components: {
        AllCountriesGraphic,
        MultiselectFilter

    },
    props: {

    },
    setup() {

        console.log("Years", years_select_info)

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

        async function getAllCountriesGraphicData() {
            let year = 1980;

            const interval = setInterval(async () => {
                const response = await FemHackAPI.getUsersByYear(year);
                const users_by_year = response.Data.Total;
                console.log("Usuarios en", year, ":", users_by_year);

                all_countries_chart_info.value.options.xaxis.categories.push(year)
                all_countries_chart_info.value.series[0].data.push(users_by_year)

                console.log("All countries info", all_countries_chart_info.value)



                year++;

                if (year > 2020) {
                    clearInterval(interval);
                }
            }, 500);
        }

        getAllCountriesGraphicData()

        const countries: Ref<String[]> = ref([""])

        async function getCountries() {
            const response = await FemHackAPI.getCountries()
            const list_of_countries = Object.values(response.Countries)
            console.log("Lista", list_of_countries)
            countries.value = list_of_countries
            console.log(countries.value)
        }

        getCountries()

        return {
            all_countries_chart_info,
            countries,
            years_select_info
        }
    }
});
</script>