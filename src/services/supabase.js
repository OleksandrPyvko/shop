import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://krkmpmqyryoaqsvtnfxo.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtya21wbXF5cnlvYXFzdnRuZnhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcxMzYwMjcsImV4cCI6MjAzMjcxMjAyN30.rHCsrDBAP6C_MNysRFOtlDhIvvupl8slIa4BSBnF8oU`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
