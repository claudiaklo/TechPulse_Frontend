<template>
  <div>
    <TheHeader />
    
    <article v-if="article" class="article-detail" style="padding-top: 80px;">
      <!-- Hero Image -->
      <div class="article-hero position-relative">
        <img 
          :src="article.coverImage" 
          :alt="article.title"
          class="w-100"
        >
        <div class="hero-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
          <div class="container pb-5">
            <CategoryBadge :category="article.category" class="mb-3" />
            <h1 class="display-4 fw-bold text-white mb-3">{{ article.title }}</h1>
            <div class="d-flex align-items-center gap-3 text-white">
              <img 
                :src="article.author.avatar" 
                :alt="article.author.name"
                class="rounded-circle"
                width="48"
                height="48"
              >
              <div>
                <div class="fw-semibold">{{ article.author.name }}</div>
                <div class="small opacity-75">
                  {{ formatDate(article.publishedAt) }} • {{ article.readingTime }} min de lecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="container py-5">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8 mx-auto">
            <div class="article-content glass p-4 p-md-5 rounded-3 mb-4">
              <div class="mb-4">
                <div class="d-flex flex-wrap gap-2">
                  <span 
                    v-for="tag in article.tags" 
                    :key="tag"
                    class="badge bg-secondary"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Article content rendered as markdown-style -->
              <div class="content" v-html="renderedContent"></div>

              <!-- Share Section -->
              <div class="border-top pt-4 mt-5">
                <h5 class="mb-3">Partager cet article</h5>
                <div class="d-flex gap-3">
                  <button class="btn btn-outline-primary">
                    <i class="bi bi-twitter"></i>
                  </button>
                  <button class="btn btn-outline-primary">
                    <i class="bi bi-facebook"></i>
                  </button>
                  <button class="btn btn-outline-primary">
                    <i class="bi bi-linkedin"></i>
                  </button>
                  <button class="btn btn-outline-primary">
                    <i class="bi bi-link-45deg"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Author Card -->
            <div class="author-card glass p-4 rounded-3 mb-5">
              <div class="d-flex gap-3">
                <img 
                  :src="article.author.avatar" 
                  :alt="article.author.name"
                  class="rounded-circle flex-shrink-0"
                  width="80"
                  height="80"
                >
                <div>
                  <h5 class="mb-2">{{ article.author.name }}</h5>
                  <p class="text-muted mb-0">{{ article.author.bio }}</p>
                </div>
              </div>
            </div>

            <!-- Related Articles -->
            <div class="related-articles">
              <h4 class="mb-4">Articles similaires</h4>
              <div class="row g-4">
                <div 
                  v-for="relatedArticle in relatedArticles" 
                  :key="relatedArticle.id"
                  class="col-md-6"
                >
                  <ArticleCard :article="relatedArticle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 404 -->
    <div v-else class="container py-5 text-center" style="padding-top: 150px;">
      <i class="bi bi-file-earmark-x display-1 text-muted mb-4"></i>
      <h1 class="display-4 mb-3 text-white">Article non trouvé</h1>
      <p class="text-white" style="opacity: 0.8;">L'article que vous recherchez n'existe pas.</p>
      <NuxtLink to="/articles" class="btn btn-primary">
        Retour aux articles
      </NuxtLink>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import type { Article } from '~/data/articles';

const route = useRoute();
const api = useApi();
const slug = route.params.slug as string;

const { data: article } = await api.get<Article>(`/articles/${slug}`);

// Fetch related articles if article exists
const { data: relatedArticles } = await useAsyncData(`related-${slug}`, async () => {
  if (!article.value) return [];
  const { data } = await api.get<Article[]>('/articles', { 
    category: article.value.category.slug,
    limit: 3 // Ideally backend supports limit, otherwise we slice client side
  });
  // Filter out current article and slice
  return (data.value || [])
    .filter(a => a.id !== article.value?.id)
    .slice(0, 2);
}, { watch: [article] });

const renderedContent = computed(() => {
  if (!article.value) return '';
  // Simple markdown-like rendering
  return article.value.content
    .replace(/^# (.+)$/gm, '<h2 class="h3 mt-4 mb-3">$1</h2>')
    .replace(/^## (.+)$/gm, '<h3 class="h4 mt-4 mb-3">$1</h3>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>');
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', { 
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

useHead({
  title: article.value ? `${article.value.title} - Tech Pulse` : 'Article non trouvé',
  meta: article.value ? [
    { name: 'description', content: article.value.excerpt }
  ] : []
});
</script>

<style scoped>
.article-hero {
  height: 500px;
  overflow: hidden;
}

.article-hero img {
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
}

.content :deep(h2),
.content :deep(h3) {
  color: var(--text-primary);
  font-weight: 700;
}

.content :deep(p) {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.content :deep(li) {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  margin-left: 1.5rem;
}

.content :deep(code) {
  background-color: var(--bg-tertiary);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}

.author-card {
  border-left: 4px solid var(--primary);
}

.btn-outline-primary {
  border-color: rgba(99, 102, 241, 0.3);
  color: var(--primary-light);
}

.btn-outline-primary:hover {
  background-color: var(--primary);
  border-color: var(--primary);
  color: white;
}

.border-top {
  border-color: rgba(255, 255, 255, 0.1) !important;
}

@media (max-width: 768px) {
  .article-hero {
    height: 300px;
  }
}
</style>
