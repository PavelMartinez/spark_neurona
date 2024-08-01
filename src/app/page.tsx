'use client';

import { Card, Header, Hero, Panel } from "@/components/ui/compositions"
import { Button, ButtonGroup, TextContentHeading, TextContentTitle, TextHeading } from "@/components/ui/primitives"
import { Image } from "@/components/ui/primitives"
import './page.scss'
import { Flex, FlexItem, Section } from "@/components/ui/layout";
import { placeholder } from "@/components/ui/images";
import { IconChat, IconCrop, IconMagic, IconPhotos } from "@/components/svg";


export default function Home() {
  return (
    <main>
		<Header />
		<Hero variant="image" className="section section-main main-hero" style={{ flexDirection: "column" }}>
			<TextContentTitle
				align="center"
				title="Neurona"
				subtitle="the best service for creating AI images"
			/>
			<ButtonGroup align="center">
				<Button
					onPress={() => {}}
					variant="primary"
				>
					Generate now
				</Button>
			</ButtonGroup>
		</Hero>
		<Section padding="1600">
			<Panel gap="1200" type="half">
				<Image
					src={placeholder}
					alt="Always use image alt"
					aspectRatio="4-3"
					size="medium"
				/>
				<Image
					src={placeholder}
					alt="Always use image alt"
					aspectRatio="4-3"
					size="medium"
				/>
			</Panel>
		</Section>
		<Section padding="1200">
			<Flex
				container
				gap="1600"
				direction="row"
				alignSecondary="stretch"
				alignPrimary="space-between"
			>
				<FlexItem>
					<Flex style={{ padding: "45px 0px" }} gap="1200">
						<TextContentHeading
							heading="Functions"
							subheading="try it right now"
						/>
					</Flex>
					<Flex
						gap="400"
						direction="column"
						style={{ width: 556, flexDirection: "column", flex: "0 1 auto", marginBottom: 51 }}
					>
						<FlexItem>
							<Card heading="AI Chat" asset={<IconChat />} direction="horizontal">
								use chat to resolve any issue 
							</Card>
						</FlexItem>
						<FlexItem>
							<Card heading="AI Photo Editor" asset={<IconCrop />}
							direction="horizontal">
								Change and remove backgrounds, use makeup, match hairstyles with a single tap
							</Card>
						</FlexItem>
						<FlexItem>
							<Card heading="Style gallery" asset={<IconPhotos />}
							direction="horizontal">
								Choose different styles in our gallery, over 1000+ effects
							</Card>
						</FlexItem>
						<FlexItem>
							<Card heading="Image generation" asset={<IconMagic />}
							direction="horizontal">
								create awesome photos with text prompt
							</Card>
						</FlexItem>
					</Flex>
				</FlexItem>
				<FlexItem size="major">
					<Flex direction="column" style={{ flex: "1 0 auto", flexDirection: "column" }} className="functions__images-box">
						<FlexItem size="fill">
							<Image
								src={placeholder}
								alt="Always use image alt"
								aspectRatio="fill"
								className="functions__image"
							/>
						</FlexItem>
						<FlexItem size="fill">
							<Image
								src={placeholder}
								alt="Always use image alt"
								aspectRatio="fill"
								className="functions__image"
							/>
						</FlexItem>
						<FlexItem size="fill">
							<Image
								src={placeholder}
								alt="Always use image alt"
								aspectRatio="fill"
								className="functions__image"
							/>
						</FlexItem>
						<FlexItem size="fill">
							<Image
								src={placeholder}
								alt="Always use image alt"
								aspectRatio="fill"
								className="functions__image"
							/>
						</FlexItem>
					</Flex>
				</FlexItem>
			</Flex>
		</Section>
		<Section padding="1200" className="advantages">
			<Flex style={{ padding: "45px 0px" }} gap="1200" container>
				<TextContentHeading
					heading="Our advantages"
				/>
			</Flex>
			<Flex
				container
				gap="1600"
				direction="row"
				alignSecondary="stretch"
				alignPrimary="space-between"
			>
				<FlexItem>
					<Flex
						gap="400"
						direction="column"
						style={{ width: 556, flexDirection: "column", flex: "0 1 auto", marginBottom: 51 }}
					>
						<FlexItem>
							<div className="advantages__frame advantages__frame--first">
								<div className="advantages__frame-number advantages__frame-number--muller">
									1
								</div>
								<div className="advantages__frame-content">
									<TextHeading>Speed and quality</TextHeading>
									<div className="advantages__frame-text">
										using our service you will get the best result of photo enhancement with AI
									</div>
								</div>
							</div>
						</FlexItem>
						<FlexItem>
							<div className="advantages__frame">
								<div className="advantages__frame-number advantages__frame-number--gotham">
									2
								</div>
								<div className="advantages__frame-content">
									<TextHeading>
									Extensive number of tools and functions
									</TextHeading>
									<div className="advantages__frame-text">
										help you edit and realize the most complex ideas
									</div>
								</div>
							</div>
						</FlexItem>
						<FlexItem>
							<div className="advantages__frame">
								<div className="advantages__frame-number advantages__frame-number--gotham">
									3
								</div>
								<div className="advantages__frame-content">
									<TextHeading>
										Many styles
									</TextHeading>
									<div className="advantages__frame-text">
										help you see yourself in different ways and will diversify social media
									</div>
								</div>
							</div>
						</FlexItem>
					</Flex>
				</FlexItem>
				<FlexItem size="major">
					<Flex direction="column" style={{ flex: "1 0 auto", flexDirection: "column" }} className="advantages__rectangles-box">
						<FlexItem size="fill">
							<svg xmlns="http://www.w3.org/2000/svg" width="474" height="107" viewBox="0 0 474 107" fill="none">
								<path d="M0 0H474L434 107H0L40 0H0Z" fill="#D9D9D9"/>
							</svg>
						</FlexItem>
						<FlexItem size="fill">
							<svg xmlns="http://www.w3.org/2000/svg" width="474" height="107" viewBox="0 0 474 107" fill="none">
								<path d="M0 0H474L434 107H0L40 0H0Z" fill="#D9D9D9"/>
							</svg>
						</FlexItem>
						<FlexItem size="fill">
							<svg xmlns="http://www.w3.org/2000/svg" width="474" height="107" viewBox="0 0 474 107" fill="none">
								<path d="M0 0H474L434 107H0L40 0H0Z" fill="#D9D9D9"/>
							</svg>
						</FlexItem>
					</Flex>
				</FlexItem>
			</Flex>
		</Section>
    </main>
  );
}
