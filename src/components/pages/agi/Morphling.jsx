import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Morphling = () => {
    return (
        <Page>
            <Navbar title="Morphling" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Morphling.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                The Morphling Guide
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
                            The Morphling, nature's magnum opus, the pinnacle of evolution, can force his liquid body to flow over opponents in a massive wave, forcibly moving himself as well as injuring his enemies. At a whim he may change the composition of his body, trading strength for agility and vice versa. Capable of manipulating his energy into either disable or damage based on his strongest attribute, the Morphling's most disturbing ability creates a literal clone of a chosen target, forcing them to face their own reflection as he crushes them in their confusion. 
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health:  511 </div>
                            <div>Attack damage:   37-46</div>
                            <div>Armor:   1.94    </div>
                            <div>Attack speed:    1.7</div>
                            <div>Mana:    221 </div>
                            <div>Sight Range: 1800/800</div>
                            <div>Range:   Ranged  </div>
                            <div>Mov. speed: 295</div>
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
                                        <div><img src="img/Skills/Morphling/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Waveform
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Morphling Morphlingorarily transforms into a wave, becoming invulnerable and surging forward, dealing damage to everything in his wake.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Range: 1000</div>
                                            <div>Radius: 200</div>
                                            <div>Damage: 100/175/250/325</div>
                                            <div>Cooldown: 11</div>
                                            <div>Cost: 140/155/160/165</div>
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
                                        <div><img src="img/Skills/Morphling/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Adaptive Strike
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Morphling blasts a target with magical energy, dealing damage and stunning the target based on the Morphling's greater attribute (between Agility and Strength). If the Morphling has 50% more Agility than Strength then Adaptive strike will deal maximum damage, whereas if you have 50% more Strength than Agility you deal the maximum duration stun.
                                            {/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Range: 600/700/800/900</div>
                                            <div>Base Damage: 20/40/60/80</div>
                                            <div>Min Damage Agi Multiplier: 0.25</div>
                                            <div>Max Damage Agi Multiplier: 0.5/1/1.5/2</div>
                                            <div>Min Stun: 0.25</div>
                                            <div>Max Stun: 1.25/2.25/3.25/4.25</div>
                                            <div>Cooldown: 10</div>
                                            <div>Cost: 100 Mana</div>
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
                                        <div><img src="img/Skills/Morphling/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Morph
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            The Morphling can change his physical properties at any time allowing him to convert Agility into Strength and vice versa.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Points per Shift: 2</div>
                                            <div>Points per Second: 2/4/6/10</div>
                                            <div>Bonus Agility: 3/4/5/6</div>
                                            <div>Cost: 30 Mana per Second</div>
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
                                        <div><img src="img/Skills/Morphling/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Replicate
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            The Morphling creates an exact copy of a hero, ally or enemy that deals 50% damage. At any time, the Morphling may instantly teleport to his illusion, although he ends it in the process.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Range: 700/1100/1500</div>
                                            <div>Illusion Duration: 30/45/60</div>
                                            <div>Cooldown: 80</div>
                                            <div>Cost: 25 Mana</div>
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
