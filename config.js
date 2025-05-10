// Load environment variables from .env file
async function loadEnvVariables() {
  try {
    const response = await fetch('.env');
    const text = await response.text();
    
    // Parse .env file content
    const envVars = {};
    text.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length === 2) {
        const key = parts[0].trim();
        const value = parts[1].trim();
        envVars[key] = value;
      }
    });
    
    // Validate required environment variables
    if (!envVars.OPENROUTER_API_KEY || !envVars.OPENROUTER_MODEL) {
      console.warn('Missing required environment variables in .env file');
    }
    
    return envVars;
  } catch (error) {
    console.error('Error loading .env file:', error);
    // Return empty object instead of hardcoded values
    return {};
  }
}
