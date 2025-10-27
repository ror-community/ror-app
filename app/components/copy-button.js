import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CopyButtonComponent extends Component {
  @tracked isCopied = false;
  @tracked copyError = false;

  @action
  async copyText() {
    try {
      await navigator.clipboard.writeText(this.args.textToCopy);
      this.isCopied = true;
      this.copyError = false;

      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
      this.copyError = true;

      setTimeout(() => {
        this.copyError = false;
      }, 2000);
    }
  }

  get buttonLabel() {
    if (this.isCopied) {
      return 'ROR ID copied to clipboard';
    }
    if (this.copyError) {
      return 'Failed to copy ROR ID';
    }
    return 'Copy ROR ID to clipboard';
  }

  get buttonTitle() {
    if (this.isCopied) {
      return 'Copied!';
    }
    if (this.copyError) {
      return 'Copy failed';
    }
    return 'Copy ROR ID';
  }

  get iconClass() {
    if (this.isCopied) {
      return 'fa-solid fa-check';
    }
    if (this.copyError) {
      return 'fa-solid fa-exclamation-triangle';
    }
    return 'fa-solid fa-copy';
  }
}
