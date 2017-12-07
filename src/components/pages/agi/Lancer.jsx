import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Lancer = () => {
    return (
        <Page>
            <Navbar title="Lancer" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Lancer.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Azwraith the Phantom Lancer Guide
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
                            Although his true name is unknown to his allies, Azwraith's assigned name tells you enough. Like the Angel of Death, Azrael, he fights to rid the world of those who choose to embrace undeath. He is able to appear and disappear at will like a wraith, often appearing in many places at once. Azwraith is more than capable of dispatching the undead using his lance, each blow sending them closer to the spirit-realm. This lance is the source of his astounding ability to duplicate himself; whenever it draws blood he can use their life to create weaker copies of himself. {/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health  492 </div>
                            <div>Attack damage   45-67</div>
                            <div>Armor   3.22    </div>
                            <div>Attack speed    1.7</div>
                            <div>Mana    273 </div>
                            <div>Sight Range 1800 day / 800 night</div>
                            <div>Range   Melee   </div>
                            <div>Mov. speed  290</div>
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
                                        <div><img src="img/Skills/Lancer/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Spirit Lance
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Casts a magical spirit lance on a target enemy unit, damaging and slowing it, as well as summoning a Phantom to attack the unit.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Range: 750</div>
                                            <div>Damage: 100/150/200/250</div>
                                            <div>Movement Speed Slow: 10/20/30/40%</div>
                                            <div>Slow Duration: 3</div>
                                            <div>Illusion Duration: 2/4/6/8</div>
                                            <div>Illusion Damage Taken: 400%</div>
                                            <div>Illusion Damage Dealt: 25%</div>
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
                                        <div><img src="img/Skills/Lancer/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Doppelwalk
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Renders Phantom Lancer invisible, while generating a duplicate image to confuse enemies. The image is a Phantom, and automatically moves in a random direction.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Duration: 8</div>
                                            <div>Bonus Movement Speed: 15%</div>
                                            <div>Illusion Duration: 8</div>
                                            <div>Illusion Damage Taken: 400%</div>
                                            <div>Illusion Damage Dealt: 25%</div>
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
                                        <div><img src="img/Skills/Lancer/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Juxtapose
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                        Phantom Lancer's attacks have a chance to create illusions upon hit, which can attack and move, but not use skills.{/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Chance: 12%</div>
                                            <div>Maximum Illusions: 2/4/6/8</div>
                                            <div>Illusion Duration: 20</div>
                                            <div>Illusion Damage Taken: 450%</div>
                                            <div>Illusion Damage Dealt: 25%</div>
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
                                        <div><img src="img/Skills/Lancer/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Phantom Edge
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Phantom Lancer hones his abilities. Improves chance of Juxtaposing, and the Juxtapose illusions can now create their own illusions. Phantom Edge also increases Phantom Lancer's magic resistance.
                                            {/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* Skill 4 Info here */}
                                            <div>Magic Resistance: 10/15/20%</div>
                                            <div>Juxtapose Chance Bonus: 2/4/6%</div>
                                            <div>Juxtapose Illusion Duplication Chance: 3/5/7%</div>
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
