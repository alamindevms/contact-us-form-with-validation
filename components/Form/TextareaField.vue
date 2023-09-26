<template>
	<textarea :id="id" v-model="value" @input="$emit('input', $event.target.value)" class="p-3 border border-gray-200 rounded-md text-sm font-normal text-slate-600 placeholder:text-slate-200 w-full focus:outline-[#e3eeff] select-none" :class="`p-3 border rounded-md text-sm font-normal text-slate-600 placeholder:text-slate-200 w-full focus:outline-[#e3eeff] select-none ${isError ? 'border-red-500' : 'border-gray-200'}`" :placeholder="placeholder"></textarea>

	<!-- error message -->
	<transition enter-from-class="opacity-0 translate-y-1" enter-active-class="transition-all duration-500" enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100  translate-y-1" leave-active-class="transition-all duration-300" leave-to-class="opacity-0 translate-y-0">
		<p :data-error="id" class="text-red-500 text-sm font-medium flex items-center gap-1 transition-all duration-300" v-show="isError">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
				<path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
			</svg>

			{{ error }}
		</p>
	</transition>
</template>

<script setup>
import {computed} from "vue"
const props = defineProps(["modelValue", "id", "isError", "error", "placeholder"])
const emit = defineEmits(["update:modelValue", "input"])

const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit("update:modelValue", value)
	},
})
</script>
