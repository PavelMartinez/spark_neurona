async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function BlogPage({ params: { slug } } : { params: { slug: string; } }) {
  const strapiData = await getStrapiData(`/api/articles/${slug}&populate=*`);

  const { data } = strapiData;

  return (
    <main className="container mx-auto py-6">
      {JSON.stringify(data, null, 4)}
    </main>
  );
}