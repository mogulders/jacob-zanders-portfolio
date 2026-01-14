import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Project = {
  id: string;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  demo_url: string | null;
  github_url: string | null;
  technologies: string[];
  category: string;
  featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};
