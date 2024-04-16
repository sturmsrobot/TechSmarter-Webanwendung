import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Benutzerpunkte abrufen
export async function getUserPoints(userId) {
  try {
    const result = await api.get(`/api/users/${userId}/points`);
    const points = result.data;
    return points;
  } catch (error) {
    console.error("Fehler beim Abrufen der Benutzerpunkte:", error);
    throw error;
  }
}

export default api;
