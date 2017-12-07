import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Gondar = () => {
    return (
        <Page>
            <Navbar title="Gondar" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Gondar.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Gondar The Bounty Hunter Guide
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
                            Gondar is a Draenei that is often called upon for these higher skills. Not much is known about his past, but his capabilities are extraordinary. Some believe he learned from a ninja clan while others say he was born with his amazing abilities. He is able to throw shurikens with extreme accuracy and has the strength to strike down any foe with his two swift blades. His agility is matched by none, and his stealth is inferior only to few. He is interested in the conflict for money alone, and is promised a large reward. 
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health  473 </div>
                            <div>Attack damage   45-59</div>
                            <div>Armor   5.94    </div>
                            <div>Attack speed    1.7</div>
                            <div>Mana    247 </div>
                            <div>Sight Range 1800 day / 1000 night</div>
                            <div>Range   Melee   </div>
                            <div>Mov. speed  315</div>
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
                                        <div><img src="img/Skills/Gondar/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Shuriken Toss
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Hurls a deadly shuriken at an enemy unit, dealing damage and mini-stunning the target. The shuriken will bounce between any Tracked units who are within a 1200 radius of each other. 
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Cast Range: 400</div>
                                            <div>Damage: 150/225/300/375</div>
                                            <div>Cooldown: 10</div>
                                            <div>Cost: 120/130/140/150</div>
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
                                        <div><img src="img/Skills/Gondar/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Jinada
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Bounty Hunter plans his next hit, passively adding a critical strike and aim to his next attack.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Slow Duration: 3</div>
                                            <div>Movement Speed Slow: 25%</div>
                                            <div>Attack Speed Slow: 25</div>
                                            <div>Critical Damage: 150%/175%/200%/225%</div>
                                            <div>Cooldown: 12/10/8/6</div>
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
                                        <div><img src="img/Skills/Gondar/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Windwalk
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Bounty Hunter becomes invisible and gains the ability to move through other units until he attacks or uses an ability. If he breaks the invisibility with an attack, that attack will deal bonus damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Duration: 20/25/30/35</div>
                                            <div>Bonus Damage: 30/60/90/120</div>
                                            <div>Fade Time: 1/0.75/0.5/0.25 Seconds</div>
                                            <div>Cooldown: 15</div>
                                            <div>Cost: 50 Mana</div>
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
                                        <div><img src="img/Skills/Gondar/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Track
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Tracks an enemy hero and grants a 20% gain in movement speed to allies near the target. If the target dies, Bounty Hunter and nearby heroes collect a bounty in gold.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Range: 1200</div>
                                            <div>Radius: 900</div>
                                            <div>Duration: 30</div>
                                            <div>Bonus Gold for Self: 200/275/350</div>
                                            <div>Bonus Gold for Allies: 50/100/150</div>
                                            <div>Cooldown: 4</div>
                                            <div>Cost:50 Mana</div>
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
