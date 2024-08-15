import { BackgroundNotfound } from '@/components/svg'
import { IconUpload } from '@/components/ui/icons'
import { Flex, Section } from '@/components/ui/layout'
import { Button, ButtonGroup } from '@/components/ui/primitives'
import { Breadcrumb } from 'antd'
import React from 'react'

const NotFoundPage = () => {
  return (
    <Section className="notfound">
        <Flex container direction="column" alignPrimary='space-between' className='notfound__inner'>
            <div className="notfound__text">
                <div className="breadcrump">
                    <Breadcrumb items={[{ title: 'Main', href: "/" }, { title: '404'}]} className='breadcrump__component'/>
                </div>
                <h1 className='notfound__heading'>error occurred</h1>
                <div className="notfound__description">
                    <p>This page does not exist. Please return to the main page.</p>
                </div>
            </div>
            <div className="notfound__buttons">
                <ButtonGroup className="notfound__buttons-group">
                    <Button className="notfound__buttons-item" variant='primary'>
                        LOAD
                        <div className="notfound__buttons-icon">
                            <IconUpload size='24'/>
                        </div>
                    </Button>
                    <Button className="notfound__buttons-item notfound__buttons-item--border" variant='neutral' >ON MAIN</Button>
                </ButtonGroup>
            </div>
            <div className="notfound__bigtext">
                <p>404</p>
            </div>
        </Flex>
    </Section>
  )
}

export default NotFoundPage