import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Rubick = () => {
    return (
        <Page>
            <Navbar title="Rubick" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Rubick.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Rubick The Grand Magus Guide
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
                            Rubick, the son of Aghanim, is a force to be reckoned with. Crowds marvel in wonder at his effortless ability to hurl objects through the air, using nothing but his mind. Many wizards have challenged him yet none have surpassed his powerful and debilitating magics. The Grand Magus, with his endless talent, will stop at nothing to bewilder and outsmart his enemies, even if it means turning their own magic against them. Renowned for his unique ability to steal magics with a mere thought, he is undeniably a favorable asset to the Sentinel in their fight against the Scourge.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Type: Intelligence</div>
                            <div>Alliance: Sentinel</div>
                            <p></p>
                            <div>Strength: 19 + 1.5</div>
                            <div>Intelligence: 27 + 2.4 (Primary)</div>
                            <div>Agility: 14 + 1.6</div>
                            <p></p>
                            <div>Movement Speed: 300</div>
                            <div>Attack Range: 600</div>
                            <div>Total starting damage: 44-54</div>
                            <div>Total starting armor: 1</div>
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
                                        <div><img src="img/Skills/Rubick/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Telekinesis
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Rubick uses his telekinetic powers to lift the enemy into the air briefly and then hurls them back at the ground. The unit lands on the ground with such force that it stuns nearby enemies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Lift Duration: 1.5/1.75/2/2.25 seconds</div>
                                            <div>Stun duration: 1/1.25/1.5/1.75 (in the area it lands in, all enemy units except the initial target)</div>
                                            <div>Land stun AoE: 325</div>
                                            <p></p>
                                            <div>Cast Range: 550/575/600/625</div>
                                            <div>Cooldown: 18</div>
                                            <div>Manacost: 160</div>
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
                                        <div><img src="img/Skills/Rubick/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Fade Bolt
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Rubick creates a powerful stream of arcane energy that travels between enemy units, dealing damage and reducing their attack damage for 10 seconds. Each bounce reduces the damage dealt by 4%.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Damage: 75/150/225/300</div>
                                            <div>Attack Reduction: -14/20/26/32 Damage [-7/10/13/16 on creeps]</div>
                                            <div>Duration: 10 seconds</div>
                                            <div>Cast Range: 800</div>
                                            <p></p>
                                            <div>Cooldown: 10</div>
                                            <div>Manacost: 90/95/100/105</div>
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
                                        <div><img src="img/Skills/Rubick/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Null Field
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Rubick's mastery of the arcane protects his allies against weaker magics, granting them magic resistance.{/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Magic Damage Reduction: 5/10/15/20%</div>
                                            <div>AoE: 900</div>
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
                                        <div><img src="img/Skills/Rubick/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Spell Steal
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Rubick studies the trace magical essence of one enemy hero, learning the secrets of the last spell the hero cast. Rubick can use this spell as his own for several minutes or until he dies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Spell is stolen for: 3/4/5 minutes</div>
                                            <div>Cast Range: 1000</div>
                                            <div>Manacost: 25</div>
                                            <div>Cooldown: 20/18/16</div>
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
