function SpecInfoStorageApiKey(apiKey, apiName) {
    apiName = (apiName || "???").toUpperCase();
    apiKey = apiKey || "missing";
    return "INFO: STORAGE_API_KEY_" + apiName + " is " + apiKey + " ...";
}

STORAGE_API_KEY_DROPBOX = "";
STORAGE_API_KEY_GOOGLE_DRIVE = "";
STORAGE_API_KEY_ICLOUD = "";
STORAGE_API_KEY_ONEDRIVE = "";
STORAGE_API_KEY_BITBUCKET = "";
STORAGE_API_KEY_GITHUB = "";
