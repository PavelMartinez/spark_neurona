import { Flex, FlexItem, Section } from '@/components/ui/layout'
import { Button, ButtonGroup } from '@/components/ui/primitives'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import React from 'react'

const PrivacyPage = () => {
  return (
    <Section className='privacy'>
        <Flex container direction='row' className='privacy__inner'>
            <FlexItem className='privacy__main'>
                <div className="breadcrump breadcrump--grey">
                    <Breadcrumb items={[{ title: 'Home', href: "/" }, { title: 'Privacy Policy'}]} className='breadcrump__component'/>
                </div>
                <div className="privacy__content">
                    <h1 className='privacy__heading'>
                        Privacy Policy
                    </h1>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            1. General provisions
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                This personal data processing policy has been drawn up in accordance with the requirements of the Federal Law of July 27, 2006. No. 152-FZ “On Personal Data” and determines the procedure for processing personal data and measures to ensure the security of personal data of Laboratory Test Drive LLC (hereinafter referred to as the Operator). <br/><br/>
                                The operator . sets as its most important goal and condition for carrying out its activities the observance of the rights and freedoms of man and citizen when processing his personal data, including the protection of the rights to privacy, personal and family secrets.<br/><br/>
                                This Operator&apos;s policy regarding the processing of personal data (hereinafter referred to as the Policy) applies to all information that the Operator can receive about visitors to the website <Link href="https://lab-td.ru/">https://lab-td.ru/</Link>
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            2. Basic concepts used in the Policy
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                Automated processing of personal data – processing of personal data using computer technology; <br/><br/>
                                Blocking of personal data – temporary cessation of processing of personal data (except for cases where processing is necessary to clarify personal data);<br/><br/>
                                Website - a set of graphic and information materials, as well as computer programs and databases that ensure their availability on the Internet at the network address https://lab-td.ru/
                                Personal data information system - a set of personal data contained in databases , and information technologies and technical means that ensure their processing;<br/><br/>
                                Depersonalization of personal data - actions as a result of which it is impossible to determine without the use of additional information the ownership of personal data to a specific User or other subject of personal data;<br/><br/>
                                Processing of personal data – any action (operation) or set of actions (operations) performed using automation tools or without the use of such means with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, changing), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data;<br/><br/>
                                Operator - a state body, municipal body, legal or natural person, independently or jointly with other persons organizing and (or) carrying out the processing of personal data, as well as determining the purposes of processing personal data, the composition of personal data to be processed, actions (operations) performed with personal data;<br/><br/>
                                Personal data - any information relating directly or indirectly to a specific or identified User of the website https://lab-td.ru/
                                User - any visitor to the website https://lab-td.ru/
                                Providing personal data - actions aimed at disclosing personal data to a certain person or a certain circle of persons;
                                Distribution of personal data - any actions aimed at disclosing personal data to an indefinite number of persons (transfer of personal data) or familiarizing with personal data to an unlimited number of persons, including the publication of personal data in the mass media, placement in information and telecommunication networks or providing access to personal data in any other way;<br/><br/>
                                Cross-border transfer of personal data – transfer of personal data to the territory of a foreign state to an authority of a foreign state, a foreign individual or a foreign legal entity;
                                Destruction of personal data – any actions as a result of which personal data are destroyed irrevocably with the impossibility of further restoration of the content of personal data in the personal data information system and (or) as a result of which the material media of personal data are destroyed.
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            3. The Operator may process the following personal data of the User
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                Email address;<br/><br/>
                                Phone numbers;<br/><br/>
                                The site also collects and processes anonymized data about visitors (including .h. &quot;cookie&quot; files) using Internet statistics services (Yandex Metrica and Google Analytics and others).
                                The above data below in the text of the Policy are united by the general concept of Personal data.
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            4. Purposes of processing personal data
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                The purpose of processing the User’s personal data is to inform the User by sending emails; . conclusion, execution and termination of civil contracts; . provision of advisory services.<br/><br/>
                                Also, the Operator has the right to send notifications to the User about new products and services, special offers and various events. The User can always refuse to receive information messages by sending the Operator an email to am@pereoborudovanie-ts.ru with the note “Refusal of notifications about new products and services and special offers”.<br/><br/>
                                Anonymized data of Users, collected using Internet statistics services, is used to collect information about the actions of Users on the site, improve the quality of the site and its content.
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            5. Legal grounds for processing personal data
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                The Operator processes the User’s personal data only if it is filled out and/or sent by the User independently through special forms located on the website https://lab-td.ru/;<br/><br/>
                                Filling out the appropriate forms and/or sending . his personal data to the Operator, the User expresses his consent to this Policy.<br/><br/>
                                The Operator processes anonymized data about the User if this is allowed in the User’s browser settings (saving of cookies and the use of JavaScript technology is enabled) . .
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            6. The procedure for collecting, storing, transferring and other types of processing of personal data
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                The security of personal data processed by the Operator is ensured by implementing legal, organizational and technical measures necessary to fully comply with the requirements of current legislation in the field of personal data protection.<br/><br/>
                                The Operator ensures the safety of personal data and accepts all . possible measures to prevent access to personal data of unauthorized persons.<br/><br/>
                                The User&apos;s personal data will never, under any circumstances, be transferred to third parties, except in cases related to the implementation of current legislation.<br/>If inaccuracies in personal data are identified, the User can update them independently by sending a notification to the Operator to the Operator&apos;s email address am@pereoborudovanie-ts.ru marked “Updating personal data”. . <br/><br/>
                                The period for processing personal data is unlimited. The User may at any time withdraw his consent to the processing of personal data by sending a notification to the Operator via email to the Operator&apos;s email address am@pereoborudovanie-ts.ru marked “Withdrawal of consent to the processing of personal data”.
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            7. Cross-border transfer of personal data
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                Before the start of cross-border transfer of personal data, the operator is obliged to ensure that the foreign state into whose territory it is intended to transfer personal data provides reliable protection of the rights of personal data subjects.<br/><br/>
                                Cross-border transfer of personal data on the territory of foreign countries . states that do not meet the above requirements can only be carried out if there is written consent of the personal data subject to the cross-border transfer of his personal data and/or execution of an agreement to which the personal data subject is a party.
                            </p>
                        </div>
                    </div>
                    <div className="privacy__textblock">
                        <h6 className='privacy__textblock-heading'>
                            8. Final provisions
                        </h6>
                        <div className="privacy__textblock-paragraph">
                            <p>
                                The User can receive any clarification on issues of interest regarding the processing of his personal data by contacting the Operator via email gbo@pereoborudovanie-ts.ru.<br/><br/>
                                This document will reflect any changes . personal data processing policy by the Operator. The Policy is valid indefinitely until it is replaced by a new version.<br/><br/>
                                The current version of the Policy is freely available on the Internet at https://lab-td.ru/policy/
                            </p>
                        </div>
                    </div>
                </div>
            </FlexItem>
            <FlexItem className='privacy__button'>
                <ButtonGroup className="privacy__button-group">
                    <Button className="privacy__button-item" variant='subtle' href='/'>ON MAIN</Button>
                </ButtonGroup>
            </FlexItem>
        </Flex>
    </Section>
  )
}

export default PrivacyPage