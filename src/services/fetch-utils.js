import { client, checkError } from './client';

export async function getUser() {
  return client.auth.session;
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logOut() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function getFavorites(id) {
  const response = await client
    .from('favorite')
    .select()
    .match({ user_id: id });
  return checkError(response);
}

export async function addToFavorites(city) {
  const response = await client
    .from('favorite')
    .insert(city);
  return checkError(response);
}

export async function addUser(newUser) {
  const response = await client
    .from('users')
    .insert(newUser);
  
  return checkError(response);
}