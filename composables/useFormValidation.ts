import {reactive} from "vue"

const errors = reactive({})

export default function useFormValidation() {
	const validateNameField = (fieldName: string, fieldValue: string) => {
		// @ts-ignore
		errors[fieldName] = fieldValue.toString().trim() === "" ? "The " + fieldName + " field is required" : ""
	}
	return {errors, validateNameField}
}
