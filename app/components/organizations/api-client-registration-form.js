// app/components/organizations/api-client-registration-form.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApiClientRegistrationFormComponent extends Component {
	@tracked email = '';
	@tracked name = '';
	@tracked selectedInstitution = null;
	@tracked country = '';
	@tracked apiUsage = '';
	@tracked isSubmitting = false;
	@tracked showSuccessMessage = false;
	@tracked showErrorMessage = true;
	@tracked emailError = null;

	ROR_API_URL = 'https://api.ror.org/organizations';

	validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email) {
			return 'Email is required';
		}
		if (!emailRegex.test(email)) {
			return 'Please enter a valid email address';
		}
		return null;
}

	@action
	async searchOrganizations(searchTerm) {
		if (!searchTerm || searchTerm.length < 2) {
		return [];
		}

		try {
		const response = await fetch(
			`${this.ROR_API_URL}?query=${encodeURIComponent(searchTerm)}`
		);
		const data = await response.json();
		const results = data.items || [];

		const exactMatch = results.some(
			item => item.name.toLowerCase() === searchTerm.toLowerCase()
		);

		if (!exactMatch) {
			const sanitizedInput = (searchTerm).substring(0, 255);
			results.push({
			name: sanitizedInput,
			id: null,
			isManualEntry: true
			});
		}

		return results;
		} catch (error) {
		console.error('Error searching organizations:', error);
		return [{
			name: (searchTerm).substring(0, 255),
			id: null,
			isManualEntry: true
		}];
		}
	}

	@action
	onInstitutionSelect(selection) {
		if (selection) {
		this.selectedInstitution = {
			name: selection.name,
			id: selection.id,
			isManualEntry: selection.isManualEntry || false
		};
		} else {
		this.selectedInstitution = null;
		}
	}

	@action
	async onSubmit(event) {
		event.preventDefault();
		this.isSubmitting = true;
    
		const emailError = this.validateEmail(this.email);
		if (emailError) {
			this.emailError = emailError;
			return;
		}

		this.emailError = null;
		
		this.showErrorMessage = false;
		
		const institutionData = this.selectedInstitution 
		? {
			name: this.selectedInstitution.name,
			ror_id: this.selectedInstitution.id
			}
		: null;

		const formData = {
		email: this.email,
		name: this.name,
		institution: institutionData,
		country: this.country,
		apiUsage: this.apiUsage
		};

		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData)
			});

			if (!response.ok) {
				throw new Error('Registration failed');
			}

			this.showSuccessMessage = true;
		} catch (error) {
			this.showErrorMessage = true;
		} finally {
			this.isSubmitting = false;
		}
	}

	@action
	resetForm() {
		this.email = '';
		this.name = '';
		this.selectedInstitution = null;
		this.country = '';
		this.apiUsage = '';
		this.showSuccessMessage = false;
		this.showErrorMessage = false;
	}
}