'use server';

import { revalidatePath } from 'next/cache';

export const revalidatePathOnServer = async (path: string, type: 'page' | 'layout' = 'page') => {
  revalidatePath(path, type);
};
