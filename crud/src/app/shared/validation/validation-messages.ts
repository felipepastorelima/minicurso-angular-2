export class ValidationMessages {

  static get(code: string, label: string, parameters: Array<string> = []) {
    let messages = {
      'required': `${label} is required`,
      'maxlength': `${label} should be no longer than ${parameters[0]} characters`,
      'minlength': `${label} should have at least ${parameters[0]} characters`,
      'max': `${label} should be more than ${parameters[0]}`,
      'min': `${label} should be less than ${parameters[0]}`,
    };
    return messages[code];
  }

}
