<template>
    <el-form-item prop="tags" :label="filter_name">
      <el-select 
      v-model="select_info.values" 
      :multiple="multiple" 
      :filterable="filterable" 
      default-first-option 
      :allow-create="allow_create"
      :placeholder="filter_text"
      collapse-tags="true">
        <el-option v-for="option in select_info.options" :label="option.label" :value="option.value" > </el-option>
      </el-select>
    </el-form-item>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from "vue";
  
  type SelectInfo = {
    values : Array<any>,
    options : Array<{
      label: string,
      value: any,
    }>,
  }
  
  export default defineComponent({
    name: "MultiselectFilter",
    components: {  },
    props: {
      select_info: Object as () => SelectInfo,
      filter_name: String,
      filter_text: String,
      allow_create: {
        type: Boolean,
        default: false,
      },
      filterable: {
        type: Boolean,
        default: true,
      },
      multiple: {
        type: Boolean,
        default: true,
      },
    },
    setup(props) {
  
      if (!props.select_info) {
        throw new Error("select_info is required");
      }
  
      const select_info = ref<SelectInfo>(props.select_info);
  
      return {
        select_info,
      };
    },
  })
  
  </script>