import {mount} from "@vue/test-utils"
import FormInputField from "../components/Form/InputField.vue"
import FormTextareaField from "../components/Form/TextareaField.vue"

describe("Contact Form Test:", () => {

	// test for name
	it("validates name correctly", async () => {
		const wrapper = mount(FormInputField, {
			props: {
				modelValue: "",
				type: "text",
				placeholder: "Enter your name",
				isError: false,
				error: "",
				isValid: false,
			},
		})

		await wrapper.find("input").setValue("Al Amin Hossain")

		expect(wrapper.emitted("input")[0][0]).toBe("Al Amin Hossain")
	})

	// test for email
	it("validates email correctly", async () => {
		const wrapper = mount(FormInputField, {
			props: {
				modelValue: "",
				type: "email",
				placeholder: "Enter your email",
				isError: false,
				error: "",
				isValid: false,
			},
		})

		await wrapper.find("input").setValue("alamindev.io@gmail.com")

		expect(wrapper.emitted("input")[0]).toBeTruthy()
	})

	// test for phone
	it("validates phone correctly", async () => {
		const wrapper = mount(FormInputField, {
			props: {
				modelValue: "",
				type: "text",
				placeholder: "Enter your phone",
				isError: false,
				error: "",
				isValid: false,
			},
		})

		await wrapper.find("input").setValue("01922866947")

		expect(wrapper.emitted("input")[0][0]).toBe("01922866947")
	})

	// test for subject
	it("validates subject correctly", async () => {
		const wrapper = mount(FormInputField, {
			props: {
				modelValue: "",
				type: "text",
				placeholder: "Enter your message",
				isError: false,
				error: "",
				isValid: false,
			},
		})

		await wrapper.find("input").setValue("Hi there.")

		expect(wrapper.emitted("input")[0][0]).toBe("Hi there.")
	})

	// test for message
	it("validates message correctly", async () => {
		const wrapper = mount(FormTextareaField, {
			props: {
				modelValue: "",
				placeholder: "Enter your message",
				isError: false,
				error: "",
			},
		})

		const textarea = wrapper.find('textarea');

		await textarea.setValue('Programmer like to debug.');
	
		expect(wrapper.emitted('input')).toBeTruthy();
		expect(wrapper.emitted('input')[0]).toEqual(['Programmer like to debug.']);
	  
	})
	
})
