'use client';

import clsx from "clsx";
import { useMediaQuery } from "hooks";
import { IconChevronDown, IconDollarSign, IconMenu, IconX } from "icons";
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
import { AuthenticationContext } from "providers";
import { useContext, useEffect, useState } from "react";
import { AnchorOrButton } from "utils";
import "./headers.css";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Screens } from "@/typescript/enums/Auth/Screens";
import AuthModal from "@/components/Auth/AuthModal";
import { useClerk, useUser } from "@clerk/nextjs";
import { Spin } from "antd";
import { DialogIcon, DollarIcon, ExitIcon, GroupIcon, SettingIcon } from "@/components/svg";
import { useRouter } from "next/navigation";

export function HeaderAuth() {
  const { currentUser, login, logout } = useContext(AuthenticationContext);
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
        variant="neutral"
        size="small"
        onPress={() =>
          {
            setAuthScreen(Screens.LOGIN);
            setAuthOpen(true);
          }
        }
      >
        Login
      </Button>
      <Button
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
      </Button>
    </>
  );

  const { isTabletDown } = useMediaQuery();
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter();

  useEffect(() => {
    if(searchParams.has("sign-in"))
    {
      setAuthScreen(Screens.LOGIN);
      setAuthOpen(true);
    }
    else if(searchParams.has("sign-up"))
    {
      setAuthScreen(Screens.SIGNUP);
      setAuthOpen(true);
    }
    else if(searchParams.has("pending"))
    {
      setAuthScreen(Screens.PENDING);
      setAuthOpen(true);
    }
  }, [searchParams])


  const navigation = (
    <Navigation direction={isTabletDown ? "column" : "row"}>
      <NavigationPill>
        <Link href="/">Image generation</Link>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/instruments"}>
        <Link href="/instruments">AI insturments</Link>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/styles"}>
        <Link href="/styles">Style gallery</Link>
      </NavigationPill>
      <NavigationPill isSelected={pathname === "/chat"}>
        <Link href="/chat">AI Chat</Link>
      </NavigationPill>
      <NavigationPill>
        <Link href="/">Contact</Link>
      </NavigationPill>
      <NavigationPill className="navigation-pill--border">
        <Link href="/">Premium</Link>
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
                            Log out
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
                        Buy coins
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/referal")
                    }}>
                      <div className="header__popover-item__icon">
                        <GroupIcon />
                      </div>
                      <div className="header__popover-item__text">
                        Referal Program
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/settings")
                    }}>
                      <div className="header__popover-item__icon">
                        <SettingIcon />
                      </div>
                      <div className="header__popover-item__text">
                        Profile settings
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      router.push("/account/support")
                    }}>
                      <div className="header__popover-item__icon">
                        <DialogIcon />
                      </div>
                      <div className="header__popover-item__text">
                        Customer Support
                      </div>
                    </MenuItem>
                    <MenuItem className="header__popover-item" onAction={() => {
                      signOut({redirectUrl: "/"})
                    }} style={{ cursor: "pointer" }}>
                      <div className="header__popover-item__icon">
                        <ExitIcon />
                      </div>
                      <div className="header__popover-item__text">
                        Log out
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
