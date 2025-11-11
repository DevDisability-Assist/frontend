<script setup>
import { ref } from 'vue';

const megamenuItems = ref([
  {
    label: '지원자',
  },
  {
    label: '보호자',
  },
  {
    label: '대기단계',
  },
]);

const dropdownItems = ref([
  { name: '1번 사업', code: 'Option 1' },
  { name: '2번 사업', code: 'Option 2' },
  { name: '3번 사업', code: 'Option 2' },
  { name: '4번 사업', code: 'Option 2' },
  { name: '5번 사업', code: 'Option 2' },
  { name: '6번 사업', code: 'Option 2' },
]);

const dropdownItem = ref(null);
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 mt-8">
    <div class="md:w-1/2">
      <div class="card">
        <div class="font-semibold text-xl mb-4">지원자 정보</div>
        <MegaMenu :model="megamenuItems" />
      </div>
    </div>
    <div class="md:w-1/2">
      <Fluid>
        <h1>지원계획 입력하기</h1>
        <div class="flex mt-8">
          <div class="card flex flex-col gap-4 w-full">
            <div class="font-semibold text-xl">지원서이름</div>
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-wrap gap-2 w-full">
                <label for="firstname2">작성자</label>
                <InputText id="firstname2" type="text" />
              </div>
              <div class="flex flex-wrap gap-2 w-full">
                <label for="lastname2">담당자</label>
                <InputText id="lastname2" type="text" />
              </div>
            </div>

            <div class="flex flex-wrap">
              <label for="address">내용</label>
              <Textarea id="address" rows="4" />
            </div>

            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex flex-wrap gap-2 w-full">
                <label for="state">지원계획</label>
                <Select
                  id="state"
                  v-model="dropdownItem"
                  :options="dropdownItems"
                  optionLabel="name"
                  placeholder="Select One"
                  class="w-full"
                ></Select>
              </div>
              <div class="flex flex-wrap gap-2 w-full">
                <label for="zip">금액</label>
                <InputText id="zip" type="text" />
              </div>
            </div>
          </div>
        </div>
      </Fluid>
    </div>
  </div>
</template>
