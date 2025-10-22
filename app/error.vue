<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-4">
        <div class="max-w-lg">
            <h1 class="text-9xl font-extrabold text-blue-600 tracking-wider">{{ error.statusCode }}</h1>

            <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mt-4">
                <span v-if="error.statusCode === 404">Página não encontrada</span>
                <span v-else>Ocorreu um erro inesperado</span>
            </h2>

            <p class="text-lg text-gray-500 mt-4 mb-8">{{ error.message }}</p>

            <button @click="handleError" class="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
                Go back to home page
            </button>
        </div>
    </div>
</template>

<script setup>
    defineProps( {
        error: Object
    } )

    const handleError = () => {
        clearError( { redirect: '/' } );
    };
</script>