'use client';

import NavigationLink from "@/components/NavigationLink/NavigationLink";
import { LogoInstagram, LogoLinkedIn, LogoX, LogoYoutube } from "@/components/svg";
import { useMediaQuery } from "hooks";
import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from "icons";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  ButtonGroup,
  IconButton,
  Logo,
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "primitives";

export type FooterProps = Omit<SectionProps, "variant" | "padding" | "src">;
export function Footer({ className, ...props }: FooterProps) {
  const { isTabletDown } = useMediaQuery();
  const t = useTranslations("Footer")
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant="stroke"
      paddingTop="1600"
      paddingBottom="4000"
      style={{ marginTop: "auto" }}
      className="footer"
      {...props}
    >
      <Flex wrap type="quarter" gap="600" container>
        <FlexItem size="minor">
          <Flex direction="row" gap="600" alignSecondary="start" alignPrimary="center">
			{SocialButtons()}
          </Flex>
        </FlexItem>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>{t('titles.use-cases')}</TextStrong>}
        >
          <TextListItem>
            <NavigationLink href="/generator">{t('links.photo-generating')}</NavigationLink>
          </TextListItem>
          {/* <TextListItem>
            <NavigationLink href="/404">{t('links.video-generating')}</NavigationLink>
          </TextListItem> */}
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={
            <Link href="/privacy" className="footer__link">
              <TextStrong>{t('titles.privacy-policy')}</TextStrong>
            </Link>
          }
        >
          <TextListItem>
            <NavigationLink href="/terms">
              {t('terms')}
            </NavigationLink>
          </TextListItem>
          {/* <TextListItem>
            <NavigationLink href="#">{t('links.report-a-problem')}</NavigationLink>
          </TextListItem> */}
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>{t('titles.about-us')}</TextStrong>}
        >
          <TextListItem>
            <NavigationLink href="/blog">{t('links.blog')}</NavigationLink>
          </TextListItem>
          <TextListItem>
            <NavigationLink href="/support">{t('links.contact-us')}</NavigationLink>
          </TextListItem>
        </TextLinkList>
      </Flex>
    </Section>
  );
}

export function SocialButtons() {
  return (
    <ButtonGroup>
      <IconButton
        variant="subtle"
        aria-label="X"
        href="https://www.x.com"
      >
        <LogoX />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="Instagram"
        href="https://www.instagram.com"
      >
        <LogoInstagram />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="YouTube"
        href="https://www.youtube.com"
      >
        <LogoYoutube />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="LinkedIn"
        href="https://www.linkedin.com"
      >
        <LogoLinkedIn />
      </IconButton>
    </ButtonGroup>
  );
}
