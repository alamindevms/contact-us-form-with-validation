<template>
	<section class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-[#f3e7e9] via-[#e3eeff] to-[#e3eeff]">
		<div class="w-2/3 mx-auto bg-white border-0 border-[#f3e7e9] shadow-sm shadow-[#f3e7e9] rounded-lg grid grid-cols-2 overflow-hidden items-center">
			<!-- left side -->
			<div class="col-span-1 space-y-4 px-10 py-12">
				<img src="~/assets/images/contact-us.jpg" class="h-auto w-auto mx-auto smooth-bounce" alt="Contact Us" />

				<p class="bg-gradient-to-r from-[#f3e7e9] via-[#e3eeff] to-[#e3eeff] bg-clip-text font-display text-3xl tracking-tight text-transparent text-center">Reach out and let's start a conversation!</p>
			</div>

			<!-- right side -->
			<div class="col-span-1 space-y-4 px-10 py-12 border-l border-[#f3e7e9]">
				<h2 class="text-3xl font-semibold text-slate-800">Get In Touch</h2>
				<p class="text-lg font-normal text-slate-500">Feel free to contact us for any query.</p>

				<!-- form -->
				<ContactForm />
			</div>
		</div>
	</section>
</template>

<script setup></script>
