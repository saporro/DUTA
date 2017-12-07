import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Batrider = () => {
    return (
        <Page>
            <Navbar title="Batrider" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Batrider.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Jin'Zakk The Batrider{/*'*/}
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
                            There is no such thing as harmony among the creatures of the Yama Raskav Jungle. By bite, or claw, or pincer, or hoof, even the slightest sign of weakness means a swift death. They say the Rider was just a lad cutting chaff in his family's field when he was taken, swept up by a massive morde-bat looking for take-out. But this boy had a better idea, and wriggled his way from his captor's grip, onto the beast's back, and hacked it down with his tools. Emerging from the bloody wreckage and intoxicated by the thrill of flight, the boy realized he'd found his calling. The boy grew, and every summer he'd return to his family's field, often setting out into the bush seeking to reclaim that first thrill of facing death in the form of jaws or a fatal fall. The years went on, but his fire only grew stronger. He studied the overgrowth, plunging deeper with each expedition, until finally he found his way to the caves at the heart of hostility. They say the Rider, on the eve of a scorching summer night, had nothing but a rope, a bottle of liquid courage and a burning determination to feel the skies once more, when he plunged inside....
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Strength: 23 + 2.5</div>
                            <div>Agility: 15 + 1.5</div>
                            <div>Intelligence: 24 + 2.5</div>
                            <p></p>
                            <div>Attack Range: 375</div>
                            <div>Movement Speed: 290</div>
                            <p></p>
                            <div>Cast Point 0.3</div>
                            <div>Attack Point 0.5</div>
                            <div>Hero Class: Intelligence</div>
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
                                        <div><img src="img/Skills/Batrider/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Sticky Napalm
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Targets an area and drenches it in oil. Slows the movement speed and turn rate of units in that area. Extra casts of this on the same targets stacks.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Any fire damage from batrider will ignite the napalm, dealing damage for each stack.</div>
                                            <p></p>
                                            <div>Fire damage is any regular batrider attack, flamebreak or firefly</div>
                                            <p></p>
                                            <div>AOE: 375</div>
                                            <div>Damage: 10/15/20/25</div>
                                            <div>Slow: 3/5/7/9%</div>
                                            <p></p>
                                            <div>Turn rate reduction: 30%</div>
                                            <div>Lasts 7 seconds (refreshes on hit)</div>
                                            <div>Stack max: 10</div>
                                            <p></p>
                                            <div>Cast Range: 700</div>
                                            <div>Manacost: 15</div>
                                            <div>Cooldown: 3</div>
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
                                        <div><img src="img/Skills/Batrider/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Flamebreak
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Hurls a highly explosive cocktail of dangerous chemicals at the target position. Upon impacting with an enemy the missile explodes, dealing damage and knocking all nearby foes away from the impact. Any unit who has been Napalmed will take additional damage from the blast.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Knocks back all units in the explosion area proportionally to how far they were from the center</div>
                                            <p></p>
                                            <div>Damage: 75/150/225/300</div>
                                            <div>Max knockback: 400</div>
                                            <div>Explosion AOE: 375</div>
                                            <div>Detection AOE: 100</div>
                                            <div>Damage: 75/150/225/300</div>
                                            <div>Travel Distance: 1600</div>
                                            <p></p>
                                            <div>Manacost: 80/100/120/140</div>
                                            <div>Cooldown: 11</div>
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
                                        <div><img src="img/Skills/Batrider/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Firefly
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Flies high leaving a burning trail behind. Enemies who dare follow will get burned by the fiery napalm. Nothing can take the skies from him.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Trees in your path are killed by the fire.</div>
                                            <div>Gives you flying pathing</div>
                                            <p></p>
                                            <div>Damage: 20/40/60/80 per second</div>
                                            <div>AOE: 200</div>
                                            <div>Spell Duration: 15</div>
                                            <div>Pathing: Flying</div>
                                            <p></p>
                                            <div>CD: 40</div>
                                            <div>Manacost: 100</div>

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
                                        <div><img src="img/Skills/Batrider/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Flaming Lasso
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Snags a target with a constricting lasso, allowing the Batrider to drag them behind him as he moves.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Does not drag units over cliffs or impassable terrain.</div>
                                            <p></p>
                                            <div>If you TP or blink away or get ported away, the lasso breaks.</div>
                                            <p></p>
                                            <div>Cast Range: 175</div>
                                            <div>Bind Range: 300</div>
                                            <div>Manacost: 150</div>
                                            <div>Cooldown: 130/90/50</div>
                                            <div>Duration: 3/3.5/4</div>
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
