<template>
	<div class="relative">
		<!-- input filed -->
		<input :type="type" v-model="value" :id="id" @input="validateInput" @keyup="$emit('keyup', $event.target.value)" :class="`py-3 pl-3 pr-9 border rounded-md text-sm font-normal text-slate-600 placeholder:text-slate-200 w-full focus:outline-[#e3eeff] select-none ${isValid ? 'pr-9' : 'pr-3'} ${isError ? 'border-red-500' : 'border-gray-200'}`" :placeholder="placeholder" />

		<!-- check mark if valid -->
		<svg v-if="isValid" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-auto text-green-500 absolute top-3 right-2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>

		<!-- error message -->
		<transition enter-from-class="opacity-0 translate-y-1" enter-active-class="transition-all duration-500" enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100  translate-y-1" leave-active-class="transition-all duration-300" leave-to-class="opacity-0 translate-y-0">
			<p v-if="isError" :data-error="id" class="text-red-500 text-sm font-medium flex items-center gap-1 mt-1">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
					<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
				</svg>

				{{ error }}
			</p>
		</transition>
	</div>
</template>

<script setup>
import {computed} from "vue"
const props = defineProps(["modelValue", "type", "id", "placeholder", "isError", "error", "isValid"])
const emit = defineEmits(["update:modelValue", "keyup", "input"])

const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit("update:modelValue", value)
	},
})

// handle validation
const validateInput = (event) => {
	if (props.type === "email") {
		const isValidEmail = validateEmail(event.target.value)
		emit("input", isValidEmail)
	} else {
		emit("input", event.target.value)
	}
}

// email validation
function validateEmail(email) {
	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
	return emailRegex.test(email)
}
</script>
