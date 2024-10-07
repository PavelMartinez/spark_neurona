
import { IconPlus } from "@/components/ui/icons";
import { Flex, Section } from "@/components/ui/layout";
import Image from "next/image";
import Link from "next/link";

async function getStrapiData(url: string) {
  const baseUrl = process.env.STRAPI_URL;
  try {
    const response = await fetch(baseUrl + url, { next: { revalidate: 3000 } });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function BlogPage() {
    const strapiDataPosts = await getStrapiData("/api/articles?populate=*");
    const { data: data } = strapiDataPosts;
    const strapiDataAuthors = await getStrapiData("/api/authors?populate=*");
    const { data: authors } = strapiDataAuthors;

    console.log(data)

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
                    Neurona Blog
                </h1>
                <ul className="blog-page__grid">
                    <Link href={"/blog/" + data[0].slug} className="blog-page__block blog-page__block--1">
                        <h4 className="blog-page__block-title">
                            {data[0].title || "Title"}
                        </h4>
                        <div className="blog-page__block-bottom">
                            <div className="blog-page__block-badge">
                                New
                            </div>
                            <button className="blog-page__block-button">
                                <IconPlus size="32" />
                            </button>
                        </div>
                        <Image
                            src={`${data[0].cover.url}`}
                            alt=""
                            width={391}
                            height={391}
                            className="blog-page__block-image hidden-mobile"
                            style={{
                                bottom: 4,
                                right: 72,
                                transform: "rotateY(180deg)"
                            }}
                        />
                    </Link>
                    <Link href={"/blog/" + data[1].slug}  className="blog-page__block blog-page__block--2">
                        <h4 className="blog-page__block-title blog-page__block-title--background">
                            {data[1].title || "Title"}
                        </h4>
                        <div className="blog-page__block-bottom">
                            <div className="blog-page__block-badge">
                                New
                            </div>
                            <button className="blog-page__block-button">
                                <IconPlus size="32" />
                            </button>
                        </div>
                        <Image
                            src={`${data[1].cover.url}`}
                            alt=""
                            fill
                            className="blog-page__block-image blog-page__block-image--relative"
                        />
                    </Link>
                    <Link href={"/blog/" + data[2].slug}  className="blog-page__block blog-page__block--3">
                        <h4 className="blog-page__block-title blog-page__block-title--background">
                            {data[2].title || "Title"}
                        </h4>
                        <div className="blog-page__block-bottom">
                            <div className="blog-page__block-badge">
                                New
                            </div>
                            <button className="blog-page__block-button">
                                <IconPlus size="32" />
                            </button>
                        </div>
                        <Image
                            src={`${data[2].cover.url}`}
                            alt=""
                            fill
                            className="blog-page__block-image blog-page__block-image--relative"
                        />
                    </Link>
                    <Link href={"/blog/" + data[3].slug}  className="blog-page__block blog-page__block--4">
                        <h4 className="blog-page__block-title">
                            {data[3].title || "Title"}
                        </h4>
                        <div className="blog-page__block-bottom">
                            <div className="blog-page__block-badge">
                                New
                            </div>
                            <button className="blog-page__block-button">
                                <IconPlus size="32" />
                            </button>
                        </div>
                        <Image
                            src={`${data[3].cover.url}`}
                            alt=""
                            width={218}
                            height={218}
                            className="blog-page__block-image"
                            style={{
                                bottom: 20,
                                right: 20, 
                            }}
                        />
                    </Link>
                    <Link href={"/blog/" + data[4].slug}  className="blog-page__block blog-page__block--5">
                        <h4 className="blog-page__block-title blog-page__block-title--background">
                            {data[4].title || "Title"}
                        </h4>
                        <div className="blog-page__block-bottom">
                            <div className="blog-page__block-badge">
                                New
                            </div>
                            <button className="blog-page__block-button">
                                <IconPlus size="32" />
                            </button>
                        </div>
                        <Image
                            src={`${data[4].cover.url}`}
                            alt=""
                            fill
                            className="blog-page__block-image blog-page__block-image--relative"
                            style={{ 
                                objectPosition: "0 -75px"
                            }}
                        />
                    </Link>
                </ul>
            </Flex>
            <Flex
                container
                className="blog-page__authors"
                direction='column' 
                alignSecondary="center"
            >
                <h2 className="blog-page__authors-title">
                    OUR AUTHORS
                </h2>
                <ul className="blog-page__authors-list">
                    {authors.map((props: { avatar: { url: string; }; name: string | null | undefined; description: string | null | undefined }, index: number) => (
                        <li key={index} className="blog-page__authors-item">
                            <Image
                                className="blog-page__authors-avatar"
                                alt=""
                                width={100}
                                height={100}
                                src={`${props.avatar.url}`}
                            />
                            <div className="blog-page__authors-text">
                                <div className="blog-page__authors-name">{props.name}</div>
                                <div className="blog-page__authors-description">{props.description}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Flex>
        </Section>
    );
}