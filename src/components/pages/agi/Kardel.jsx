import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Kardel = () => {
    return (
        <Page>
            <Navbar title="Kardel" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Kardel.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Kardel Sharpeye The Draweven Sniper
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
                            Kardel Sharpeye was born deep in the mountainous valleys of Knollen where, since time immemorial, the folk have survived by hunting the strange, cliff-dwelling steepstalkers above their village—killing them from a distance and collecting their carcasses where they fell. Sharpeye was among the best of these strange folk for whom projectile weapons are but another appendage, and to shoot is as natural as to touch. 
On his day of summoning, when he was to gain full standing in his village, Sharpeye took the ancient test: a single shot from the valley floor to strike a beast down from the cliffs. To miss was to be dishonored. With his entire village standing vigil, Sharpeye took his shot. A steepstalker fell; the crowd cheered. But when the carcass was collected, the village grew silent, for the elders found that the bullet had pierced its glittering central eye then fallen to be clenched in the steepstalker's mandibles. This ominous sign was the literal opening of a dark prophecy, foretelling both greatness and exile for the gunman who made such a shot. Sharpeye the Sniper was thus, by his own skill, condemned to make his way apart from his people—and unwelcome back among them until he has fulfilled the remainder of the prophecy by attaining legendary stature on a field of battle. 
                            {/* '*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health: 454 </div>
                            <div>Mana: 195 </div>
                            <div>Damage: 36-42   </div>
                            <div>Attack Speed: 0.71    </div>
                            <div>Range: 550</div>
                            <div>Health Regen.: 0.73    </div>
                            <div>Mana Regen.: 0.61    </div>
                            <div>Armor: 2   </div>
                            <div>Mov. Speed: 290</div>
                            <p></p>
                            <div>Strength:16 (+1,7)</div>
                            <div>Agility: 21 (+2,9)</div>
                            <div>Intelligence: 15 (+2,6)</div>
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
                                        <div><img src="img/Skills/Kardel/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Shrapnel
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Kardel fires a ball full of shrapnel into the air, which explodes, showering the target area in explosive pellets. Enemy units that walk in this area get damaged and slowed. Deals 1/3 damage to buildings. Lasts for 8 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Range: 1800 </div>
                                            <div>Radius: 350 </div>
                                            <div>Duration: 9 </div>
                                            <div>Damage per second: 12 / 24 / 36 / 48 </div>
                                            <div>Movement Speed Slow: 15% / 20% / 25%/ 30%</div>
                                            <p></p>
                                            <div>Mana Cost: 120 </div>
                                            <div>Cooldown: 15</div>
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
                                        <div><img src="img/Skills/Kardel/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Headshot
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Kardel's experience allows him to consistently hit his target's head, causing a mini-stun for 0.2 sec and additional damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Move Speed Slow: 100% </div>
                                            <div>Attack Speed Slow: 100 </div>
                                            <div>Slow Duration: 0.5 </div>
                                            <div>Proc Chance: 40% </div>
                                            <div>Damage bouns: 15 / 40/ 65 / 90</div>
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
                                        <div><img src="img/Skills/Kardel/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Take Aim
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Kardel tinkers with his rifle, allowing it to be fired at a longer range than usual.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Extend the attack range of Sniper's rifle.</div>
                                            <div>Range bonus: 75 / 150 / 225 / 300</div>
                                        {/*'*/}
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
                                        <div><img src="img/Skills/Kardel/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Assasinate
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Kardel takes time to set his sights on an enemy target, releasing an incredibly powerful shot after a short channel. The shot does a large amount of damage to the target at a far range.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Sniper locks on target enemy unit, after 1,7 second, fires a devastating shot that deals damage at long range.</div>
                                            <div>Range: 2000 / 2500 / 3000 Damage: 355 / 505 / 655</div>
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
