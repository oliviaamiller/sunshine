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

export async function getFavorites() {
  const response = await client
    .from('favorite')
    .select();
  return checkError(response);
}