import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Alleria = () => {
    return (
        <Page>
            <Navbar title="Alleria" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="35">
                            <div><img src="img/Alleria.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="65">
                            <div>
                                {/* Hero Name */}
                                Alleria The Windrunner Guide
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
                            Alleria Windrunner was the ranger-captain of Silvermoon who led her rangers under the Alliance of Lordaeron during the Second War. She was also the head scout of the Alliance Expedition to Draenor. Alleria and her lover Turalyon disappeared after the planet was torn apart and have not been heard from for many years.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health  435 </div>
                            <div>Mana    286 </div>
                            <div>Damage  44-56   </div>
                            <div>Attack Speed    .78 </div>
                            <div>Range   600</div>
                            <div>Health Regen.   .7  </div>
                            <div>Mana Regen. .89 </div>
                            <div>Armor   1   </div>
                            <div>Mov. Speed  295</div>
                            <p></p>
                            <div>Strength    15 (+2.5)   </div>
                            <div>Agility 17 (+1.4)   </div>
                            <div>Intelligence    22 (+2.6)</div>    
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
                                        <div><img src="img/Skills/Alleria/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Shackleshot
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            Alleria fires an enchanted arrow using wind magic that binds the target to an enemy unit or tree behind it.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 1 Info here */}
                                            <div>Cooldown: 14</div>
                                            <div>Manacost: 90/100/110/120</div>
                                            <div>Always knocks back the target. If the target hits a group of units or a tree, the struck units (including the target) are stunned for 1.4/2.1/2.8/3.5 seconds. (700 unit cast distance)</div>
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
                                        <div><img src="img/Skills/Alleria/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Power-shot
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            Windrunner winds up her bow for up to 1 second to perform a single powerful shot. The arrow travels 1700 distance, dealing damage and destroying trees in its path. The damaged dealt is greatest to the first target of it hits and is reduced by 10% with each other it passes through.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 2 Info here */}
                                            <div>Cooldown: 12</div>
                                            <div>Manacost: 90/100/110/120</div>
                                            <div>Deals 120/200/280/360 damage to all enemies in straight line. The arrow has vision and knocks down trees in the process.</div>
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
                                        <div><img src="img/Skills/Alleria/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Windrunnner
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Imbues her body with the essence of wind, increasing her movement speed by 50% and giving her the ability to evade all physical attacks for short period of time. Additionally, the gusts of wind around her impairs the movement of nearby enemies, slowing their movement speed in a 300 AoE around her.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 3 Info here */}
                                            <div>Cooldown: 65/50/35/20</div>
                                            <div>Manacost: 100</div>
                                            <div>Say goodbye to this Imba cyclone skill, now it only gives you 50% ms increase, and 100% evasion for 2.75/3.5/4.25/5 seconds and 8/16/24/30 % slow.</div>
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
                                        <div><img src="img/Skills/Alleria/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Focus Fire
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Alleria channels wind throughout her body to surge an excess of adrenaline, giving her maximum attack speed on one target for 10 attacks. Damage is reduced in this state.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        <div>
                                            {/* 'Skill 4 Info here */}
                                            <div>Cooldown: 60</div>
                                            <div>Manacost: 200/300/400</div>
                                            <div>Now, her ultimate has been nerfed. No longer IMBA flying unit. Now it seems to give max attack speed for 10 attacks as long as your attacking the target. Your damage get reduced on 50/40/30 % while using this skill.</div>
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
