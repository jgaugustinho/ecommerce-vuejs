<template>
	<p>{{ error.statusCode }}</p>
	<p>{{ error.message }}</p>
</template>

<script setup>
	defineProps( [ 'error' ] );
</script>