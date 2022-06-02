<style lang="scss" src="./pagination.component.scss"></style>
<script lang="ts" src="./pagination.component.ts"></script>

<template>
  <nav class="pagination-section pt-1 pl-45 pr-45 pb-1">
    <div class="pagination-section__previos mr-5 py-3 px-5" @click="previosPage()" v-if="findCurrentPage() !== 1">
      <a href="#" class="page-link">
        <fa icon="chevron-left"/>
      </a>
    </div>
    <ul class="pagination-section__page">
      <template v-for="pagenumber in countPage()" :key="pagenumber">
        <li @click="changePages(pagenumber)"
            class="page-item item-page py-3 px-5"
            :class="{first: pagenumber===1&&findCurrentPage()>3,last: pagenumber===countPage()&&findCurrentPage()<countPage()-2,active: findCurrentPage()===pagenumber}"
            v-if="pagenumber===1 || pagenumber === countPage() || pagenumber+1===findCurrentPage() || pagenumber-1===findCurrentPage() || pagenumber===findCurrentPage()"
        >
          <a href="#" class="page-link"
             :class="{active: findCurrentPage()===pagenumber}"
          >{{
              pagenumber
            }}</a>
        </li>
      </template>
    </ul>
    <div class="pagination-section__next ml-5 py-3 px-5" @click="nextPage()" v-if="findCurrentPage() !== countPage()">
      <a href="#" class="page-link">
        <fa icon="chevron-right"/>
      </a>
    </div>
  </nav>

</template>
