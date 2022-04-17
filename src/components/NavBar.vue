<template>
  <div class="py-2 bg-gray-600 h-14" >
    <nav
      class="container mx-auto md:flex md:justify-between md:items-center"
    ><n-h1>AirBank</n-h1>
      <div class="flex items-center justify-between">
        
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-gray-100 hover:text-gray-400">Home</li>
        <li class="text-gray-100 hover:text-gray-400">About</li>
        <li class="text-gray-100 hover:text-gray-400">Blogs</li>
        <li class="text-gray-100 hover:text-gray-400">Contact Us</li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
  const showMenu = ref(false);
  const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
<style scoped>
.n-h1 {
  margin-bottom: 0!important;
}
</style>