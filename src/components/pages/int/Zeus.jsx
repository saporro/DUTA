import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Zeus = () => {
    return (
        <Page>
            <Navbar title="Zeus" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Zeus.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Zeus The Lord Of The Olympia Guide
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
                            Once a deity of unfathomable might, Zeus reluctantly sacrificed his much relished immortality in exchange for the chance to crush the sinister armies of the unholy undead. As his soul crossed into the mortal plane, his omnipotent powers withered greatly, yet not nearly enough to quell this destructive Thunder God's resolve for justice. With sheer precision, he cleanses through the enemy ranks with an impressive mastery of electrical discharge, smiting the fool hardy with formidable bolts of lightning from the heavens above. Ever vigilant in his relentless assault, the Scourge cowers in fear of incurring the fearsome wrath of the Lord of Olympia.
                        {/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Strenght: 19 + 1.8</div>
                            <div>Agility: 15 + 1.7</div>
                            <div>Intelligence: 20 + 2.7</div>
                            <p></p>
                            <div>Base Damage: 41 - 49 </div>
                            <div>Base Armor: 2.1 </div>
                            <div>Movespeed: 295 </div>
                            <div>Attack Range: 350 </div>
                            <div>Sight Range: 1800 / 800</div>
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
                                        <div><img src="img/Skills/Zeus/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Arc Lightning
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Hurls a bolt of arcing energy that laces through many nearby enemy units.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Level 1 - Arcs 5 times, deals 85 damage.</div>
                                            <div>Level 2 - Arcs 7 times, deals 100 damage.</div>
                                            <div>Level 3 - Arcs 9 times, deals 115 damage.</div>
                                            <div>Level 4 - Arcs 15 times, deals 130 damage.</div>
                                            <p></p>
                                            <div>Cooldown: 2 seconds.Manacost: 65/72/79/86</div>
                                            <div>Cast range 700, 500 AoE </div>
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
                                        <div><img src="img/Skills/Zeus/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Lightning Bolt
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Summons a bolt of lightning from the heavens to strike a target enemy.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Level 1 - Deals 100 damage.</div>
                                            <div>Level 2 - Deals 175 damage.</div>
                                            <div>Level 3 - Deals 275 damage.</div>
                                            <div>Level 4 - Deals 350 damage.</div>
                                            <p></p>
                                            <div>Cooldown: 7 seconds.</div>
                                            <div>Manacost: 75/95/115/135</div>
                                            <p></p>
                                            <div>• Gives true sight within 900 range.</div>
                                            <div>• Reveals the surrounding area (1000 and 750 range on day and night, respectively) for 3 seconds.</div>
                                            <div>• Posseses a mini-stun, which allows Zeus to interrupt channeling spells and items with this ability.</div>
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
                                        <div><img src="img/Skills/Zeus/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Static Field (Passive)
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Whenever Zeus casts a spell, he shocks all nearby enemy heroes for a percentage of their current hit points as damage.
Affects an area of effect of 800.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Level 1 - Shocks for 5% of current hit points.</div>
                                            <div>Level 2 - Shocks for 7% of current hit points.</div>
                                            <div>Level 3 - Shocks for 9% of current hit points.</div>
                                            <div>Level 4 - Shocks for 11% of current hit points. </div>
                                            <p></p>
                                            <div>• The damage from Static Field is dealt before the damage from the used spell.</div>
                                            <div>• Using items does not trigger Static Field.</div>
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
                                        <div><img src="img/Skills/Zeus/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Thundergod's Wrath {/*'*/}
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Strikes down all enemy heroes with a bolt of lightning.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Level 1 - Deals 210 (335) damage.</div>
                                            <div>Level 2 - Deals 335 (460) damage.</div>
                                            <div>Level 3 - Deals 460 (570) damage.</div>
                                            <p></p>
                                            <div>Cooldown: 120 seconds.</div>
                                            <div>Manacost: 225/325/450</div>
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
