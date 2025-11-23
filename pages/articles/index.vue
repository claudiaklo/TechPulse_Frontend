<template>
  <div>
    <TheHeader />
    
    <div class="container py-5" style="padding-top: 100px;">
      <!-- Page Header -->
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold mb-3 text-white">Tous les articles</h1>
        <p class="lead text-white" style="opacity: 0.9;">
          Explorez notre collection complète d'articles sur la tech
        </p>
      </div>

      <!-- Filters -->
      <div class="row mb-4">
        <div class="col-lg-8 mx-auto">
          <div class="glass p-4 rounded-3">
            <div class="row g-3">
              <div class="col-md-8">
                <div class="input-group">
                  <span class="input-group-text bg-transparent border-end-0">
                    <i class="bi bi-search"></i>
                  </span>
                  <input 
                    v-model="searchQuery"
                    type="text" 
                    class="form-control bg-transparent border-start-0 text-white" 
                    placeholder="Rechercher un article..."
                  >
                </div>
              </div>
              <div class="col-md-4">
                <select v-model="selectedCategory" class="form-select bg-transparent text-white">
                  <option value="">Toutes les catégories</option>
                  <option 
                    v-for="category in categories" 
                    :key="category.id"
                    :value="category.slug"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Articles Grid -->
      <div class="row g-4">
        <div 
          v-for="article in (filteredArticles || [])" 
          :key="article.id"
          class="col-lg-4 col-md-6"
        >
          <ArticleCard :article="article" />
        </div>
      </div>

      <!-- No results -->
      <div v-if="!filteredArticles || filteredArticles.length === 0" class="text-center py-5">
        <i class="bi bi-file-earmark-x display-1 text-muted mb-3"></i>
        <h3 class="text-white">Aucun article trouvé</h3>
        <p class="text-white" style="opacity: 0.8;">Essayez de modifier vos critères de recherche</p>
      </div>

      <!-- Pagination placeholder -->
      <div v-if="filteredArticles && filteredArticles.length > 0" class="d-flex justify-content-center mt-5">
        <nav>
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link glass" href="#" tabindex="-1">Précédent</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link glass" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link glass" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link glass" href="#">Suivant</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Article, Category } from '~/data/articles';

const api = useApi();
const searchQuery = ref('');
const selectedCategory = ref('');

// Fetch categories for filter dropdown
const { data: categories } = await api.get<Category[]>('/categories');

// Fetch articles with reactive params
const { data: filteredArticles, refresh } = await api.get<Article[]>('/articles', {
  search: searchQuery,
  category: selectedCategory
});

// Watch for changes to refresh data
watch([searchQuery, selectedCategory], () => {
  // Debounce search could be added here
  refresh();
});

useHead({
  title: 'Articles - Tech Pulse',
  meta: [
    { 
      name: 'description', 
      content: 'Parcourez tous nos articles sur les langages de programmation, l\'IA et la technologie' 
    }
  ]
});
</script>

<style scoped>
.input-group .form-control,
.form-select {
  border-color: rgba(255, 255, 255, 0.2);
}

.input-group .form-control:focus,
.form-select:focus {
  background-color: var(--bg-tertiary);
  border-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.25);
}

.input-group .form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.input-group-text {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-muted);
}

.form-select option {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.pagination .page-link {
  background-color: var(--bg-secondary);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.pagination .page-link:hover {
  background-color: var(--bg-tertiary);
  border-color: var(--primary);
  color: var(--primary-light);
}

.pagination .page-item.active .page-link {
  background: var(--gradient-primary);
  border-color: var(--primary);
}

.pagination .page-item.disabled .page-link {
  background-color: var(--bg-secondary);
  opacity: 0.5;
}
</style>
