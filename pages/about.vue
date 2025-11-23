<template>
  <div>
    <TheHeader />
    
    <div class="container py-5" style="padding-top: 100px;">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <!-- Header -->
          <div class="text-center mb-5">
            <i class="bi bi-info-circle display-1 text-primary mb-3"></i>
            <h1 class="display-4 fw-bold mb-3 text-white">À propos de Tech Pulse</h1>
            <p class="lead text-white" style="opacity: 0.9;">
              Votre source de référence pour l'actualité tech
            </p>
          </div>

          <!-- Mission -->
          <div class="glass p-5 rounded-3 mb-4">
            <h2 class="h3 mb-4 text-white">Notre Mission</h2>
            <p class="text-white mb-3" style="opacity: 0.85;">
              Tech Pulse est né de la passion pour la technologie et du désir de partager 
              les dernières innovations qui façonnent notre monde numérique.
            </p>
            <p class="text-white mb-3" style="opacity: 0.85;">
              Notre mission est de vous tenir informé des évolutions majeures dans :
            </p>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                <span class="text-white" style="opacity: 0.85;">Les langages de programmation et leurs mises à jour</span>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                <span class="text-white" style="opacity: 0.85;">L'intelligence artificielle et le machine learning</span>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                <span class="text-white" style="opacity: 0.85;">Les frameworks et outils de développement</span>
              </li>
              <li class="mb-2 d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                <span class="text-white" style="opacity: 0.85;">Les tendances et actualités du monde tech</span>
              </li>
            </ul>
          </div>

          <!-- Values -->
          <div class="row g-4 mb-4">
            <div class="col-md-4">
              <div class="glass p-4 rounded-3 text-center h-100">
                <i class="bi bi-lightbulb-fill display-3 text-warning mb-3"></i>
                <h5 class="text-white">Innovation</h5>
                <p class="text-white small mb-0" style="opacity: 0.85;">
                  Toujours à l'affût des dernières nouveautés
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="glass p-4 rounded-3 text-center h-100">
                <i class="bi bi-bullseye display-3 text-success mb-3"></i>
                <h5 class="text-white">Précision</h5>
                <p class="text-white small mb-0" style="opacity: 0.85;">
                  Des analyses détaillées et vérifiées
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="glass p-4 rounded-3 text-center h-100">
                <i class="bi bi-rocket-takeoff-fill display-3 text-primary mb-3"></i>
                <h5 class="text-white">Accessibilité</h5>
                <p class="text-white small mb-0" style="opacity: 0.85;">
                  Un contenu clair pour tous les niveaux
                </p>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="glass p-5 rounded-3">
            <h2 class="h3 mb-4 text-white">Contactez-nous</h2>
            <p class="text-white mb-4" style="opacity: 0.85;">
              Vous avez une question, une suggestion ou souhaitez contribuer ? 
              N'hésitez pas à nous contacter !
            </p>
            <div class="row g-3">
              <div class="col-md-6">
                <div class="d-flex align-items-center gap-3 p-3 rounded glass">
                  <i class="bi bi-envelope-fill fs-2 text-primary"></i>
                  <div>
                    <div class="small text-white" style="opacity: 0.7;">Email</div>
                    <div class="fw-semibold text-white">contact@techpulse.com</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="d-flex align-items-center gap-3 p-3 rounded glass">
                  <i class="bi bi-twitter fs-2 text-info"></i>
                  <div>
                    <div class="small text-white" style="opacity: 0.7;">Twitter</div>
                    <div class="fw-semibold text-white">@techpulse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center mt-5">
            <NuxtLink to="/articles" class="btn btn-primary btn-lg">
              <i class="bi bi-book-half me-2"></i>
              Découvrir nos articles
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'À propos - Tech Pulse',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez Tech Pulse, votre source de référence pour l\'actualité tech, les langages de programmation et l\'IA' 
    }
  ]
});
</script>

<style scoped>
.glass {
  transition: all 0.3s ease;
}

.glass:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

ul {
  list-style: none;
  padding: 0;
}
</style>
