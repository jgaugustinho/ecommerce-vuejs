<template>
	<div v-if=" product ">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

			<div class="p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
				<img :src=" product.image " :alt=" product.title " class="max-h-96 object-contain">
			</div>

			<div class="flex flex-col justify-center">
				<span
					class="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full uppercase mb-3 self-start">{{ product.category }}</span>

				<h1 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">{{ product.title }}</h1>

				<div class="flex items-center mb-5">
					<div class="flex items-center text-yellow-500">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 20 20"
							fill="currentColor">
							<path
								d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
						<span class="text-gray-700 font-bold ml-1">{{ product.rating.rate }}</span>
					</div>
					<span class="text-gray-500 text-sm ml-3">({{ product.rating.count }} reviews)</span>
				</div>

				<p class="text-4xl font-extrabold text-gray-900 mb-6">${{ product.price.toFixed( 2 ) }}</p>

				<button
					class="w-full lg:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
						stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
					</svg>
					Add to Cart
				</button>
			</div>
		</div>
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold text-gray-800 mb-4">Product Description</h2>
			<p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
		</div>

	</div>

</template>

<script setup>
	definePageMeta( {
		layout: 'products'
	} );

	const { id } = useRoute().params;
	const uri = 'https://fakestoreapi.com/products/' + id;
	const { data: product } = await useFetch( uri, { key: id } );

	if( !product.value ) {
		//Fatal: true forces the application to display the error page, even if a non existing product is requested by an internal link
		throw createError( { statusCode: 404, message: 'Product not found', fatal: true } ); 
	}
</script>