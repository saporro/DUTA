import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Rexxar = () => {
    return (
        <Page>
            <Navbar title="Rexxar" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Rexxar.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>
                                {/* Hero Name */}
                                Rexxar The Beast Master Guide
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
                            A wandering vagrant of the Mok'nathal, the fabled half orc-half ogres of legend, Rexxar and his mighty blades have joined the cause of the Sentinel to better protect the natural world around him. A friend of beasts, Rexxar flails and tears at his enemies with unsettling savagery, even going as far as hurling his axes in the manner of boomerangs at his enemies to better his chances at victory. Truly a warrior of the living planet that thrives around him, the Beastmaster is an ally to be counted on when he is needed the most.
                            {/*' */}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Range: 100 </div>
                            <div>Move Speed: 310</div>
                            <p></p>
                            <div>Primary: Strength</div>
                            <p></p>
                            <div>Str: 23 + 2.2 </div>
                            <div>Agi: 18 + 1.6</div>
                            <div>Int: 18 + 1.9</div>
                            <p></p>
                            <div>Damage: 56 – 60 </div>
                            <div>HP: 587 </div>
                            <div>Mana: 208 </div>
                            <div>Armor: 4.5</div>
                            <div>HP Regen: 0.94 </div>
                            <div>Mana Regen: 0.65 </div>
                            <div>Attack Speed: 1.44 (+18%IAS)</div>
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
                                        <div><img src="img/Skills/Rexxar/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Wild Axes
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Rexxar hurls his two axes outward, which then intersect and return to him. Each axe can only damage a unit once.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 1 Info here */}
                                        <div>Level 1 – Each axe deals 90 damage.</div>
                                        <div>Level 2 – Each axe deals 120 damage.</div>
                                        <div>Level 3 – Each axe deals 150 damage.</div>
                                        <div>Level 4 – Each axe deals 180 damage.</div>
                                        <p></p>
                                        <div>Cooldown: 13 seconds</div>
                                        <p></p>
                                        <div>Additional Information:</div>
                                        <p></p>
                                        <div>Range is 1300</div>
                                        <div>AoE radius of each Axe is 150. However since the axe travels at a distance apart, the total width of the AoE is approximately 450-500. Since the axe intersects each other at the turning point, the AoE at the point is minimal. The general AoE when it is thrown will look like a rectangle like most other spells (eg Dragon Salve, Shockwave etc) but tapered near the end.</div>
                                        <div>Flight time is 3 sec no matter how far you throw it (1.5sec to target, 1.5 back to Beastmaster. It will travel faster if the target is far and very slow if you throw it at a 200range. You will notice that the axe also accelerates as it is being thrown and decelerates as it does a 180 turn)</div>
                                        <div>Damage is physical. Reducible by armor and damage blocking (eg stout/Vanguard).</div>
                                        <div>Flight path will change as Beastmaster moves to another position.</div>
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
                                        <div><img src="img/Skills/Rexxar/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Call of the Wild
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Rexxar calls upon wild beasts to aid him. The duration, strength and number of beasts increases per level. Previous summons are removed upon casting.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 2 Info here */}
                                        <div>Level 1 – Summons a Scout Hawk. (60sec duration)</div>
                                        <div>Level 2 – Summons a Scout Hawk and a Quilbeast. (70sec duration)</div>
                                        <div>Level 3 – Summons a Greater Hawk and a Quilbeast. (80sec duration)</div>
                                        <div>Level 4 – Summons a Greater Hawk and a Greater Quilbeast. (90sec duration)</div>
                                        <p></p>
                                        <div>Cooldown/Mana cost: 45/50/55/60 seconds/25 mana at all levels.</div>
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
                                        <div><img src="img/Skills/Rexxar/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Beast Rage
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            When Rexxar engages an opponent, his animalistic nature grants him even greater proficiency in single combat. With each continuous blow on the same target, Rexxar gains understanding of the prey’s defences, and guides each strike with greater ease than the last. Maximum of 100% increased attack speed. If Rexxar changes targets, his rage counter drops to half of where it was.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 3 Info here */}
                                        <div>Level 1 – Every continuous attack gives Rexxar 5% bonus attack speed.</div>
                                        <div>Level 2 – Every continuous attack gives Rexxar 10% bonus attack speed.</div>
                                        <div>Level 3 – Every continuous attack gives Rexxar 15% bonus attack speed.</div>
                                        <div>Level 4 – Every continuous attack gives Rexxar 20% bonus attack speed.</div>
                                        <p></p>
                                        <div>Passive</div>
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
                                        <div><img src="img/Skills/Rexxar/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Primal Roar
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            The Beastmaster looses a deafening roar which deals damage and stuns its target. Enemy units near the roar wave take minor damage and have their movement speed and attack rate reduced. Due to the force of the roar, all units between the Beastmaster and his prey are shoved aside, creating an open path.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 4 Info here */}
                                        <div>Level 1 – 200 primary damage, 3 second stun. 100 side damage, 2 second slow.</div>
                                        <div>Level 2 – 250 primary damage, 3.5 second stun. 200 side damage, 3 second slow.</div>
                                        <div>Level 3 – 300 primary damage, 4 second stun. 300 side damage, 4 second slow.</div>
                                        <p></p>
                                        <div>Cooldown: 60 seconds.</div>
                                        <div>Mana: 150/175/200</div>
                                        <p></p>
                                        <div>Additional Information:</div>
                                        <p></p>
                                        <div>600 range at all levels</div>
                                        <div>-50% Movement and Attack Speed at all levels</div>
                                        <div>Allied units are pushed aside also but will not be slowed.</div>
                                        <div>Slowed units shows a red Circling-circle on top of their head while the stunned target shows both a red and blue Circling-circle (blue for stun)</div>
                                        <div>Units behind the roared target will not be affected</div>
                                        <div>Units who are immune to magic (Repel, Rage, BKB) are stunned by Primal Roar, but they do not take the damage from it.</div>
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
