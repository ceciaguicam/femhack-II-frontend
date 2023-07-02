<template>
    <div>
        <button>Prueba</button>
    </div>
</template>
    
<script lang="ts">
import { defineComponent, type Ref, ref } from 'vue';
import FemHackAPI from "@/api/femHackApi";

type TotalUsers = {
    Message: string
    Data: {
        Total: number
    }
}

export default defineComponent({
    name: 'ChartsView',
    components: {


    },
    props: {

    },

    setup(props) {
        console.log("Hola Chechi :)")

        const users: Ref<TotalUsers | undefined> = ref()

        async function getUserByYear(year: number) {
            console.log("User", users.value)
            users.value = await FemHackAPI.getUsersByYear(year)
            console.log("User", users.value)

        }

        getUserByYear(2000)


        return {}
    }
});
</script>