import { Flex, Section } from "@/components/ui/layout";

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

export default async function BlogPage() {
    const strapiData = await getStrapiData("/api/articles?sort[0]=title:asc&populate=*");

    const { data } = strapiData;

    return (
        <Section 
            className='blog-page'
        >
            <Flex
                container
                className="blog-page__inner"
                direction='column' 
            >
                <h1 className="blog-page__heading">
                    Neurona Blog
                </h1>
                <div className="blog-page__main">
                    asdasd
                </div>
            </Flex>
        </Section>
    );
}