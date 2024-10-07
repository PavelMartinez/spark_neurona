import { Flex, Section } from "@/components/ui/layout";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337";
  try {
    const response = await fetch(baseUrl + url, { next: { revalidate: 3000 } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function BlogPage({ params: { slug } } : { params: { slug: string; } }) {
  const strapiData = await getStrapiData(`/api/articles?filters[slug][$eq]=${slug}&populate=*`);

  const { data } = strapiData;

  console.log(data[0].blocks)

  return (
    <Section 
      className='blog-page'
    >
      <Flex
          container
          className="blog-page__main"
          direction='column' 
      >
        <h1 className="blog-page__heading">
          {data[0].title}
        </h1>
        {data[0].blocks.length ?
          <BlocksRenderer content={data[0].blocks[0].Blocks} />  :
          <div className="blog-page__description">
            No text :(
          </div>
        }
      </Flex>
    </Section>
  );
}