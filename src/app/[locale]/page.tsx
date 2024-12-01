import { getI18n } from '@/locales/server';
import { SignOutButton } from '@clerk/nextjs';

export default async function Page() {
  const t = await getI18n();

  return <SignOutButton>{t('common.signOut')}</SignOutButton>;
}
