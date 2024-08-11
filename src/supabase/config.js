import supabase from "@/lib/helper/SupabaseClient";

class Service {
  constructor() {
    this.client = supabase;
  }
}

const service = new Service();

export default service;
