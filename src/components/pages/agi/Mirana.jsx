import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Mirana = () => {
    return (
        <Page>
            <Navbar title="Mirana" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Mirana.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Mirana Nightshade The Priestess of The Moon
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
                            A matriarch and high priestess of Elune's blessed order, Mirana Nightshade serves as a light in darkness for the front line of the Sentinel ranks, raining arrows and falling stars alike upon the shambling undead masses of the Undead Scourge, while her very presence is said to be so holy that it melts away the fatigue of nearby allies, giving them greater haste on the battlefield. In times of need however, she can fade herself and others around her into the safety of invisibility, making her a potent supporter matched by few.
                            {/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Range: 600 | Move Speed: 300</div>
                            <div>Primary: AGI</div>
                            <div>Str: 17 + 1.85 | Agi: 20 + 2.75 | Int: 17 + 1.65</div>
                            <div>Damage: 38 – 49 | HP: 473 | Mana: 221</div>
                            <div>HP Regen: 0.76 | Mana Regen: 0.69</div>
                            <div>Attack Speed: 1.14 | Armor: 1</div>
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
                                        <div><img src="img/Skills/Mirana/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Starfall
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Calls down a wave of meteors to damage each nearby enemy. If enemy is farther than 600 range, it has a 60% chance to still hit him. One random enemy unit within 200 aoe will get hit again for half the damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Radius: 625</div>
                                            <div>Main Damage: 75/150/225/300</div>
                                            <div>Secondary Damage: 56.25/112.5/168.75/225</div>
                                            <div>Cooldown: 12</div>
                                            <div>Cost: 100/120/140/160 Mana</div>
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
                                        <div><img src="img/Skills/Mirana/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                        Elune's Arrow {/*'*/}
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Mirana fires an arrow to target location, dealing damage and stunning the first unit it hits. The stun duration increases based on how far the target is, ranging from 0.5 to 5 seconds. Has 3000 range.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Range: 3000</div>
                                            <div>Radius: 115</div>
                                            <div>Base Damage: 50/140/230/320</div>
                                            <div>Max Bonus Damage: 140</div>
                                            <div>Cooldown: 17</div>
                                            <div>Cost: 100 Mana</div>
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
                                        <div><img src="img/Skills/Mirana/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Leap
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Mirana leaps forward into battle, empowering allied units with a ferocious roar that grants bonus attack and movement speed. Speed bonus lasts 10 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Distance: 600/700/800/900</div>
                                            <div>Radius: 775</div>
                                            <div>Move Speed Bonus: 4%/8%/12%/16%</div>
                                            <div>Attack Speed Bonus: 8/16/24/32</div>
                                            <div>Speed Duration: 10</div>
                                            <div>Cooldown: 30/26/22/18</div>
                                            <div>Cost: 40/35/30/20 Mana</div>
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
                                        <div><img src="img/Skills/Mirana/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Moonlight Shadow
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Turns Nightshade and all allied heroes invisible. If Invisibility is broken, it gets restored after the fade time during the shadow duration.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Fade Delay: 2.5/2/1.5</div>
                                            <div>Beams: 5/8/11 (6/10/14*)</div>
                                            <div>Max hits per unit: 5 (6/10/14*)</div>
                                            <div>Duration: 2.4/4.2/6 (1.8/4.2/6.6*)</div>
                                            <div>Cooldown: 160/150/140</div>
                                            <div>Cost: 150/200/250 Mana</div>
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
