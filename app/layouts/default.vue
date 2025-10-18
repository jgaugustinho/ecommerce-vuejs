<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">My Vue.js Ecommerce</NuxtLink>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>

		<div>
			<slot /> <!-- Output the page content -->
		</div>
	</div>
</template>

<style scoped>
	.router-link-exact-active {
		font-weight: bold;
		text-decoration: underline;
	}
</style>