import Service from '@ember/service';
import DOMPurify from 'dompurify';

export default class SanitizerService extends Service {
  sanitize(text) {
    if (!text) return '';
    return DOMPurify.sanitize(text, {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [] // No HTML attributes allowed
    });
  }
}
