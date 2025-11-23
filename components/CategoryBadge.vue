<template>
  <span 
    class="category-badge badge d-inline-flex align-items-center gap-1"
    :style="{ backgroundColor: category.color }"
  >
    <i :class="`bi ${category.icon}`"></i>
    {{ category.name }}
  </span>
</template>

<script setup lang="ts">
import type { Category } from '~/data/articles';

interface Props {
  category: Category;
}

defineProps<Props>();
</script>

<style scoped>
.category-badge {
  font-size: 0.75rem;
  padding: 0.4rem 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: none;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.category-badge:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
</style>
