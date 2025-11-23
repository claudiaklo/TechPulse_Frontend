<template>
  <NuxtLink :to="`/articles/${article.slug}`" class="text-decoration-none">
    <div class="article-card card h-100">
      <div class="card-img-wrapper position-relative">
        <img 
          :src="article.coverImage" 
          :alt="article.title"
          class="card-img-top"
        >
        <div class="card-overlay position-absolute top-0 start-0 w-100 h-100">
          <CategoryBadge :category="article.category" />
        </div>
      </div>
      
      <div class="card-body d-flex flex-column">
        <div class="mb-2 d-flex align-items-center gap-2 small" style="color: rgba(255, 255, 255, 0.8);">
          <i class="bi bi-calendar"></i>
          <span>{{ formatDate(article.publishedAt) }}</span>
          <span class="mx-1">•</span>
          <i class="bi bi-clock"></i>
          <span>{{ article.readingTime }} min</span>
        </div>
        
        <h3 class="card-title h5 mb-2">{{ article.title }}</h3>
        <p class="card-text flex-grow-1 text-white" style="opacity: 0.85;">{{ article.excerpt }}</p>
        
        <div class="d-flex flex-wrap gap-2 mt-3">
          <span 
            v-for="tag in article.tags.slice(0, 3)" 
            :key="tag"
            class="badge bg-secondary"
          >
            {{ tag }}
          </span>
        </div>
        
        <div class="d-flex align-items-center mt-3 pt-3 border-top">
          <img 
            :src="article.author.avatar" 
            :alt="article.author.name"
            class="rounded-circle me-2"
            width="32"
            height="32"
          >
          <span class="small text-white" style="opacity: 0.8;">{{ article.author.name }}</span>
          
          <i class="bi bi-arrow-right ms-auto text-primary"></i>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/data/articles';

interface Props {
  article: Article;
}

defineProps<Props>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
</script>

<style scoped>
.article-card {
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.article-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.card-img-wrapper {
  overflow: hidden;
  height: 200px;
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-img-top {
  transform: scale(1.1);
}

.card-overlay {
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), transparent);
  padding: 1rem;
}

.card-title {
  color: var(--text-primary);
  line-height: 1.3;
  transition: color 0.3s ease;
}

.article-card:hover .card-title {
  color: var(--primary-light);
}

.badge {
  font-size: 0.75rem;
  padding: 0.35rem 0.65rem;
  font-weight: 500;
}

.border-top {
  border-color: rgba(255, 255, 255, 0.1) !important;
}
</style>
