/**
 * Validates an email address.
 * @param email The email address to validate.
 * @returns True if the email is valid, false otherwise.
 */
export function isValidEmail(email: string): boolean {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
}

export function isValidName(name: string): boolean {
  // Remove leading and trailing whitespace
  name = name.trim();

  // Check if the name is not empty and has at least 2 characters
  if (name.length < 2) {
    return false;
  }

  // Check if the name contains only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    return false;
  }

  // Check if the name doesn't start or end with a hyphen or apostrophe
  if (
    name.startsWith("-") ||
    name.startsWith("'") ||
    name.endsWith("-") ||
    name.endsWith("'")
  ) {
    return false;
  }

  // Check if there are no consecutive hyphens or apostrophes
  if (name.includes("--") || name.includes("''")) {
    return false;
  }

  return true;
}
// Example usage:
// console.log(isValidEmail('user@example.com')); // true
// console.log(isValidEmail('invalid-email')); // false
