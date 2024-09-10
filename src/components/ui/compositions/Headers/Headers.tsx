'use client';

import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconCheckSquare, IconChevronDown, IconDollarSign, IconMenu, IconX } from "icons";
import { placeholder } from "images";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
import {
  Avatar,
  AvatarBlock,
  Button,
  ButtonGroup,
  Dialog,
  DialogModal,
  IconButton,
  Label,
  Logo,
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  Navigation,
  NavigationPill,
} from "primitives";
import { useEffect, useState } from "react";
import { AnchorOrButton } from "utils";
import "./headers.css";
import { Link } from "@/i18n/routing"
import { usePathname } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { Screens } from "@/typescript/enums/Auth/Screens";
import AuthModal from "@/components/Auth/AuthModal";
import { useClerk, useUser } from "@clerk/nextjs";
import { ConfigProvider, Dropdown, MenuProps, Spin } from "antd";
import { ArFlagIcon, CheckSquare2Icon, CheckSquareIcon, DeFlagIcon, DialogIcon, DollarIcon, EnFlagIcon, EsFlagIcon, ExitIcon, FrFlagIcon, GroupIcon, HiFlagIcon, IdFlagIcon, ItFlagIcon, JaFlagIcon, KrFlagIcon, PtFlagIcon, RuFlagIcon, SettingIcon } from "@/components/svg";
import { useRouter } from "next/navigation";
import NavigationLink from "@/components/NavigationLink/NavigationLink";
import { useLocale, useTranslations } from "next-intl";
import LanguageListProps from "@/typescript/interfaces/Language/LanguageListProps";

export function HeaderAuth() {
  const t = useTranslations('Header')
  const { isSignedIn, user, isLoaded } = useUser()
  const { signOut } = useClerk()
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState<boolean>(false)
  const [authScreen, setAuthScreen] = useState<Screens>(Screens.LOGIN)

  useEffect(() => {
    console.log(user)
  }, [isLoaded])

  const userButtons = (
    <>
      <Button
        variant="primary"
        size="medium"
        className={"header__button"}
        onPress={() =>
          {
            setAuthScreen(Screens.LOGIN);
            setAuthOpen(true);
          }
        }
      >
        {t('login-button')}
      </Button>
      {/* <Button
        variant="primary"
        size="small"
        onPress={() =>
          {
            setAuthScreen(Screens.SIGNUP);
            setAuthOpen(true);
          }
        }
      >
        Sign Up
      </Button> */}
    </>
  );

  const { isTabletDown } = useMediaQuery();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();
  const locale = useLocale();

  useEffect(() => {
    if(searchParams.has("sign-in"))
    {
      setAuthScreen(Screens.LOGIN);
      setAuthOpen(true);
    }
    else if(searchParams.has("sign-up"))
    {
      setAuthScreen(Screens.LOGIN);
      setAuthOpen(true);
    }
  }, [searchParams])

  const locales: LanguageListProps[] = [
    {
      locale: "en",
      title: "English",
      icon: <EnFlagIcon />
    },
    {
      locale: "es",
      title: "Spanish",
      icon: <EsFlagIcon />
    },
    {
      locale: "ja",
      title: "日本語",
      icon: <JaFlagIcon />
    },
    {
      locale: "tr",
      title: "Türkçe",
      icon: <EnFlagIcon />
    },
    {
      locale: "hi",
      title: "भारतीय",
      icon: <HiFlagIcon />
    },
    {
      locale: "zh",
      title: "中文",
      icon: <EnFlagIcon />
    },
    {
      locale: "pt",
      title: "Português",
      icon: <PtFlagIcon />
    },
    {
      locale: "it",
      title: "Italiano",
      icon: <ItFlagIcon />
    },
    {
      locale: "ar",
      title: "اللغة العربية",
      icon: <ArFlagIcon />
    },
    {
      locale: "de",
      title: "Deutsch",
      icon: <DeFlagIcon />
    },
    {
      locale: "fr",
      title: "Français",
      icon: <FrFlagIcon />
    },
    {
      locale: "id",
      title: "Bahasa",
      icon: <IdFlagIcon />
    },
    {
      locale: "ko",
      title: "한국어",
      icon: <KrFlagIcon />
    },
    {
      locale: "ru",
      title: "Русский",
      icon: <RuFlagIcon />
    },
  ]

  const Language = () => {
    const items: MenuProps['items'] = locales.map((item, index) => {
      return {
        key: `${index}`,
        label: (
            <Link href={pathname} locale={item.locale} className={`language__link ${item.locale === locale ? "language__link--active": ""}`}>
                <span className="language__link-icon">
                    {item.icon}
                </span>
                <span className="language__link-title">
                    {item.title}
                </span>
                {item.locale === locale && 
                  <span className="language__link-icon">
                      <CheckSquare2Icon />
                  </span>
                }
            </Link>
        ),
      }
    })
    
    const currentLocale = locales.find((value) => value.locale === locale);
    return (
      <ConfigProvider theme={{
        token: {
          fontFamily: "var(--font-inter)",
          colorBgContainer: "#131313",
          colorText: "#FCFCFC",
          colorBgElevated: "#131313"
        },
      }}>
        <Dropdown trigger={["click"]} menu={{ items }} placement="bottom" overlayClassName='language__dropdown'>
          <button className="language">
            <div className="language__icon">
              {currentLocale?.icon}
            </div>
            <div className="language__text">
              {currentLocale?.locale?.toUpperCase()}
            </div>
            <IconChevronDown />
          </button>
        </Dropdown>
      </ConfigProvider>
    )
  }

  const navigation = (
    <Navigation direction={isTabletDown ? "column" : "row"}>
      <NavigationPill>
        <NavigationLink href="/">{t('image-generation')}</NavigationLink>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/instruments"}>
        <NavigationLink href="/instruments">{t('ai-insturments')}</NavigationLink>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/styles"}>
        <NavigationLink href="/styles">{t('style-gallery')}</NavigationLink>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/chat"}>
        <NavigationLink href="/chat">{t('ai-chat')}</NavigationLink>
      </NavigationPill>
      <NavigationPill>
        <NavigationLink href="/instruction">{t('instruction')}</NavigationLink>
      </NavigationPill>
      <NavigationPill className="navigation-pill--border">
        <NavigationLink href="/premium">{t('premium')}</NavigationLink>
      </NavigationPill>
    </Navigation>
  );

  return (
    <>
    <AuthModal isOpen={authOpen} screen={authScreen} openControl={setAuthOpen} screenControl={setAuthScreen} />
    <Flex
		direction="column"
		gap="300"
		alignPrimary="center"
		alignSecondary="center"
		style={{ width: "100%", flexBasis: "auto" }}
    >
      <FlexItem size="fill">
        {isTabletDown ? (
          <Flex alignPrimary="end">
            <IconButton
              variant="subtle"
              aria-label="Toggle navigation menu"
              onPress={() => setOpen(true)}
            >
              <IconMenu />
            </IconButton>
            <DialogModal isOpen={open}>
              <Dialog className={clsx("navigation-dialog")}>
                <IconButton
                  className={clsx("navigation-dialog-close")}
                  variant="subtle"
                  aria-label="Close navigation menu"
                  onPress={() => setOpen(false)}
                >
                  <IconX />
                </IconButton>
                <Flex
                  direction="column"
                  alignPrimary="space-between"
                  alignSecondary="center"
                >
                  {navigation}
                  {isSignedIn && isLoaded ? (
                    <Flex alignSecondary="center" gap="200" direction="column" style={{ marginTop: 50 }}>
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Avatar
                            src={user?.imageUrl}
                            initials={user?.firstName ? user?.firstName.charAt(0) : "U"}
                          />
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Label>{user.firstName}</Label>
                        </Flex>
                      </FlexItem>
                      <FlexItem>
                        <Flex alignPrimary="center">
                          <Button
                            variant="subtle"
                            size="small"
                            onPress={() => {
                              signOut({redirectUrl: "/"})
                            }}
                          >
                            {t('logout-button')}
                          </Button>
                        </Flex>
                      </FlexItem>
                    </Flex>
                  ) : (!isLoaded ? <Spin /> : (
                    <ButtonGroup align="center">{userButtons}</ButtonGroup>
                  ))}
                </Flex>
              </Dialog>
            </DialogModal>
          </Flex>
        ) : (
          <Flex alignSecondary="center" direction="row" alignPrimary="space-between" style={{ justifyContent: "space-between" }}>
            {navigation}
            <Language />
            {isSignedIn && isLoaded ? (
              <MenuTrigger>
                <AnchorOrButton className={clsx("header-auth-avatar-button")}>
                  <Avatar
                    src={user?.imageUrl}
                    initials={user?.firstName ? user?.firstName.charAt(0) : "U"}
                  />
                  <Label style={{ fontWeight: 700 }}>{user.firstName}</Label>
                  <IconChevronDown />
                </AnchorOrButton>
                <MenuPopover placement="bottom right" className={"header__popover"}>
                  <Menu className="header__popover-menu">
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/buy")
                    }}>
                      <div className="header__popover-item__icon">
                        <DollarIcon />
                      </div>
                      <div className="header__popover-item__text">
                        {t('popover.buy-coins')}
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/referal")
                    }}>
                      <div className="header__popover-item__icon">
                        <GroupIcon />
                      </div>
                      <div className="header__popover-item__text">
                        {t('popover.referal-program')}
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/settings")
                    }}>
                      <div className="header__popover-item__icon">
                        <SettingIcon />
                      </div>
                      <div className="header__popover-item__text">
                        {t('popover.profile-settings')}
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/support")
                    }}>
                      <div className="header__popover-item__icon">
                        <DialogIcon />
                      </div>
                      <div className="header__popover-item__text">
                        {t('popover.customer-support')}
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      signOut({redirectUrl: "/"})
                    }} style={{ cursor: "pointer" }}>
                      <div className="header__popover-item__icon">
                        <ExitIcon />
                      </div>
                      <div className="header__popover-item__text">
                        {t('logout-button')}
                      </div>
                    </MenuItem>
                  </Menu>
                </MenuPopover>
              </MenuTrigger>
            ) : (!isLoaded ? <Spin /> : (
              <ButtonGroup>{userButtons}</ButtonGroup>
            )) }
          </Flex>
        )}
      </FlexItem>
    </Flex>
    </>
  );
}

export type HeaderProps = Omit<SectionProps, "variant" | "padding" | "src">;
export function Header({ className, ...props }: HeaderProps) {
  return (
    <Section
      className="header"
      elementType="header"
      variant="stroke"
      {...props}
    >
      <Flex container alignPrimary="space-between" alignSecondary="center" className="header__inner">
        <FlexItem size="fill">
          <Link href="/">
            <Logo />
          </Link>
        </FlexItem>
        <FlexItem size="fill">
          <Flex alignPrimary="space-between" alignSecondary="center">
            <HeaderAuth />
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
