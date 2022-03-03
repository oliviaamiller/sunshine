import { client, checkError } from './client';

export async function getUser() {
  return client.auth.session() && client.auth.session().user;
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

export async function getFavorites() {
  const response = await client
    .from('favorite')
    .select();
    
  return checkError(response);
}

export async function addToFavorites(city) {
  const response = await client
    .from('favorite')
    .insert(city);
  return checkError(response);
}

export async function getSingleLocation(id) {
  const response = await client
    .from('favorite')
    .select()
    .match({ id })
    .single();
  return checkError(response);
}

export async function addUser(newUser) {
  const response = await client
    .from('users')
    .insert(newUser);
  
  return checkError(response);
}