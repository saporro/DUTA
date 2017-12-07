import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Kunka = () => {
    return (
        <Page>
            <Navbar title="Kunka" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="40">
                            <div><img src="img/Kunka.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="60">
                            <div>Kunka The Admiral Proudmoore Guide </div>
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
                            Of all the allies in the Sintenel's ranks, only one is known by as many names and is feared in as many lands. Called Capt. CoCo by his mates, Jacksparrow by other. The Legendary Mariner by some, but only a select few, know his real name and what it stands for. He can harness the powers if the depths to conjure torrential geysers that blast his enemies into the air. His elegant blade is sworn to the Seas and with each mighty swing it ebbs like the tides. Using a watery form of special magic, he can bring you back to your original destination. The Captain now sails towards the Scourge lands, aboard his Phantom vessel boosting the spirits of his comrades with his febled Rum, paving the way for the victory of the Sentinel. He is Kunka, Master and Commander of the Seven Seas.
                        </p>
                        {/* ' */}
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>Range: 128 | Move Speed: 300</div>
                        <div>Primary: STR</div>
                        <div>Str: 24 + 2.7 | Agi: 18 + 1.7 | Int: 18 + 2.2</div>
                        <div>Damage: 50-60 | HP: 606 | Mana: 234</div>
                        <div>HP Regen: | Mana Regen:</div>
                        <div>Attack Speed: | Armor: 4</div>
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
                                        <div><img src="img/Skills/Kunka/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Torrent</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 1 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Using his unparalleled knowledge of the sea, Kunkka is able to summon a blast of water at a targeted area. After 2 seconds a fierce torrent of water errupts from the ground, the stream blasting enemies caught in the AoE into the sky, dealing damage and slowing movement speed by 30%.
                                        </div>
                                    </ContentBlock>
                                    {/* 'Skill 1 Info here */}
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 120 damage, lasts 2 seconds.</div>
                                        <div>Level 2 - 180 damage, lasts 3 seconds.</div>
                                        <div>Level 3 - 240 damage, lasts 4 seconds.</div>
                                        <div>Level 4 - 300 damage, lasts 5 seconds.</div>
                                        <p></p>
                                        <div>Cooldown: 12</div>
                                        <div>Manacost: 105</div>
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
                                        <div><img src="img/Skills/Kunka/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Tidebringer</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 2 Description here */}
                                    <ContentBlock>
                                        <div>
                                            Kunkka's legendary sword Tidebringer is infused with the very power of the sea. Akin to the ebb and flow, Tidebringer passively grants the hero increased damage and 500 AoE cleave for a single strike every once in awhile.
                                        </div>
                                    {/*'*/}
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - +15 damage, 16 second cooldown</div>
                                        <div>Level 2 - +30 damage, 12 second cooldown</div>
                                        <div>Level 3 - +45 damage, 8 second cooldown</div>
                                        <div>Level 4 - +60 damage, 4 second cooldown</div>
                                        <p></p>
                                        <div>Passive</div>
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
                                        <div><img src="img/Skills/Kunka/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>X Marks The Spot</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 3 Description here */}
                                    <ContentBlock>
                                        <div>
                                            In order to make an assembly for his troops, Admiral Proudmore targets a hero and marks its current position on the ground. After a few seconds, the hero will instantly return to the mark.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - 2 seconds, 500 cast range.</div>
                                        <div>Level 2 - 3 seconds, 650 cast range.</div>
                                        <div>Level 3 - 4 seconds, 800 cast range.</div>
                                        <div>Level 4 - 5 seconds, 950 cast range.</div>
                                        <p></p>
                                        <div>Cooldown: 60/50/40/30</div>
                                        <div>Manacost: 110</div>
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
                                        <div><img src="img/Skills/Kunka/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>Ghost Ship</div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    {/* Skill 4 Description here */}
                                    <ContentBlock>
                                        <div>
                                            The admiral summons the mythical ghost ship S.S. CoCo to the battlefield. Allies are doused in Captain CoCo's Rum, inebriating them for 30% bonus movespeed and numbness to incoming damage, causing them to feel only half of the pain now and half after the Rum wears off. Enemies, pirates and scurvy knaves are dashed on the rocks for damage and a brief stun when the ship crashes.                                    
                                        </div>
                                        {/*'*/}
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>Level 1 - CoCo's Rum lasts 5 seconds, 300 crash damage.</div>
                                        <div>Level 2 - CoCo's Rum lasts 6 seconds, 400 crash damage.</div>
                                        <div>Level 3 - CoCo's Rum lasts 7 seconds, 500 crash damage.</div>
                                        <p></p>
                                        <div>Cooldown: 100/80/60</div>
                                        <div>Manacost: 150</div>
                                        {/*'*/}
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
