import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Dirge = () => {
    return (
        <Page>
            <Navbar title="Dirge" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Dirge.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Dirge The Undying Guide</div>
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
                            After the remake, along with Storm Spirit, Dirge the Undying is now having completely different way to play. To understand it's new power and adjust the strategy, below is his new skill set. Check also Dota 2 Undying if you are playing Dota 2.
                            {/* ' */}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Attack Range: 100</div>
                        <div>Strength: 25 + 2.1</div>
                        <div>Agility: 10 + 0.8</div>
                        <div>Intelligence: 27 + 2.8</div>
                        <div>Movement Speed 310</div>
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
                                        <div><img src="img/Skills/Dirge/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Decay</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Dirge saps away the strength of enemy heroes and retains it for a period of time.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Steals 4 Strength from each hero for 21/24/27/30 seconds</div>
                                        <div>Deals 30/60/90/120 Magical Damage</div>
                                        <p></p>  
                                        <div>Manacost 70/90/110/130</div>
                                        <div>Cooldown 11/9/7/5</div>
                                        <div>Cast Range 625</div>
                                        <div>AOE: 300</div>
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
                                        <div><img src="img/Skills/Dirge/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Soul Rip</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            Redirects the flow of living energy through a target friend or foe, damaging them or healing them depending on how many units are near it. 25 for each unit.
                                            This does not hurt zombies below since they are magic immune.
                                            This can target your tombstone.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Unit Cap: 5/10/15/20</div>
                                        <div>Cooldown: 25/20/15/10</div>
                                        <div>Manacost: 50/75/100/125</div>
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
                                        <div><img src="img/Skills/Dirge/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Tombstone</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            Unholy powers summon a cursed tombstone. Zombies will frequently spawn near each enemy unit and attack them. Zombies have a passive that additively slow their target by 7%. Zombies cannot be controlled.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Spawn area: 400/600/800/1000</div>
                                        <div>Frequency: 3</div>
                                        <div>Slow Duration: 2.5 seconds</div>
                                        <p></p>
                                        <div>Zombie Stats:</div>
                                        <div>HP: 30</div>
                                        <div>Armor: 0</div>
                                        <div>Armor Type: Unarmored</div>
                                        <div>Magic Resistance: Immune</div>
                                        <div>Damage: 37-45</div>
                                        <div>Attack Type: Pierce</div>
                                        <div>Attack Speed: 1.6</div>
                                        <div>Movement Speed: 375</div>
                                        <div>Bounty: 5-7</div>
                                        <p></p>
                                        <div>Deathlust: If the target the zombie is attacking is below 100/200/300/400 hit points, it gains 50% movement and attack speed bonus.</div>
                                        <p></p>
                                        <div>Tombstone Duration: 15/20/25/30</div>
                                        <div>Tombstone HP: 150/300/450/600</div>
                                        <div>Tombstone Armor: 10</div>
                                        <div>Tombstone Armor Type: Medium</div>
                                        <div>Tombstone Other Stats: Magic Immune, No regen.</div>
                                        <div>Tombstone Bounty: 70/90/110/130</div>
                                        <p></p>
                                        <div>Cooldown: 60</div>
                                        <div>Cast Range: 250</div>
                                        <div>Manacost: 120/130/140/150</div>
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
                                        <div><img src="img/Skills/Dirge/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Flesh Golem</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>
                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            Dirge's hatred for all living beings allows him to transform into a monster. While he's transformed he carries a plague that affects nearby enemy units. Strength of the plague depends on how close the enemy is. Amplifies damage enemy units receive and reduces their movement speed (7%). When a plagued unit dies, its essence is transferred back to the Undying.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Cooldown: 90</div>
                                        <div>Duration: 30</div>
                                        <div>Manacost: 100</div>
                                        <p></p>
                                        <div>Plague Aura Damage Amplification: (old plague was 20/25/30%)</div>
                                        <div>at max distance (700): 5/10/15%</div>
                                        <div>at closest distance (150): 20/25/30%</div>
                                        <div>In between is just an even spread between the numbers</div>
                                        <p></p>
                                        <div>Units that die under plague release their energy to you. Creeps heal you for 3% and Heroes for 12% of your Max HP.</div>
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
