import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Magnus = () => {
    return (
        <Page>
            <Navbar title="Magnus" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Magnus.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Magnus the Magnataur Guide </div>
                        </GridCol>
                    </GridRow>
                </CardHeader>

                <CardContent>

                    {/* ================================ */}
                    {/* Description */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Description</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <p>
                            Maybe the most tremendous being on the Scourge, Magnus is a power to be reckoned with. Trained from birth to become a potent warrior, he is now at the peak of his strength. The Magnataur's giant axe can cleave paths through his enemies, and create a bone-breaking shockwave that ripples through the ground. Further strengthened by a demonic magic that enhances his attacks, he can crush enemies with shocking ease. His greatest power, though, is the ability to create an immensely strong magnetic field, sucking in helpless foes to meet their end.
                            {/* ' */}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Strength - 21 + 2.75 (Primary)</div>
                        <div>Agility - 15 + 1.8</div>
                        <div>Intelligence- 17 + 1.65</div>
                        <p></p>
                        <div>Base damage 49-61</div>
                        <div>Attack range of 100 (melee)</div>
                        <div>Base Armor 4.1</div>
                        <div>Movement speed of 315</div>
                    </ContentBlock>

                    {/* ================================ */}
                    {/* Skills */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Skills</p></ContentBlockTitle>
                    
                    <ContentBlock inner>
                        {/* Skill 1 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Magnus/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Shock Wave</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            A wave of force ripples out from the Hero, causing damage to land units in a line.
                                        </div>
                                    </ContentBlock>
                                    {/* 'Skill 1 Info here */}
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 75 damage.</div>
                                        <div>Level 2 - 150 damage.</div>
                                        <div>Level 3 - 225 damage.</div>
                                        <div>Level 4 - 300 damage.</div>
                                        <p></p>
                                        <div>Mana Cost: 90</div>
                                        <div>Cooldown: 11/10/9/8</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* 'Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Magnus/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Empower</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 2 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Increase attack damage and provides cleave for a friendly unit. Lasts 30 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 15% attack and cleave bonus.</div>
                                        <div>Level 2 - 25% attack and cleave bonus.</div>
                                        <div>Level 3 - 35% attack and cleave bonus.</div>
                                        <div>Level 4 - 45% attack and cleave bonus.</div>
                                        <p></p>
                                        <div>Cooldown: 12 seconds</div>
                                        <div>Mana Cost: 40</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 3 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Magnus/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Skewer</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 3 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Magnataur rushes forward up to 800 range, goring up to 2 enemies on his massive tusks. This drags those two units along with him and damages them. Upon reaching his destination, the two units are slowed by 40% for 2 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 50 damage</div>
                                        <div>Level 2 - 100 damage</div>
                                        <div>Level 3 - 150 damage</div>
                                        <div>Level 4 - 200 damage</div>
                                        <p></p>
                                        <div>Cooldown: 45 seconds</div>
                                        <div>Mana Cost: 80</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* Skill 4 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Magnus/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Reverse Polarity</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 4 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Through some unknown property of matter, the Magnataur sucks all nearby enemies to his positions and stuns them with a powerful slam, dealing damage                                        
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 2.5 seconds stun, deals 150 damage</div>
                                        <div>Level 2 - 3.25 seconds stun, deals 225damage</div>
                                        <div>Level 3 - 4 seconds stun, deals 300 damage</div>
                                        <p></p>
                                        <div>Cooldown: 120/110/100</div>
                                        <div>Mana Cost: 200/250/300</div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>


                    </ContentBlock>

                </CardContent>
            </Card>
        </Page>
    );
};
