import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Leshrac = () => {
    return (
        <Page>
            <Navbar title="Leshrac" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Leshrac.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Leshrac The Tormented Soul Guide
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
                             Leshrac has full area magic spells that can annihilating enemy creeps and destroying enemy tower with ease. The AoE damage afflicted is enormous and feared by the enemies. This post contains Leshrac the Tormented Soul guide, item build, skill build and strategy.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Strength - 16 + 1.5</div>
                            <div>Agility - 23 + 1.7 </div>
                            <div>Intelligence - 26 + 3 (Primary)</div>
                            <p></p>
                            <div>Base damage 45-49</div>
                            <div>Attack range of 600</div>
                            <div>Base Armor 3.3</div>
                            <div>Movement speed of 310</div>
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
                                        <div><img src="img/Skills/Leshrac/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Split Earth
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                        Splits the earth under your enemies' feet. Deals damage and stuns for a short duration.{/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Level 1 - Deals 70 damage and 1.25 seconds (heroes), 0.75 seconds (creeps) stuns</div>
                                            <div>Level 2 - Deals 140 damage and 1.50 seconds (heroes and creeps) stuns</div>
                                            <div>Level 3 - Deals 210 damage and 1.75 seconds (heroes), 2.25 seconds (creeps) stuns</div>
                                            <div>Level 4 - Deals 280 damage and 2 seconds (heroes), 3 seconds (creeps) stuns</div>
                                            <p></p>
                                            <div>Mana Cost: 100/125/140/165</div>
                                            <div>Cooldown: 9</div>
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
                                        <div><img src="img/Skills/Leshrac/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Diabolic Edict
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Saturates the area around Leshrac with magic, causing random explosions to enemies. Lasts 8 seconds..
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Level 1 - Weak explosions.</div>
                                            <div>Level 2 - Moderate explosions.</div>
                                            <div>Level 3 - Fairly strong explosions.</div>
                                            <div>Level 4 - Very strong explosions.</div>
                                            <p></p>
                                            <div>Cooldown: 22 seconds</div>
                                            <div>Mana Cost: 95/120/135/155</div>
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
                                        <div><img src="img/Skills/Leshrac/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Lightning Storm
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Calls a lightning storm that hits nearby enemies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Level 1 - Deals 80 damage. Jumps 4 times</div>
                                            <div>Level 2 - Deals 145 damage. Jumps 6 times</div>
                                            <div>Level 3 - Deals 205 damage. Jumps 7 times</div>
                                            <div>Level 4 - Deals 265 damage. Jumps 8 times</div>
                                            <p></p>
                                            <div>Cooldown: 6</div>
                                            <div>Mana Cost: 100/115/130/145</div>
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
                                        <div><img src="img/Skills/Leshrac/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Pulse Novea
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Summons a Pulse Nova every second to damage nearby enemies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Level 1 - 66 (88*) damage per nova</div>
                                            <div>Level 2- 100 (133*) damage per nova</div>
                                            <div>Level 3 - 144 (177*) damage per nova</div>
                                            <p></p>
                                            <div>Cooldown: 0</div>
                                            <div>Mana Cost: 110 to active. 20/40/60 mana per second when activated*) With Aghanim</div>
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
