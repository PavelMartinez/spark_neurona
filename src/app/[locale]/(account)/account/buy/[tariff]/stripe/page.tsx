import { IconArrowUpRight } from "@/components/ui/icons";
import { Flex, Section } from "@/components/ui/layout";
import { Breadcrumb } from "antd";
import Link from "next/link";

const StripePay = ({ params }: { params: { tariff: number; } }) => {
    return (
        <Section className='buy'>
            <Flex
            container
            direction='column'
            className='buy__inner'>
                <div className="buy__text">
                    <div className="breadcrump">
                        <Breadcrumb items={[
                                { title: 'Dashboard', href: "/account" },
                                { title: 'Buy coins', href: "/account/buy" },
                                { title: 'Tariff ' + params.tariff, href: "/account/buy/" + params.tariff },
                                { title: 'Stripe' }
                            ]} 
                            className='breadcrump__component'/>
                    </div>
                    <div className="buy__heading">
                        <h3 className='buy__heading-h3'>
                            buy coins
                            <Link className="account__back" href={`/account/buy/${params.tariff}`}>
                                <IconArrowUpRight size='20'/>
                            </Link>
                            </h3>
                        <div className="buy__heading-description">
                            Enter your credentials
                        </div>
                    </div>
                    Stripe form here
                </div>
            </Flex>
        </Section>
    )
}

export default StripePay;