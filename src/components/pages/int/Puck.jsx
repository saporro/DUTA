import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Puck = () => {
    return (
        <Page>
            <Navbar title="Puck" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Puck.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Puck The Faery Dragon Guide
                            </div>
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
                            {/* Description here */}
                        In Sentinel's search for heroes to aid them in the war against the Scourge, they discovered the lost lands of the mystical Faerie Dragons. Upon explaining the conflict to the Faerie Queen of Agrace, she sent forth Puck, a personal guardian, to turn the tides of war. Despite his small size and mischievous personality, the little dragon soon proved to pack more than his fare share of power on the battlefield, blasting through the enemy ranks with balls of magic, faerie dust, and the capability to stupefy an entire army with nothing more than his imagination. His foes all learned the hard way that size matters not in combat, and that appearences are, ultimately, deceiving.{/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Strength - 15 + 1,7</div>
                            <div>Agility - 22 + 1,7</div>
                            <div>Intelligence - 25 + 2,4</div>
                            <p></p>
                            <div>Attack range of 550</div>
                            <div>Movement speed of 295</div>
                        </div>
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
                                        <div><img src="img/Skills/Puck/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Illusory Orb
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Sends a magic orb flying down a straight path damaging everything in its way. At any time during the life of the orb the Faerie Dragon may teleport up to it, taking its place. 1800 range, 225 AOE.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Level 1 - Deals 70 damage.</div>
                                            <div>Level 2 - Deals 140 damage.</div>
                                            <div>Level 3 - Deals 210 damage.</div>
                                            <div>Level 4 - Deals 280 damage.</div>
                                            <p></p>
                                            <div>Cooldown: 15 seconds.</div>
                                            <div>Mana cost: 125.</div>
                                        </div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>


                        {/* Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Puck/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Ethereal Jaunt
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Shifts into the Illusory Orb.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Cooldown: 0 seconds.</div>
                                            <div>Mana cost: 25</div>
                                        </div>
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
                                        <div><img src="img/Skills/Puck/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Waning Shift
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                        Releases Puck's mystical faerie dust around him dealing damage and silencing enemies. 400 AOE.{/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Level 1 - Deals 60 damage and Silences for 0.1 seconds.</div>
                                            <div>Level 2 - Deals 120 damage and Silences for 1 second.</div>
                                            <div>Level 3 - Deals 180 damage and Silences for 2 seconds.</div>
                                            <div>Level 4 - Deals 240 damage and Silences for 3 seconds.</div>
                                            <p></p>
                                            <div>Cooldown: 20 seconds.</div>
                                            <div>Mana cost: 100/110/120/130.</div>
                                        </div>
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
                                        <div><img src="img/Skills/Puck/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Phase Shift (Auto-cast Available)
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Shifts the Faerie Dragon out of existence for a brief period, temporarily avoiding any further damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Level 1 - Up to 0.75 seconds.</div>
                                            <div>Level 2 - Up to 1.5 seconds.</div>
                                            <div>Level 3 - Up to 2.25 seconds.</div>
                                            <div>Level 4 - Up to 3 seconds.</div>
                                            <p></p>
                                            <div>Cooldown: 6 seconds.</div>
                                            <div>Mana cost: 50/40/30/20.</div>
                                        </div>
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
