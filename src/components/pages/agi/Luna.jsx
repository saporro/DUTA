import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Luna = () => {
    return (
        <Page>
            <Navbar title="Luna" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Luna.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Luna Moonfang The Moon Rider Guide
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
                            Luna Moonfang is a stalwart and devout follower of the Moon Goddess, Elune. She fights alongside the Sentinel in the never-ending battle to cleanse the land of the unholy Scourge. Through her valiant efforts, she has been granted small portions of Elune's mystical power. Luna uses this gift to cut a swath through her enemies. It has been said that Luna is able to call down the very light of the moon, and is always surrounded by a glowing aura, as though in moonlight herself. Luna is a shining beacon for the Sentinel, an ever vigilant protector.
                            {/*'*/}
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health  435 </div>
                            <div>Mana    208 </div>
                            <div>Damage  43-49   </div>
                            <div>Attack Speed    .72 </div>
                            <div>Range   330</div>
                            <div>Health Regen.   0.7 </div>
                            <div>Mana Regen. .65 </div>
                            <div>Armor   3   </div>
                            <div>Mov. Speed  330</div>
                            <p></p>
                            <div>Strength    15 (+1.9)   </div>
                            <div>Agility 22 (+32.8)  </div>
                            <div>Intelligence    16 (+1.85)</div>
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
                                        <div><img src="img/Skills/Luna/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Lucent Beam
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Luna channels a concentrated beam of lunar energy at an enemy, stunning and dealing damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Cast Range: 800</div>
                                            <div>Stun Duration: 0.6</div>
                                            <div>Damage: 75/150/225/300</div>
                                            <div>Cooldown: 6</div>
                                            <div>Cost: 90/100/110/120 Mana</div>
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
                                        <div><img src="img/Skills/Luna/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Moon Glave
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Allows Luna's glaive to bounce to enemy units near the attacked unit. Each bounce deals less damage.{/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Bounce Radius: 500</div>
                                            <div>Bounces: 1/2/3/6</div>
                                            <div>Damage reduction: 35%</div>
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
                                        <div><img src="img/Skills/Luna/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Lunar Blessing
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Grants bonus damage to nearby allies, while blessing Luna with extra night vision.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Radius: 900</div>
                                            <div>Bonus Damage: 14/22/30/38</div>
                                            <div>Bonus Night Vision: 1000</div>
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
                                        <div><img src="img/Skills/Luna/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Eclipse
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Calls an eclipse that follows Luna, striking units with her current level of Lucent Beam. A single target can only be hit a maximum number of times. Unlike individual Lucent Beams, Eclipse does not stun. Eclipse turns day into night for 10 seconds.
                                            <p></p>
                                            Upgraded by Aghanim's Scepter: Increases beams, duration, and max hits per unit. Allows Eclipse to be cast on an area within 2500 range. Grants obstructed vision of that area. Can also target any allied unit to center Eclipse on their location, even while moving.
                                            {/*'*/}
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Range: 0 (2500*)</div>
                                            <div>Radius: 675</div>
                                            <div>Strike interval: 0.6</div>
                                            <div>Beams: 5/8/11 (6/10/14*)</div>
                                            <div>Max hits per unit: 5 (6/10/14*)</div>
                                            <div>Duration: 2.4/4.2/6 (1.8/4.2/6.6*)</div>
                                            <div>Cooldown: 160/150/140</div>
                                            <div>Cost: 150/200/250 Mana</div>
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
