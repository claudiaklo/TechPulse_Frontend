<template>
  <div>
    <TheHeader />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <div class="animate-fade-in">
              <h1 class="display-3 fw-bold mb-4 text-white">
                L'actualité <span class="gradient-text">Tech</span> en temps réel
              </h1>
              <p class="lead text-white mb-4" style="opacity: 0.9;">
                Découvrez les dernières mises à jour des langages de programmation, 
                les innovations en IA et toute l'actualité technologique qui façonne notre futur.
              </p>
              <div class="d-flex gap-3 flex-wrap">
                <NuxtLink to="/articles" class="btn btn-primary btn-lg">
                  <i class="bi bi-book-half me-2"></i>
                  Explorer les articles
                </NuxtLink>
                <NuxtLink to="/about" class="btn btn-outline-light btn-lg">
                  À propos
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-illustration">
              <div class="floating-card glass p-4 mb-3">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-file-code fs-1 text-primary"></i>
                  <div>
                    <h6 class="mb-0 text-white">Python 3.13</h6>
                    <small class="text-white" style="opacity: 0.85;">Nouvelle version disponible</small>
                  </div>
                </div>
              </div>
              <div class="floating-card glass p-4 mb-3 ms-5">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-cpu-fill fs-1 text-danger"></i>
                  <div>
                    <h6 class="mb-0 text-white">IA Générative</h6>
                    <small class="text-white" style="opacity: 0.85;">Gemini 2.0 lancé</small>
                  </div>
                </div>
              </div>
              <div class="floating-card glass p-4 ms-3">
                <div class="d-flex align-items-center gap-3">
                  <i class="bi bi-lightning-charge-fill fs-1 text-warning"></i>
                  <div>
                    <h6 class="mb-0 text-white">Rust</h6>
                    <small class="text-white" style="opacity: 0.85;">Adoption croissante</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Articles -->
    <section class="section py-5 bg-secondary">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h2 class="h3 mb-0 text-white">
            <i class="bi bi-star-fill text-warning me-2"></i>
            Articles en vedette
          </h2>
        </div>
        
        <div class="row g-4">
          <div 
            v-for="article in (featuredArticles || [])" 
            :key="article.id"
            class="col-lg-4 col-md-6"
          >
            <ArticleCard :article="article" />
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="section py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h2 class="h3 mb-0">
            <i class="bi bi-newspaper me-2"></i>
            Derniers articles
          </h2>
          <NuxtLink to="/articles" class="btn btn-outline-primary">
            Voir tout
            <i class="bi bi-arrow-right ms-2"></i>
          </NuxtLink>
        </div>
        
        <div class="row g-4">
          <div 
            v-for="article in (latestArticles || [])" 
            :key="article.id"
            class="col-lg-4 col-md-6"
          >
            <ArticleCard :article="article" />
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->
    <section class="section py-5 bg-secondary">
      <div class="container">
        <h2 class="h3 mb-4 text-center text-white">Explorez par catégorie</h2>
        <div class="row g-4">
          <div 
            v-for="category in (categories || [])" 
            :key="category.id"
            class="col-lg-3 col-md-6"
          >
            <div class="category-card card text-center p-4">
              <div class="mb-3">
                <i 
                  :class="`bi ${category.icon}`"
                  class="fs-1"
                  :style="{ color: category.color }"
                ></i>
              </div>
              <h5 class="card-title text-white">{{ category.name }}</h5>
              <a href="#" class="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Article, Category } from '~/data/articles';

const api = useApi();

const { data: featuredArticles } = await api.get<Article[]>('/articles', { featured: 'true' });
const { data: latestArticles } = await api.get<Article[]>('/articles', { featured: 'false' });
const { data: categories } = await api.get<Category[]>('/categories');

useHead({
  title: 'Tech Pulse - Blog Tech & Programmation',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez les dernières actualités sur les langages de programmation, l\'IA et la tech' 
    }
  ]
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-illustration {
  position: relative;
  animation: fadeIn 1s ease-out;
}

.floating-card {
  animation: float 3s ease-in-out infinite;
  transition: all 0.3s ease;
}

.floating-card:nth-child(2) {
  animation-delay: 0.5s;
}

.floating-card:nth-child(3) {
  animation-delay: 1s;
}

.floating-card:hover {
  transform: translateY(-10px) !important;
  box-shadow: var(--shadow-lg);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bg-secondary {
  background-color: var(--bg-secondary) !important;
}

.category-card {
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.category-card:hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-primary);
  opacity: 0.1;
  border-radius: var(--radius-lg);
}

.btn-outline-light {
  border-color: rgba(255, 255, 255, 0.5);
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-outline-light:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: white;
  color: white;
}

.btn-outline-primary {
  border-color: rgba(99, 102, 241, 0.5);
  color: var(--primary-light);
}

.btn-outline-primary:hover {
  background-color: var(--primary);
  border-color: var(--primary);
  color: white;
}
</style>
