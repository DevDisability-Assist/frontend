<script setup>
import { NodeService } from '@/service/NodeService';
import { onMounted, ref } from 'vue';

const treeValue = ref(null);
const selectedTreeValue = ref(null);
const treeTableValue = ref(null);
const selectedTreeTableValue = ref(null);

onMounted(() => {
  NodeService.getTreeNodes().then((data) => (treeValue.value = data));
  NodeService.getTreeTableNodes().then((data) => (treeTableValue.value = data));
});
</script>

<template>
  <div class="surveyContainer">
    <h1>조사지 등록</h1>
    <label for="#">조사지기본정보</label>
  </div>
</template>
