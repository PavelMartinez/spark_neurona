'use client';

import { Card, Panel } from "@/components/ui/compositions"
import { Button, ButtonGroup, TextContentHeading, TextContentTitle, TextHeading } from "@/components/ui/primitives"
import { Flex, FlexItem, Section } from "@/components/ui/layout";
import { IconChat, IconCrop, IconMagic, IconPhotos } from "@/components/svg";
import BackgroundVideo from "next-video/background-video";
import Image from 'next/image'

import MainVideo from '/videos/main-video.mp4'
import Video1 from '/videos/video-1.mp4'
import Video2 from '/videos/video-2.mp4'

import ImageFunctions1 from '../../public/functions1.png'
import ImageFunctions2 from '../../public/functions2.png'
import ImageFunctions3 from '../../public/functions3.png'
import ImageFunctions4 from '../../public/functions4.png'

import ImageAdvantages1 from '../../public/advantages1.png'
import ImageAdvantages2 from '../../public/advantages2.png'
import ImageAdvantages3 from '../../public/advantages3.png'

import ImageBlocks1 from '../../public/blocks1.png'
import ImageBlocks2 from '../../public/blocks2.png'
import ImageBlocks3 from '../../public/blocks3.png'
import ImageBlocks4 from '../../public/blocks4.png'
import Link from "next/link";
import { Accordion } from "@/components/Accordion/Accordion";
import questions from "@/components/Accordion/data";
import BannerSection from "@/components/BannerSection/BannerSection";
import { Motion } from "@/components/Motion/Motion";
import { Variants } from "framer-motion";


export default function Home() {
	const container = {
		hidden: { y: 200 },
		show: {
			y: 0,
			transition: { duration: 1, delayChildren: 2 }
		},
	}

	const item = {
		hidden: { marginBottom: -29, transition: { duration: 1 } },
		show: { marginBottom: [null, 7, -29], transition: { duration: 2, delay: 2 } },
		hover: { marginBottom: 0, borderBottom: 0, transition: { duration: .3 } },
		exit: { marginBottom: -29 }
	}

	const advantagesContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 2 }
		},
	}

	const advantagesItem = {
		hidden: { opacity: 0, x: -800 },
		show: { opacity: 1, x: 0, transition: { duration: .2, ease: "linear" } }
	}
  return (
    <main>
		<Section padding="600" className="section section-main main-hero">
			<Motion type="div" viewport={{ once: true }} initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 2 }}>
				<BackgroundVideo src={MainVideo} className="main-hero__inner flex-container" height={556} disablePictureInPicture={true}>
					<div className="main-hero__content">
						<TextContentTitle
							align="center"
							title="Neurona"
							subtitle="the best service for creating AI images"
						/>
						<ButtonGroup align="center">
							<Button
								onPress={() => {}}
								variant="primary"
								size="medium"
								className="main-hero__button"
							>
								Generate now
							</Button>
						</ButtonGroup>
					</div>
				</BackgroundVideo>
			</Motion>
		</Section>
		<Section padding="1600">
			<Motion type="div" viewport={{ once: true }} initial={{ y: 500 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
				<Panel gap="1200" type="half" className="main-panel">
					<BackgroundVideo src={Video1} height={350}>
						<div className="main-panel__button-wrapper">
							<Button
								onPress={() => {}}
								variant="primary"
								size="medium"
							>
								Edit Photo
							</Button>
						</div>
					</BackgroundVideo>
					<BackgroundVideo src={Video2} height={350}>
					<div className="main-panel__button-wrapper">
						<Button
							onPress={() => {}}
							variant="primary"
							size="medium"
						>
							Create Image
						</Button>
					</div>
					</BackgroundVideo>
				</Panel>
			</Motion>

		</Section>
		<Section padding="1200" className="functions">
			<Flex
				container
				gap="1600"
				direction="row"
				alignSecondary="stretch"
				alignPrimary="space-between"
				wrap
			>
				<FlexItem size="minor">
					<Motion type="div" viewport={{ once: true }} initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
						<Flex style={{ padding: "45px 0px" }} gap="1200">
							<TextContentHeading
								heading="Functions"
								subheading="try it right now"
								className="functions__heading"
							/>
						</Flex>
					</Motion>

					<Motion type="div" viewport={{ once: true }} initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
						<Flex
							gap="400"
							direction="column"
							className="functions__list"
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
					</Motion>
				</FlexItem>
				<FlexItem size="fill">
					<Motion
						type="ul"
						variants={container}
						initial="hidden"
						whileInView="show"
						className="functions__images-box"
						viewport={{ once: true }}
					>
						<Motion type="li" whileHover={item.hover} variants={item as Variants} className="functions__images-item">
							<Image
								src={ImageFunctions1}
								alt=""
								width={0}
								height={0}
								className="functions__image"
								placeholder="blur"
							/>
						</Motion>
						<Motion type="li" whileHover={item.hover} variants={item as Variants} className="functions__images-item">
							<Image
								src={ImageFunctions2}
								alt=""
								width={0}
								height={0}
								sizes="100vw"
								className="functions__image"
								placeholder="blur"
							/>
						</Motion>
						<Motion type="li" whileHover={item.hover} variants={item as Variants} className="functions__images-item">
							<Image
								src={ImageFunctions3}
								alt=""
								width={0}
								height={0}
								sizes="100vw"
								className="functions__image"
								placeholder="blur"
							/>
						</Motion>
						<Motion type="li" whileHover={item.hover} variants={item as Variants} className="functions__images-item">
							<Image
								src={ImageFunctions4}
								alt=""
								width={0}
								height={0}
								sizes="100vw"
								className="functions__image"
								placeholder="blur"
							/>
						</Motion>
					</Motion>
				</FlexItem>
			</Flex>
		</Section>
		<Section padding="1200" className="advantages">
			<Flex style={{ padding: "45px 0px" }} gap="1200" container>
				<TextContentHeading
					heading="Our advantages"
					className="advantages__heading"
				/>
			</Flex>
			<Flex
				container
				gap="1600"
				direction="row"
				alignSecondary="stretch"
				alignPrimary="space-between"
				wrap
			>
				<Motion
					type="ul"
					className="advantages__frame-list"
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={advantagesContainer}
				>
					<Motion type="li" variants={advantagesItem}>
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
							<Image className="advantages__rectangles-item advantages__rectangles-item--frame" src={ImageAdvantages1} width={0} height={0} alt="" placeholder="blur"/>
						</div>
					</Motion>
					<Motion type="li" variants={advantagesItem}>
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
							<Image className="advantages__rectangles-item advantages__rectangles-item--frame" src={ImageAdvantages2} width={0} height={0} alt="" placeholder="blur"/>
						</div>
					</Motion>
					<Motion type="li" variants={advantagesItem}>
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
							<Image className="advantages__rectangles-item advantages__rectangles-item--frame" src={ImageAdvantages3} width={0} height={0} alt="" placeholder="blur"/>
						</div>
						
					</Motion>
				</Motion>
				{/* <FlexItem size="fill">
					<Flex direction="column" style={{ flexDirection: "column" }} className="advantages__rectangles-box" alignSecondary="end">
						<Image className="advantages__rectangles-item" src={ImageAdvantages1} width={0} height={0} alt="" placeholder="blur"/>
						<Image className="advantages__rectangles-item" src={ImageAdvantages2} width={0} height={0} alt="" placeholder="blur"/>
						<Image className="advantages__rectangles-item" src={ImageAdvantages3} width={0} height={0} alt="" placeholder="blur"/>
					</Flex>
				</FlexItem> */}
			</Flex>
		</Section>
		<Section className="blocks" padding="1200">
			<Flex
				wrap
				container
				className="blocks__wrapper"
				alignPrimary="center"
				alignSecondary="center"
			>
				<Motion className="blocks__item-subblock" viewport={{ once: true }} initial={{ x: -500, opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: .7, ease: "linear" } }}>
					<Link className="blocks__item blocks__item--order-1" href="/chat">
						<span className="blocks__item-text">
							AI CHAT
						</span>
						<Image src={ImageBlocks1} alt="AI CHAT" width={450} height={450} className="blocks__item-image" placeholder="blur" sizes="100vw"/>
					</Link>
					<Link className="blocks__item blocks__item--order-3" href="/styles">
						<span className="blocks__item-text">
							STYLE GALLERY
						</span>
						<Image src={ImageBlocks3} alt="STYLE GALLERY" width={450} height={450} className="blocks__item-image" placeholder="blur" sizes="100vw"/>
					</Link>
				</Motion>
				<Motion className="blocks__item-subblock" viewport={{ once: true }} initial={{ x: 500, opacity: 0 }} whileInView={{ opacity: 1, x: 0, transition: { duration: .7, ease: "linear" } }}>
					<Link className="blocks__item blocks__item--order-2" href="/">
						<span className="blocks__item-text">
							AI PHOTO EDITOR
						</span>
						<Image src={ImageBlocks2} alt="AI PHOTO EDITOR" width={450} height={450} className="blocks__item-image" placeholder="blur" sizes="100vw"/>
					</Link>
					<Link className="blocks__item blocks__item--order-4" href="/">
						<span className="blocks__item-text">
							IMAGE GENERATION
						</span>
						<Image src={ImageBlocks4} alt="IMAGE GENERATION" width={450} height={450} className="blocks__item-image" placeholder="blur" sizes="100vw"/>
					</Link>
				</Motion>
			</Flex>
		</Section>
		<BannerSection />
		<Section className="main-faq" padding="1200">
			<Flex
			wrap
			container
			className="main-faq__inner"
			alignPrimary="center"
			alignSecondary="center"
			direction="column">
				<h2 className="main-faq__heading">FREQUENTLY ASKED QUESTIONS</h2>
				<Accordion data={questions} />
			</Flex>
		</Section>
    </main>
  );
}
