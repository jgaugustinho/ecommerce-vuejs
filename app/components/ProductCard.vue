<template>
    <NuxtLink :to="`/products/${product.id}`">
        <img :src="product.image" :alt="product.title" class="w-full h-64 object-contain p-4 bg-white">
    </NuxtLink>

    <div class="p-6 flex flex-col h-56">
        <div>
            <span class="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full uppercase mb-2">
                {{ product.category }}
            </span>

            <h2 class="text-lg font-bold text-gray-800 mb-2 h-14 overflow-hidden">
                {{ product.title }}
            </h2>
        </div>

        <div class="mt-4">
            <div class="flex items-center text-yellow-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-gray-700 font-bold ml-1">{{ product.rating.rate }}</span>
                <span class="text-gray-500 text-sm ml-2">({{ product.rating.count }} reviews)</span>
            </div>

            <p class="text-2xl font-extrabold text-gray-900">
                ${{ product.price.toFixed( 2 ) }}
            </p>
        </div>
    </div>
</template>

<script setup>
    const { product } = defineProps( [ 'product' ] );
</script>