import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Akasha = () => {
    return (
        <Page>
            <Navbar title="Akasha" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Akasha.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Akasha The Queen of Pain Guide
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
                            Akasha is one of the many souls claimed by the blade, Frostmourne. Raised to serve the Lich King as a Banshee, she desired to become pure substance once more. Driving deep into the forests, she was able to subdue and possess a Succubus minion. Rightly bearing the title, Queen of Pain, she enjoys nothing more than inflicting massive damage on her foes, using both the poisonous strikes of her succubus host and the vicious howls retained from her Banshee nature. Akasha breaks her enemies' eardrums with torturing screams, some so loud they manifest into powerful waves that ripple across the lands, shattering all in their wake.
                        {/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Strength - 16 + 1.7</div>
                            <div>Agility - 18 + 2</div>
                            <div>Intelligence- 24 + 2.5 (Primary)</div>
                            <p></p>
                            <div>Base damage 45-53</div>
                            <div>Attack range of 550</div>
                            <div>Base Armor 1.6</div>
                            <div>Movement speed of 300</div>
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
                                        <div><img src="img/Skills/Akasha/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Shadow Strike
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Hurls a poisoned dagger which deals large initial damage, and then deals damage over time. The poisoned unit has its movement speed slowed for a short duration. Slow quantity increases per level.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Level 1 - 50 strike damage, 15 duration damage. 20% initial slow</div>
                                            <div>Level 2 - 70 strike damage, 30 duration damage. 30% initial slow</div>
                                            <div>Level 3 - 70 strike damage, 45 duration damage. 40% initial slow</div>
                                            <div>Level 4 - 100 strike damage, 60 duration damage. 50% initial slow</div>
                                            <p></p>
                                            <div>Mana Cost: 80/100/120/140</div>
                                            <div>Cooldown: 20/17/14/11</div>
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
                                        <div><img src="img/Skills/Akasha/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Blink
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Short distance teleportation that allows one to move in and out of combat.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Level 1 - 200 - 700 Range Teleportation</div>
                                            <div>Level 2 - 200 - 850 Range Teleportation</div>
                                            <div>Level 3 - 200 - 1000 Range Teleportation</div>
                                            <div>Level 4 - 200 - 1150 Range Teleportation</div>
                                            <div>Cooldown: 12/10/8/6</div>
                                            <div>Mana Cost: 60</div>
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
                                        <div><img src="img/Skills/Akasha/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Scream Of Pain
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            The Queen of Pain lets loose a piercing scream, damaging nearby enemies.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Level 1 - 85 damage per target</div>
                                            <div>Level 2 - 165 damage per target</div>
                                            <div>Level 3 - 225 damage per target</div>
                                            <div>Level 4 - 300 damage per target</div>
                                            <p></p>
                                            <div>Cooldown: 7</div>
                                            <div>Mana Cost: 140</div>
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
                                        <div><img src="img/Skills/Akasha/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Sonic Wave
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Creates a gigantic wave of sound which deals heavy damage to all units in a line.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Level 1 - 290 (340*) damage</div>
                                            <div>Level 2 - 430 (530*) damage</div>
                                            <div>Level 3 - 600 (725*) damage</div>
                                            <p></p>
                                            <div>Cooldown: 135 (120/100/80 *)</div>
                                            <div>Mana Cost: 250/360/500*) With Aghanim</div>
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
