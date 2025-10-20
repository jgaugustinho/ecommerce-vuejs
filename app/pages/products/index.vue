<template>
	<div v-if=" pending " class="text-center py-20">
		<p class="text-2xl text-gray-500">Loading products...</p>
	</div>

	<div v-else-if=" error " class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
		<strong class="font-bold">Error!</strong>
		<span class="block sm:inline">Something went wrong while fetching the products.</span>
	</div>

	<div v-else>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			<div v-for="product in products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>

</template>

<script setup>
	definePageMeta( {
		layout: 'products'
	} );

	const { data: products, pending, error } = await useFetch( 'https://fakestoreapi.com/products' );
</script>