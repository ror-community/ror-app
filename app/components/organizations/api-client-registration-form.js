import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import countries from 'ror-app/utils/countries';

export default class ApiClientRegistrationFormComponent extends Component {
  @service sanitizer;
  @service configService;
  
  @tracked email = null;
  @tracked name = null;
  @tracked institution_name = null;
  @tracked institution_ror = null;
  @tracked selectedCountry = null;
  @tracked country_code = null;
  @tracked ror_use = null;
  @tracked isSubmitting = false;
  @tracked showSuccessMessage = false;
  @tracked showErrorMessage = false;
  @tracked emailError = null;
  @tracked nameError = null;
  @tracked institutionError = null;
  @tracked countryError = null;
  @tracked rorUseError = null;
  @tracked selectedInstitution = null;
  
  ROR_API_URL = 'https://api.ror.org/organizations';
  countries = countries;

  get isFormInvalid() {
    return this.hasValidationErrors || !this.email || this.isSubmitting;
  }

  get hasValidationErrors() {
    return Boolean(
      this.emailError ||
      this.nameError ||
      this.institutionError ||
      this.countryError ||
      this.rorUseError
    );
  }
  
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    if (email.length > 255) {
      return 'Email must be less than 255 characters';
    }
    return null;
  }
  
  validateName(name) {
    if (name && name.length > 255) {
      return 'Name must be less than 255 characters';
    }
    return null;
  }
  
  validateInstitution(name) {
    if (name && name.length > 255) {
      return 'Institution name must be less than 255 characters';
    }
    return null;
  }
  
  validateCountry(country) {
    if (country && !this.isValidCountryCode(country.code)) {
      return 'Please select a valid country from the list';
    }
    return null;
  }
  
  isValidCountryCode(code) {
    return code && this.countries.some(country => country.code === code);
  }
  
  validateRorUse(text) {
    if (text && text.length > 500) {
      return 'API usage description must be less than 500 characters';
    }
    return null;
  }
  
  sanitizeInput(text) {
    return text ? this.sanitizer.sanitize(text).substring(0, 255) : null;
  }
  
  sanitizeRorUse(text) {
    return text ? this.sanitizer.sanitize(text).substring(0, 500) : null;
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
      let results = data.items || [];
      const exactMatch = results.some(
        item => item.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (!exactMatch) {
        const sanitizedInput = this.sanitizeInput(searchTerm);
        results = [
          {
            name: sanitizedInput,
            id: null,
            isManualEntry: true
          },
          ...results
        ]
      }
      return results;
    } catch (error) {
      console.error('Error searching organizations:', error);
      return [{
        name: this.sanitizeInput(searchTerm),
        id: null,
        isManualEntry: true
      }];
    }
  }
  
  @action
  searchCountries(searchTerm) {
    if (!searchTerm || searchTerm.length < 1) {
      return this.countries;
    }
    
    return this.countries.filter(country => 
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  @action
  onInstitutionSelect(selection) {
    if (selection) {
      this.selectedInstitution = {
        name: selection.name,
        id: selection.id,
        isManualEntry: selection.isManualEntry || false
      };
      if (selection.isManualEntry) {
        this.institution_name = this.sanitizeInput(selection.name);
        this.institution_ror = null;
      } else {
        this.institution_name = this.sanitizeInput(selection.name);
        this.institution_ror = selection.id;
      }
      this.institutionError = this.validateInstitution(this.institution_name);
    } else {
      this.selectedInstitution = null;
      this.institution_name = null;
      this.institution_ror = null;
      this.institutionError = null;
    }
  }
  
  @action
  onCountrySelect(selection) {
    this.selectedCountry = selection;
    this.country_code = selection ? selection.code : null;
    this.countryError = this.validateCountry(selection);
  }
  
  @action
  validateField(field, value) {
    switch(field) {
      case 'email':
        this.emailError = this.validateEmail(value);
        break;
      case 'name':
        this.nameError = this.validateName(value);
        break;
      case 'institution':
        this.institutionError = this.validateInstitution(value);
        break;
      case 'country':
        this.countryError = this.validateCountry(this.selectedCountry);
        break;
      case 'ror_use':
		this.rorUseError = this.validateRorUse(value);
        break;
    }
  }
  
  @action
  onSubmit() {
    
    this.emailError = this.validateEmail(this.email);
    this.nameError = this.validateName(this.name);
    this.institutionError = this.validateInstitution(this.institution_name);
    this.countryError = this.validateCountry(this.selectedCountry);
    this.rorUseError = this.validateRorUse(this.ror_use);
    
    if (this.emailError) {
      return;
    }
    
    this._SubmitForm().catch(error => {
      console.error('Error submitting form:', error);
      this.showErrorMessage = true;
    });
  }
  
  async _SubmitForm() {
    this.isSubmitting = true;
    this.showErrorMessage = false;
    
    const formData = {
      email: this.sanitizeInput(this.email),
      name: this.sanitizeInput(this.name),
      institution_name: this.sanitizeInput(this.institution_name),
      institution_ror: this.institution_ror,
      country_code: this.country_code,
      ror_use: this.sanitizeRorUse(this.ror_use)
    };
    
    try {
      const response = await fetch(this.configService.API_URL + '/register', { // TODO: Update this to the correct API endpoint
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
    this.email = null;
    this.name = null;
    this.institution_name = null;
    this.institution_ror = null;
    this.selectedCountry = null;
    this.country_code = null;
    this.ror_use = null;
    this.showSuccessMessage = false;
    this.showErrorMessage = false;
    this.emailError = null;
    this.nameError = null;
    this.institutionError = null;
    this.countryError = null;
    this.rorUseError = null;
  }
}
