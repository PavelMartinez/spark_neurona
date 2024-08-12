import { Flex, Section } from '@/components/ui/layout'
import React from 'react'
import Link from 'next/link';
import StylesGrid from '@/components/Styles/StylesGrid';

const StylesPage = () => {
  return (
    <Section className="styles">
        <Flex container className="styles__inner" direction='column' alignSecondary='center'>
            <h1 className="styles__heading">
                Style Gallery
            </h1>
            <div className="styles__description">
                <p>
                    Explore through our gallery and choose from over 100+ different stylized models to generate.
                </p>
            </div>
            <Link className="styles__link" href="/">
                Generate your own Art with one click!
            </Link>
            <StylesGrid />
        </Flex>
    </Section>
  )
}

export default StylesPage