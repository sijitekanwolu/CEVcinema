import { createClient } from "@supabase/supabase-js";

const projectKey = import.meta.env.VITE_KEY_SUPABASE;
const projectUrl = import.meta.env.VITE_URL_SUPABASE;

export const supabase = createClient(projectUrl, projectKey );