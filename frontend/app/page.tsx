import { Metadata } from 'next';
import PassionTissueWebsiteClient from './components/PassionTissueWebsiteClient';

export const metadata: Metadata = {
  title: 'Passion Tissue | Premium Tissue Brand of Nepal',
  description:
    'Passion Tissue is Nepal’s #1 premium tissue brand made from 100% virgin pulp. Ultra soft, hygienic, and safe for your family.',
  keywords: [
    'Passion Tissue',
    'Tissue Paper Nepal',
    'Premium Tissue',
    'Bathroom Tissue',
    'Kitchen Towels',
    'Napkins',
  ],
  openGraph: {
    title: 'Passion Tissue',
    description: 'Nepal’s #1 Premium Tissue Brand',
    url: 'https://passiontissue.com',
    siteName: 'Passion Tissue',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      {/* SEO-visible content */}
      <h1 className="sr-only">
        Passion Tissue – Premium Tissue Brand of Nepal
      </h1>

      {/* Client UI */}
      <PassionTissueWebsiteClient />
    </>
  );
}
