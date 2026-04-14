<script lang="ts">
  // Example minimalist components using the coffee/gray/black palette
</script>

<!-- Hero Section -->
<section class="bg-neutral-950 text-neutral-100 py-20 px-4 md:py-32">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 mb-6 bg-neutral-900 px-4 py-2 rounded-full border border-coffee-900">
      <span class="text-xs font-semibold tracking-wide uppercase text-coffee-400">Featured</span>
    </div>
    <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Minimalist Design System
    </h1>
    <p class="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
      Professional, clean components using a refined palette of black, gray, and coffee brown.
    </p>
  </div>
</section>

<!-- Card Grid -->
<section class="bg-neutral-100 py-16 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold text-neutral-950 mb-12 text-center">Featured Components</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each Array(3) as _}
        <div class="bg-neutral-100 border-2 border-neutral-500 rounded-lg p-6 hover:border-coffee-600 transition duration-300">
          <div class="w-12 h-12 bg-coffee-600 rounded-lg mb-4"></div>
          <h3 class="text-lg font-semibold text-neutral-950 mb-2">Component Title</h3>
          <p class="text-neutral-500 text-sm mb-6">
            Clean, purposeful design with minimal distractions and maximum clarity.
          </p>
          <button class="text-coffee-600 font-medium text-sm hover:text-coffee-700 transition">
            Learn more →
          </button>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Button Variations -->
<section class="bg-neutral-950 py-16 px-4">
  <div class="max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-neutral-100 mb-12 text-center">Button States</h2>
    
    <div class="space-y-6">
      <!-- Primary Button -->
      <div>
        <p class="text-neutral-500 text-xs font-semibold uppercase mb-3">Primary</p>
        <button class="w-full bg-coffee-600 text-neutral-100 px-6 py-3 rounded-lg font-medium hover:bg-coffee-700 active:bg-coffee-900 transition duration-200">
          Primary Action
        </button>
      </div>

      <!-- Secondary Button -->
      <div>
        <p class="text-neutral-500 text-xs font-semibold uppercase mb-3">Secondary</p>
        <button class="w-full bg-neutral-900 text-neutral-100 px-6 py-3 rounded-lg font-medium border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800 transition duration-200">
          Secondary Action
        </button>
      </div>

      <!-- Ghost Button -->
      <div>
        <p class="text-neutral-500 text-xs font-semibold uppercase mb-3">Ghost</p>
        <button class="w-full border-2 border-coffee-600 text-coffee-600 px-6 py-3 rounded-lg font-medium hover:bg-coffee-600 hover:text-neutral-100 transition duration-200">
          Ghost Action
        </button>
      </div>
    </div>
  </div>
</section>

<!-- Form Example -->
<section class="bg-neutral-100 py-16 px-4">
  <div class="max-w-md mx-auto">
    <h2 class="text-3xl font-bold text-neutral-950 mb-8 text-center">Contact Form</h2>
    
    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-neutral-950 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your name"
          class="w-full bg-neutral-100 border-2 border-neutral-500 rounded-lg px-4 py-3 text-neutral-950 placeholder:text-neutral-500 focus:outline-none focus:border-coffee-600 transition duration-200"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-neutral-950 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          class="w-full bg-neutral-100 border-2 border-neutral-500 rounded-lg px-4 py-3 text-neutral-950 placeholder:text-neutral-500 focus:outline-none focus:border-coffee-600 transition duration-200"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-neutral-950 mb-2">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your message..."
          rows="4"
          class="w-full bg-neutral-100 border-2 border-neutral-500 rounded-lg px-4 py-3 text-neutral-950 placeholder:text-neutral-500 focus:outline-none focus:border-coffee-600 transition duration-200"
        ></textarea>
      </div>

      <button type="submit" class="w-full bg-coffee-600 text-neutral-100 px-6 py-3 rounded-lg font-semibold hover:bg-coffee-700 transition duration-200">
        Send Message
      </button>
    </form>
  </div>
</section>

<style>
  /* Optional custom global styles */
  :global(body) {
    font-family: 'Inter', 'system-ui', sans-serif;
    background-color: #f5f3f0;
    color: #0f1c2e;
  }
</style>
