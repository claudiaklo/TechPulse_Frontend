<template>
  <footer class="bg-dark mt-5 py-5">
    <div class="container">
      <div class="row g-4">
        <!-- Brand Section -->
        <div class="col-lg-4">
          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-code-slash fs-3 text-primary"></i>
            <span class="fw-bold gradient-text fs-4">Tech Pulse</span>
          </div>
          <p class="text-white" style="opacity: 0.8;">
            Votre source d'information sur les langages de programmation, 
            l'intelligence artificielle et l'actualité technologique.
          </p>
          <div class="d-flex gap-3 mt-3">
            <a href="#" class="text-white-50 hover-primary">
              <i class="bi bi-twitter fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-primary">
              <i class="bi bi-github fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-primary">
              <i class="bi bi-linkedin fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-primary">
              <i class="bi bi-rss-fill fs-5"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <h5 class="text-white mb-3">Navigation</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <NuxtLink to="/" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Accueil
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/articles" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Articles
              </NuxtLink>
            </li>
            <li class="mb-2">
              <NuxtLink to="/about" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                À propos
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="col-lg-3 col-md-6">
          <h5 class="text-white mb-3">Catégories</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Langages de programmation
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Intelligence Artificielle
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Tech & Actualités
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="text-white text-decoration-none hover-primary" style="opacity: 0.8;">
                Frameworks
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="col-lg-3">
          <h5 class="text-white mb-3">Newsletter</h5>
          <p class="text-white small" style="opacity: 0.8;">
            Recevez les dernières actualités tech directement dans votre boîte mail.
          </p>
          <div class="input-group">
            <input 
              type="email" 
              class="form-control bg-dark border-secondary text-white" 
              placeholder="Votre email"
            >
            <button class="btn btn-primary" type="button">
              <i class="bi bi-send-fill"></i>
            </button>
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary">

      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="text-white small mb-0" style="opacity: 0.7;">
            © {{ currentYear }} Tech Pulse. Tous droits réservés.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <p class="text-white small mb-0" style="opacity: 0.7;">
            Fait avec <i class="bi bi-heart-fill text-danger"></i> et Nuxt.js
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.bg-dark {
  background: var(--bg-secondary) !important;
}

.hover-primary {
  transition: color 0.3s ease, opacity 0.3s ease;
}

.hover-primary:hover {
  color: var(--primary-light) !important;
  opacity: 1 !important;
}

.form-control:focus {
  background-color: var(--bg-tertiary);
  border-color: var(--primary);
  color: var(--text-primary);
  box-shadow: 0 0 0 0.25rem rgba(99, 102, 241, 0.25);
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.input-group .btn-primary {
  background: var(--gradient-primary);
  border: none;
}
</style>
