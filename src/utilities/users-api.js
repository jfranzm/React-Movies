const BASE_URL = '/api/users';
const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

export async function signUp(userData) {
    const options = {
        method: 'POST',
        headers: DEFAULT_HEADERS,
        body: JSON.stringify(userData)
    }
    const res = await fetch(BASE_URL, options);
    if (res.ok) {
        return res.json();
    } else {
        throw new Error('Invalid Sign Up');
    }
}