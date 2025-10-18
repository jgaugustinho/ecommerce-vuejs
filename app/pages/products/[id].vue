<template>
	<main>
		<h1>Product Details Page - {{ id }}</h1>
		<p>Details coming soon...</p>
	</main>
</template>

<script setup>
	definePageMeta( { 
		layout: 'products'
	} );
	
	const { id } = useRoute().params;
</script>

<style scoped>
	main {
		text-align: center;
		margin-top: 100px;
		font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
	}
</style>