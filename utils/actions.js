'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from './supabase/server'


const supabase = createClient();

export async function loginUser(formData) {

    //validate input
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect(`/error?message=${error.message}`)
    }

    revalidatePath('/', 'layout')
    redirect('/user')
}

export async function signup(formData) {

    // validate input
    const data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        redirect(`/error?message=${error.message}`);
    }

    const { data: { user } } = await supabase.auth.getUser();
    console.log('sign up the user: ', user);

    revalidatePath('/', 'layout')
    redirect('/user')
}

export const signOutUser = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect('/');
};

export async function getUserData() {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    return user;
}