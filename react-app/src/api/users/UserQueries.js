import api from "../../config/api";

export async function fetchAllUsers() {
  try {
    const result = await api.get("/api/users/all");
    const users = result.data;
    return users;
  } catch (error) {
    console.error("Fehler beim Abrufen aller Benutzer:", error);
    throw error;
  }
}

export async function fetchUserById(userId) {
  try {
    const result = await api.get(`/api/users/${userId}`);
    const user = result.data;
    return user;
  } catch (error) {
    console.error("Fehler beim Abrufen des Benutzers nach ID:", error);
    throw error;
  }
}
