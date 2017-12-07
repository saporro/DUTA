import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Tresdin = () => {
    return (
        <Page>
            <Navbar title="Tresdin" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Tresdin.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>
                                {/* Hero Name */}
                                Tresdin The Legion Commander Guide
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
                            MyTresdin, a human hero who rode from the present by bringing the different characteristics of the art of building a DotA killer. Carry strength that will stimulate our instincts that can not be satisfied, to continue building this hero Killing potential which has no limits.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Affiliation: Sentinel</div>
                            <div>Range: 128</div>
                            <div>Movement Speed: 310</div>
                            <p></p>
                            <div>Total starting damage: 57-61</div>
                            <div>Total starting armor: 3</div>
                            <p></p>
                            <div>Strength 26 + 2.6 per level</div>
                            <div>Agility 18 + 1.7 per level</div>
                            <div>Intelligence 20 + 2.2 per level</div>
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
                                        <div><img src="img/Skills/Tresdin/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Overwhelming Odds
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Turns the enemies numbers against them, dealing damage and granting you 9% bonus movement speed per hero and 3% per unit in the 315 AoE for 7 seconds. Deals bonus damage to illusions and summoned units.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 1 Info here */}
                                        <div>AoE: 315</div>
                                        <div>Damage: 60/120/180/240 +10 damage per unit</div>
                                        <div>Summoned Unit Bonus Damage: 50% of units hp</div>
                                        <div>Cast Range: 1000</div>
                                        <p></p>
                                        <div>Movement Bonus per unit: 9% per hero, 3% per unit (lasts 7 seconds)</div>
                                        <p></p>
                                        <div>Cooldown: 18</div>
                                        <div>Manacost: 100</div>
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
                                        <div><img src="img/Skills/Tresdin/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Press The Attack 
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Removes all debuffs and disables from the targeted ally and grants them bonus attack speed and health regen for 4 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 2 Info here */}
                                        <div>Attack Speed: 60/80/100/120</div>
                                        <div>Health Regeneration: 30/40/50/60</div>
                                        <div>Duration: 4 seconds</div>
                                        <p></p>
                                        <div>Cooldown: 15</div>
                                        <div>Manacost: 80/90/100/110</div>
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
                                        <div><img src="img/Skills/Tresdin/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Moment of Courage
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            When Tresdin is attacked, he has a chance to gain a moment of courage, instantly attaking again with bonus lifesteal.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 3 Info here */}
                                        <div>Chance: 16/18/20/22%</div>
                                        <div>Lifesteal: 20/40/60/80%</div>
                                        <p></p>
                                        <div>Notes: Cannot proc more than once every 0.75 seconds. The lifesteal is not an orb effect.</div>
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
                                        <div><img src="img/Skills/Tresdin/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Duel
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Calls the targeted enemy for a duel. Both you and the enemy will be forced to attack each other and will both be unable to use items or abilities. The victor gains 10 permanent bonus damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 4 Info here */}
                                        <div>Duration: 4/4.75/5.5 seconds</div>
                                        <p></p>
                                        <div>Duel winner bonus damage: 10 damage.</div>
                                        <p></p>
                                        <div>Cooldown: 50</div>
                                        <div>Manacost: 75</div>
                                        <div>Cast Range: 100</div>
                                        <p></p>
                                        <div>Notes: The loser of the duel is the hero that dies while under the buff. There is no victor if both heroes are alive at the end of the duration.</div>
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
