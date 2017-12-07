import React from 'react';
import {Page, Navbar, Card,CardHeader, ContentBlockTitle, ContentBlock, GridCol, GridRow, CardContent, AccordionItem, AccordionToggle, AccordionContent} from 'framework7-react';

export const Omniknight = () => {
    return (
        <Page>
            <Navbar title="Omniknight" backLink="Back" sliding />
            <Card>
                {/* ================================ */}
                {/* Top */}
                {/* ================================ */}
                <CardHeader>
                    <GridRow noGutter>
                        <GridCol width="30">
                            <div><img src="img/Omniknight.png" role="presentation" width="80" height="80"/></div>
                        </GridCol>
                        <GridCol width="70">
                            <div>
                                {/* Hero Name */}
                                Purist Thunderwrath The Omniknight
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
                            Purist Thunderwrath, the Omniknight, is a melee strength hero who is renowned for his ability to protect his allies, preventing the enemy from easily killing them. A holy and courageous hero, Purist Thunderwrath is an adept support whose powerful spells give his team strong survivability. He possesses a potent healing ability in Purification, which can instantly heal the targeted ally and, if there are nearby enemy units, deal pure damage in the same amount, allowing it to be used as a nuke. He is also capable of providing spell immunity to allies in the form of Repel, a basic ability that prevents himself or allies from being affected by most enemy spells. His passive ability, Degen Aura, can greatly slow the movement and attack speed of enemies, preventing them from easily using their physical attacks to deal damage. And finally, his ultimate, Guardian Angel, can provide complete immunity against physical damage to all nearby allies, completely nullifying the damage output of most carries for a short time. Few can escape the mighty and heavenly power of the Omniknight and he is a powerful ally in team fights. He is a mighty tank, and a very difficult hero to kill.
                        </p>
                    </ContentBlock>
                    <ContentBlockTitle><p>Information</p></ContentBlockTitle>
                    <ContentBlock inner>
                        <div>
                            {/* Stats here */}
                            <div>Health: 530 </div>
                            <div>Mana: 221 </div>
                            <div>Damage: 51-61</div>
                            <div>Attack Speed: 0.68</div>
                            <div>Range: 128</div>
                            <div>Health Regen.:0.85</div>
                            <div>Mana: Regen. 0.69</div>
                            <div>Armor: 4</div>
                            <div>Mov. Speed:  300</div>
                            <p></p>
                            <div>Strength: 20 (+2.65)  </div>
                            <div>Agility: 15 (+1.75)  </div>
                            <div>Intelligence:17 (+1.8)</div>
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
                                        <div><img src="img/Skills/Omniknight/1.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 1 Name here */}
                                            Purification
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 1 Description here */}
                                            The Omniknight heals a target ally instantly. Enemies near the healed target take magic damage.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 1 Info here */}
                                        <div>Range: 700</div>
                                        <div>Radius: 260</div>
                                        <div>Damage/Heal: 90/180/270/360</div>
                                        <div>Cooldown: 10</div>
                                        <div>Cost: 100/120/140/160 Mana</div>
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
                                        <div><img src="img/Skills/Omniknight/2.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 2 Name here */}
                                            Repel
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 2 Description here */}
                                            The Omniknight creates a divine ward, making his target immune to most targetted magic spells.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 2 Info here */}
                                        <div>Range: 500</div>
                                        <div>Duration: 6/8/10/12</div>
                                        <div>Cooldown: 14</div>
                                        <div>Cost: 50 Mana</div>
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
                                        <div><img src="img/Skills/Omniknight/3.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 3 Name here */}
                                            Degen Aura
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 3 Description here */}
                                            Enemies near the Omniknight are slowed and have reduced attack speed.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 3 Info here */}
                                        <div>Radius: 300</div>
                                        <div>Move Speed Slow: 10%/18%/26%/34%</div>
                                        <div>Attack Speed Slow: 10/18/26/34</div>
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
                                        <div><img src="img/Skills/Omniknight/4.png" role="presentation" width="30" height="30"/></div>
                                    </GridCol>
                                    <GridCol width="80">
                                        <div>
                                            {/* Skill 4 Name here */}
                                            Guardian Angel
                                        </div>
                                    </GridCol>
                                </GridRow>
                            </AccordionToggle>
                            <AccordionContent>

                                <ContentBlock inner>
                                    <ContentBlock>
                                        <div>
                                            {/* Skill 4 Description here */}
                                            Purist calls down the light of a Guardian Angel to defend his allies. Nearby Allied units gain almost total physical invulnerability (+1000 armor) and increased health regeneration for a short time.
                                        </div>
                                    </ContentBlock>
                                    <ContentBlock>
                                        <p></p>
                                        {/* 'Skill 4 Info here */}
                                        <div>Radius: 600 (Global*)</div>
                                        <div>Duration: 6/7/8 (8/9/10*)</div>
                                        <div>Cooldown: 150</div>
                                        <div>Cost: 125/175/250 Mana</div>
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
