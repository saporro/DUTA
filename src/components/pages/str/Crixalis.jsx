import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Crixalis = () => {
    return (
        <Page>
            <Navbar title="Crixalis" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Crixalis.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Crixalis the Sand King Guide </div>
                        </GridCol>
                    </GridRow>
                </CardHeader>

                <CardContent>

                    {/* ================================ */}
                    {/* Description */}
                    {/* ================================ */}
                    <ContentBlockTitle><p>Description</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <p>Crixalis was a normal scorpion in Kalimdor's deserts. For unknown reasons, he evolved much faster than his brothers, growing extremely large. Because he was still susceptible to the Sand King King's mind control, he was summoned and is now guarding the Frozen Throne. While much larger, Crixalis still possesses his scorpian abilities, such as the power to burrow into the ground and resurface elsewhere, impaling all in his wake. His tail contains a violent venom, which causes his enemies to explode. Scouts have discovered that he can create large tremors in the ground, killing anyone distracted enough to get near him. </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Range: 128 | Move Speed: 300</div>
                        <div>Primary: STR</div>
                        <div>Str: 18 + 2.6 | Agi: 19 + 2.1 | Int: 16 + 1.8</div>
                        <div>Damage: 43 – 59 | HP: 492 | Mana: 208</div>
                        <div>HP Regen: 0.79 | Mana Regen: 0.65</div>
                        <div>Attack Speed: 0.70 | Armor: 3</div>
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
                                        <div><img src="img/Skills/Crixalis/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Borrows Strike</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            The Sand King burrows into the ground, tunnels forward impaling everything above him, then surfaces.
                                        </div>
                                    </ContentBlock>
                                    {/* 'Skill 1 Info here */}
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Deals 100 damage, 350 casting range.</div>
                                        <div>Level 2 - Deals 160 damage, 450 casting range.</div>
                                        <div>Level 3 - Deals 220 damage, 550 casting range. </div>
                                        <div>Level 4 - Deals 280 damage, 650 casting range. </div>
                                        <div>Mana Cost: 110/120/130/140</div>
                                        <div>Cooldown: 11 Seconds </div>
                                    </ContentBlock>
                                </ContentBlock>
                                <ContentBlock>
                                <p></p>
                                </ContentBlock>

                            </AccordionContent>
                        </AccordionItem>

                        {/* 'Skill 2 */}
                        <AccordionItem>
                            <AccordionToggle>
                                <GridRow noGutter>
                                    <GridCol width="20">
                                        <div><img src="img/Skills/Crixalis/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Sand Storm</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 2 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Sand King creates a fearsome Sand Storm. The storm blinds his enemies and he becomes invisible to them. The storm also causes his opponents to take damage. 
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Deals 20 damage per second. 0.6 second delay before Sand King is revealed, lasts 20 seconds.</div>
                                        <div>Level 2 - Deals 40 damage per second. 0.9 second delay before Sand King is revealed, lasts 40 seconds.</div>
                                        <div>Level 3 - Deals 60 damage per second. 1.2 second delay before Sand King is revealed, lasts 60 seconds. </div>
                                        <div>Level 4 - Deals 80 damage per second. 1.5 second delay before Sand King is revealed, lasts 80 seconds. </div>
                                        <div>Mana Cost: 60/50/40/30</div>
                                        <div>Cooldown: 40/30/20/10 </div>
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
                                        <div><img src="img/Skills/Crixalis/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Caustic Finale</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 3 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Each of the Sand King's attacks injects a deadly venom that causes the target to explode violently on death, dealing damage in an area. 
                                            {/*' Skill 3 Skill info here */}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 90 damage.</div>
                                        <div>Level 2 - 130 damage.</div>
                                        <div>Level 3 - 170 damage. </div>
                                        <div>Level 4 - 220 damage. </div>
                                        <div>Mana Cost: N/A</div>
                                        <div>Cooldown: N/A</div> 
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
                                        <div><img src="img/Skills/Crixalis/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Epicenter</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 4 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Sends a disturbance into the earth, causing it to shudder violently. All caught within range will take damage and become slowed. The closer to the epicenter, the more damage taken. 
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - Emits 6(8*) pulses. Each pulse deals 110 damage and slows by 30%.</div>
                                        <div>Level 2 - Emits 8(10*) pulses. Each pulse deals 110 damage and slows by 30%.</div>
                                        <div>Level 3 - Emits 10(12*) pulses. Each pulse deals 110 damage and slows by 30%. </div>
                                        <div>Mana Cost: 175/250/325</div>
                                        <div>Cooldown: 140/120/100 (120/100/80 with Scepter) </div>
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
