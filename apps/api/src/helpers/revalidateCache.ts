// This function would be used to revalidate a cache tag on the frontend (SSR, ISR)
export async function revalidateCacheTag(tag: string) {
  console.log('revalidateCacheTag', tag);
  console.log(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/revalidate`);
  console.log(`Bearer ${process.env.REVALIDATION_SECRET}`);
  await fetch(`${process.env.NEXT_PUBLIC_FRONT_URL}/api/revalidate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REVALIDATION_SECRET}`,
    },
    body: JSON.stringify({
      tag,
    }),
  });
  // console.log('revalidateCacheTag response', await response.json());
  console.log('validated', tag);
}
