import SupabaseClient from "../lib/helper/SupabaseClient";

export class AuthService {
  constructor() {
    this.client = SupabaseClient;
  }

  async signIn(email, password) {
    try {
      const { data, error } = await this.client.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error;
    }
  }
  async signUpWithEmailPassword(email, password) {
    try {
      const { data, error } = await this.client.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error signing up:", error.message);
      throw error;
    }
  }

  async signOut() {
    try {
      const { error } = await this.client.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error("Error signing out:", error.message);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const {
        data: { user },
      } = await this.client.auth.getUser();
      return user;
    } catch (error) {
      console.error("Error getting current user:", error.message);
      throw error;
    }
  }
}

const authService = new AuthService();
export default authService;
