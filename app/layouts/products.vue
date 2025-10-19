<template>
	<div>
		<header class="bg-white shadow-md">
			<nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
				<NuxtLink to="/" class="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">My Vue.js Ecommerce</NuxtLink>
				<ul class="flex items-center space-x-6">
					<li>
						<NuxtLink to="/" class="text-lg text-gray-600 hover:text-blue-600" active-class="text-blue-600 font-semibold">Home</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/products" class="text-lg text-gray-600 hover:text-blue-600" active-class="text-blue-600 -semibold">Products</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about" class="text-lg text-gray-600 hover:text-blue-600" active-class="text-blue-600 font-semibold">About</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>

		<header class="bg-gray-100 border-b border-gray-200">
			<nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center space-x-6">
				<h2 class="text-lg font-semibold text-gray-700 mr-4">Catalog</h2>
				<NuxtLink to="/products/electronics" class="text-gray-600 hover:text-blue-600">Electronics</NuxtLink>
				<NuxtLink to="/products/books" class="text-gray-600 hover:text-blue-600">Books</NuxtLink>
				<NuxtLink to="/products/clothing" class="text-gray-600 hover:text-blue-600">Clothing</NuxtLink>
			</nav>
		</header>

		<main class="container mx-auto p-4 sm:p-6 lg:p-8">
			<slot /> <!-- Output the page content -->
		</main>
	</div>
</template>

<style>
	/* Nenhum CSS extra é necessário aqui, pois a `active-class` do NuxtLink cuida do estilo do link ativo. */
</style>