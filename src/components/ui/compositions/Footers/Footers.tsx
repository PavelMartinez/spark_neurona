'use client';

import { LogoInstagram, LogoLinkedIn, LogoX, LogoYoutube } from "@/components/svg";
import { useMediaQuery } from "hooks";
import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from "icons";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
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
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant="stroke"
      paddingTop="1600"
      paddingBottom="4000"
      style={{ marginTop: "auto" }}
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
          title={<TextStrong>Use cases</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Photo generating</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Video generating</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={
            <Link href="/privacy" className="footer__link">
              <TextStrong>Privacy policy</TextStrong>
            </Link>
          }
        >
          <TextListItem>
            <TextLink href="#">Contact us</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Report a problem</TextLink>
          </TextListItem>
        </TextLinkList>
        <TextLinkList
          density={listDensity}
          title={<TextStrong>About us</TextStrong>}
        >
          <TextListItem>
            <TextLink href="#">Blog</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">User guide</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Support</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Business Contacts</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Careers</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">News</TextLink>
          </TextListItem>
          <TextListItem>
            <TextLink href="#">Terms</TextLink>
          </TextListItem>
		  <TextListItem>
            <TextLink href="/privacy">Privacy</TextLink>
          </TextListItem>
		  <TextListItem>
            <TextLink href="#">Community</TextLink>
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
