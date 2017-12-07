import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Azgalor = () => {
    return (
        <Page>
            <Navbar title="Azgalor" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Azgalor.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Azgalor The Pit Lord Guide</div>
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
                            One of the many regents of Lord Archimonde who became stranded on the physical plane after the Legion fell in Kalimdor, the devil Azgalor's love of destruction allowed him to accept the Lich King's invitation to help lead the Scourge in conquest with few regrets. After all, this Pit Lord is happiest when he conjures fire to scour his opponents from above, roasting them slowly as the dead literally explode from beneath their feet. With such hateful power in the hands of a monster such as this, it's no wonder he inspires so much terror as he roams across the battlefield.
                            {/* ' */}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Strength: 25 + 2.6 (Primary)</div>
                        <div>Intelligence: 17 + 2.6</div>
                        <div>Agility: 12 + 1.3</div>
                        <div>Movement Speed: 305</div>
                        <div>Attack Range: 128 (melee)</div>
                        <div>Total starting damage: 62-68</div>
                        <div>Total starting armor: 4.68</div>
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
                                        <div><img src="img/Skills/Azgalor/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Firestorm</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Calls down waves of fire that damage enemy units in an area. Each wave deals initial damage and then burns enemies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Damage: 55/80/105/130 per wave (magical)</div>
                                        <div>Plus 15 damage per second (magical)</div>
                                        <div>Cooldown: 16 seconds</div>
                                        <div>Duration: 3 seconds</div>
                                        <div>Mana cost: 100/110/120/130</div>
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
                                        <div><img src="img/Skills/Azgalor/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Pit of Malice</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            A deadly pit is conjured at target location. Any unit that enters it becomes corrupted with malicious forces and is unable to move for some time.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Traps all enemies for: 1/1.5/2/2.5 seconds</div>
                                        <div>Damage: 100 (magical)</div>
                                        <div>AOE of the Pit: 275</div>
                                        <div>Casting range: 800</div>
                                        <div>Duration of the Pit: 7 seconds</div>
                                        <div>Cooldown: 24/21/18/15</div>
                                        <div>Mana cost: 100/115/130/145</div>
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
                                        <div><img src="img/Skills/Azgalor/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Expulsion</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            Ignites the rotten gases of corpses around you, detonating them to cause damage to any enemy within the explosion radius. Each explosion fuels another until there are no more corpses in the area. Heals allied units for half of the damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Damage: 20/40/60/80 per second (magical)</div>
                                        <div>Heals: 10/20/30/40 per second</div>
                                        <div>AOE: 575 (finding corpse and damage AOE)</div>
                                        <div>Cooldown: 18 seconds</div>
                                        <div>Mana cost: 125</div>
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
                                        <div><img src="img/Skills/Azgalor/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Dark Rift</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            Opens rifts that pass through the netherworld at his present position and a target unit simultaneously. Teleports your hero and nearby allied heroes through the rift.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Casting delay: 6/5/4 seconds</div>
                                        <div>AOE: 450</div>
                                        <div>Cooldown: 130 seconds</div>
                                        <div>Mana cost: 75/150/225</div>
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
