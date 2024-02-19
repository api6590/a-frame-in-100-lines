import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story Time!',
    },
    {
      action: 'link',
      label: 'View Portfolio',
      target: 'https://aaliyahpierre.com/',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/land-bw.png`, // Relative path to land-bw.png in the public folder
    aspectRatio: '1:1',
  },
  input: {
    text: 'What would you like to see?',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Aaliyah first edited frame',
  description: 'LFG',
  openGraph: {
    title: 'Aaliyah first edited frame',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/land-bw.png`], // Relative path to land-bw.png in the public folder
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Aaliyah first edited frame</h1>
    </>
  );
}
