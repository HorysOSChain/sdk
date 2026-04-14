export class Auth {
  validate(token: string): boolean {
    if (!token) return false;
    // simple mock validation
    return token === "secure-token";
  }
}
