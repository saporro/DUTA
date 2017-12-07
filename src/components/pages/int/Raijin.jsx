import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Raijin = () => {
    return (
        <Page>
            <Navbar title="Raijin" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Raijin.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Raijin Thunderkeg The Storm Spirit Guide
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
                            Storm Spirit mixes up physical attacks with spell damage and is commonly seen bouncing around the battlefield zapping his foes. Static Remnant lays down a flickering electrical clone, which on contact will explode, delivering shocks to all foes in the vicinity. Electric Vortex is a powerful disabling spell, which Storm Spirit uses to reel in enemies; he especially likes to reel them into a Static Remnant. Completing this combo, Overload adds a blast of electricity to every spell he casts. Storm Spirit's ultimate ability is Ball Lightning, a teleportation spell with no cooldown and no maximum range, which gives Storm Spirit the ability to zap around the map as long as his mana and regeneration don't give out. Like a storm, this hero gathers strength slowly, but once at full power, he is an unstoppable force of nature.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Attack Range: 500</div>
                            <div>Strength: 17 + 1.5</div>
                            <div>Agility: 22 + 1.8</div>
                            <div>Intelligence: 23 + 2.6</div>
                            <div>Movement Speed 295</div>
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
                                        <div><img src="img/Skills/Raijin/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Static Remnant
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Raijin creates a remnant of himself containing his essence. The Static Remnant will release its stored energy whenever an enemy units comes near it. Lasts up to 12 seconds.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Damage: 140/180/220/260</div>
                                            <div>Trigger AOE: 210</div>
                                            <div>Damage AOE: 260</div>
                                            <div>Cooldown: 4</div>
                                            <div>Manacost: 70/80/90/100</div>
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
                                        <div><img src="img/Skills/Raijin/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Electric Vortex
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Storm focuses his energy to rip open a vortex drawing an enemy to it. This process slows the Storm Spirit down for a brief period.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Pulls 100/150/200/250 units over 1/1.5/2/2.5 seconds.</div>
                                            <div>Your movement is reduced by 50% for 3 seconds.</div>
                                            <p></p>
                                            <div>Cast Range: 300</div>
                                            <div>Manacost: 100</div>
                                            <div>Cooldown: 20</div>
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
                                        <div><img src="img/Skills/Raijin/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Overload
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Storm Spirit becomes overloaded with electrical energy whenever he casts a spell. The charge is released on his next attack as an electrical burst, dealing damage and slowing nearby units.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Slow: 50% as 80% ms Lasts 0.6 seconds (Same stats as old overload)</div>
                                            <div>Bonus damage: 30/45/60/75</div>
                                            <div>AOE: 275</div>
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
                                        <div><img src="img/Skills/Raijin/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Ball Lightning
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Storm Spirit becomes enveloped with energy, losing his physical form, and travels until he depletes his mana or chooses to stop. While in this form, he deals damage to nearby units based on how far his electrical form has traversed. Damage, speed and area of effect improves per level.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Stops traveling whenever you run out of mana. Deals damage in a small area around you based on distance traveled.</div>
                                            <p></p>
                                            <div>Damage: 8/12/16 per 100 units traveled</div>
                                            <div>Manacost: (15 + 7% of total manabase) + mana based on distance traveled (10+1% per 100 units)</div>
                                            <div>Cast Range: Global</div>
                                            <div>Cooldown: 0</div>
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
