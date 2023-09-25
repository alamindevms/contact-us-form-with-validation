<template>
	<form class="space-y-3" @submit.prevent="handleSubmit">
		<!-- name -->
		<div class="space-y-1">
			<FormLabel title="Name" />
			<FormInputField type="text" id="name" v-model="formData.name" :isError="errors.name" :error="errors.name" @keyup="validateNameField('name', formData.name)" placeholder="Enter your name" />
		</div>

		<!-- email -->
		<div class="space-y-1">
			<FormLabel title="Email" />
			<FormInputField type="email" id="email" v-model="formData.email" :isError="errors.email" :error="errors.email" @keyup="validateNameField('email', formData.email)" @input="handleValidEmail" :isValid="isValidEmail" placeholder="Enter your email" />
		</div>

		<!-- phone -->
		<div class="space-y-1">
			<FormLabel title="Phone Number" />
			<FormInputField type="number" id="phone" v-model="formData.phone" :isError="errors.phone" :error="errors.phone" @keyup="validateNameField('phone', formData.phone)" placeholder="Enter your phone" />
		</div>

		<!-- subject -->
		<div class="space-y-1">
			<FormLabel title="Subject" />
			<FormInputField type="text" id="subject" v-model="formData.subject" :isError="errors.subject" :error="errors.subject" @keyup="validateNameField('subject', formData.subject)" placeholder="Enter your subject" />
		</div>

		<!-- message -->
		<div class="space-y-1">
			<FormLabel title="Message" />
			<FormTextareaField id="message" v-model="formData.message" :isError="errors.message" :error="errors.message" @input="validateNameField('message', formData.message)" placeholder="Your message here..." />
		</div>

		<!-- submit button  -->
		<ButtonsPrimary :loading="isFormSubmit" type="submit" />
	</form>
</template>

<script setup>
import {useToast} from "tailvue"
import FormLabel from "./Form/Label.vue"
import FormInputField from "./Form/InputField.vue"
import FormTextareaField from "./Form/TextareaField.vue"
import ButtonsPrimary from "./Buttons/Primary.vue"

const toast = useToast()

// composable - form validation
const {validateNameField, errors} = useFormValidation()

// initial value
const formData = reactive({
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
})

// for disable and loading submit button
const isFormSubmit = ref(false)

//
const isValidEmail = ref(false)
const handleValidEmail = (value) => {
	isValidEmail.value = value
	console.log("value", value)
}

// reset form
const resetForm = () => {
	for (const key in formData) {
		if (Object.hasOwnProperty.call(formData, key)) {
			formData[key] = ""
		}
	}

	isFormSubmit.value = false
	isValidEmail.value = false

	// Clear any form validation errors
	for (const key in errors) {
		if (Object.hasOwnProperty.call(errors, key)) {
			errors[key] = null
		}
	}
}

const handleSubmit = () => {
	isFormSubmit.value = true

	// show error message if check input fields is empty
	for (const key in formData) {
		if (Object.hasOwnProperty.call(formData, key)) {
			validateNameField(key, formData[key])
		}
	}

	// Check if there are any errors in the errors object
	const hasErrors = Object.values(errors).some((error) => error)

	// If there are errors, prevent the form submission
	if (hasErrors) {
		isFormSubmit.value = false
		toast.show({
			type: "danger",
			title: "Please fill in all fields.",
		})
		return
	}

	setTimeout(() => {
		isFormSubmit.value = false
		console.table(formData)

		// toast message
		toast.show({
			type: "success",
			title: "Submission Successful",
		})

		alert(JSON.stringify(formData))

		resetForm()
	}, 1000)
}
</script>
