<template>
  <header class="navbar-header" :class="{ 'scrolled': isScrolled }">
    <nav class="navbar navbar-expand-lg navbar-dark py-3">
      <div class="container">
        <NuxtLink to="/" class="navbar-brand d-flex align-items-center gap-2">
          <i class="bi bi-code-slash fs-3 text-primary"></i>
          <span class="fw-bold gradient-text fs-4">Tech Pulse</span>
        </NuxtLink>
        
        <button 
          class="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto align-items-lg-center gap-3">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link text-white">Accueil</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/articles" class="nav-link text-white">Articles</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link text-white">À propos</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: transparent;
}

.navbar-header.scrolled {
  background-color: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-md);
}

.navbar {
  backdrop-filter: none;
  transition: backdrop-filter 0.3s ease;
}

.navbar-header.scrolled .navbar {
  backdrop-filter: blur(10px);
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.3);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.nav-link {
  color: rgba(255, 255, 255, 0.85) !important;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-light) !important;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-brand {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}
</style>
