'use client';

import clsx from "clsx";
import { AnchorOrButton, type AnchorOrButtonProps } from "utils";
import "./logo.css";
import LogoImage from '../../../../../public/Logo.png'
import Image from 'next/image'

export type LogoProps = AnchorOrButtonProps;
export function Logo({ className, ...props }: LogoProps) {
  const classNames = clsx(className, "logo");
  return (
    <AnchorOrButton className={classNames} {...props} aria-label="Company logo">
      <Image alt="" src={LogoImage} width={0} height={0} sizes="100vw" className="header__logo"/>
    </AnchorOrButton>
  );
}
