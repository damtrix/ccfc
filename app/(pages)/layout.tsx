import PageIllustration from '@/components/page-illustration';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='grow'>
      <PageIllustration />

      {children}
    </main>
  );
}
